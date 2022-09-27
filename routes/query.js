const express = require('express')
const Router = express.Router()
const query = require('../controller/query')
const { verifytoken } = require('../middleware/auth')
const path = require("path");

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/query')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
      
    }
  })
const upload = multer({  storage: storage })
const router = ()=>{

    Router.post('/', query.createquery)    
    Router.post("/image",upload.array("file"),query.uploadImage)
    Router.patch('/:id',verifytoken, query.updatequery)
    Router.get('/', verifytoken,query.getquery)
    Router.delete('/', verifytoken,query.deletequery)        

    return Router;
}
module.exports =  router()