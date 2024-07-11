const express = require('express')
const data = require("./datacrud")
const path = require('path');

const exp = express()

exp.use("/hospital",data)
exp.use(express.static(path.join(__dirname, '../backend/api/build')));

exp.get('*', async(request, response) => {
    response.sendFile(path.join(__dirname, '../backend/api/build/index.html'));
});


exp.listen(1234,()=>{
    console.log("express connected!!!!!!!!!!!")
})