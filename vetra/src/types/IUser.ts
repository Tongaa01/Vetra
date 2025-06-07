import type { IAdress } from "./IAdress";

export enum ROLE {
  ADMIN,
  USUARIO,
}

export interface IUser {
  id?: number;
  nombre: string;
  email: string;
  contraseña: string;
  rol: ROLE;
  direcciones:IAdress[];
  

}
