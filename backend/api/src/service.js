import axios from 'axios'

const url="/hospital"

export const callPost=async(object)=>{
    const iGot = await axios.post(`${url}/admit`,object)
    return iGot
}