/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { Lead } from '../../core/_models'

type Props = {
  lead: Lead
}

const BrandsInfoCell: FC<Props> = ({ lead }) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
        {lead.avatar ? (
          <div className='symbol-label'>
            <img src={toAbsoluteUrl(`/media/${lead.avatar}`)} alt={lead.name} className='w-100' />
          </div>
        ) : (
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-${lead.initials?.state}`,
              `text-${lead.initials?.state}`
            )}
          >
            {lead.initials?.label}
          </div>
        )}
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {lead.name}
      </a>
      <span>{lead.email}</span>
    </div>
  </div>
)

export { BrandsInfoCell }
