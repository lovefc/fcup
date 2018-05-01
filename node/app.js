/**
 * 文件上传处理
 * author:lovefc
 * time:2018/1/10
 * 基于express框架的上传接口 需要安装以下依赖
   npm install express
   npm install connect-multiparty
   npm install md5
   运行成功后的接口地址
   http://127.0.0.1:8888/upload
 *
 */

var express = require('express');
var app = express();
var fs = require('fs');

//文件上传服务
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

app.get('/', function (req, res) {
	res.send('hello lovefc');
});

app.post('/upload', multipartMiddleware, function (req, res, next) {
	/* 设置跨域信息 */
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	/* 设置编码 */
	res.header("Content-Type", "text/html;charset=utf-8");
	//res.header(200);

	var file_data = req.files.file_data.path; //分段的文件

	var file_name = req.body.file_name; //文件名称

	var file_total = req.body.file_total; //总片数

	var file_index = req.body.file_index; //总片数
	
	var file_md5 = req.body.file_md5; //文件md5
	
	var file_size = req.body.file_size; //文件大小	

	var dstPath = '../upload/' + file_name; //新文件地址

	console.log(file_data);

	//检测文件是否存在

	if (fs.existsSync(dstPath) && fs.statSync(dstPath).isFile()) {
		fs.readFile(file_data, 'utf8', function (err, data) {
			fs.appendFile(dstPath, data, function (err) {
				if (err) {
					res.send('failed: ' + err);
					console.log('failed: ' + err);
				} else {
					res.send('success');
					console.log('success');
				}
			});
		});
    }	else {
		//读取上传的文件，并且写入到新的文件中
		fs.readFile(file_data, 'utf8', function (err, data) {
			fs.appendFile(dstPath, data, function (err) {
				if (err) {
					res.send('failed: ' + err);
					console.log('failed: ' + err);
				} else {
					res.send('success');
					console.log('success');
				}
			});
		});
	}
});

/* 监听端口 */
var server = app.listen(8888, function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('listening at http://%s:%s', host, port);
	});
