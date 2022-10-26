/* eslint-disable jsx-a11y/anchor-is-valid */
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../_metronic/helpers'
import {
  ChartsWidget1,
  TablesWidget1,
  ListsWidget5,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'
import { getAllTargets } from '../_redux/reportsAction';

export function TargetsReport() {
  const dispatch = useDispatch();
  const targets = useSelector((state: any) => state?.Reports?.Targets);
  const token = useSelector((state: any) => state?.auth?.authToken);
  useEffect(() => {
    dispatch(getAllTargets(token));
  }, []);
  console.log(targets, "targets");

  const [search, setSearch] = useState(' ');
  const [date, setDate] = useState("");


  const [perPage, setPerPage] = useState([]);
  const [target, setTarget] = useState([]);

  console.log(perPage, "perPage");

  useEffect(() => {
    setTarget(targets);
    setPerPage(targets.slice(0, 10));
  }, [targets])

  const pageHandler = (pageNumber: any) => {
    setPerPage(target.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(target.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

      <div id="kt_content_container" >

        <div className="card card-flush">

          <div className="card-header align-items-center py-5 gap-2 gap-md-5">

            <div className="card-title">

              <div className="d-flex align-items-center position-relative my-1">

                <span className="svg-icon svg-icon-1 position-absolute ms-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                  </svg>
                </span>

                <input type="text" data-kt-ecommerce-order-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search Target Report" onChange={(e) => setSearch(e.currentTarget.value)} />
              </div>

              <div id="kt_ecommerce_report_customer_orders_export" className="d-none"></div>

            </div>

            <div className="card-toolbar flex-row-fluid justify-content-end gap-5">

              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control form-control-solid w-100 mw-250px" placeholder="Pick date range" id="kt_ecommerce_report_customer_orders_daterangepicker" />

              <div className="w-150px">

                <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Status" data-kt-ecommerce-order-filter="status">
                  <option></option>
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="locked">Locked</option>
                  <option value="disabled">Disabled</option>
                  <option value="banned">Banned</option>
                </select>

              </div>

              <button type="button" className="btn btn-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">

                <span className="svg-icon svg-icon-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="currentColor" />
                    <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor" />
                    <path opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor" />
                  </svg>
                </span>
              </button>

              <div id="kt_ecommerce_report_customer_orders_export_menu" className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4" data-kt-menu="true">

                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-ecommerce-export="copy">Copy to clipboard</a>
                </div>

                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-ecommerce-export="excel">Export as Excel</a>
                </div>

                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-ecommerce-export="csv">Export as CSV</a>
                </div>

                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-ecommerce-export="pdf">Export as PDF</a>
                </div>

              </div>

            </div>

          </div>

          <div className="card-body pt-0" style={{ overflow: 'scroll' }}>

            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_report_customer_orders_table">

              <thead>

                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                  <th className="min-w-200px">Target Name</th>
                  {/* <th className="min-w-100px">User</th> */}
                  <th className="min-w-100px">Email</th>
                  <th className="min-w-100px">Status</th>
                  <th className="min-w-100px">Due Date</th>
                  <th className="min-w-150px">Date Joined</th>
                  <th className=" min-w-100px">Mobile</th>
                  <th className=" min-w-100px">User</th>
                  <th className=" min-w-100px">Role</th>
                  <th className=" min-w-100px">Provider</th>
                  {/* <th className=" min-w-100px">Source</th> */}
                  <th className=" min-w-100px">Company</th>
                </tr>

              </thead>
              {perPage?.length > 0 ? perPage?.filter((val: any) => {
                if (search === "") {
                  return val;
                }
                if (val?.targetName?.toLowerCase()?.includes(search?.toLowerCase())) {
                  return val;
                }
              }).filter((val: any) => {
                if (date === "") {
                  return val;
                }
                if (val?.createdAt?.slice(0, 10)?.toLowerCase()?.includes(date?.toLowerCase())) {
                  return val;
                }
              }).map((item: any) => (
                <tbody className="fw-semibold text-gray-600">

                  <tr>

                    <td>
                      <a href="../../demo6/dist/apps/ecommerce/customers/details.html" className="text-dark text-hover-primary">{item?.targetName ? item?.targetName : "Nill"}</a>
                    </td>
                    {/* <td>
                      <a href="../../demo6/dist/apps/ecommerce/customers/details.html" className="text-dark text-hover-primary">{item?.assignedTo?.username ? item?.assignedTo?.username : "Nill"}</a>
                    </td> */}

                    <td>
                      <a href="#" className="text-dark text-hover-primary">{item?.assignedTo?.email ? item?.assignedTo?.email : 'Nill'}</a>
                    </td>

                    <td>
                      <div className="badge badge-light-success">{item?.targetStatus?.targetStatusName ? item?.targetStatus?.targetStatusName : 'Nill'}</div>
                    </td>
                    <td className=" pe-0">{item?.targetDueDate ? item?.targetDueDate : 'Nill'}</td>
                    <td>{item?.createdAt ? item?.createdAt?.slice(0, 10) : 'Nill'}</td>

                    <td className=" pe-0">{item?.assignedTo?.mobile ? item?.assignedTo?.mobile : "Nill"}</td>

                    <td className=" pe-0">{item?.assignedTo?.username ? item?.assignedTo?.username : 'Nill'}</td>
                    <td className=" pe-0">{item?.assignedTo?.role ? item?.assignedTo?.role : 'Nill'}</td>
                    <td className=" pe-0">{item?.assignedTo?.provider ? item?.assignedTo?.provider : 'Nill'}</td>
                    {/* <td className=" pe-0">{item?.dealSource?.SourceName ? item?.dealSource?.SourceName : 'Nill'}</td> */}
                    <td className=" pe-0">{item?.company?.companyName ? item?.company?.companyName : 'Nill'}</td>
                  </tr>

                </tbody>
              )) : (<h1>No Targets</h1>)}

            </table>

          </div>
          <div className='d-flex flex-end'>
            <Pagination
              // justifyContent="center"
              count={pageNumbers.length}
              onChange={(e, value) => pageHandler(value)}
              color="primary"
            />
          </div>
        </div>

      </div>

    </div>
    // <>
    //   <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
    //     <div className='card-header cursor-pointer'>
    //       <div className='card-title m-0'>
    //         <h3 className='fw-bolder m-0'>Profile Details</h3>
    //       </div>

    //       <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
    //         Edit Profile
    //       </Link>
    //     </div>

    //     <div className='card-body p-9'>
    //       <div className='row mb-7'>
    //         <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

    //         <div className='col-lg-8'>
    //           <span className='fw-bolder fs-6 text-dark'>Max Smith</span>
    //         </div>
    //       </div>

    //       <div className='row mb-7'>
    //         <label className='col-lg-4 fw-bold text-muted'>Company</label>

    //         <div className='col-lg-8 fv-row'>
    //           <span className='fw-bold fs-6'>Keenthemes</span>
    //         </div>
    //       </div>

    //       <div className='row mb-7'>
    //         <label className='col-lg-4 fw-bold text-muted'>
    //           Contact Phone
    //           <i
    //             className='fas fa-exclamation-circle ms-1 fs-7'
    //             data-bs-toggle='tooltip'
    //             title='Phone number must be active'
    //           ></i>
    //         </label>

    //         <div className='col-lg-8 d-flex align-items-center'>
    //           <span className='fw-bolder fs-6 me-2'>044 3276 454 935</span>

    //           <span className='badge badge-success'>Verified</span>
    //         </div>
    //       </div>

    //       <div className='row mb-7'>
    //         <label className='col-lg-4 fw-bold text-muted'>Company Site</label>

    //         <div className='col-lg-8'>
    //           <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
    //             keenthemes.com
    //           </a>
    //         </div>
    //       </div>

    //       <div className='row mb-7'>
    //         <label className='col-lg-4 fw-bold text-muted'>
    //           Country
    //           <i
    //             className='fas fa-exclamation-circle ms-1 fs-7'
    //             data-bs-toggle='tooltip'
    //             title='Country of origination'
    //           ></i>
    //         </label>

    //         <div className='col-lg-8'>
    //           <span className='fw-bolder fs-6 text-dark'>Germany</span>
    //         </div>
    //       </div>

    //       <div className='row mb-7'>
    //         <label className='col-lg-4 fw-bold text-muted'>Communication</label>

    //         <div className='col-lg-8'>
    //           <span className='fw-bolder fs-6 text-dark'>Email, Phone</span>
    //         </div>
    //       </div>

    //       <div className='row mb-10'>
    //         <label className='col-lg-4 fw-bold text-muted'>Allow Changes</label>

    //         <div className='col-lg-8'>
    //           <span className='fw-bold fs-6'>Yes</span>
    //         </div>
    //       </div>

    //       <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
    //         <KTSVG
    //           path='icons/duotune/general/gen044.svg'
    //           className='svg-icon-2tx svg-icon-warning me-4'
    //         />
    //         <div className='d-flex flex-stack flex-grow-1'>
    //           <div className='fw-bold'>
    //             <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
    //             <div className='fs-6 text-gray-600'>
    //               Your payment was declined. To start using tools, please
    //               <Link className='fw-bolder' to='/crafted/account/settings'>
    //                 {' '}
    //                 Add Payment Method
    //               </Link>
    //               .
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='row gy-10 gx-xl-10'>
    //     <div className='col-xl-6'>
    //       <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
    //     </div>

    //     <div className='col-xl-6'>
    //       <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
    //     </div>
    //   </div>

    //   <div className='row gy-10 gx-xl-10'>
    //     <div className='col-xl-6'>
    //       <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
    //     </div>

    //     <div className='col-xl-6'>
    //       <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
    //     </div>
    //   </div>
    // </>
  )
}
