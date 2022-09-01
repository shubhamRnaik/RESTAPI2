const Errorhandling = function(err,req,res,next){

    res.stack()
    res.status(500).json({status:false,message:"internal server error"})




}


module.exports = Errorhandling