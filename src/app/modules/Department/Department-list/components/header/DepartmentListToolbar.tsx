import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { DepartmentListFilter } from './DepartmentListFilter'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { useSelector } from 'react-redux';

const DepartmentListToolbar = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser=useSelector((state:any)=>state?.Dashboard?.RolePermissionsById)
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const navigation = useNavigate()
  const DEPARTMENTDATA = useSelector(
    (state: any) => state?.DepartmentData?.Department
  );
  const exportToCSV = (csvData: any, fileName: any) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, {
      bookType: 'xlsx', type: 'array'
    });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <DepartmentListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3' onClick={() => {
        exportToCSV(DEPARTMENTDATA, "DEPARTMENT DATA")
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {user?.isSuperAdmin===true?  <button type='button' className='btn btn-primary' onClick={() => {
        navigation('addDepartment')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Department
      </button>:<>
      {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Departments"&&item?.Create===true)?.length>0&& 
      <button type='button' className='btn btn-primary' onClick={() => {
        navigation('addDepartment')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Department
      </button>}</>}
     
      {/* end::Add user */}
    </div>
  )
}

export { DepartmentListToolbar }
