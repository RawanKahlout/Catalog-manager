const auth = require('../midleware/auth');
var multer = require('multer');
var path = require('path');
module.exports = (app) => {
    var store = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploadedProducts');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });
    var storeSplits = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './splitFiles');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });
    var storeDescriptions = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './descriptions');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });
    var upload = multer({ storage: store });
    var uploadSplits = multer({ storage: storeSplits });
    var uploadDescriptions = multer({ storage: storeDescriptions });
    app.post('/api/uploadProducts', auth, upload.single('file'), function (req, res) {
        return res.status(200);
    });
    app.post('/api/uploadSplits',auth,uploadSplits.single('file'), function (req, res) {
        return res.status(200);
    })
    app.post('/api/uploadDescriptions',auth,uploadDescriptions.single('file'),function(req,res){
        return res.status(200);
    })
    //originalname	Name of the file on the user's computer
    //The name of the file within the destination	
}
