import { useContext, useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { usersColumns } from './columns/_columns'
import { Booking } from '../core/_models'
import { BookingsListLoading } from '../components/loading/BookingsListLoading'
import { BookingsListPagination } from '../components/pagination/BookingsListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBookings } from '../_redux/bookingAction'
import BookingContext from './columns/context'

const BookingsTable = () => {
  const user = useSelector(
    (state: any) => state?.booking?.booking
  );
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const isLoading = useQueryResponseLoading()
  const dispatch = useDispatch()
  const data = useMemo(() => user, [user])
  const columns = useMemo(() => usersColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  console.log(data);
  useEffect(() => {
    dispatch(getAllBookings())
  }, [])
  console.log(user, "users")
  const { searchTerm } = useContext(BookingContext);
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
              {headers.map((column: ColumnInstance<Booking>) => (
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
                if (val?.original?.fullName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.mobileNumber?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
              }).map((row: Row<Booking>, i) => {
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
      <BookingsListPagination />
      {isLoading && <BookingsListLoading />}
    </KTCardBody>
  )
}

export { BookingsTable }
