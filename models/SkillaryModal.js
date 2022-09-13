const {Schema,model,mongoose} = require('../config/index')



const SkillarySchema = new Schema(
    {
        section:{
            type:String,
            enum:["Analytics","Aptitude","Artphoto","Assessement","Bussiness","CA","CarrerDevelopment",
                "CyberSecurity","Design","DataScience"]
        },

        title:{
            type:String
        },
        courseOverview:{
            type:String
        },
        rating:{
            type:String
        },
        intro:{
            type:String
        },
        image:{
            type:[""]
        },
        video:{
            type:[""]
        },
        author:{
            type:String
        },
        curriculam:{
            type:String
        },
        review:{
            type:String,
        },
        cost:{
            type:String,
            
        },
        availability:{
            type:String,
            enum:['true',"false"]
        },
        blank1:{},
        blank2:{},
    
    },{collection:"SkillRary"}
)

const baseOptions = {
    discriminatorKey: '__type',
    collection: 'SkillRary'
};

const Base = mongoose.model('Category', new Schema({}, baseOptions)); //parent of all 
const Analytics = Base.discriminator('Analyticsmodel', SkillarySchema);
const Aptitude = Base.discriminator('AptitudeModel', SkillarySchema);
const Artphoto = Base.discriminator('ArtphotoModel', SkillarySchema);
const Assessement = Base.discriminator('AssessementModel', SkillarySchema);
const Bussiness = Base.discriminator('BussinessModel', SkillarySchema);
const CA = Base.discriminator('CAModel', SkillarySchema);
const CarrerDevelopment = Base.discriminator('CarrerDevelopmentModel', SkillarySchema);
const CyberSecurity = Base.discriminator('CyberSecurityModel', SkillarySchema);
const Design = Base.discriminator('DesignModel', SkillarySchema);
const DataScience = Base.discriminator('DataScienceModel', SkillarySchema);



module.exports = {

    Base,
    Analytics,
    Aptitude,
    Artphoto,
    Assessement,
    Bussiness,
    CA,
    CarrerDevelopment,
    CyberSecurity,
    Design,
    DataScience
}