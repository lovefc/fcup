# fcup.js

fcup.js是一款支持大文件切片上传插件。该jquery插件使用简单，配置简单明了,支持上传类型指定，支持自定义各种事件处理，完全可以用来打造属于个性的文件上传功能。

![avatar](/images/logo.jpg)

### 安装
直接下载源码，演示地址: http://fcphp.cn/fcup 

### 使用方法
````
    $.fcup({

         upId: 'upid', //上传dom的id

         upShardSize: '1', //切片大小,(单次上传最大值)单位M，默认2M

         upMaxSize: '20', //上传文件大小,单位M，不设置不限制

         upUrl: './php/file.php', //文件上传接口

         upType: 'jpg,png,jpeg,gif', //上传类型检测,用,号分割

         //接口返回结果回调，根据结果返回的数据来进行判断，可以返回字符串或者json来进行判断处理
         upCallBack: function (res) {

            var status = res.status;

            var msg = res.message;

            // 已经完成了
            if (status == 2) {
               alert(msg);
               $('#pic').attr("src", res.url);
               $('#pic').show();
            }

            // 还在上传中
            if (status == 1) {
               console.log(msg);
            }

            // 接口返回错误
            if (status == 0) {
               // 停止上传并且提示信息
               $.upStop(msg);
            }
         },

         // 上传过程监听，可以根据当前执行的进度值来改变进度条
         upEvent: function (num) {
            // num的值是上传的进度，从1到100
            Progress(num);
         },

         // 发生错误后的处理
         upStop: function (errmsg) {
            // 这里只是简单的alert一下结果，可以使用其它的弹窗提醒插件
            alert(errmsg);
         },

         // 开始上传前的处理和回调,比如进度条初始化等
         upStart: function () {
            Progress(0);
            $('#pic').hide();
            alert('开始上传');
         }

      });
````
### 更新日志
#### 2018/1/8  : 添加了对于接口返回结果的回调，添加了对于上传表单id的指定
#### 2018/1/10 : 添加了node.js的上传接口，基于express框架
#### 2018/1/17 : 优化了分片异步处理,队列执行接口,修复细节
#### 2018/5/02 : 添加了文件大小的判断,添加了对于文件md5的计算,添加了终止函数,传值到后台使用,优化细节部分
#### 2019/5/21 : 分离了原来的进度动画，现在用户可以自定义自己的动画和按钮，分别提供了各种回调事件以便处理
#### 2019/8/12 : 修复了获取md5值的bug，感谢Matty的提醒