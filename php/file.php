<?php

/**
 * 接受处理上传文件
 * author:lovefc
 */

 
/* 设置跨域头
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:PUT,POST,GET,DELETE,OPTIONS');
header('Access-Control-Allow-Headers:x-requested-with,content-type');	
*/

header("Content-type: text/html; charset=utf-8");

$file = isset($_FILES['file_data']) ? $_FILES['file_data']:null; //分段的文件

$name = isset($_POST['file_name']) ? '../upload/'.$_POST['file_name']:null; //要保存的文件名

$total = isset($_POST['file_total']) ? $_POST['file_total']:0; //总片数

$index = isset($_POST['file_index']) ? $_POST['file_index']:0; //当前片数

$md5   = isset($_POST['file_md5']) ? $_POST['file_md5'] : 0; //文件的md5值

$size  = isset($_POST['file_size']) ?  $_POST['file_size'] : null; //文件大小

echo '当前片数：'.$index.PHP_EOL;

if(!$file || !$name){
	echo 'failed';
	die();
}

if ($file['error'] == 0) {
	//检测文件是否存在
    if (!file_exists($name)) {
        if (!move_uploaded_file($file['tmp_name'], $name)) {
            echo 'success';
        }
    } else {
        $content = file_get_contents($file['tmp_name']);
        if (!file_put_contents($name, $content, FILE_APPEND)) {
            echo 'failed';
        }
		echo 'success';
    }
} else {
    echo 'failed';
}
 