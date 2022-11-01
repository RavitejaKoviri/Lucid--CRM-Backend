/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { CompanyColumns } from './columns/_columns'
import { Lead } from '../core/_models'
import { CompanyListLoading } from '../components/loading/CompanyListLoading'
import { CompanyListPagination } from '../components/pagination/CompanyListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import LeadContext from './columns/context'
import { getCompanies } from '../_redux/companyAction'

const CompanyTable = () => {
  const users = useQueryResponseData()
  const company = useSelector(
    (state: any) => state?.Company?.Companies
  );
  console.log(company,"company");
  
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => company, [company])
  const columns = useMemo(() => CompanyColumns, [])
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
    dispatch(getCompanies(token))
  }, [])
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
                if (val?.original?.companyName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.companyGSTNumber?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.companyPANNumber?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  return val;
                }
                if (val?.original?.companyTANNumber?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
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
      <CompanyListPagination />
      {isLoading && <CompanyListLoading />}
    </KTCardBody>
  )
}

export { CompanyTable }
