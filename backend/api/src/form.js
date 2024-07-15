import React from "react";
import { useState } from "react";
import Container from '@mui/material/Container';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { callPost } from "./service";
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from "@mui/material";
import Grid from '@mui/material/Grid';


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

    const publish = async()=>{
        //alert(JSON.stringify(datatype))
        const t = await callPost(datatype)
        alert(JSON.stringify(t.data))
    }

    return(
        <Container>
            <div className="row justify-content-center ">
                <div className="col-12 col-md-8 col-lg-6 rounded-2 shadow-lg ">
                    <p className="text-primary display-6 text-center">New Patient Form</p>
                    <div className="row justify-content-around align-items-center mb-2">
                       <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-8 col-sm-6"
                            color="primary"
                            onChange={collecting}
                            name="patientId" 
                            value={datatype.patientId}
                            label="Patient ID" 
                            variant="outlined" 
                        />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-8 mb-sm-2 col-sm-6"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientName}
                            name="patientName" 
                            label="Patient Name" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="row justify-content-around mb-2 ">
                        <TextField 
                            className="col-12 col-md-8 mb-2 col-sm-6 "
                            color="primary"
                            name="patientAge"
                            onChange={collecting} 
                            value={datatype.patientAge}
                            label="Patient Age" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="row justify-content-around mb-2">

                        <TextField 
                            className="col-12 col-md-8 mb-sm-2 col-sm-6"
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
                            className="col-12 col-md-8 mb-sm-2 col-sm-6"
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
                            className="col-12 col-md-8 mb-2 col-sm-6"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientContact}
                            name="patientContact" 
                            label="Patient Contact" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-8 mb-2 col-sm-6"
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
                        <Button onClick={publish} variant="outlined" className="col-2 bg-info " style={{color:'white'}}>
                           Submit
                        </Button>
                        <Button variant="outlined" className="col-2 bg-info">
                            <BackspaceIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )

}