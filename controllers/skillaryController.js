
const modalCheck = require('../helpers/modalCheck')
const skillaryCourseUpdation = async function(req,res,next){
    let {section} = req.body
    let data = await modalCheck(section,req.body)
    res.status(201).json({
        status:true,
        message:"data fetched",
        data,
    })
   
 

   
}







module.exports = skillaryCourseUpdation


