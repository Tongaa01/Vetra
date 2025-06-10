import type { ICategories } from "./ICategories";
import type { IDiscount } from "./IDiscount";
import type { ISize } from "./ISize";



export interface IProduct {
    id?: number,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
    categorias: ICategories[],
    color: string[],
    marca: string,
    imagen: string,
    descuento: IDiscount | 0
    talles: ISize[],
}