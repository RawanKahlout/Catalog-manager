const auth = require('../midleware/auth');
var multer = require('multer');
var path = require('path');
module.exports = (app) => {

    var store = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null, './uploads');
        },
        filename:function(req,file,cb){
            cb(null, Date.now()+'.'+file.originalname);
        }
    });
    
    var upload = multer({storage:store}).single('file');
    app.post('/upload',auth,function(req,res){
        //var a = originalname.split(".");
        upload(req,res,function(err){
           if(err){

            return res.status(501).json({error:err});
            }
      
    return res.json({uploadname:req.file.filename , originalname:req.file.originalname});
           
        });
   
//originalname	Name of the file on the user's computer
//The name of the file within the destination	
    });




}
