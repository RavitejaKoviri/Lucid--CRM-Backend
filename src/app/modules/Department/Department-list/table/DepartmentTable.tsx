/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo, useState } from 'react'
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
import { Pagination } from '@mui/material'
import DepartmentContext from './columns/context'

const DepartmentTable = () => {
  const users = useQueryResponseData()
  const dispatch = useDispatch()
  const departments = useSelector(
    (state: any) => state?.DepartmentData?.Department
  );
  const isLoading = useQueryResponseLoading()

  const [perPage, setPerPage] = useState([]);
  const [department, setDepartment] = useState([]);

  console.log(perPage, "perPage");

  useEffect(() => {
    setDepartment(departments);
    setPerPage(departments.slice(0, 10));
  }, [departments])
  const pageHandler = (pageNumber: any) => {
    setPerPage(department.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(department.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }

  const data = useMemo(() => perPage, [perPage])
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
  const { searchTerm } = useContext(DepartmentContext);
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
                console.log(val, "val")
                if (val?.original?.departmentName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
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
      {/* <DepartmentListPagination /> */}
      <div className='d-flex flex-end'>
        <Pagination
          // justifyContent="center"
          count={pageNumbers.length}
          onChange={(e, value) => pageHandler(value)}
          color="primary"
        />
      </div>
      {isLoading && <DepartmentListLoading />}
    </KTCardBody>
  )
}

export { DepartmentTable }
