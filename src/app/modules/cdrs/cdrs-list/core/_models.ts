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
  agent_name: string
  agent_number: string
  client_number: string
  description: string
  status: string
  call_duration: string
  date: string
  time: string
}

export type LeadsQueryResponse = Response<Array<Lead>>

export const initialUser: Lead = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
  agent_name: "",
  agent_number: "",
  client_number: "",
  description: "",
  status: "",
  call_duration: "",
  date: "",
  time: "",
}
