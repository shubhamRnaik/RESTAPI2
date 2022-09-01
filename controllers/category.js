const {NodeModel,ExpressModel,Base} = require('../models/categoryModal')




let  updateCourse = async function (req,res,next){

    try {
        let {courseName,courseAccess} = req.body
        console.log(req.body)
        if(courseName === 'node'){
            await new NodeModel(req.body).save()
        }
        else{
            await new ExpressModel(req.body).save()
        }
    res.status(201).json({
        status:true,
        message:" data saved successfully "
    })
    } catch (error) {
        console.log(error)
    }

}


let findcourse = async function(req,res,next){
    let data = await Base.find({__type:"ExpressModel"})
    res.status(201).json({
        status:true,
        message:"data fetched",
        data
        
    })
}



module.exports = {updateCourse,findcourse}