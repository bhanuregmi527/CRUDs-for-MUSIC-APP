const express= require('express');
const router= express.Router();
const checkUserAuth = require('../middlewares/auth-middleware')
const {getSongs,addSong,updatesong,deleteSong,deleteAllSong,getSingleSong}=require('../controllers/musicControllers')
const restrictTo= require('../middlewares/restrict')

//Routes

router.get('/songs',getSongs)
router.get('/getSingleSong/:songID',getSingleSong)
router.post('/addSong',checkUserAuth,addSong)
router.put('/songs/:songID',checkUserAuth,updatesong)
router.delete('/deleteSong/:songID',checkUserAuth,deleteSong)
router.delete('/deleteAllSong',checkUserAuth,restrictTo('admin'),deleteAllSong)


module.exports=router