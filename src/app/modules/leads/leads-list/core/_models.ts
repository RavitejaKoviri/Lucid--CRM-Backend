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
  lead_source: Object
  campaign_source: Object
  leadAnnualRevenueContribution: string
  leadCompanyName: string
  leadEmail: string
  leadFirstName: string
  leadIndustry: string
  leadLastName: string
  leadPhonenumber: string
  leadSpecialityName:string
  leadAppointmentDate:string
  leadId:string
  leadLocationName:string
  leadStatusName:string
}

export type LeadsQueryResponse = Response<Array<Lead>>

export const initialUser: Lead = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
  lead_source: {},
  campaign_source: {},
  leadAnnualRevenueContribution: '',
  leadCompanyName: '',
  leadEmail: '',
  leadFirstName: '',
  leadIndustry: '',
  leadLastName: '',
  leadPhonenumber: '',
  leadSpecialityName:'',
  leadAppointmentDate:'',
  leadId:'',
  leadLocationName:'',
  leadStatusName:'',
}
