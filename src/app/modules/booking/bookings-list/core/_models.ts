import { ID, Response } from '../../../../../_metronic/helpers'
export type Booking = {
  id?: ID
  name?: string
  username?: string
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
  mobileNumber?: string
  address?:string
  fullName?:string
  gender?:string

}

export type UsersQueryResponse = Response<Array<Booking>>

export const initialUser: Booking = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  username: '',
  email: '',
  mobileNumber: '',
  address:'',
  fullName:'',
  gender:'',
  
}
