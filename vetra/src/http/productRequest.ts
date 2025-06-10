import axios from "axios"
import { getLocalToken } from "../services/tokenService"
import type { IProduct } from "../types/IProduct"

const APIURL=import.meta.env.VITE_APIURL
const baseURL=`${APIURL}/productos`



export const getAllProducts=async():Promise<IProduct[]>=>{
    try {
        const response=await axios.get(`${baseURL}`)
        if(response){
            return response.data
        }
        throw new Error("Ocurrio un error durante la obtencion de todos los productos")
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todos los productos: ",error)
        return []
    }
}
export const getProductById=async(id:string)=>{
    try {
        const response=await axios.get(`${baseURL}/${id}`)
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de un producto ",error)
    }
}
export const createProducts=async(newProduct:IProduct)=>{
    try {
        const response=await axios.post(`${baseURL}`,newProduct,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la creacion de un producto: ",error)
    }
}
export const updateProduct=async(updatedProduct:IProduct)=>{
    try {
        const response=await axios.put(`${baseURL}/${updatedProduct.id}`,updatedProduct,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la actualizacion de un producto: ",error)
    }
}
export const deleteProductById=async(id:string)=>{
    try {
        const response=await axios.delete(`${baseURL}/${id}`,{headers:{"Authorization":`Bearer ${getLocalToken()}`}})
        if(response){
            return {message:"El producto fue eliminado correctamente"}
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la eliminacion de un producto: ",error)
    }
}