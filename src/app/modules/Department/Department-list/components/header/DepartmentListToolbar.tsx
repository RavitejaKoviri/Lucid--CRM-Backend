import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { DepartmentListFilter } from './DepartmentListFilter'

const DepartmentListToolbar = () => {
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const navigation = useNavigate()


  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <DepartmentListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={() => {
        navigation('addDepartment')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Department
      </button>
      {/* end::Add user */}
    </div>
  )
}

export { DepartmentListToolbar }
