<?php

/**
 * 接受处理上传文件
 * author:lovefc
 */

header("Content-type: text/html; charset=utf-8");

$file = isset($_FILES['data'])?$_FILES['data']:null; //分段的文件

$name = isset($_POST['name'])?'./upload/'.$_POST['name']:null; //文件名

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
    }
} else {
    echo 'failed';
}
 