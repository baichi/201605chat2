var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();
//指定静态文件根目录
app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('src')));
//接收客户端发过来的json格式的请求体
app.use(bodyParser.json());
app.use(session({//使用此session中间件
    resave: true,//每次请求都重新保存session
    secret: 'zfpx',//指定加密cookie的密钥
    saveUninitialized: true//保存未使用的session
}));
var db = require('./db');//加载一个目录的时候，会自动加载里面的index.js文件
//当客户端访问/的时候，执行对应回调函数，返回index.html文件
app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: path.resolve('src')});
});
//处理客户端登陆
app.post('/user/login', function (req, res) {
    var user = req.body;//先得到请求体
    //查找用户是否存在
    var findResult = db.User.findOne(user).then(function (doc) {
        if (doc) {//如果用户存在
            req.session.user = doc;//把此用户放在session中
            res.send(doc);//把此用户对象发送给客户端
        } else {
            user.avatar = 'https://secure.gravatar.com/avatar/md5(user.email)?s=30';
            return db.User.create(user);//保存新的用户对象
        }
    });
    if (findResult.then) {//如果返回的是一个promise
        findResult.then(function (doc) {// email avatar _id
            req.session.user = doc;
            res.send(doc);
        });
    }

});

app.listen(80);