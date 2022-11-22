import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { CampaignsListFilter } from './CampaignsListFilter'

const CampaignsListToolbar = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser=useSelector((state:any)=>state?.Dashboard?.RolePermissionsById)
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const navigation=useNavigate()

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <CampaignsListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {user?.isSuperAdmin===true?  <button type='button' className='btn btn-primary' onClick={() => {
        navigation('campaignadduser')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Campaign
      </button>: <>
      {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Campaigns"&&item?.Create===true)?.length>0&&    <button type='button' className='btn btn-primary' onClick={() => {
        navigation('campaignadduser')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Campaign
      </button>}
  </>}
      {/* <button type='button' className='btn btn-primary' onClick={()=>{
        navigation('campaignadduser')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Campaign
      </button> */}
      {/* end::Add user */}
    </div>
  )
}

export { CampaignsListToolbar }
