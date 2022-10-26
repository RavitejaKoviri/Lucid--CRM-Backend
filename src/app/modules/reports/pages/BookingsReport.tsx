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
import { getAllBookings } from '../_redux/reportsAction';

export function BookingsReport() {
  const dispatch = useDispatch();
  // const token = useSelector(
  //   (state: any) => state?.auth?.authToken);
  useEffect(() => {
    dispatch(getAllBookings())
  }, [dispatch])
  const bookings = useSelector(
    (state: any) => state?.Reports?.booking);
  console.log('bookings', bookings);

  const [search, setSearch] = useState(' ');
  const [date, setDate] = useState("");
  const [perPage, setPerPage] = useState([]);
  const [booking, setBooking] = useState([]);

  console.log(perPage, "perPage");

  useEffect(() => {
    setBooking(bookings);
    setPerPage(bookings.slice(0, 10));
  }, [bookings])
  const pageHandler = (pageNumber: any) => {
    setPerPage(booking.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(booking.length / 10) + 1; i++) {
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

                <input type="text" data-kt-ecommerce-order-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search Booking Report" onChange={(e) => setSearch(e.currentTarget.value)} />
              </div>

              <div id="kt_ecommerce_report_customer_orders_export" className="d-none"></div>

            </div>

            <div className="card-toolbar flex-row-fluid justify-content-end gap-5">

              <input className="form-control form-control-solid w-100 mw-250px" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Pick date range" id="kt_ecommerce_report_customer_orders_daterangepicker" />

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
                  <th className="min-w-150px">Booking Name</th>
                  <th className="min-w-100px">Booking ID</th>
                  <th className="min-w-100px">Gender</th>
                  <th className="min-w-100px">Email</th>
                  <th className="min-w-100px">Date of Appointment</th>
                  <th className="min-w-100px">Branch</th>
                  <th className="min-w-100px">City</th>
                  <th className="min-w-150px">Mobile Number</th>
                  <th className=" min-w-200px">Total Health Packages</th>
                  <th className="min-w-200px">Total Health Scans</th>
                  <th className=" min-w-200px">Total Health Services</th>
                  <th className=" min-w-150px">Payment Mode</th>
                  <th className=" min-w-150px">Payment Status</th>
                  <th className=" min-w-150px">Total Amount</th>
                </tr>

              </thead>
              {perPage?.length > 0 ? perPage?.filter((val: any) => {
                if (search === "") {
                  return val;
                }
                if (val?.fullName?.toLowerCase()?.includes(search?.toLowerCase())) {
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
                      <a href="../../demo6/dist/apps/ecommerce/customers/details.html" className="text-dark text-hover-primary">{item?.fullName ? item?.fullName : "Nill"}</a>
                    </td>
                    <td>
                      <a href="../../demo6/dist/apps/ecommerce/customers/details.html" className="text-dark text-hover-primary">{item?.orderitem?.appointment ? item?.orderitem?.appointment : "Nill"}</a>
                    </td>
                    <td>
                      <a href="../../demo6/dist/apps/ecommerce/customers/details.html" className="text-dark text-hover-primary">{item?.gender ? item?.gender : "Nill"}</a>
                    </td>

                    <td>
                      <a href="#" className="text-dark text-hover-primary">{item?.email ? item?.email : "Nill"}</a>
                    </td>

                    <td>
                      <div className="badge badge-light-success">{item?.dateOfAppointment ? item?.dateOfAppointment : "Nill"}</div>
                    </td>

                    <td>{item?.branch ? item?.branch : "Nill"}</td>
                    <td>{item?.city ? item?.city : "Nill"}</td>
                    <td className=" pe-0">{item?.mobileNumber ? item?.mobileNumber : "Nill"}</td>

                    <td className=" pe-0">{item?.healthPackages ? item?.healthPackages?.length : 0}</td>

                    <td className="pe-0">{item?.healthScans ? item?.healthScans?.length : 0}</td>
                    <td className=" pe-0">{item?.branchwisetests ? item?.branchwisetests?.length : 0}</td>

                    <td >{item?.paymentMode ? item?.paymentMode : "Nill"}</td>
                    <td>{item?.paymentStatus ? item?.paymentStatus : "Nill"}</td>
                    <td >{item?.totalAmount ? item?.totalAmount : "Nill"}</td>

                  </tr>

                </tbody>
              )) : (<h1>No Bookings</h1>)}


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

  )
}
