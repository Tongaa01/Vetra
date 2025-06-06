export type Role = 'ADMIN' | 'USUARIO';

export interface IUser {
  id?: string
  nombre: string
  email: string
  contraseña: string
  rol: Role
}
