const {Base,
    Analytics,Aptitude,Artphoto, Assessement,Bussiness, CA, CarrerDevelopment,CyberSecurity, Design,DataScience} = require('../models/SkillaryModal')

const ModalCheck  = async function (value,data){
    // console.log(value)
    if(value === "Analytics"){
        await new Analytics(data).save()
        return "data fetched "
    }
    else if(value === "Aptitude"){
        await new Aptitude(data).save()
        return "data fetched "
    }
    else if(value === "Artphoto"){
        await new Artphoto(data).save()
        return "data fetched "
    }
    else if(value === "Assessement"){
        console.log("Assessement");
        await new Assessement(data).save()
        return "data fetched "
    }


}


module.exports = ModalCheck