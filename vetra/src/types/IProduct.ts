import type { ICategories } from "./ICategories"
import type { IDiscount } from "./IDiscount"
import type { ISize } from "./ISize"

export interface IProduct {
    id: string,
    nombre: string,
    stock: number,
    precio: number,
    descripcion: string,
    categoria: ICategories[],
    talle: string,
    imagen: string,
    color: string[],
    marca: string,
    id_talle_producto: ISize | string,
    id_descuento_producto: IDiscount | string
}