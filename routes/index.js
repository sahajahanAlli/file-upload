var express = require('express');
const upload = require('../api/fileupload')
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'File Upload', message: '' });
});

// post call after browsing the file location

router.post('/', upload.upload);

module.exports = router;