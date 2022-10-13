import { FC } from 'react'

type Props = {
  campaignSource?: string
}

const DepartmentLastLoginCell: FC<Props> = ({ campaignSource }) => (
  <div className='badge badge-light fw-bolder'>{campaignSource}</div>
)

export { DepartmentLastLoginCell }
