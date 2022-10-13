/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBranchAddressesByCityId,
  fetchBranchwisetestByBranch,
  fetchCity,
  fetchDoctors,
  fetchHealthPackagesByBranch,
  fetchHealthScansByBranch,
} from "../../_redux/bookingAction";
// import { any } from "prop-types";

export default function BookingAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [branchwisetests, setBranchwisetests] = useState([]);
  console.log(branchwisetests,"branchwisetests");
  
  const [healthPackages, setHealthPackages] = useState("");
  const [healthScans, setHealthScans] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate.toLocaleString(), "startDate");
  const isSelectedDateToday = new Date().getDate() === startDate.getDate();
  const isSelectedDateInFuture = +startDate > +new Date();

  let minTimeHour = new Date().getHours();
  if (!isSelectedDateToday) minTimeHour = 0;

  const date = new Date();
  let currentMins = date.getMinutes();
  let currentHour = date.getHours();
  if (isSelectedDateInFuture) {
    currentHour = 0;
    currentMins = 0;
  }
  const newdate = new Date();
  newdate?.setDate(newdate?.getDate() + 9);
  const user = useSelector((state: any) => state?.auth?.user);
  // const token = useSelector((state: any) => state?.auth?.authToken);
  const doctor = useSelector((state: any) => state?.booking?.doctors);
  const city = useSelector((state: any) => state?.booking?.city);
  const branch = useSelector(
    (state: any) => state?.booking?.BranchAddressesByCityId
  );
  const branchwisetest = useSelector(
    (state: any) => state?.booking?.branchwisetestsByBranch
  );
  const healthPackage = useSelector(
    (state: any) => state?.booking?.packagesByBranch
  );
  const healthScan = useSelector(
    (state: any) => state?.booking?.healthscanBybranch
  );

  console.log(healthScan, "healthScan");
  const totalAmount = [
    ...healthPackage?.map((item:any) => Number(item?.price)),
    ...healthScan?.map((item:any) => Number(item?.price)),
    ...branchwisetest?.map((item:any) => Number(item?.price)),
  ]
    .reduce((a, b) => a + b, 0)
    .toString();
  const [data, setData] = useState({
    fullName: " ",
    email: " ",
    mobileNumber: " ",
    dateOfAppointment: " ",
    branch: " ",
    message: " ",
    doctor: " ",
    type: " ",
    healthPackages: [],
    healthScans: [],
    paymentId: " ",
    paymentStatus: " ",
    paymentMode: "",
    city: "",
    gender: "",
    patient: "",
    branchwisetests: [],
    totalAmount: "",
    address: "",
    appointmentStatus:"",
    age: "",
    user: user?.id,
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name||e.target.id]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchCity());
  }, []);
  useEffect(() => {
    dispatch(fetchBranchwisetestByBranch(data?.branch));
    dispatch(fetchHealthScansByBranch(data?.branch));
    dispatch(fetchHealthPackagesByBranch(data?.branch));
  }, [data?.branch]);
  useEffect(() => {
    dispatch(fetchBranchAddressesByCityId(data?.city));
  }, [data?.city]);
  const handleSubmit = () => {
    setData({
      fullName: " ",
      email: " ",
      mobileNumber: " ",
      dateOfAppointment: " ",
      branch: " ",
      message: " ",
      doctor: " ",
      type: " ",
      appointmentStatus:"",
      healthPackages: [],
      healthScans: [],
      paymentId: " ",
      paymentStatus: " ",
      paymentMode: "",
      city: "",
      gender: "",
      patient: "",
      branchwisetests: [],
      totalAmount: "",
      address: "",
      age: "",
      user: "",
    });
  };
