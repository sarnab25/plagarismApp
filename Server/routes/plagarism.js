const express= require("express")
const multer= require("multer")
const path = require('path');
const storage = multer.diskStorage({
    destination:(req, file,cb)=>
    {
        cb(null, 'uploads/')
    },
    filename:(req,file,cb)=>
    {
cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage });

const plagarismController = require("../controllers/plagarism.js")
const router = express.Router()


router.post('/check', upload.single('filetoUpload'), plagarismController.plagarismCheck )
module.exports=router