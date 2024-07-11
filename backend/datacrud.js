const express=require('express')
const { default: mongoose } = require('mongoose')
const HospitalInfo = require('./datatype')
const bodyParser = require('body-parser')

const exp = express()

exp.use(bodyParser.urlencoded({extended:true}))
exp.use(bodyParser.json())

const uri = "mongodb+srv://Likkash:AishwaryaLikkash@cluster0.9qjid0n.mongodb.net/HospitalTask?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri,clientOptions)

// routers

exp.get('/',async(request,response)=>{
    const tracks = await HospitalInfo.find()
    response.json(tracks)
})



exp.post("/admit",async(request,response)=>{
    const Patient = new HospitalInfo(request.body)
    await Patient.save()
    response.json(Patient)
})



exp.delete('/discharge/:name',async(request,response)=>{
    const data = await HospitalInfo.findOneAndDelete(patientName=request.params.name)
    response.json(data)
})



exp.get('/issue/:given',async(request,response)=>{
    // const found = await HospitalInfo.findOne({"status":{'$eq':request.params.given}})
    const found = await HospitalInfo.find({"issue":{'$eq':request.params.given}})
    response.json(found)
})



exp.put('/updateFever',async(request,response)=>{
    const data = await HospitalInfo.updateMany({issue:{'$eq':"Fever"}},{status:"Discharge"})
    response.json(data)
})



exp.put('/updateCovid',async(request,response)=>{
    const data = await HospitalInfo.updateMany({issue:{'$eq':"Covid"}},{status:"Terminated"})
    response.json(data)
})



exp.delete('/RemoveAge/:age',async(request,response)=>{
    const data = await HospitalInfo.deleteMany({patientAge:{'$eq':request.params.age}})
    response.json(data)
})



exp.delete('/RemoveStatus/:status',async(request,response)=>{
    const data = await HospitalInfo.deleteMany({status:{'$eq':request.params.status}})
    response.json(data)
})



exp.listen(1234,()=>{
    console.log("express connected!!!!!!!!!!!")
})