console.log(data.branchwisetests,"branchwisetests");

  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            id="kt_ecommerce_add_product_form"
            className="form d-flex flex-column flex-lg-row"
            data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
          >
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              {/*begin:::Tabs*/}
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
                {/*begin:::Tab item*/}
                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4 active"
                    data-bs-toggle="tab"
                    href="#kt_ecommerce_add_product_general"
                  >
                    General
                  </a>
                </li>
                {/*end:::Tab item*/}
                {/*begin:::Tab item*/}
                {/* <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#kt_ecommerce_add_product_advanced"
                  >
                    Advanced
                  </a>
                </li> */}
                {/*end:::Tab item*/}
              </ul>
              {/*end:::Tabs*/}
              {/*begin::Tab content*/}
              <div className="tab-content">
                {/*begin::Tab pane*/}
                <div
                  className="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    {/*begin::General options*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>General</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="form">
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>FullName:</label> */}
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full Name"
                                name="fullName"
                                value={data?.fullName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label>Email:</label> */}
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={data?.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>PhoneNumber:</label> */}
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter PhoneNumber"
                                name="mobileNumber"
                                value={data?.mobileNumber}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label> Age:</label> */}
                              <input
                                type="text"
                                name="age"
                                className="form-control"
                                placeholder="Enter Age"
                                value={data?.age}
                                onChange={handleChange} 
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>Gender</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="gender"
                                value={data?.gender}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  --Select Gender--
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">others</option>
                              </select>
                            </div>
                            <div className="col-lg-5">
                              {/* <label>Type</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="type"
                                value={data?.type}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  --Select Type--
                                </option>
                                <option value="clinic">Clinic</option>
                                <option value="enquiry">Enquiry</option>
                                <option value="homeSampleCollection">
                                  Home Sample Collection
                                </option>
                                <option value="doctorAppointment">
                                  Doctor Appointment
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            {data?.type === "doctorAppointment" && (
                            <div className="col-lg-5">
                              {/* <label>Doctor:</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.doctor}
                                onChange={handleChange}
                                name="doctor"
                              >
                                <option value="" disabled selected>
                                  --Select Doctor --
                                </option>
                                <option></option>
                                {doctor?.map((item: any) => (
                                  <option value={item?.id}>{item?.name}</option>
                                ))}
                              </select>
                            </div>
                           )}
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>Address:</label> */}
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Address"
                                value={data.address}
                                name="address"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label>Appointment Status</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="appointmentStatus"
                                value={data.appointmentStatus}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  --Select  Appointment Status --
                                </option>
                                <option value="visited">visited</option>
                                <option value="rescheduled">rescheduled</option>
                                <option value="cancelled"> cancelled</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>City:</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="city"
                                value={data.city}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  --Select City --
                                </option>
                                {city?.map((item: any) => (
                                  <option value={item?.id}>{item?.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-5">
                              {/* <label>Branch:</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                placeholder="Select an option"
                                value={data.branch}
                                onChange={handleChange}
                                name="branch"
                              >
                                <option disabled selected>
                                  --Select Branch --
                                </option>
                                {branch?.map((item: any) => (
                                  <option value={item?.id}>{item?.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {data?.branch!=="" &&(
                            <>
                            <div className="form-group row mb-4">
                            {branchwisetest.length>0 && (
                              <div className="col-lg-5">
                                <Autocomplete
                                  multiple
                                  id="controllable-states-demo"
                                  options={branchwisetest}
                                  getOptionLabel={(option: any) =>
                                    option?.test?.testName
                                  }
                                  onChange={(e:any) => {
                                    setBranchwisetests(e.target.value);
                                  }}
                                  value={data.branchwisetests}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Test"
                                      variant="outlined"
                                    
                                    />
                                  )}
                                />
                              </div>
                            )}
                            {healthPackage.length>0 && (
                              <div className="col-lg-5">
                                <Autocomplete
                                  multiple
                                  id="controllable-states-demo"
                                  options={healthPackage}
                                  onChange={handleChange}
                                  getOptionLabel={(option: any) =>
                                    option?.title
                                  }
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="HealthPackage"
                                      variant="outlined"
                                    />
                                  )}
                                />
                              </div>
                            )}
                          </div>
                            <div className="form-group row mb-4">
                            {healthScan.length>0 && (
                              <div className="col-lg-5">
                                <Autocomplete
                                  multiple
                                  id="controllable-states-demo"
                                  options={healthScan}
                                  getOptionLabel={(option: any) =>
                                    option?.title
                                  }
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="HealthScan"
                                      variant="outlined"
                                    />
                                  )}
                                />
                              </div>
                              )}
                            </div>
                            </>
                          )}
                          
                          
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>message:</label> */}
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter message"
                                value={data.message}
                                name="message"
                                onChange={handleChange}
                              />
                            </div>
                            {/* <div className="col-lg-5">
                              <label>Select the date of Appointment</label>
                              <div style={{ width: "100%", height: "100%" }}>
                                <DatePicker
                                  showTimeSelect
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  minDate={new Date()}
                                  maxDate={newdate}
                                  minTime={
                                    new Date(
                                      new Date().setHours(
                                        currentHour,
                                        currentMins,
                                        0,
                                        0
                                      )
                                    )
                                  }
                                  maxTime={
                                    new Date(new Date().setHours(23, 59, 0, 0))
                                  }
                                  placeholderText="Select date and time"
                                  dateFormat="dd/MM/yyyy  h:mm aa"
                                  customInput={
                                    <input
                                      // type="date"
                                      placeholder="Select"
                                      style={{ height: "40px", width: "250px" }}
                                    />
                                  }
                                />
                              </div>
                            </div> */}
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>paymentMode</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="paymentMode"
                                value={data.paymentMode}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  -- Select PaymentMode --
                                </option>
                                <option value="cash">cash</option>
                                <option value="Google">Google Pay </option>
                                <option value="phonepay">phonepay</option>
                                <option value="paytm">paytm</option>
                              </select>
                            </div>
                            <div className="col-lg-5">
                              {/* <label>paymentStatus</label> */}
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="paymentStatus"
                                value={data.paymentStatus}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  -- Select Payment Status --
                                </option>
                                <option value="Received">Received</option>
                                <option value="NotReceived">
                                  Not Received{" "}
                                </option>
                                <option value="pending">pending</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-5">
                              {/* <label>paymentId:</label> */}
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter PaymentId"
                                name="paymentId"
                                value={data.paymentId}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label>TotalAmount:</label> */}
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Total Amount"
                                name="totalAmount"
                                value={data.totalAmount}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <a
                  href="../../demo6/dist/apps/ecommerce/catalog/products.html"
                  id="kt_ecommerce_add_product_cancel"
                  className="btn btn-light me-5"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  id="kt_ecommerce_add_product_submit"
                  onClick={() => {
                    // navigation("users");
                    handleSubmit();
                  }}
                  className="btn btn-primary"
                >
                  <span className="indicator-label">Save Changes</span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/*end::Form*/}
        </div>
      </div>
    </>
  );
}
