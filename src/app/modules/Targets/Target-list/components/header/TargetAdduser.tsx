import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  CreateTarget, getassignedTo, getCompanies,  getTargetStatuses,  } from "../../_redux/targetAction";

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

export default function TargetAdduser() {
  const navigation = useNavigate();
  
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  
  
  const userData = useSelector(
    (state: any) => state?.auth?.user
  );
  // const campaign = useSelector(
  //   (state: any) => state?.TargetData?.campaigns
  // );
  const company = useSelector(
    (state: any) => state?.TargetData?.Comapnies
  );
  const status = useSelector(
    (state: any) => state?.TargetData?.targetStatus
  );
  const user = useSelector(
    (state: any) => state?.TargetData?.assignedTo
  );
  console.log(status,"status");
  
  useEffect(() => {
    dispatch(getassignedTo(token))
    dispatch(getCompanies(token))
    dispatch(getTargetStatuses(token))
  }, [])

  const [data, setData] = useState({
    targetName: " ",
    assignedTo: " ",
    targetDescription: " ",
    targetStatus: " ",
    company: userData?.company?.id,
    targetDueDate: " ",
  })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CreateTarget(data, token));
    setData({
      targetName: " ",
      assignedTo: " ",
    targetDescription: " ",
    targetStatus: " ",
    company: " ",
    targetDueDate: " ",
      
    })
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
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
              
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Status</h2>
                  </div>
                  {/*end::Card title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
                      id="kt_ecommerce_add_product_status"
                    ></div>
                  </div>
                  {/*begin::Card toolbar*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                  {/*begin::Select2*/}
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.targetStatus}
                    onChange={handleChange}
                    name="targetStatus"
                  > <option></option>
                    {/* <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option> */}
                    {
                      status?.map((item: any) => (
                        <option value={item?.id}>{item?.targetStatusName}</option>
                      ))
                    }

                  </select>
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  {/* <div className="text-muted fs-7">Set the product status.</div> */}
                  {/*end::Description*/}
                  {/*begin::Datepicker*/}
                  <div className="d-none mt-10">
                    <label className="form-label">
                      Select publishing date and time
                    </label>
                    <input
                      className="form-control"
                      id="kt_ecommerce_add_product_status_datepicker"
                      placeholder="Pick date & time"
                    />
                  </div>
                  {/*end::Datepicker*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Status*/}
              {/*begin::Category & tags*/}
              {/* <div className="card card-flush py-4">
           
                <div className="card-header">
                  
                  <div className="card-title">
                    <h2>Company Details</h2>
                  </div>
             
                </div>
           
                <div className="card-body pt-0">
              
                  <label className="form-label">Company</label>
            
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.company}
                    onChange={handleChange}
                    name="company"
                  ><option></option>
                  
                    
                    {
                      company?.map((item: any) => (
                        <option value={item?.id}>{item?.companyName}</option>
                      ))
                    }

                  </select>
                 </div>
              </div> */}
              {/*end::Category & tags*/}
              {/*begin::Weekly sales*/}
              {/* <div className="card card-flush py-4">
               
                <div className="card-header">
                
                  <div className="card-title">
                    <h2>Weekly Sales</h2>
                  </div>
                 
                </div>
               
                <div className="card-body pt-0">
                  <span className="text-muted">
                    No data available. Sales data will begin capturing once
                    product has been published.
                  </span>
                </div>
                
              </div> */}
{/*          
              <div className="card card-flush py-4">
            
                <div className="card-header">
               
                  <div className="card-title">
                    <h2>Product Template</h2>
                  </div>
               
                </div>
              
                <div className="card-body pt-0">
                  
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    id="kt_ecommerce_add_product_store_template"
                  >
                    <option></option>
                    
                  </select>
                
                  <div className="text-muted fs-7">
                    Assign a template from your current theme to define how a
                    single product is displayed.
                  </div>
                 
                </div>
                
              </div> */}
              {/*end::Template settings*/}
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
                  role="tab-panel"
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
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>targetName:</label>
                              <input
                                type="text"
                                value={data.targetName}
                                onChange={handleChange}
                                name="targetName"
                                className="form-control"
                                placeholder=" "
                              />
                            </div>
                            <label className="form-label">assignedTo</label>
                  {/*end::Label*/}
                  {/*begin::Select2*/}
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.assignedTo}
                    onChange={handleChange}
                    name="assignedTo"
                  ><option></option>
                  
                    
                    {
                      user?.map((item: any) => (
                        <option value={item?.id}>{item?.username}</option>
                      ))
                    }

                  </select>

                            {/* <div className="col-lg-6">
                              <label>assignedTo:</label>
                              <input
                                type="text"
                                value={data.assignedTo}
                                onChange={handleChange}
                                name="assignedTo"
                                className="form-control"
                                placeholder=" "
                              />
                            </div> */}
                          </div>
                           <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>targetDueDate:</label>
                              <input
                                type="text"
                                value={data.targetDueDate}
                                onChange={handleChange}
                                name="targetDueDate"
                                className="form-control"
                                placeholder=" "
                              />
                            </div>
                            {/* <div className="col-lg-6">
                              <label> Company:</label>
                              <input
                                type="text"
                                value={data.company}
                                onChange={handleChange}
                                name="targetCompanyName"
                                className="form-control"
                                placeholder="Enter CompanyName"
                              />
                            </div> */}
                          </div> 
                          <div className="form-group row mb-2">
                            <div className="col-lg-12">
                              <label>targetDescription:</label>
                              <input
                                type="text"
                                value={data.targetDescription}
                                onChange={handleChange}
                                name="targetDescription"
                                className="form-control"
                                placeholder="Enter Description"
                              />
                            </div>
                            {/* <div className="col-lg-6">
                              <label>Industry:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Industry"
                              />
                            </div> */}
                          </div>
                          {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>AnnualRevenue:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter AnnualRevenue"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>CompanyName:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter CompanyName"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Website:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Website"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Source:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Source"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>CampaignSource:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter CampaignSource"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Company:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Status:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Status"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Owner:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Owner"
                              />
                            </div>
                          </div> */}
                        </form>
                      </div>
                    </div>
                    {/* <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Media</h2>
                        </div>
                      </div>
                     
                      <div className="card-body pt-0">
                        <div className="fv-row mb-2">
                          <div
                            className="dropzone"
                            id="kt_ecommerce_add_product_media"
                          >
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
                    {/*end::Media*/}
                    {/*begin::Pricing*/}
                    {/* <div className="card card-flush py-4">
                     
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Pricing</h2>
                        </div>
                      </div>
                     
                      <div className="card-body pt-0">
                        
                        <div className="mb-10 fv-row">
                         
                          <label className="required form-label">
                            Base Price
                          </label>
                         
                          <input
                            type="text"
                            name="price"
                            className="form-control mb-2"
                            placeholder="Product price"
                            value=""
                          />
                          
                          <div className="text-muted fs-7">
                            Set the product price.
                          </div>
                         
                        </div>
                     
                        <div className="fv-row mb-10">
                      
                          <label className="fs-6 fw-semibold mb-2">
                            Discount Type
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="Select a discount type that will be applied to this product"
                            ></i>
                          </label>
                         
                          <div
                            className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
                            data-kt-buttons="true"
                            data-kt-buttons-target="[data-kt-button='true']"
                          >
                           
                            <div className="col">
                              
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                data-kt-button="true"
                              >
                              
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="discount_option"
                                    value="1"
                                  />
                                </span>
                               
                                
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    No Discount
                                  </span>
                                </span>
                                
                              </label>
                              
                            </div>
                          
                            <div className="col">
                             
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                            
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="discount_option"
                                    value="2"
                                  />
                                </span>
                              
                                
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    Percentage %
                                  </span>
                                </span>
                               
                              </label>
                             
                            </div>
                           
                          
                            <div className="col">
                              
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="discount_option"
                                    value="3"
                                  />
                                </span>
                                
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    Fixed Price
                                  </span>
                                </span>
                               
                              </label>
                             
                            </div>
                      
                          </div>
                       
                        </div>
                       
                        <div
                          className="d-none mb-10 fv-row"
                          id="kt_ecommerce_add_product_discount_percentage"
                        >
                       
                          <label className="form-label">
                            Set Discount Percentage
                          </label>
                          
                          
                          <div className="d-flex flex-column text-center mb-5">
                            <div className="d-flex align-items-start justify-content-center mb-7">
                              <span
                                className="fw-bold fs-3x"
                                id="kt_ecommerce_add_product_discount_label"
                              >
                                0
                              </span>
                              <span className="fw-bold fs-4 mt-1 ms-2">%</span>
                            </div>
                            <div
                              id="kt_ecommerce_add_product_discount_slider"
                              className="noUi-sm"
                            ></div>
                          </div>
                        
                          <div className="text-muted fs-7">
                            Set a percentage discount to be applied on this
                            product.
                          </div>
                          
                        </div>
                     
                        <div
                          className="d-none mb-10 fv-row"
                          id="kt_ecommerce_add_product_discount_fixed"
                        >
                        
                          <label className="form-label">
                            Fixed Discounted Price
                          </label>
                       
                          <input
                            type="text"
                            name="dicsounted_price"
                            className="form-control mb-2"
                            placeholder="Discounted price"
                          />
                        
                          <div className="text-muted fs-7">
                            Set the discounted product price. The product will
                            be reduced at the determined fixed price
                          </div>
                        
                        </div>
                      
                        <div className="d-flex flex-wrap gap-5">
                         
                          <div className="fv-row w-100 flex-md-root">
                          
                            <label className="required form-label">
                              Tax className
                            </label>
                           
                            <select
                              className="form-select mb-2"
                              name="tax"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Select an option"
                            >
                              <option></option>
                              <option value="0">Tax Free</option>
                              <option value="1">Taxable Goods</option>
                              <option value="2">Downloadable Product</option>
                            </select>
                           
                            <div className="text-muted fs-7">
                              Set the product tax className.
                            </div>
                         
                          </div>
                         
                          <div className="fv-row w-100 flex-md-root">
                           
                            <label className="form-label">VAT Amount (%)</label>
                        
                            <input
                              type="text"
                              className="form-control mb-2"
                              value=""
                            />
                           
                            <div className="text-muted fs-7">
                              Set the product VAT about.
                            </div>
                           
                          </div>
                         
                        </div>
                       
                      </div>
                     
                    </div> */}
                   
                  </div>
                </div>
               
              
                <div
                  className="tab-pane fade"
                  id="kt_ecommerce_add_product_advanced"
                  role="tab-panel"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    {/*begin::Inventory*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Inventory</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">SKU</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="sku"
                            className="form-control mb-2"
                            placeholder="SKU Number"
                            value=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product SKU.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">Barcode</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="sku"
                            className="form-control mb-2"
                            placeholder="Barcode Number"
                            value=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product barcode number.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">
                            Quantity
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div className="d-flex gap-3">
                            <input
                              type="number"
                              name="shelf"
                              className="form-control mb-2"
                              placeholder="On shelf"
                              value=""
                            />
                            <input
                              type="number"
                              name="warehouse"
                              className="form-control mb-2"
                              placeholder="In warehouse"
                            />
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product quantity.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="fv-row">
                          {/*begin::Label*/}
                          <label className="form-label">Allow Backorders</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div className="form-check form-check-custom form-check-solid mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Allow customers to purchase products that are out of
                            stock.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Inventory*/}
                    {/*begin::Variations*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Variations</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div
                          className=""
                          data-kt-ecommerce-catalog-add-product="auto-options"
                        >
                          {/*begin::Label*/}
                          <label className="form-label">
                            Add Product Variations
                          </label>
                          {/*end::Label*/}
                          {/*begin::Repeater*/}
                          <div id="kt_ecommerce_add_product_options">
                            {/*begin::Form group*/}
                            <div className="form-group">
                              <div
                                data-repeater-list="kt_ecommerce_add_product_options"
                                className="d-flex flex-column gap-3"
                              >
                                <div
                                  data-repeater-item=""
                                  className="form-group d-flex flex-wrap align-items-center gap-5"
                                >
                                  {/*begin::Select2*/}
                                  <div className="w-100 w-md-200px">
                                    <select
                                      className="form-select"
                                      name="product_option"
                                      data-placeholder="Select a variation"
                                      data-kt-ecommerce-catalog-add-product="product_option"
                                    >
                                      <option></option>
                                      <option value="color">Color</option>
                                      <option value="size">Size</option>
                                      <option value="material">Material</option>
                                      <option value="style">Style</option>
                                    </select>
                                  </div>
                                  {/*end::Select2*/}
                                  {/*begin::Input*/}
                                  <input
                                    type="text"
                                    className="form-control mw-100 w-200px"
                                    name="product_option_value"
                                    placeholder="Variation"
                                  />
                                  {/*end::Input*/}
                                  <button
                                    type="button"
                                    data-repeater-delete=""
                                    className="btn btn-sm btn-icon btn-light-danger"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          opacity="0.5"
                                          x="7.05025"
                                          y="15.5356"
                                          width="12"
                                          height="2"
                                          rx="1"
                                          transform="rotate(-45 7.05025 15.5356)"
                                          fill="currentColor"
                                        />
                                        <rect
                                          x="8.46447"
                                          y="7.05029"
                                          width="12"
                                          height="2"
                                          rx="1"
                                          transform="rotate(45 8.46447 7.05029)"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group mt-5">
                              <button
                                type="button"
                                data-repeater-create=""
                                className="btn btn-sm btn-light-primary"
                              >
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      opacity="0.5"
                                      x="11"
                                      y="18"
                                      width="12"
                                      height="2"
                                      rx="1"
                                      transform="rotate(-90 11 18)"
                                      fill="currentColor"
                                    />
                                    <rect
                                      x="6"
                                      y="11"
                                      width="12"
                                      height="2"
                                      rx="1"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Add another variation
                              </button>
                            </div>
                            {/*end::Form group*/}
                          </div>
                          {/*end::Repeater*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Variations*/}
                    {/*begin::Shipping*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Shipping</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="fv-row">
                          {/*begin::Input*/}
                          <div className="form-check form-check-custom form-check-solid mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="kt_ecommerce_add_product_shipping_checkbox"
                              value="1"
                            />
                            <label className="form-check-label">
                              This is a physical product
                            </label>
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set if the product is a physical or digital item.
                            Physical products may require shipping.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Shipping form*/}
                        <div
                          id="kt_ecommerce_add_product_shipping"
                          className="d-none mt-10"
                        >
                          {/*begin::Input group*/}
                          <div className="mb-10 fv-row">
                            {/*begin::Label*/}
                            <label className="form-label">Weight</label>
                            {/*end::Label*/}
                            {/*begin::Editor*/}
                            <input
                              type="text"
                              name="weight"
                              className="form-control mb-2"
                              placeholder="Product weight"
                              value=""
                            />
                            {/*end::Editor*/}
                            {/*begin::Description*/}
                            <div className="text-muted fs-7">
                              Set a product weight in kilograms (kg).
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="form-label">Dimension</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                              <input
                                type="number"
                                name="width"
                                className="form-control mb-2"
                                placeholder="Width (w)"
                                value=""
                              />
                              <input
                                type="number"
                                name="height"
                                className="form-control mb-2"
                                placeholder="Height (h)"
                                value=""
                              />
                              <input
                                type="number"
                                name="length"
                                className="form-control mb-2"
                                placeholder="Lengtn (l)"
                                value=""
                              />
                            </div>
                            {/*end::Input*/}
                            {/*begin::Description*/}
                            <div className="text-muted fs-7">
                              Enter the product dimensions in centimeters (cm).
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end::Shipping form*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Shipping*/}
                    {/*begin::Meta options*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Meta Options</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label">Meta Tag Title</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control mb-2"
                            name="meta_title"
                            placeholder="Meta tag name"
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a meta tag title. Recommended to be simple and
                            precise keywords.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            Meta Tag Description
                          </label>
                          {/*end::Label*/}
                          {/*begin::Editor*/}
                          <div
                            id="kt_ecommerce_add_product_meta_description"
                            className="min-h-100px mb-2"
                          ></div>
                          {/* end::Editor */}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a meta tag description to the product for
                            increased SEO ranking.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div>
                          {/*begin::Label*/}
                          <label className="form-label">
                            Meta Tag Keywords
                          </label>
                          {/*end::Label*/}
                          {/*begin::Editor*/}
                          <input
                            id="kt_ecommerce_add_product_meta_keywords"
                            name="kt_ecommerce_add_product_meta_keywords"
                            className="form-control mb-2"
                          />
                          {/*end::Editor*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a list of keywords that the product is related
                            to. Separate the keywords by adding a comma
                            <code>,</code>between each keyword.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Meta options*/}
                  </div>
                </div>
                {/*end::Tab pane*/}
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
                    // navigation("user");
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
