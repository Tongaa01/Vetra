import type { ICategories } from "./ICategories";
import type { ISize } from "./ISize";



export interface IProduct{
    id?:number,
    nombre:string,
    descripcion:string,
    precio:number,
    stock:number,
    categoria:ICategories[],
    color:string[],
    marca:string,
    image:string,
    talle:string,
    descuento_id:string
    talles:ISize,
}