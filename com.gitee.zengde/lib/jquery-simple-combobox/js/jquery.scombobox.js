(function(e,L){function M(a){return{fast:200,normal:400,slow:600}[a]||a}function v(a,b,g,d){"function"!=typeof g?b.trigger(a+("string"==typeof g?"."+g:"string"==typeof d?"."+d:"")):N.call(b,a,g,d);return this}function N(a,b,g){this.bind(a+("string"==typeof g?"."+g:""),b)}function O(){var a=e(this).find(b+n+" p"),c=e(this).children(b+r),g=[];a.each(function(){var a=e(this);a.find(":checkbox").prop("checked")&&g.push(a.data("value"))});e(this).children("select").val(g);c.val(JSON.stringify(g))}function P(){if(!this.data("listenersAdded")){var a=
this,c=a.data(d);this.on("keyup",b+m+", "+b+C,function(a){if(!(0<=[13,38,40,9].indexOf(a.which))){var k=c.fullMatch,f=c.highlight,f=k?!1!==f:!!f;a=e(this);var h=this.value.trim();c.filterIgnoreCase&&(h=h.toLowerCase());var l=a.closest(b).children(b+n);u.call(l,"down",!0);var m=a.closest(b).find("select option");e(b+" "+b+n).each(function(){l[0]!=this&&u.call(e(this),"up")});h?(l.children(c.hideSeparatorsOnSearch?"p":"p:not("+b+w+", "+b+y+")").hide(),m.each(function(){var a=e(this).text().trim();c.filterIgnoreCase&&
(a=a.toLowerCase());if(k?0<=a.indexOf(h):0==a.indexOf(h)){var a=c.filterIgnoreCase?"i":"",g=RegExp(h.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),k?a+"g":a),a=l.children("p:eq("+m.index(this)+"):not("+b+w+", "+b+y+")").show();f&&a.each(function(){e(b+"-marker",this).contents().unwrap();var a=e(b+z,this)[0];a.innerHTML=a.innerHTML.replace(g,'<span class="'+d+'-marker">'+h+"</span>")})}})):l.children("p").show().each(function(){e(b+"-marker",this).contents().unwrap()})}});this.on("keydown",b+m,function(a){if(0<=
[38,40,13,27,9].indexOf(a.which)){9!=a.which&&a.preventDefault();var k=e(this).closest(b),f=k.children(b+n),h=e(b+t,f[0]),l;l=e("p:first",f[0]);var G=c.loopScrolling,p=":not("+b+w+", "+b+y+")",q="default"==c.mode?c.fillOnArrowPress:!1;if(!f.is(":animated")){var s=this.value.trim().toLowerCase(),r=f.scrollTop();if(40==a.which)if(f.is(":hidden"))u.call(f,"down");else{if(0==h.length)a=l.is(":visible"+p)?l.addClass(d+t):l.nextAll(":visible"+p).first().addClass(d+t);else{if(!G&&!h.nextAll(":visible"+p).first().length)return;
a=h.removeClass(d+t).nextAll(":visible"+p).first().addClass(d+t);0==a.length&&(a=l.is(":visible")?l.addClass(d+t):l.nextAll(":visible"+p).first().addClass(d+t));0==a.length&&(a=l);l=a.position().top-f.position().top;p=a.outerHeight();l+6*p>f.height()?l+6*p-f.height()>1.5*p?f.scrollTop(r+l):f.scrollTop(r+p):0>l&&f.scrollTop(r- -l)}q&&(this.value=a.find(b+z).text(),k.children(b+m).data("fillonarrow",!0))}else if(38==a.which){if(f.is(":visible")&&(G||h.prevAll(":visible"+p).first().length))a=h.removeClass(d+
t).prevAll(":visible"+p).first().addClass(d+t),0==a.length&&(a=e("p:visible"+p+":last",f[0]).addClass(d+t)),l=a.position().top-f.position().top,p=a.outerHeight(),l<3*p?f.scrollTop(r- -l-3*p):l>f.height()-3*p&&f.scrollTop(r+l-3*p),q&&(this.value=a.find(b+z).text(),k.children(b+m).data("fillonarrow",!0))}else if(13==a.which)if(c.fillOnBlur)H(f).click();else{var v=!1;f.children("p").each(function(){e(b+z,this).text().trim().toLowerCase()==s&&(e(this).click(),v=!0)});!1==v&&f.children(b+t).click();"default"==
c.mode&&u.call(f,"up")}else 27==a.which?u.call(e(this).blur().closest(b).children(b+n),"up"):9==a.which&&(c.fillOnTab&&s&&f.children("p:visible:first").length)&&(a.preventDefault(),f.children("p:visible:first").click())}}});this.on("change","select",function(a,c){var d=e(this).closest(b),h=e("option:selected",this).text();d.children(b+m).val(h).data("value",h);h=d.children(b+r);h.data("changed")?h.data("changed",!1):c?(O.call(d),h.change()):(h.change(),u.call(d.children(b+n),"up"))});this.on(d+"-chupdate",
b+n+" p :checkbox",function(a,b){b&&(a.stopPropagation(),I.call(e(this).parent(),a,!0))});this.on("click",b+n+" p",function(c){c.stopPropagation();if(!e(this).is(b+w+", "+b+y)){a.children(b+x).removeClass(d+x);a.children(b+q).removeClass(d+q+x);var k=e(this),f=k.parent(),h=f.children().index(this);"checkboxes"==a.data(d).mode?I.call(this,c):(c=f.closest(b).children("select"),c.children("option").eq(h).prop("selected",!0),c.siblings(b+r).val(c.val()),c.change(),u.call(k.parent(),"up"),k.addClass(d+
t).siblings().removeClass(d+t))}});this.on("blur",b+m,function(){var c=e(this),k=a.data(d);if(k.fillOnBlur&&!k.invalidAsValue)H(c.parent().children(b+n)).click();else{var f=c.val().trim(),h=f.toLowerCase(),l=c.siblings(b+r),m=l.val();if(h){var p;c.siblings("select").find("option").each(function(){if((k.filterIgnoreCase?h:f)==e(this).text().trim().toLowerCase())p=this.value});p?l.val(p).change().data("changed",!0):l.val(k.invalidAsValue?f:"").change().data("changed",!0)}else l.val("");m!==l.val()&&
l.change().data("changed",!0)}});this.on("focus",b+m,function(){if(this.value.trim()){if(a.data(d).expandOnFocusWithValue)if(a[d]("val")){var c=a.children(b+n);c.children().show();u.call(c,"down")}else e(this).keyup()}else a.data(d).expandOnFocus&&e(this).keyup()});this.on("click",b+m+"-div",function(){a.data(d).disabled||u.call(e(this).siblings(b+n),"down")});this.on("click",b+m,function(a){var c=e(this).closest(b)[0];e(b).each(function(){if(this!=c)e(this)[d]("close")});a.stopPropagation()});this.on("click",
b+s,function(a){a.stopPropagation();a=e(this).closest(b);var c=a.children(b+n);c.is(":visible")?u.call(c,"up"):(u.call(c,"down"),a.children(b+m).focus())});this.on("click",b+J,function(d){d.stopPropagation();d=e(this);var k=d.parent();a.children(b+n).children("p").eq(d.data("index")).find(":checkbox").prop("checked",!1);k.fadeOut(c.animation.duration);d.closest(b).children("select").trigger("change",[!0])});c.autoLoad!=e.noop&&e(b+n,this).scroll(function(){var b=e(this),d=a.children("select"),f=b.scrollTop();
f>b.data("scrollTop")?this.scrollHeight-f-50<b.height()&&!a.data("pending")&&(a.data("pending",!0),c.autoLoad.call(a,d.find("option[value]:last").val(),"bottom")):f<b.height()/2&&!a.data("pending")&&(a.data("pending",!0),c.autoLoad.call(a,d.find("option[value]:first").val(),"top"));b.data("scrollTop",f)}).data("scrollTop",0);K||(K=!0,e(L).bind("click."+d,function(){e(b).each(function(){u.call(e(this).children(b+n),"up")})}));this.data("listenersAdded",!0)}}function Q(a){if("string"==typeof a&&(a=
e.parseJSON(a),null==a))return[];if(!a)return!1;if(!(a instanceof Array)){if("object"!=typeof a)return!1;"undefined"==typeof a.length&&(a.length=Object.keys(a).length);a=[].slice.call(a)}return a}function R(a){for(var c=0;c<a.length;c++)(!a[c].value||!a[c].text)&&!a[c].hasOwnProperty("separator")&&a.splice(c,1)}function S(a){for(var c=0;c<a.length;c++)!a[c].value&&(!e(a[c]).hasClass(d+w)&&"optgroup"!=a[c].tagName.toLowerCase())&&e(a[c]).remove()}function T(a,c){var b=a.text.trim().toLowerCase(),d=
c.text.trim().toLowerCase();return b>d?1:b==d?0:-1}function U(a){for(var c=0;c<a.length;c++)for(var b=c+1;b<a.length;b++)a[c]&&a[b]&&a[c].value==a[b].value&&a.splice(c,1)}function V(a){for(var b=0;b<a.length;b++)for(var d=b+1;d<a.length;d++)a[b]&&a[d]&&a[b].value==a[d].value&&"optgroup"!=a[b].tagName.toLowerCase()&&e(a[b]).remove()}function W(){var a=this.children(b+m),c=this.children("select"),g=this.data(d),k,f=a.val().trim().toLowerCase();c.find("option").each(function(){f==e(this).text().trim().toLowerCase()&&
(k=this.value)});!k&&f?(g.forbidInvalid?a.closest(b).find(b+m).val("").data("value",""):(g.highlightInvalid||(g.invalidAsValue?g.highlightInvalid:null===g.highlightInvalid))&&a.addClass(d+x).siblings(b+q).addClass(d+q+x),g.invalidAsValue||a.siblings("select, "+b+r).val("")):a.removeClass(d+x).siblings(b+q).removeClass(d+q+x)}function u(a,c){if(!this.is(":animated")&&this.length&&!("up"==a&&this.is(":hidden")&&1==this.length)){var g=this.parent().data(d).animation;e.easing[g.easing]||(console.warn("no such easing: "+
g.easing),g.easing="swing");var k=this.parent(),f=k.data(d);"up"==a?(f.beforeClose.call(k),g.complete=function(){"checkboxes"!=f.mode&&W.call(k);f.afterClose.call(k)},this.slideUp(g).data("p-clicked-index",-1),k.children(b+s).removeClass(d+s+"-up")):(f.beforeOpen.call(k),g.complete=function(){f.afterOpen.call(k)},this.slideDown(g),k.children(b+s).addClass(d+s+"-up"));k.children(b+m).each(function(){var a=e(this);a.data("fillonarrow")&&!c&&a.data("fillonarrow",!1).val(a.data("value"))})}}function I(a,
c){var g=e(this),k=g.closest(b),f=g.parent(),h=f.children("p"),l=h.index(this),m=M(f.parent().data(d).animation.duration);if(!c){var p=g.find(":checkbox");e(a.target).is(":checkbox")||p.prop("checked",!p.prop("checked"));p=p.prop("checked");if(a.shiftKey&&0<=f.data("p-clicked-index"))for(var n=f.data("p-clicked-index"),r=n<l?l:n,n=n<l?n:l;n<=r;n++)e(h[n]).find(":checkbox").prop("checked",p)}var q=k.find(b+D).prepend("<span />");k.find(b+D).fadeOut(m/5,function(){q.empty().show();h.each(function(a){var c=
e(this);c.find(":checkbox").prop("checked")&&q.append(e("<div />").addClass(d+B).append(e("<div />").addClass(d+B+"-text").text(c.find(b+z).text())).append(e("<div />").addClass(d+J).text("\u00d7").data("index",a)).fadeIn(1.5*m))});q.append('<div style="clear: both" />')});f.data("p-clicked-index",l);g.closest(b).children("select").trigger("change",[!0])}function X(a,c){for(var g=this.data(d),k=this.find("select"),f=this.find(b+n),h=0;h<a.length;h++){if(a[h].hasOwnProperty("separator"))var l=a[h].hasOwnProperty("header")?
e('<p class="'+d+y+'" />').text(a[h].header):e('<p class="'+d+w+'" />'),m=e("<option />");else m=e("<option />").val(a[h].value).text(a[h].text).prop("selected",!!a[h].selected),l=g.pFillFunc.call(this,a[h],g),"checkboxes"==g.mode&&l.prepend('<input type="checkbox" />');l.data("value",a[h].value);c?(k.prepend(m),f.prepend(l)):(k.append(m),f.append(l))}}function H(a){var c=a.children(b+t+":visible");0==c.length&&(c=a.children(":visible:first"));return c}function F(a){if(null==a)return null;for(var b=
Object.keys(a),d=0;d<b.length;d++){var e=b[d].replace(/-([a-z])/g,function(a){return a[1].toUpperCase()});b[d]!=e&&(a[e]=a[b[d]],delete a[b[d]]);"object"==typeof a[e]&&"data"!=e&&F(a[e])}return a}var d="scombobox",b="."+d,m="-display",r="-value",x="-invalid",C=m+"-div",B=C+"-item",J=B+"-remove",D=C+"-holder",n="-list",z="-mainspan",t="-hovered",w="-separator",y="-header",q="-dropdown-background",s="-dropdown-arrow",K=!1,A=parseInt,E={init:function(){var a=this.find(b+n),c=this.find("select"),g=this.find(b+
q),k=this.find(b+s),f=this.data(d);this.addClass(d);0==c.length&&this.append(e("<select />"));this.attr("id")&&c.removeAttr("id");c.attr("multiple")&&(this.data(d).mode="checkboxes");0==g.length&&this.append('<div class="'+d+q+'" />');0==k.length&&this.append('<div class="'+d+s+'" />');E.displayDropdown.call(this,f.showDropDown);"checkboxes"!=f.mode&&0==this.find(b+m).length&&(c=e('<input class="'+d+m+'" type="text" />'),this.append(c),this.height(+c.css("font-size")+ +c.css("padding-top")+ +c.css("padding-bottom")));
null!=f.tabindex&&this.find(b+m).attr("tabindex",f.tabindex);0==this.find(b+r).length&&this.append('<input class="'+d+r+'" type="hidden" />');(this.find(b+m).is(":disabled")||f.disabled)&&this.find(b+q+", "+b+s).hide();f.disabled&&(this.find(b+m).prop("disabled",!0),this.addClass(d+"-disabled"));0==a.length&&this.append(a=e('<div class="'+d+n+'"></div>'));"checkboxes"==f.mode?(this.addClass(d+"-checkboxes"),this.find(b+m).remove(),0==this.find(b+m+"-div").length&&this.append('<div class="'+d+C+'"><div class="'+
d+D+'" /></div>'),a.insertAfter(this.find(b+m+"-div")),g=this.find(b+D),c=e('<div class="'+d+B+'" id="'+d+'-test-item"><div class="'+d+B+'-text">x</div></div>'),g.append(c.css("margin-left","-9999px").show()),g=c.height()+A(c.css("padding-top"))+A(c.css("padding-top"))+A(c.css("margin-top"))+A(c.css("margin-top"))+A(c.css("border-top-width"))+A(c.css("border-top-width"))+A(g.css("padding-top"))+A(g.css("padding-top")),this.find(b+m+"-div").css("min-height",g+"px"),c.remove()):(this.find(b+"-display-div").remove(),
a.insertAfter(this.find(b+m)));a.css({"max-width":f.listMaxWidth,"max-height":f.maxHeight});!0==f.wrap&&a.css("white-space","normal");f.autoLoad!=e.noop&&(f.loopScrolling=!1);P.call(this);this.data(d+"-init",!0);return E.fill.call(this,f.data)},fill:function(a,c){var g=this.find("select").children("option, optgroup"),k=this.find("."+d+n),f=this.find("select");a=Q(a);var h=this.data(d),l=h.mode;a?(h.removeDuplicates&&U(a),R(a),h.sort&&(a.sort(T),h.sortAsc||a.reverse()),c||(f.empty(),k.empty(),this.children(b+
r+", "+b+m).val("")),X.call(this,a,2==c)):(h.removeDuplicates&&(V(g),S(g),g=this.find("select").children("option, optgroup")),0!=g.length&&g.each(function(){var a=e(this),b=e("<p />");if(a.hasClass(d+w))a.hasClass(d+y)?k.append(b.addClass(d+y).text(a.text())):b.addClass(d+w);else{if("optgroup"==this.tagName.toLowerCase()){var c=a.attr("label"),f=e("option",this);a.before("<option />");a.after(f);a.remove();k.append(c?b.addClass(d+y).text(c):b.addClass(d+w));f.each(function(){k.append(e("<p />").append(e('<span class="'+
d+z+'" />').text(e(this).text())).data("value",this.value))});return}b.append(e('<span class="'+d+z+'" />').text(a.text())).data("value",this.value);"checkboxes"==l&&b.prepend('<input type="checkbox" />')}k.append(b)}));this.data(d+"-init")&&(h.callback.func.apply(this,h.callback.args),this.data(d+"-init",!1));g=this.find("select").children("option");if(!h.empty)if("checkboxes"!=l)this[d]("val",g.filter("option:selected:last").val());else g=g.filter(":selected").map(function(){return e(this).val()}).get(),
this[d]("val",g);return this},clear:function(){this.children("select").empty();this.children(b+n).empty().width("");this.children(b+m).removeClass(d+x);this.children(b+q).removeClass(d+q+x);return this},data:function(a){if(0==arguments.length)return this.data(d).data;this.data(d).data=a;return this},disabled:function(a){var c=this.data(d).mode;if(0==arguments.length)return"checkboxes"==c?this.hasClass(d+"-disabled"):this.children(b+m).prop("disabled");a=!!a;this.children(b+m).prop("disabled",a);a?
(this.addClass(d+"-disabled"),this.children(b+q+", "+b+s).hide()):(this.removeClass(d+"-disabled"),this.children(b+q+", "+b+s).show());return this},tabindex:function(a){var c=this.find(b+m);if(0==arguments.length)return c.attr("tabindex");c.attr("tabindex",a);return this},options:function(a){if(0==arguments.length)return this.data(d);e.extend(!0,this.data(d),F(a));return this},val:function(a){var c=this.data(d).mode;if(0==arguments.length){if("default"==c)var g=this.find(b+r).val();return"default"==
c?this.find(b+m).is(":disabled")?"":g:"checkboxes"==c?JSON.parse(this.find(b+r).val()||"[]"):null}if("default"==c){var k=e(this),c=k.children("select"),g=k.children(b+r),f=k.children(b+m),h=c.children('[value="'+a+'"]');h.length?(k.find(b+n+" p").eq(h[0].index).addClass(d+t).siblings().removeClass(d+t),c.val(a).change(),k.find(b+r).val(a)):(k.find(b+n+" p").removeClass(d+t),c.children().prop("selected",!1),g.val(""),f.val(""))}else if("checkboxes"==c){c=e(this).find(b+n+" p");g=e(this).children(b+
r);f=[];for(h=0;h<c.length;h++){var l=c.eq(h),q=a.indexOf(l.data("value"));0<=a.indexOf(l.data("value"))?(k=l.find(":checkbox").prop("checked",!0),f.push(a[q])):l.find(":checkbox").prop("checked",!1)}e(this).children("select").val(a);k.trigger(d+"-chupdate",[!0]);g.val(JSON.stringify(f))}return this},open:function(){u.call(this.children(b+n),"down");return this},close:function(){u.call(this.children(b+n),"up");return this},change:function(a,c){return v.call(this,"change",this.children(b+r),a,c)},
focus:function(a,c){return v.call(this,"focus",this.children(b+m),a,c)},blur:function(a,c){return v.call(this,"blur",this.children(b+m),a,c)},keyup:function(a,c){return v.call(this,"keyup",this.children(b+m),a,c)},keydown:function(a,c){return v.call(this,"keydown",this.children(b+m),a,c)},keypress:function(a,c){return v.call(this,"keypress",this.children(b+m),a,c)},click:function(a,c){return v.call(this,"click",this.children(b+m),a,c)},mousedown:function(a,c){return v.call(this,"mousedown",this.children(b+
m),a,c)},clickDropdown:function(a,c){return v.call(this,"click",this.children(b+s),a,c)},toSelect:function(){var a=this.children("select").insertAfter(this);this.data(d).reassignId&&a.attr("id",this.attr("id"));this.remove();return a},displayDropdown:function(a){arguments.length?a?this.children(b+s+", "+b+q).show():this.children(b+s+", "+b+q).hide():this.data(d).showDropdown?this.children(b+s+", "+b+q).show():this.children(b+s+", "+b+q).hide();return this}};e.fn[d]=function(a){if("string"==typeof a){this.length||
e.error("Calling "+d+"."+a+"() method on empty collection");null==this.data(d+"-init")&&e.error("Calling "+d+"."+a+"() method prior to initialization");var b=E[a];b||e.error("No such method: "+a+" in jQuery."+d+"()")}else if(0<=["object","undefined"].indexOf(typeof a))var g=e.extend(!0,{},e.fn[d].defaults,F(a));else return e.error("Incorrect usage"),this;return b?b.apply(this,Array.prototype.slice.call(arguments,1)):this.each(function(){var a=e(this);a.is("select, div")?(a.is("select")&&(a.wrap("<div />"),
g.reassignId&&a.parent().attr("id",a.attr("id")),a=a.parent()),a.data(d,e.extend(!0,{},g)),E.init.apply(a)):console.warn("target element is incorrect: ",this)})};e.fn[d].defaults={data:null,empty:!1,disabled:!1,sort:!0,sortAsc:!0,removeDuplicates:!0,fullMatch:!1,highlight:null,filterIgnoreCase:!0,hideSeparatorsOnSearch:!1,expandOnFocus:!0,expandOnFocusWithValue:!0,tabindex:null,forbidInvalid:!1,invalidAsValue:!1,highlightInvalid:null,reassignId:!0,mode:"default",pMarkup:'<span class="'+d+z+'">${text}</span> <span>${additional}</span>',
pFillFunc:function(a,b){return e("<p />").html(b.pMarkup.replace("${text}",a.text).replace("${additional}",a.additional?a.additional:""))},animation:{duration:"fast",easing:"swing"},listMaxWidth:window.screen.width/2,wrap:!0,maxHeight:"",fillOnArrowPress:!0,fillOnBlur:!1,fillOnTab:!0,showDropDown:!0,callback:{func:e.noop,args:[]},beforeOpen:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterClose:e.noop,autoLoad:e.noop,loopScrolling:!0};e.fn[d].extendDefaults=function(a){e.extend(!0,e.fn[d].defaults,
a)}})(jQuery,document);