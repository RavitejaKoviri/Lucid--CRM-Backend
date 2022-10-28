import { FC } from 'react'

type Props = {
  campaignSource?: string
}

const CompanyLastLoginCell: FC<Props> = ({ campaignSource }) => (
  <div className='badge badge-light fw-bolder'>{campaignSource}</div>
)

export { CompanyLastLoginCell }
