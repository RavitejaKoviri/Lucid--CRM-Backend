import { FC } from 'react'

type Props = {
  campaignSource?: string
}

const BrandsLastLoginCell: FC<Props> = ({ campaignSource }) => (
  <div className='badge badge-light fw-bolder'>{campaignSource}</div>
)

export { BrandsLastLoginCell }
