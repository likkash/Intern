import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { callDelete, callGet } from './service';
import { Button } from '@mui/base';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';


export const Views=()=>{

    const[myDocuments,setMyDocuments]=useState([])

    const nav=useNavigate()


    const makeFetch=async()=>{
        const t = await callGet()
        setMyDocuments(t.data)
        console.log(JSON.stringify(myDocuments))
    }

    useEffect(()=>{
        makeFetch()
    },[])

    const columns = [
        {
          field: 'patientId',
          headerName: 'Patient ID',
          width: 200,
        },
        {
          field: 'patientName',
          headerName: 'Patient Name',
          width: 200,
        },
        {
          field: 'issue',
          headerName: 'Issue',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
        },
      ];

    const[found,setFound]=useState({
        "_id":0
    })
    return(
        <>
            <div className='row justify-content-center align-items-center' style={{width:'100%'}}>
                <div className='col-lg-6 col-md-8 col-12 shadow-lg p-5' style={{height:'100vh'}}>
                    <DataGrid
                        onRowSelectionModelChange={
                            (one)=>{
                                var collected=myDocuments.filter((each)=>{
                                    return each._id==one
                                })
                                alert(JSON.stringify(collected[0]))
                                // setOpenRead(true)
                                setFound(collected[0])
                            }
                        }
                        initialState={{
                            pagination:{
                                paginationModel:{pageSize:2}
                            }
                        }}
                        columns={columns}
                        rows={myDocuments}
                        getRowId={(obj)=>obj._id}
                    />
                     {
                            (found._id!=0)?
                            <>
                                <div className="mt-2 row justify-content-around">
                                <Button onClick={async()=>{
                                        nav(`/${found._id}`)
                                    }} className="col-3 btn btn-outline-info" variant="contained">
                                        <AutoFixHighIcon/>
                                    </Button>
                                    <Button color="error" onClick={async()=>{
                                        // alert(JSON.stringify(found)+" to be deleted")
                                        const rec = await callDelete(found._id)
                                        alert(JSON.stringify(rec))
                                    }} className="col-3 btn btn-outline-danger" variant="contained">
                                        <DeleteOutlineIcon/>
                                    </Button>

                                </div>
                            </>
                            :
                            <></>
                        }
                </div>
            </div>
        </>
    )
}