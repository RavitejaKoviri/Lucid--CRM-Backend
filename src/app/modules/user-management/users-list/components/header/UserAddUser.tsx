import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// import { FC, useState } from 'react'
// import * as Yup from 'yup'
// import { useFormik } from 'formik'
// import { isNotEmpty, toAbsoluteUrl } from '../../../../../_metronic/helpers'
// import { initialUser, User } from '../core/_models'
// import clsx from 'clsx'
// import { useListView } from '../core/ListViewProvider'
// import { UsersListLoading } from '../components/loading/UsersListLoading'
// import { createUser, updateUser } from '../core/_requests'
// import { useQueryResponse } from '../core/QueryResponseProvider'

export default function UserAdduser() {
  const navigation = useNavigate();
  const location = useLocation();
 

  
  

  

  const userData = useSelector((state: any) => state?.auth?.user);
  // const company = useSelector((state: any) => state?.TargetData?.Comapnies);
  const status = useSelector((state: any) => state?.TargetData?.targetStatus);
  const user = useSelector((state: any) => state?.TargetData?.assignedTo);
  const targetsById = useSelector(
    (state: any) => state?.TargetData?.targetById
  );

  const [data, setData] = useState({
   userName:" ",
   email:" ",
   password:'',
   mobileNo:'',
   firstName:'',
   lastName:'',
  });

   const handleChange = (e: any) => {
    setData({ ...data, [e.user.name]: e.user.value });
  };

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


              
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>User Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>username:</label>
                              <input
                                 type="text"
                                 value={data.userName}
                                 onChange={handleChange}
                                 name="userName"
                                 className="form-control"
                                 placeholder=" "
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Email:</label>
                              <input
                                type="text"
                                value={data.email}
                                 onChange={handleChange}
                                name="email"
                                className="form-control"
                                placeholder=" "
                              />
                            </div>
                            <div className="form-group row mb-4">
                              <div className="col-lg-6">
                                <label>Password:</label>
                                <input
                                  type="text"
                                  name="password"
                                  value={data.password}
                                 onChange={handleChange}
                                  
                                  className="form-control"
                                  placeholder=" "
                                />
                              </div>
                              <div className="col-lg-6">
                                <label className="form-label">Mobileno:</label>
                                <input
                                  type="text"
                                  name="mobileno"
                                  value={data.mobileNo}
                                 onChange={handleChange}
                                  className="form-control"
                                  placeholder=" "
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-2">
                              <div className="col-lg-6">
                                <label>FirstName:</label>
                                <input
                                  type="text"
                                  name="firstName"
                                  value={data.firstName}
                                 onChange={handleChange}
                                  className="form-control"
                                  placeholder="firstname"
                                />
                              </div>
                              <div className="col-lg-6">
                                <label>LastName:</label>
                                <input
                                  type="text"
                                  name="lastname"
                                  value={data.lastName}
                                 onChange={handleChange}
                                  className="form-control"
                                  placeholder="Lastname"
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-2">
                              <div className="d-flex flex-column  col-lg-3">
                                <label className="form-label">Gender</label>

                                <select>
                                  <option></option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Others</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation("/target/target");
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  id="kt_ecommerce_add_product_submit"
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
