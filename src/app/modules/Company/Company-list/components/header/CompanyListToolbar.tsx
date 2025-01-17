import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { CompanyListFilter } from './CompanyListFilter'

const CompanyListToolbar = () => {
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const navigation = useNavigate()


  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <CompanyListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={() => {
        navigation('AddCompany')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Company
      </button>
      {/* end::Add user */}
    </div>
  )
}

export { CompanyListToolbar }
