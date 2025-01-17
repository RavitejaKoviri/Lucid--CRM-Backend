import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { UsersListFilter } from './UsersListFilter'

const UsersListToolbar = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const navigation=useNavigate()
//editor
  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
{user?.isSuperAdmin===true||user?.crmrole?.name==="Admin"?
 <button  type='button' className='btn btn-primary' onClick={()=>{
        navigation('adduser')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add User
      </button>:<></>}
    
      {/* end::Add user */}
    </div>
  )
}

export { UsersListToolbar }
