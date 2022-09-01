const {Schema,model,mongoose} = require('../config')


const NodeSchema = new Schema({

    courseName:{
        type:String,
        index:true
    },
    courseAccess:{
        type:String,

    },
    courseDuration:{
        type:String
    }
},{collection:"SkillRary"},{timeStamp:true})

// const ExpressSchema = new Schema({

//     courseName:{
//         type:String,
//         index:true
//     },
//     courseAccess:{
//         type:String,

//     },
// },{collection:"SkillRary"})

//Then define discriminator field for schemas:
const baseOptions = {
    discriminatorKey: '__type',
    collection: 'SkillRary'
};

const Base = mongoose.model('category', new Schema({}, baseOptions));
const NodeModel = Base.discriminator('Nodemodel', NodeSchema);
const ExpressModel = Base.discriminator('ExpressModel', NodeSchema);

module.exports = {
    NodeModel:NodeModel,
    ExpressModel:ExpressModel,
    Base:Base
}