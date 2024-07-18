import React from "react";
import { useState } from "react";
import Container from '@mui/material/Container';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from "@mui/material";
import Grid from '@mui/material/Grid';
import { callPost } from "./service";
import { useNavigate } from "react-router-dom";
import './back.css'



export const Form =() => {

    const[datatype,setDatatype]=useState({
        "patientId":0,
        "patientName":"",
        "patientAge":0,
        "patientBloodGroup":"",
        "patientAddress":"",
        "patientContact":0,
        "issue":"",
        "status":""
    })

    const collecting=(eve)=>{
        const{name,value}=eve.target
        setDatatype((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const nav=useNavigate()
    

    const publish = async()=>{
        //alert(JSON.stringify(datatype))
        const t = await callPost(datatype)
        alert(JSON.stringify(t.data))
    }

    return(
        <Container>
            
            <div className="row justify-content-center ">
                <div className="col-12 col-md-8 col-lg-8 rounded-4 shadow-lg " style={{padding: '20px',marginTop:'60px', backgroundColor: '#fff'}}>
                    <p className="text-success display-6 text-center">Patient Details Form</p>
                       <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-md-4 mb-2 col-sm-6 m-2"
                            color="primary"
                            onChange={collecting}
                            name="patientId" 
                            value={datatype.patientId} 
                            label="Patient ID" 
                            variant="filled" 
                        />                      
                        <TextField 
                            className="col-md-4 mb-2 col-sm-6 m-2"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientName}
                            name="patientName" 
                            label="Patient Name" 
                            variant="outlined" 
                        />
                           </div>
                           <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-md-4 mb-2 col-sm-6 m-2"
                            color="primary"
                            name="patientAge"
                            onChange={collecting} 
                            value={datatype.patientAge}
                            label="Patient Age" 
                            variant="filled" 
                        />

                        <TextField 
                            className="col-md-4 mb-2 col-sm-6 m-2"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientBloodGroup}
                            name="patientBloodGroup" 
                            label="Patient BloodGroup" 
                            variant="outlined" 
                        />

                    </div>
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-md-6 mb-sm-2 col-sm-6"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientAddress}
                            name="patientAddress" 
                            label="Patient Address" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-md-4 mb-2 col-sm-6 m-2"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientContact}
                            name="patientContact" 
                            label="Patient Contact" 
                            variant="filled" 
                        />
                        <TextField 
                            className="col-md-4 mb-2 col-sm-6 m-2"
                            color="primary"
                            onChange={collecting}
                            name="issue" 
                            value={datatype.issue}
                            label="issue" 
                            variant="outlined" 
                        />
                    </div >
                    
                    <Grid item xs={12} md={12} lg={12}>
                     <FormControl fullWidth>
  
                          <InputLabel id="demo">Status</InputLabel>
                            <Select
                
                                id="status"
                                value={datatype.status}
                                label="Status"
                                variant="outlined"
                                onChange={collecting}
                                name="status"
                            >
                            <MenuItem value="Admit">Admit</MenuItem>
                            <MenuItem value="Discharged">Discharged</MenuItem>
                            <MenuItem value="Terminated">Terminated</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    <div className="row justify-content-around mt-2 mb-2">
                        <Button onClick={publish} variant="outlined" className="col-2 bg-primary " style={{color:'white'}}>
                           Submit
                        </Button>
                        <Button variant="outlined" className="col-2 bg-danger" style={{color:'white'}}>
                            <BackspaceIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )

}