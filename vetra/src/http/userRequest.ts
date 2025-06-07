import axios from "axios"
import { getLocalToken } from "../services/tokenService"
import type { IUser } from "../types/IUser"

const APIURL=import.meta.env.VITE_APIURL
const baseURL=`${APIURL}/usuarios`

export const getAllUsers=async()=>{
    try {
        const response=await axios.get(`${baseURL}`,{headers:{"Authorization":getLocalToken()}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los usuarios: ",error)
    }
}
export const getUserById=async(id:string)=>{
    try {
        const response=await axios.get(`${baseURL}/${id}`,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de un usuario: ",error)
    }
}
export const createUser=async(newUser:IUser)=>{
    try {
        const response=await axios.post(`${baseURL}`,newUser,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.status
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la creacion de un usuario: ",error)
    }
}

export const updateUser=async(updatedUser:IUser)=>{
    try {
        const response=await axios.put(`${baseURL}/${updatedUser.id}`,updatedUser,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la actualizacion de un usuario: ",error)
    }
}
export const deleteUser=async(id:string)=>{
    try {
        const response=await axios.delete(`${baseURL}/${id}`,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return {message:"El usuario fue eliminado correctamente"}
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la eliminacion de un usuario: ",error)
    }
}