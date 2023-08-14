const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(express.static('public'));
// controllers
const userController = require('../controllers/userController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/UserImages/'), (error, success) => {
            if (error) throw error;
        });
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, (error, success) => { 
            if (error) throw error;
        });
    }
});
const upload = multer({ storage: storage });

router.post('/register',upload.single('image'), userController.registerUser);

module.exports = router;