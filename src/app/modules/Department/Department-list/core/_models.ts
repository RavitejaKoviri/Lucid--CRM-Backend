import { ID, Response } from '../../../../../_metronic/helpers'
export type Lead = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
  company:string
  departmentName:string
}

export type LeadsQueryResponse = Response<Array<Lead>>

export const initialUser: Lead = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
  company:"",
  departmentName:"",
}
