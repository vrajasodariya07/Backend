var usermodel = require('../model/usermodel');
const bcrypt = require('bcrypt');
var login_status = 0;

exports.insert = async ( req,res ) => {

   var b_pass = await bcrypt.hash(req.body.password,10);

   req.body.password = b_pass;

   var data = await usermodel.create(req.body);

   res.status(200).json({
       data
   })
} 
exports.Update = async ( req,res ) => {

   var id = req.params.id;

   var data = await usermodel.findByIdAndUpdate(id,req.body);

   res.status(200).json({
       status:"Update.....done",
       data
   })
}
exports.Delete = async ( req,res ) => {

   var id = req.params.id;

   var data = await usermodel.findByIdAndDelete(id,req.body);

   res.status(200).json({
       status:"Delete.....done",
       data 
   })
}
exports.view_user = async (req, res) => {
    if (req.params.id == undefined) {
        data = await user.find();
    }
    else {
        data = await user.findById(req.params.id);
    }
    res.status(200).json({ data })
}
exports.login = async (req,res) => {

   var data = await usermodel.find({"email":req.body.email});

   if(login_status==0)
   {
       if(data.length==1)
       {
           bcrypt.compare(req.body.password,data[0].password, function(err, result) {
           
           if(result==true)
           {
               login_status=1;
               res.status(200).json({
                   status:"login"
               })
           }
           else
           {
               res.status(200).json({
                   status:"check your email and password"
               })
           }

           });
       }else{
           res.status(200).json({
               status:"check your email and password"
           })
       }
   }else{
       res.status(200).json({
           status:"user is already login"
       })
   }

}

exports.logout = async (req,res) =>{

   login_status=0

   res.status(200).json({
       status:'logout done...'
   })

}

