/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { BrandsColumns } from './columns/_columns'
import { Lead } from '../core/_models'
import { BrandsListLoading } from '../components/loading/BrandsListLoading'
import { BrandsListPagination } from '../components/pagination/BrandsListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getBrands } from '../_redux/brandsAction'
import UserContext from './columns/context'

const BrandsTable = () => {
  const users = useQueryResponseData()
  const dispatch = useDispatch()
  const user = useSelector(
    (state: any) => state?.BrandsData?.Brands
  );
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => user, [user])
  const columns = useMemo(() => BrandsColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })


  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  

  console.log(data);
  useEffect(() => {
    dispatch(getBrands(token))
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
      <BrandsListPagination />
      {isLoading && <BrandsListLoading />}
    </KTCardBody>
  )
}

export { BrandsTable }