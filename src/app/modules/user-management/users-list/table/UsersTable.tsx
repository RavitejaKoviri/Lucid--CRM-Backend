import { useContext, useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from '../table/columns/CustomHeaderColumn'
import { CustomRow } from '../table/columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { usersColumns } from './columns/_columns'
import { User } from '../core/_models'
import { UsersListLoading } from '../components/loading/UsersListLoading'
import { UsersListPagination } from '../components/pagination/UsersListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../_redux/userAction'
import UserContext from './columns/context'

const UsersTable = () => {
  const user = useSelector(
    (state: any) => state?.ManageUserData?.Users
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
    dispatch(getAllUsers(token))
  }, [])
  console.log(user, "users")
  const { searchTerm } = useContext(UserContext);
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
              rows.filter((val: any) => {
                if (searchTerm === "") {
                  return val;
                }
                if (val?.original?.username?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.mobile?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
              }).map((row: Row<User>, i) => {
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
      <UsersListPagination />
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}

export { UsersTable }
