const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/character", (req, res) => {
    const id = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const url = [
        'https://i.imgur.com/qaQfzAI.jpg', 
        'https://i.imgur.com/5ZBoGx6.jpg', 
        'https://i.imgur.com/wUaIBfG.jpg',
        'https://i.imgur.com/LFp8NxU.jpg',
        'https://i.imgur.com/4xgkxmT.jpg',
        'https://i.imgur.com/P8pdKRB.jpg',
        'https://i.imgur.com/mBPkofL.jpg',
        'https://i.imgur.com/HfkQ3ll.jpg',
        'https://i.imgur.com/0XEGPFW.jpg',
        'https://i.imgur.com/TZkaaBa.jpg',
        'https://i.imgur.com/dzPFaZZ.jpg',
        'https://i.imgur.com/UwzGt0W.jpg'
    ];
   
    res.json({
        id: _.sample(id),
        url: _.sample(url),
    });

});

app.listen(3000, () => console.log('API Server is running...'));