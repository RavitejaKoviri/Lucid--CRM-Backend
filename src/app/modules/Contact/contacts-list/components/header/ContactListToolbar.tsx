import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { ContactsListFilter } from './ContcatsListFilter'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ContactsListToolbar = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser=useSelector((state:any)=>state?.Dashboard?.RolePermissionsById)
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  const navigation = useNavigate()
  const Contacts = useSelector(
    (state: any) => state?.ContactData?.Contacts
  );
  console.log(Contacts, "Contacts");
  // const [firstValue, setFirstValue] = (Contacts[0]);
  // const [lastValue, setLastValue] = (Contacts?.length);
  const contactsData = Contacts?.map((item: any) => ({
    contactTitle: item?.contactTitle,
    contactName: item?.contactName,
    contactFirstName: item?.contactFirstName,
    contactLastName: item?.contactLastName,
    contactAddress: item?.contactAddress,
    contactCity: item?.contactCity,
    contactState: item?.contactState,
    contactPincode: item?.contactPincode,
    contactCountry: item?.contactCountry,
    contactJobTitle: item?.contactJobTitle,
    contactCompanyName: item?.contactCompanyName,
    company: item?.company?.companyName,
    campaignSource: item?.campaignSource?.campaignName,
    contactSource: item?.contactSource?.SourceName,
    contactMobile: item?.contactMobile,
    contactNotes: item?.contactNotes,
    contactSecondaryEmail: item?.contactSecondaryEmail,
    contactEmail: item?.contactEmail,
    contactFacebookHandle: item?.contactFacebookHandle,
    contactInstagramHandle: item?.contactInstagramHandle,
    contactLinkedinHandle: item?.contactLinkedinHandle,
    contactTwitterHandle: item?.contactTwitterHandle,
    contactWebsiteAddress: item?.contactWebsiteAddress,
  }))
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
  //editor
  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <ContactsListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3' onClick={() => {
        exportToCSV(contactsData, "CONTACTS DATA")
      }} >
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {user?.isSuperAdmin===true?    <button type='button' className='btn btn-primary' onClick={() => {
        navigation('contactaddcontact')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Contact
      </button>:<>    
      {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Contacts"&&item?.Create===true)?.length>0&&
      <button type='button' className='btn btn-primary' onClick={() => {
        navigation('contactaddcontact')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Contact
      </button>}</>}
  
      {/* end::Add user */}
    </div>
  )
}

export { ContactsListToolbar }
