const express = require('express');
const bodyParser= require('body-parser');
const multer = require('multer');
const app= express();

//parse application/jsonbody
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//setup multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toString() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
        cb(null, true);
    } else{
        cb(null, false);
    }
}

app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});
