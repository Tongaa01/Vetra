import type { ICategories } from "./ICategories"
import type { ISize } from "./ISize"

export interface IProduct {
    id: string,
    nombre: string,
    stock: number,
    precio: number,
    descripcion: string,
    categoria: ICategories[],
    id_talle_producto: ISize[] | string[],
    imagen: string,
    color: string[],
    marca: string,
    id_descuento_producto: number
}