import type { IProduct } from "./IProduct";


export interface IOrderDetail{
    id?:number,
    ordenCompraId?:number,
    producto:IProduct,
    cantidad:number,
    precioUnitario:number
}