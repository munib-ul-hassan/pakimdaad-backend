const express = require('express')
const Router = express.Router()
const auth = require('../controller/auth')
const path = require("path");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/users')
    },
    filename: function (req, file, cb) {
      cb(
        null,
        
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  })
const upload = multer({  storage: storage })

const router = ()=>{

    Router.post('/login', auth.login)    
    Router.post('/register',upload.single('file'), auth.register)
    
    // Router.post('/signinwithgoogle', upload.array('file'),auth.googlelogin)
    
    return Router;
}
module.exports =  router()