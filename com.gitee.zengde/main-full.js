$(document).ready(function () {
	function r() {
		$("#offline, #loading").hide();
		$("#main").show();
		//"div" == $("#from_language")[0].tagName.toLowerCase() && $("#from_language").scombobox("toSelect");
		//"div" == $("#to_language")[0].tagName.toLowerCase() && $("#to_language").scombobox("toSelect");
		//$("#from_language, #to_language").html("");
		E()
	}
	function x() {
		y("没有网络，在线翻译无法使用", !0, "Help me", function () {
			//f.openURLInDefaultBrowser("http://cl.ly/image/0P2N1L050o0R")
		})
	}
	function E() {
		function a(a,func) {
			$(a).scombobox({
				hideSeparatorsOnSearch: !0,
				animation: {
					duration: 0
				},
				callback: {
					func: function () {
						$(a + " input.scombobox-display").attr("placeholder",
							"请选择语言")
					}
				}
			});
			func=func? func:function(){
				t(!1);
			}
			$(a).on("change", func);
			//$(a).scombobox("val", 0);
			n("")
		}
		a("#from_language",function(){});
		a("#from_baidu_language",function(){});
		a("#to_baidu_language",function(){});
		a("#trans_engine",function(){
			var engine=$("#trans_engine option:selected").attr("value");
			if(engine!=curengine){
				curengine=engine;
				$('.engine_form').hide();
				$("."+engine+"_form").show();
			}
		});
		
		//u();
	}
	function u() {
		v("hasOpenDocument()", function (a) {
			Number(a) ? (console.log("Found open Document"), A()) : (console.log("No open document found"))
		})
	}
	function t(a) {
		//throw new Error('sdfd');
		n("翻译中...");
		F();
	}
	function escapeUnicode(str) {
		return str.replace(/[^\0-~]/g, function(ch) {
			return "\\u" + ("0000" + ch.charCodeAt().toString(16)).slice(-4);
		});
	}
	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
	function F() {
		var mode=$("input[name='type_language']:checked").val();
		if(mode==0){
			v("getAllTextLayer(false)",function(a){
				a = String(a).replace(/(?:\r\n|\r|\n)/g, "<br/>");
				//console.log(a);
				a = $.parseJSON(String(a));
				for(var name in a){
					var type=a[name].type;
					if(type=='set'){
						for(var subname in a[name].data){
							var text=a[name].data[subname].data;
							//console.log(text);
							sleep(1000).then(translate(text,{type:'set','setname':name,'name':subname}));
						}
					}else{
						var text=a[name].data;
						sleep(1000).then(translate(text,{type:'art','name':name}));
						//console.log(text);
					}
				}
				//console.log(a);
			})
		}else{
			v("getActiveLayers()", function (a) {
				a = String(a).replace(/(?:\r\n|\r|\n)/g, "<br/>");
				//a = escapeUnicode(a);
				a = $.parseJSON(String(a));
	
				if ($.isEmptyObject(a.error))
					console.log("Text to translate: " + a.success), translate(a.success);
				else
					switch (a.error) {
					case H:
						$(".help").html("请选择要翻译的文本图层。");
						break;
					case I:
						$(".help").html("请选择没有锁定的文本图层。");
						break;
					default:
						$(".help").html("未知错误！请重试。")
					}
			})
		}
		
	}
	function translate(transtr,mode){
		var engine=$("#trans_engine option:selected").attr("value");
		
		switch(engine){
			case 'qq':
				G_qq(transtr,mode);
			break;
			case 'baidu':
				G_baidu(transtr,mode);
			break;
		}
		n('');
	}
	//ai.qq.com
	function G_qq(a,mode) {
		var type = $("#from_language option:selected").attr("value"),url;
		url = "http://localhost:88/2018/psd/php_aiplat_demo/trans.php";
		url = url + ("?type=" + type) + ("&text=" + encodeURIComponent(a));
		$.getJSON(url).done(function (a) {
			switch (a.ret) {
			case 0:
				console.log("Text translated correctly");
				stringToTranslate = a.data.trans_text;
				J('cn', stringToTranslate,mode);
				break;
			default:
				console.error(a.msg),
				feedbackString("Something went wrong. Please try again."+a.msg);
				break;
			}
		}).fail(function (a, b, c) {
			console.error("Yandex connection failed " + (b + ", " + c));
			feedbackString("Something went wrong. Please try again.")
		})
	}
	//baidu
	function G_baidu(a,mode) {
		var url;
		var lang_from=$("#from_baidu_language option:selected").attr("value");
		var lang_to=$("#to_baidu_language option:selected").attr("value");
		url = "http://localhost:88/2018/psd/baidu_trans.php";
		url = url + ("?from="+lang_from+"&to="+lang_to) + ("&text=" + encodeURIComponent(a));
		$.getJSON(url).done(function (a) {
			if(a.error_code){
				console.error(a.error_msg);
				//feedbackString("Something went wrong. Please try again."+a.error_msg);
			}else{
				console.log("Text translated correctly");
				stringToTranslate = a.trans_result[0].dst;
				J('cn', stringToTranslate,mode);
			}
		}).fail(function (a, b, c) {
			//console.error("Yandex connection failed " + (b + ", " + c));
			//feedbackString("Something went wrong. Please try again.")
		})
	}
	function J(a, b,mode) {
		var func='';
		if(mode){
			switch(mode.type){
				case 'art':
				func='addTranslatedTextLayerByname("' + mode.name + '","' + b + '")';
				break;
				case 'set':
				func='addTranslatedTextLayerByset("' + mode.setname + '","'+mode.name+'","' + b + '")';
				break;
			}
		}else{
			func='addTranslatedTextLayer("' + a + '","' + b + '")';
		}
		//console.log(func);
		v(func, function (a) {
			console.log(a);
			//A();
			//t(!1)
		})
	}
	function C(a) {
		var b = a.appBarBackgroundColor.color,c;
		c = b.red;
		var d = b.green,b = b.blue;
		c /= 255;
		var d = d / 255,b = b / 255,h = Math.max(c, d, b),e = Math.min(c, d, b),g,f = (h + e) / 2;
		if (h == e)
			g = e = 0;
		else {
			var k = h - e,
			e = 0.5 < f ? k / (2 - h - e) : k / (h + e);
			switch (h) {
			case c:
				g = (d - b) / k + (d < b ? 6 : 0);
				break;
			case d:
				g = (b - c) / k + 2;
				break;
			case b:
				g = (c - d) / k + 4
			}
			g /= 6
		}
		c = [100 * g + 0.5 | 0, 100 * e + 0.5 | 0, 100 * f + 0.5 | 0];
		$("body").removeClass("dark light");
		50 >= c[2] ? $("body").addClass("dark") : $("body").addClass("light");
		p(q, "body", "background-color: " + w(a.panelBackgroundColor.color));
		p(q, "body", "font-size: " + a.baseFontSize + "px;");
		p(q, "#form p .scombobox .scombobox-dropdown-background", "background-color: " + w(a.panelBackgroundColor.color));
		p(q, "#form p .scombobox input:focus, #form p .scombobox input:active", "outline-color: " + w(a.systemHighlightColor.color))
	}
	function A() {
		$("button").removeAttr("disabled");
		$("#from_language").scombobox("disabled",
			!1);
		//B()
	}
	function B() {
		//$("#translate").attr("disabled", "disabled")
	}
	function y(a, b, c, d) {
		$("#main, #loading").hide();
		$("#offline_help").hide();
		$("#offline p").html(a);
		b && $("#offline_help").html(c).show().unbind("click").click(d);
		$("#offline").show()
	}
	function n(a) {
		$("p.help").html(a)
	}
	function v(a, b) {
		console.log("in runJSX");
		if (null === b || void 0 === b)
			b = function (a) {};
		try {
			f.evalScript(a, b)
		} catch (c) {
			console.error("Exception: " + c)
		}
	}
	function w(a, b) {
		function c(a, b) {
			var c = !isNaN(b) ? a + b : a;
			0 > c ? c = 0 : 255 < c && (c = 255);
			c = c.toString(16);
			return 1 == c.length ? "0" + c : c
		}
		var d = "";
		if (a)
			with (a)d = c(red, b) + c(green, b) + c(blue, b);
		return "#" + d
	}
	function p(a, b, c) {
		if (a = document.getElementById(a))
			a = a.sheet, a.addRule ? a.addRule(b, c) : a.insertRule && a.insertRule(b + " { " + c + " }", a.cssRules.length)
	}
	var q = "kaku_style",z = "trnsl.1.1.20150606T110450Z.d2405b56c6a3315e.b8309a0a7d03048b5b094d4d1b45b4b8d9caad83 trnsl.1.1.20150606T110544Z.ba390c449dc1eacb.84473a71ddb8efdbf244305ecc816dacacc6bca1 trnsl.1.1.20150606T110605Z.95c61fe0a062a48d.cfd72e86f308ca25d2d983bb26e7467a2d77b6b1 trnsl.1.1.20150606T110616Z.1442dbdb2031fe12.2e6b75fdf98af4042d0edc5a5032e57bb8e9b0de trnsl.1.1.20150606T110631Z.12c05088f9f4906f.78b27e30f80a1f3cdcf44cdf9510b33b7ae2f078 trnsl.1.1.20150606T110644Z.641a7e94aa8124bb.69ad4089be63c977ad957571fe4d750307c280e9 trnsl.1.1.20150606T110653Z.76aa2761192a9331.c5266045fb715afbcf88ceb07bb4170f58ac5930 trnsl.1.1.20150606T110702Z.88575ea8ad542a21.fdf20a69f081d470eada656b922715c87f932587 trnsl.1.1.20150606T110721Z.b1647a636e271b6d.7041d70e25d42eba3a11fe36c4249738a4e1bffa trnsl.1.1.20150606T110730Z.11b71a1035d255dc.bc51efdfcac1291391bc90a0b50c0b775fdaa32a".split(" "),
	H = "error not text",
	I = "error layer locked",
	f = new CSInterface,s,l,curengine='baidu';
	f.getHostEnvironment().isAppOnline ? (console.log("App is connected to internet."), r()) : (console.log("App is not connected to internet."), x());
	C(f.hostEnvironment.appSkinInfo);
	f.addEventListener("com.adobe.csxs.events.AppOffline", function (a) {
		console.log("CSEvent AppOffline");
		x()
	});
	f.addEventListener("com.adobe.csxs.events.AppOnline", function (a) {
		console.log("CSEvent AppOnline");
		r()
	});
	f.addEventListener("documentAfterActivate", function (a) {
		console.log("CSEvent documentAfterActivate");
		u()
	});
	f.addEventListener("documentAfterDeactivate", function (a) {
		console.log("CSEvent documentAfterDeactivate");
		u()
	});
	f.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, function (a) {
		a = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
		C(a)
	});
	$("#translate").click(function (a) {
		console.log("Translate button pressed");
		t(!0)
	})
});