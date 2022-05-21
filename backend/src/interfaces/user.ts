export interface IUser {
  name: string
  lastName: string
  email: string
  password: string
  _id: string
  role: IRole
}

export type IRole = 'USER' | 'ADMIN' | 'RESELLER'
