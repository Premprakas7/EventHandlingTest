import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const login=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios({
    method:"post",
        url:"/login",
        baseURL:"https://jwtback.onrender.com",
        data:payload
    })
    .then((res)=>{ return dispatch({type:LOGIN_SUCCESS, payload:res.data.token})})
    .catch((err)=>{return dispatch({type:LOGIN_FAILURE })})
    }