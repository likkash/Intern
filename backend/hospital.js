const express = require('express')
const bodyParser = require('body-parser')

const exp = express()

exp.use(bodyParser.urlencoded({extended:true}))
exp.use(bodyParser.json())

let tempData=[{
    "hospitalName":"SRM Hospital",
    "hospitalAddress":"Chennai",
    "hospitalSpeciality":['heart','lungs','brain','cancer','eye','Typhoid']
},{
    "hospitalName":"Aishwarya Hospital",
    "hospitalAddress":"Salem",
    "hospitalSpeciality":['heart','lungs','brain','skin disease']
},{
    "hospitalName":"Likkash Hospital",
    "hospitalAddress":"Namakkal",
    "hospitalSpeciality":['heart','lungs','Typhoid']
},{
    "hospitalName":"DP Hospital",
    "hospitalAddress":"Coimbatore",
    "hospitalSpeciality":['heart','brain','cancer','Typhoid']
},]

exp.delete("/remove/:index",async(request,response)=>{
    tempData = tempData.filter((val,ind)=>{
        return ind!=request.params.index
    })
    response.json({"msg":JSON.stringify(tempData)+" deleted to the stock"})
})

exp.put("/update",async(request,response)=>{
    for(var index=0;index<tempData.length;index++){
        if(tempData[index].hospitalName==request.body.hospitalName){
            tempData[index]=request.body
            response.json({"success":request.body})
            return
        }
    }
    response.json({"Failed":"Updation failed"})
})

exp.put("/change/:position",async(request,response)=>{
    const index = request.params.position
    tempData[index]=request.body
    response.json(tempData)
})

exp.get("/",async(request,response)=>{
    response.json({"records":tempData})
})

exp.post('/include',async(request,response)=>{
    const received = request.body
    tempData.push(received)
    console.log(tempData.length+" "+JSON.stringify(received))
    response.json({"msg":JSON.stringify(received)+" added to the stock"})
})

exp.listen(1100,()=>{
    console.log('stocks initiated!!!!!!!!!!!!!!!!')
})