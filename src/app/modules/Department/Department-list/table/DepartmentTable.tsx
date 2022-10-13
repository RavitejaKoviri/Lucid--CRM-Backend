/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { DepartmentColumns } from './columns/_columns'
import { Lead } from '../core/_models'
import { DepartmentListLoading } from '../components/loading/DepartmentListLoading'
import { DepartmentListPagination } from '../components/pagination/DepartmentListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getDepartment } from '../_redux/departmentAction'
import UserContext from './columns/context'

const DepartmentTable = () => {
  const users = useQueryResponseData()
  const dispatch = useDispatch()
  const user = useSelector(
    (state: any) => state?.DepartmentData?.Department
  );
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => user, [user])
  const columns = useMemo(() => DepartmentColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })


  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  

  console.log(data);
  useEffect(() => {
    dispatch(getDepartment(token))
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
              {headers.map((column: ColumnInstance<Lead>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Lead>, i) => {
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
      <DepartmentListPagination />
      {isLoading && <DepartmentListLoading />}
    </KTCardBody>
  )
}

export { DepartmentTable }
