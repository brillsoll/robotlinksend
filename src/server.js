const express = require('express');
const app = express();
const port = 3000;

// 设置要返回的字符串
const myString = "碳酸（50元全国可飞）-*-咸鱼子Luna-*-ネメシス-*-cez玖玖-*-希往以希-*-泷锦石蒜-*-Yeast Lord-*-椅子 576g-*-系元zZzZ-*-BordenHuston-*-橘子味的小学生-*-₳₦Ø₦Ɏ-*-阿白_Abai-*-～酱清子～ -*-雪里的狐-*-sfp2333-*-露露草地-*-"+
    "！Smokey！-*-咖啡탄のDío-*-NingCong-*-Locoএ-*-猫猫冰I-*-DUST_ouo-*-Adai··-*-欧格玛的从者Oghmanyte-*-超级海兔-*-唐氏谁家小孩ddb6-*-路过的表情-*-一个很菜的人;;MaximohFoxy;;nobody;;nobody";

// 创建一个GET接口
app.get('/my-string', (req, res) => {
    res.send(myString);
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});