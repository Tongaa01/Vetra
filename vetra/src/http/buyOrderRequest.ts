import axios from "axios"
import { getLocalToken } from "../services/tokenService"
import type { IBuyOrder } from "../types/IBuyOrder"


const APIURL=import.meta.env.VITE_APIURL
const baseURL=`${APIURL}/ordenes-compra`



export const getAllBuyOrders=async()=>{
    try {
        const response=await axios.get(`${baseURL}`)
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todas las ordenes de compra: ",error)
    }
}
export const getBuyOrderById=async(id:string)=>{
    try {
        const response=await axios.get(`${baseURL}/${id}`)
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de una orden de compra",error)
    }
}
export const createBuyOrder=async(newBuyOrder:IBuyOrder)=>{
    try {
        const response=await axios.post(`${baseURL}`,newBuyOrder,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la creacion de una orden de compra: ",error)
    }
}
export const updateBuyOrder=async(updatedBuyOrder:IBuyOrder)=>{
    try {
        const response=await axios.put(`${baseURL}/${updatedBuyOrder.id}`,updatedBuyOrder,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la actualizacion de una orden de compra: ",error)
    }
}
export const deleteBuyOrderById=async(id:string)=>{
    try {
        const response=await axios.delete(`${baseURL}/${id}`,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return {message:"La orden de compra fue eliminada correctamente"}
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la eliminacion de una orden de compra: ",error)
    }
}