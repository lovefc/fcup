# fcup.js

fcup是一款支持大文件切片上传插件。该jquery插件使用简单，配置简单明了,支持上传类型指定，进度条查看上传进度，有php和node的接口案例

![pic](http://fcphp.cn/fcup/jt.png)

### 安装
直接下载源码,现有node和php两个接口案例，演示地址: http://fcphp.cn/fcup github：https://github.com/lovefc/fcup

### 使用方法
````
$.fcup({
    updom: '.fcup',//上传控件的位置dom		
	//upid: 'upid',//上传的文件表单id，有默认
	shardsize: '2',//切片大小,(单次上传最大值)单位M，默认2M
	upmaxsize : '1024',//上传文件大小,单位M，不设置不限制
	upstr: '上传文件',//按钮文字
	uploading: '上传中...',//上传中的提示文字
    upfinished: '上传完成',//上传完成后的提示文字
	upurl: './php/file.php',//文件上传接口 node接口:http://127.0.0.1:8888/upload
	//uptype: 'mp4',//上传类型检测,用,号分割
    errmaxup: '上传文件过大',//检测文件是否超出设置上传大小
	errtype: '请上传mp4文件',//不支持类型的提示文字
	//接口返回结果回调
	upcallback : function(result){
	     console.log(result);
		 /*
		 if (result !== 'success') {
			$.fcupStop('出现错误');//终止运行,并且在按钮上显示内容
		 }	
         */		 
		  
	}
});
````
### 更新日志
#### 2018/1/8  ： 添加了对于接口返回结果的回调，添加了对于上传表单id的指定
#### 2018/1/10 :  添加了node.js的上传接口，基于express框架
#### 2018/1/17 :  优化了分片异步处理,队列执行接口,修复细节
#### 2018/5/02 :  添加了文件大小的判断,添加了对于文件md5的计算,添加了终止函数,传值到后台使用,优化细节部分