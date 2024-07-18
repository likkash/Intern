require("./base")
const express=require('express')
const router = express.Router()
const HospitalInfo = require('./datatype')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())



// routers

router.get('/',async(request,response)=>{
    const tracks = await HospitalInfo.find()
    response.json(tracks)
})



router.post("/admit",async(request,response)=>{
    const Patient = new HospitalInfo(request.body)
    await Patient.save()
    response.json(Patient)
})



router.delete('/discharge/:name',async(request,response)=>{
    const data = await HospitalInfo.findOneAndDelete(patientName=request.params.name)
    response.json(data)
})



router.get('/issue/:given',async(request,response)=>{
    // const found = await HospitalInfo.findOne({"status":{'$eq':request.params.given}})
    const found = await HospitalInfo.find({"issue":{'$eq':request.params.given}})
    response.json(found)
})



router.put('/updateFever',async(request,response)=>{
    const data = await HospitalInfo.updateMany({issue:{'$eq':"Fever"}},{status:"Discharge"})
    response.json(data)
})



router.put('/updateCovid',async(request,response)=>{
    const data = await HospitalInfo.updateMany({issue:{'$eq':"Covid"}},{status:"Terminated"})
    response.json(data)
})



router.delete('/RemoveAge/:age',async(request,response)=>{
    const data = await HospitalInfo.deleteMany({patientAge:{'$eq':request.params.age}})
    response.json(data)
})



router.delete('/RemoveStatus/:status',async(request,response)=>{
    const data = await HospitalInfo.deleteMany({status:{'$eq':request.params.status}})
    response.json(data)
})

router.delete('/erase/:id',async(request,response)=>{
    const data = await HospitalInfo.findOneAndDelete({_id:{'$eq':request.params.id}})
    response.json(data)
})


router.put('/',async(request,response)=>{
    const data = await HospitalInfo.findByIdAndUpdate(id=request.body._id,request.body,{new:false})
    response.json(data)
})

router.get('/:id',async(request,response)=>{
    const consignment = await HospitalInfo.findById(id=request.params.id)
    response.json(consignment)
})

module.exports=router