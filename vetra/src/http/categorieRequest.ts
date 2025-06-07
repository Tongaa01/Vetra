import axios from "axios"
import { getLocalToken } from "../services/tokenService"
import type { ICategories } from "../types/ICategories"

const APIURL=import.meta.env.VITE_APIURL


export const getAllCategories=async()=>{
    try {
        const response=await axios.get(`${APIURL}/categorias`,{headers:{"Authorization":getLocalToken()}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion de todas las categorias: ",error)
    }
}
export const getCategoriesById=async(id:string)=>{
    try {
        const response=await axios.get(`${APIURL}/categorias/${id}`,{headers:{"Authorization":getLocalToken()}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la obtencion una de las categorias: ",error)
    }
}
export const createCategorie=async(categorie:ICategories)=>{
    try {
        const response=await axios.post(`${APIURL}/categorias`,categorie,{headers:{"Authorization":getLocalToken()}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la creacion de una categoria: ",error)
    }
}
export const updateCategorie=async(updatedCategorie:ICategories)=>{
    try {
        const response=await axios.put(`${APIURL}/categorias/${updatedCategorie.id}`,updatedCategorie,{headers:{"Authorization":getLocalToken()}})
        if(response){
            return response.data
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la actualizacion de una categoria: ",error)
    }
}
export const deleteCategorieById=async(id:string)=>{
    try {
        const response=await axios.delete(`${APIURL}/categorias/${id}`,{headers:{"Authorization":getLocalToken()}})
        if(response){
            return {message:"La categoria fue eliminada correctamente"}
        }
        return null
    } catch (error) {
        console.log("Ocurrio un error durante la actualizacion de una categoria: ",error)
    }
}


