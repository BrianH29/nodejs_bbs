const express = require('express');
const post = require('../controller/board_controller');

const router = express.Router(); 

router.get('/', (req,res) => {
    res.render('write');
})

router.post('/writeContent', post.write);

module.exports= router;