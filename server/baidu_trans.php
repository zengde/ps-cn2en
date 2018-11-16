<?php
require_once('baidu_transapi.php');

$text=$_REQUEST['text'];
$from=$_GET['from'];
$to=$_GET['to'];

$response = translate($text,$from,$to);
echo $response;
//from