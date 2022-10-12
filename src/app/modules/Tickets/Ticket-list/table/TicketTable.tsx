import { useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { usersColumns } from './columns/_columns'
import { User } from '../core/_models'
import { TicketListLoading } from '../components/loading/TicketListLoading'
import { TicketListPagination } from '../components/pagination/TicketListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTickets } from '../_redux/ticketAction'

const TicketTable = () => {
  const dispatch = useDispatch()
  const user = useSelector(
    (state: any) => state?.ManageUserData?.Users
  );
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => user, [user])
  const columns = useMemo(() => usersColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  console.log(data);
  useEffect(() => {
    dispatch(getAllTickets(token))
  }, [])
  console.log(user, "users")
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
              {headers.map((column: ColumnInstance<User>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<User>, i) => {
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
      <TicketListPagination />
      {isLoading && <TicketListLoading />}
    </KTCardBody>
  )
}

export { TicketTable }
