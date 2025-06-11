import type { IProduct } from "./IProduct";

export interface ICartBody {
    product: IProduct,
    amount: number,
    size: string,
    price: number,
}