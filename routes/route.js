const express = require('express');
const router = express.Router();
const userController = require('../controller/userControler')

router.use('/api/v1/posts' , userController );

router.get('/',(req,res)=>{
    res.render('main')
})

router.get('/game',(req,res)=>{
    res.render('suwit')
})

module.exports = router;

