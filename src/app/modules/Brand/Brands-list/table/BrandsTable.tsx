/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo, useState } from 'react'
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
import { BrandsLoading, getBrands } from '../_redux/brandsAction'
import { Pagination } from '@mui/material'
import BrandContext from './columns/context'

const BrandsTable = () => {
  const users = useQueryResponseData()
  const dispatch = useDispatch()
  const Brands = useSelector(
    (state: any) => state?.BrandsData?.Brands
  );
  const loading = useSelector(
    (state: any) => state?.BrandsData?.Loading
  );
  const isLoading = useQueryResponseLoading()

  const [perPage, setPerPage] = useState([]);
  const [brand, setBrand] = useState([]);

  console.log(perPage, "perPage");

  useEffect(() => {
    setBrand(Brands);
    setPerPage(Brands.slice(0, 10));
  }, [Brands])
  const pageHandler = (pageNumber: any) => {
    setPerPage(brand.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(brand.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  const { searchTerm } = useContext(BrandContext);
  const data = useMemo(() => perPage, [perPage])
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
    dispatch(BrandsLoading(false));
  }, [loading])

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
                if (val?.original?.brandName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  console.log(val, "useC");
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
      {/* <BrandsListPagination /> */}
      <div className='d-flex flex-end'>
        <Pagination
          // justifyContent="center"
          count={pageNumbers.length}
          onChange={(e, value) => pageHandler(value)}
          color="primary"
        />
      </div>
      {isLoading && <BrandsListLoading />}
    </KTCardBody>
  )
}

export { BrandsTable }
