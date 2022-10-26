import { useContext, useEffect, useMemo, useState } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { usersColumns } from './columns/_columns'
import { Campaign } from '../core/_models'
import { CampaignsListLoading } from '../components/loading/CampaignsListLoading'
import { CampaignsListPagination } from '../components/pagination/CampaignsListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCampaigns } from '../_redux/campaignAction'
import { Pagination } from '@mui/material'
import campgineContext from './columns/context'

const CampaignsTable = () => {
  const campaigns = useSelector(
    (state: any) => state?.campaignData?.campaign
  );
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const isLoading = useQueryResponseLoading()
  const [perPage, setPerPage] = useState([]);
  const [campaign, setCampaign] = useState([]);
  const dispatch = useDispatch()
  const data = useMemo(() => perPage, [perPage])
  useEffect(() => {
    setCampaign(campaigns);
    setPerPage(campaigns.slice(0, 10));
  }, [campaigns])
  const pageHandler = (pageNumber: any) => {
    setPerPage(campaign.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(campaign.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  const columns = useMemo(() => usersColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  // console.log(data);
  useEffect(() => {
    dispatch(getAllCampaigns(token))
  }, [])
  const { searchTerm } = useContext(campgineContext);
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
              {headers.map((column: ColumnInstance<Campaign>) => (
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
                if (val?.original?.campaignName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
                  console.log(val, "useC");
                  return val;
                }
              }).map((row: Row<Campaign>, i) => {
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
      {/* <CampaignsListPagination /> */}
      <div className='d-flex flex-end'>
        <Pagination
          // justifyContent="center"
          count={pageNumbers.length}
          onChange={(e, value) => pageHandler(value)}
          color="primary"
        />
      </div>
      {isLoading && <CampaignsListLoading />}
    </KTCardBody>
  )
}

export { CampaignsTable }
