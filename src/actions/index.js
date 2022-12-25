 import * as api from "../api/index.js"
import { SEND,FETCH_USERS ,GET_BY_ID,START_LOADING,END_LOADING} from "../components/constants.js";
import SignIn from "../components/signIn/signIn.js";
import { useNavigate } from "react-router-dom";

export const createUser=(data)=> async(dispatch)=>{
 
    try {
        const userData=await api.createUsr(data) 
        dispatch({type:SEND,payload:userData})
    } catch (error) {
        console.log("could not send");
    }
}

export const getUsers=()=>async(dispatch)=>{
    try {
        
        dispatch({type:START_LOADING})
        
        const users=await api.getUrs();
        
        dispatch({type:FETCH_USERS,payload:users})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log("could not fetch");
    }
}
export const getbyId=(id)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const users=await api.getUserById(id)
        console.log(users);
        dispatch({type:GET_BY_ID,payload:users})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log("could not get by domain");
    }
}

export const  loginUser=(user)=>async(dispatch)=>{
    console.log("login");
     try {
        const loggedUser=await api.getLoginUser(user);
         console.log(loggedUser.data);
         return loggedUser.data
     } catch (error) {
        console.log("some technical issue!");
     }
}