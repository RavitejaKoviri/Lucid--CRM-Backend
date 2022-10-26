import { useContext, useEffect, useMemo, useState } from 'react'
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
import { Pagination } from '@mui/material'

const BookingsTable = () => {
  const Bookings = useSelector(
    (state: any) => state?.booking?.booking
  );
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const [perPage, setPerPage] = useState([]);
  const [booking, setBooking] = useState([]);
  const isLoading = useQueryResponseLoading()
  const dispatch = useDispatch()
  const data = useMemo(() => perPage, [perPage])
  useEffect(() => {
    setBooking(Bookings);
    setPerPage(Bookings.slice(0, 10));
  }, [Bookings])
  const pageHandler = (pageNumber: any) => {
    setPerPage(booking.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(booking.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  const columns = useMemo(() => usersColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  console.log(data);
  useEffect(() => {
    dispatch(getAllBookings())
  }, [])
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
                if (val?.original?.gender?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  console.log(val,"val");
                  
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
      {/* <BookingsListPagination /> */}
      <div className='d-flex flex-end'>
        <Pagination
          // justifyContent="center"
          count={pageNumbers.length}
          onChange={(e, value) => pageHandler(value)}
          color="primary"
        />
      </div>
      {isLoading && <BookingsListLoading />}
    </KTCardBody>
  )
}

export { BookingsTable }
