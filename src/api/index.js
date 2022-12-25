import axios from "axios"

const URL="http://localhost:3000/user"

export const createUsr=(newUser)=>axios.post(URL,newUser)
export const getUrs=()=>axios.get(`${URL}/getall`)
export const getUserById=(id)=>axios.get(`${URL}/${id}`)
export const getLoginUser=(user)=>axios.post(`${URL}/login`,user)