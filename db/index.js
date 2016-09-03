var mongoose = require('mongoose');
var settings = require('../settings')
mongoose.connect(settings.dbUrl);
// 第一步定义模型骨架
var userSchema = new mongoose.Schema({
    email:String,//邮箱
    avatar:String//头像
});
// 第二步定义用户模型
exports.User = mongoose.model('User',userSchema);

