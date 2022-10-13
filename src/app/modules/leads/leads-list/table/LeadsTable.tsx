/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { LeadsColumns } from './columns/_columns'
import { Lead } from '../core/_models'
import { LeadsListLoading } from '../components/loading/LeadsListLoading'
import { LeadsListPagination } from '../components/pagination/LeadsListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getLeads } from '../_redux/leadAction'
import LeadContext from './columns/context'

const LeadsTable = () => {
  const users = useQueryResponseData()
  const user = useSelector(
    (state: any) => state?.LeadData?.Leads
  );
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => user, [user])
  const columns = useMemo(() => LeadsColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })


  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const dispatch = useDispatch()

  console.log(data);
  useEffect(() => {
    dispatch(getLeads(token))
  }, [])
  console.log(user, "users")
  const { searchTerm } = useContext(LeadContext);
  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Lead>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.filter((val: any) => {
                if (searchTerm === "") {
                  return val;
                }
                if (val?.original?.leadFirstName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.leadLastName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.leadCompanyName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.leadPhonenumber?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
              }).map((row: Row<Lead>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <LeadsListPagination />
      {isLoading && <LeadsListLoading />}
    </KTCardBody>
  )
}

export { LeadsTable }
