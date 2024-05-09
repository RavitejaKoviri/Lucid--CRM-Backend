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
  leadDigitalMediaSource: Object
  campaign_source: Object
  revenue: string
  leadCompanyName: string
  leadEmail: string
  leadFirstName: string
  leadIndustry: string
  leadLastName: string
  leadMobileNumber: string
  description:string
  date:string
  leadId:string
  leadLocation:string
  leadAge: number
  leadAddress:string
  leadRemarks:string
  leadStatusName:string
}

export type LeadsQueryResponse = Response<Array<Lead>>

export const initialUser: Lead = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
  leadDigitalMediaSource: '',
  campaign_source: {},
  revenue: '',
  leadCompanyName: '',
  leadEmail: '',
  leadFirstName: '',
  leadIndustry: '',
  leadLastName: '',
  leadMobileNumber: '',
  description:'',
  date:'',
  leadId:'',
  leadAge:0,
  leadAddress:'',
  leadRemarks:'',
  leadLocation:'',
  leadStatusName:'',
}
