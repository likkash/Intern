const express = require('express')

const exp = express()

const data = { "name": " likkash"}

exp.get('/',async(request,respond) =>{
    respond.send("<h1 style = 'color:blue> I am Likkash </h1>")
})

exp.get('/term',async(request,respond) =>{
    respond.json({"Name": "Likkash","Number":1234567890})
})

exp.get('/dp/:exp/:skills/:age',async(request,response) =>{ 
    let success = (request.params.exp) + (request.params.skills) + (request.params.age) 
     response.json({"Success" : success})
})

exp.listen(1100,() => {
    console.log('server is running')
});