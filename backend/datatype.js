const mongoose = require('mongoose')

var logSchema=new mongoose.Schema({
    patientId:{type:Number},
    patientName:{type:String},
    patientAge:{type:Number},
    patientBloodGroup:{type:String},
    patientAddress:{type:String},
    patientContact:{type:Number},
    issue:{type:String},
    status:{type:String}
})

const Hospital = mongoose.model('Hospital',logSchema)
module.exports=Hospital