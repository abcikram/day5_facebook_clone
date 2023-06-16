import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId

const doctorSchema = new mongoose.Schema({
    title:{
        default :"Dr.",
    },
    name :{
        type:String,
        required:true,
    },
    mail:{
        type:String,
        required:true,
    },
    phone: {
        type: String,
        required: true,
        unique:true,
    },
    age :{
        type: String,
        required: true,
    },
    category :{
        type:String,
        required:true
    },
    DoctorPrimaryDegree :{
        type: String,
        enum:["MBBS","BDS"],
        required: true,
    },
    DoctorAdditionalDegree :{
        type: String,
        required: true,
    },
    YearOfExperience :{
        type:Number,
        required:true,
    },
    medicalCare :{
        type:ObjectId,
        ref:'medicalcare',
    },
    timing:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:true,  
    },
    visitingPrice :{
        type:Number,
        required:true,  
    },
    About:{
        type:String,
        required:true
    },
    AvailableDate:[
       
    ],
    patientReview:{
        type:Number,
        required:true,
    },
    feedbacks :{
        type:String,
        required:true,
    },
})

const Doctor = mongoose.model('doctor',doctorSchema)

export default Doctor