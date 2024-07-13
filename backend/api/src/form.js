import React from "react";
import { useState } from "react";
import Container from '@mui/material/Container';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { callPost } from "./service";
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
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 rounded-2 shadow-lg bg-warning">
                    <p className="text-primary display-6 text-center">Add new Patient</p>
                    <div className="row justify-content-around align-items-center mb-2">
                        <label className="col-4 text-primary ">Track ID</label>
                        <TextField 
                            className="col-4"
                            color="primary"
                            onChange={collecting}
                            name="patientId" 
                            value={datatype.patientId}
                            label="patient ID" 
                            variant="outlined" 
                        />
                    </div>
                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-4 mb-sm-2"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientName}
                            name="patientName" 
                            label="patient Name" 
                            variant="outlined" 
                        />

                        <TextField 
                            className="col-12 col-md-4"
                            color="primary"
                            name="patientAge"
                            onChange={collecting} 
                            value={datatype.patientAge}
                            label="patientAge" 
                            variant="outlined" 
                        />

                        <TextField 
                            className="col-12 col-md-4 mb-sm-2"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientBloodGroup}
                            name="patientBloodGroup" 
                            label="patient BloodGroup" 
                            variant="outlined" 
                        />

                    </div>
                    <TextareaAutosize
                        className="col-12 form-control bg-warning mb-2"
                        color="primary"
                        onChange={collecting}
                        value={datatype.patientAddress}
                        placeholder="patientAddress"
                        name="patientAddress"
                    />

                    <div className="row justify-content-around mb-2">
                        <TextField 
                            className="col-12 col-md-4"
                            color="primary"
                            onChange={collecting}
                            value={datatype.patientContact}
                            name="patientContact" 
                            label="patient Contact" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="col-12 col-md-4 mb-sm-2"
                            color="primary"
                            onChange={collecting}
                            name="issue" 
                            value={datatype.issue}
                            label="issue" 
                            variant="outlined" 
                        />
                    </div>
                    <Select
                        className="form-select bg-warning text-primary"
                        name="status"
                        onChange={collecting}
                        label="Status"
                        value={datatype.status}
                        >
                        <MenuItem value="Admit">Admit</MenuItem>
                        <MenuItem value="Discharged">Discharged</MenuItem>
                        <MenuItem value="Terminated">Terminated</MenuItem>
                    </Select>
                    <div className="row justify-content-around mt-2 mb-2">
                        <Button onClick={publish} variant="outlined" className="col-2">
                            <AddShoppingCartIcon/>
                        </Button>
                        <Button variant="outlined" className="col-2">
                            <BackspaceIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )

}