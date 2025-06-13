import type { IOrderDetail } from "./IOrderDetail";


export interface IBuyOrder{
    id?:number,
    pedidoId?:number,
    detalles:IOrderDetail[],
    fechaOrden:Date |string,
    montoTotal:number,
    medioPago:string
}