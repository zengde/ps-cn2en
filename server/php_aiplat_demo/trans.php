<?php

require('./include.php');

//请在此填入AppID与AppKey
$app_id = 'app_id';
$app_key = 'app_key';

//设置AppID与AppKey
Configer::setAppInfo($app_id, $app_key);

// 以下为具体接口的调用demo，在调用时，不用再次传入app_id和app_key，
// 如需更换app_id和app_key，请再次调用 Configer::setAppInfo($app_id, $app_key)。
// timestamp和nonce_str为可选参数，如果不传，则API函数内部会自动取当前时间戳和生成随机字符串。
// 图片和语音文件数据兼容原始数据（未经base64）。


// 文本翻译（AI Lab）
$text=$_REQUEST['text'];
$type=intval($_GET['type']);
$params = array(
    'type' => $type,
    'text' => $text,
);

$response = API::texttrans($params);
echo $response;
