import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCampaignStatuses } from "../../_redux/campaignAction";
import {  getCompanies,    } from "../../_redux/campaignAction";
import { CreateCampaign } from "../../_redux/campaignCrud";

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

export default function CampaignAdduser() {
  const navigation = useNavigate();
  
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  
  const user = useSelector(
    (state: any) => state?.auth?.user
  );

  // const campaign = useSelector(
  //   (state: any) => state?.TargetData?.campaigns
  // );
  const company = useSelector(
    (state: any) => state?.campaignData?.Comapnies
  );
  const status = useSelector(
    (state: any) => state?.campaignData?.campaignStatus
  );
 
  console.log(status,"status");
  
  useEffect(() => {
    
    dispatch(getCompanies(token))
    dispatch(getCampaignStatuses(token))
  }, [])

  const [data, setData] = useState({
    campaignName: " ",
  campaignStatus: " ",
  company: user?.company?.id,
    
    
   
  })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CreateCampaign(data, token));
    setData({
      campaignName: " ",
      campaignStatus: " ",
      company: "",
      
    })
  };
  

  



  return (
<>
<div
        className="content d-flex flex-column flex-column-fluid"
        // id="kt_content"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            // id="kt_ecommerce_add_product_form"
            className="form  flex-column flex-lg-row"
            // data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
              
              {/*end::Thumbnail settings*/}
              {/*begin::Status*/}
             
              {/*end::Status*/}
              {/*begin::Status*/}
              {/* <div className="card card-flush py-4">
                */}
                {/* <div className="card-header">
                  
                  <div className="card-title">
                    <h2>Campaign</h2>
                  </div>
                 
                  
                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                
                </div> */}
                {/*end::Card header*/}
                {/*begin::Card body*/}
               
                {/*end::Card body*/}
              {/* </div> */}
              {/*end::Status*/}
              {/*begin::Status*/}
              {/* <div className="card card-flush py-4">
              
                <div className="card-header">
            
                  <div className="card-title">
                    <h2>Source</h2>
                  </div>
                 
                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                 
                </div>
                
               
              </div> */}
              {/*end::Status*/}
              {/*begin::Status*/}
              {/* <div className="card card-flush py-4"> */}
              
                {/* <div className="card-header">
                  
                  <div className="card-title">
                    <h2>Company</h2>
                  </div>
                  
                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                
                </div> */}
                {/*end::Card header*/}
                {/*begin::Card body*/}
                {/* <div className="card-body pt-0"> */}
                  {/*begin::Select2*/}
                  {/* <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.company}
                    onChange={handleChange}
                    name="company"
                  >
                    <option></option>
                    {company?.map((item: any) => (
                      <option value={item?.id}>{item?.companyName}</option>
                    ))}
                  </select> */}
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  {/* <div className="text-muted fs-7">Set the product status.</div> */}
                  {/*end::Description*/}
                  {/*begin::Datepicker*/}
                  {/* <div className="d-none mt-10">
                    <label className="form-label">
                      Select publishing date and time
                    </label>
                    <input
                      className="form-control"
                      id="kt_ecommerce_add_product_status_datepicker"
                      placeholder="Pick date & time"
                    />
                  </div> */}
                  {/*end::Datepicker*/}
                {/* </div> */}
                {/*end::Card body*/}
              {/* </div> */}
              {/*end::Status*/}
            </div>
            {/*end::Aside column*/}
            {/*begin::Main column*/}
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
              </ul>
              {/*end:::Tabs*/}
              {/*begin::Tab content*/}
              <div className="tab-content">
                {/*begin::Tab pane*/}
                <div className="tab-pane fade show active" role="tab-panel">
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
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-12">
                              <label>campaignName:</label>
                              <input
                                type="text"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="campaignName"
                                className="form-control"
                                placeholder="Enter FirstName"
                              />
                            </div>
                            {/* <div className="col-lg-6">
                              <label>Contact PersonName:</label>
                              <input
                                type="text"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="campaignName"
                                className="form-control"
                                placeholder="Enter PhoneNumber"
                              />
                              
                            </div> */}
                          </div>
                     <div className="form col-4 mt-6">
                      <label>Status</label>
                     <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.campaignStatus}
                    onChange={handleChange}
                    name="campaignStatus"
                  >
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.campaignStatusName}</option>
                    ))}
                  </select>
                     </div>
                          {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Contact Person AlternateEmail:</label>
                              <input
                                type="email"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="campaignName"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Contact Person PhoneNumber:</label>
                              <input
                                type="text"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="dealContactPersonPhoneNumber"
                                className="form-control"
                                placeholder="Enter Industry"
                              />
                            </div>
                          </div> */}
                          {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Contact PersonEmail:</label>
                              <input
                                type="text"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="dealContactPersonEmail"
                                className="form-control"
                                placeholder="Enter AnnualRevenue"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>ContactPerson AlternatePhoneNumber:</label>
                              <input
                                type="text"
                                value={
                                  data.campaignName
                                }
                                onChange={handleChange}
                                name="dealContactPersonAlternatePhoneNumber"
                                className="form-control"
                                placeholder="Enter CompanyName"
                              />
                            </div>
                          </div> */}
                          <div className="form-group row mb-2">
                            {/* <div className="col-lg-6">
                              <label>Deal Type:</label>
                              <input
                                type="text"
                                value={data.dealType}
                                onChange={handleChange}
                                name="dealType"
                                className="form-control"
                                placeholder="Enter PhoneNumber"
                              />
                            </div> */}
                            {/* <div className="col-lg-6">
                            <label>Deal Type:</label>
                              <select
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.dealType}
                                onChange={handleChange}
                                name="dealType"
                                className="form-control selectpicker"
                              >
                                <option>Mustard</option>
                                <option>Ketchup</option>
                                <option>Relish</option>
                              </select>
                            </div> */}
                          </div>
                          {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>CampaignSource:</label>
                              <input
                                type="text"
                                value={data.campaignSource}
                                onChange={handleChange}
                                name="campaignSource"
                                className="form-control"
                                placeholder="Enter CampaignSource"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Company:</label>
                              <input
                                type="text"
                                value={data.company}
                                onChange={handleChange}
                                name="company"
                                className="form-control"
                                placeholder="Enter Company"
                              />
                            </div>
                          </div> */}
                          {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Status:</label>
                              <input
                                type="text"
                                value={data.leadStatus}
                                onChange={handleChange}
                                name="leadStatus"
                                className="form-control"
                                placeholder="Enter Status"
                              />
                            </div>
                          </div> */}
                        </form>
                      </div>
                    </div>
                    {/* START:MEDIA */}
                    {/* <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Media</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div className="fv-row mb-2">
                          <div className="dropzone">
                            <div className="dz-message needsclick">
                              <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>

                              <div className="ms-4">
                                <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                  Drop files here or click to upload.
                                </h3>
                                <span className="fs-7 fw-semibold text-gray-400">
                                  Upload up to 10 files
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                        <div className="text-muted fs-7">
                          Set the product media gallery.
                        </div>
                   
                      </div>
                     
                    </div> */}
                  
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
                  onClick={() => {
                    handleSubmit();
                    // navigation("users");
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
