var express = require('express');
var path = require('path');
var app = express();
//指定静态文件根目录
app.use(express.static(path.resolve('public')));
//当客户端访问/的时候，执行对应回调函数，返回index.html文件
app.get('/',function(req,res){
    res.sendFile('./index.html',{root:path.resolve('src')});
});

app.listen(80);