import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateContact, getcampaigns, getcompanies, getsource } from "../../_redux/contactAction";
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

export default function ContactsAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const source = useSelector(
    (state: any) => state?.ContactData?.Source
  );
  const campaign = useSelector(
    (state: any) => state?.ContactData?.campaigns
  );
  const company = useSelector(
    (state: any) => state?.ContactData?.Comapnies
  );

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
  }, [])

  const [data, setData] = useState({
    company: " ",
    contactCompanyName:" ",
    contactName:" ",
    contactEmail:" ",
    contactMobile:" ",
    contactTitle:" ",
    contactFirstName:" ",
    contactLastName:" ",
    contactJobTitle:" ",
    contactCity:" ",
    contactAddress:" ",
    contactState:" ",
    contactPincode:" ",
    contactCountry:" ",
    contactWebsiteAddress:" ",
    contactSecondaryEmail:" ",
    contactNotes:" ",
    contactTwitterHandle:" ",
    contactFacebookHandle:" ",
    contactInstagramHandle:" ",
    contactLinkedinHandle:" ",
    contactSource:" ",
    campaignSource:" ",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CreateContact(data, token));
    console.log(data,"data")
    setData({
      company: " ",
      contactCompanyName:" ",
      contactName:" ",
      contactEmail:" ",
      contactMobile:" ",
      contactTitle:" ",
      contactFirstName:" ",
      contactLastName:" ",
      contactJobTitle:" ",
      contactCity:" ",
      contactAddress:" ",
      contactState:" ",
      contactPincode:" ",
      contactCountry:" ",
      contactWebsiteAddress:" ",
      contactSecondaryEmail:" ",
      contactNotes:" ",
      contactTwitterHandle:" ",
      contactFacebookHandle:" ",
      contactInstagramHandle:" ",
      contactLinkedinHandle:" ",
      contactSource:" ",
      campaignSource:" ",
    });
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
              {/*begin::Thumbnail settings*/}
              {/* <div className="card card-flush py-4">
                
                <div className="card-header">
                  
                  <div className="card-title">
                    <h2>Thumbnail</h2>
                  </div>
                  
                </div>
                
                <div className="card-body text-center pt-0">
                  
                  <div
                    className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                    data-kt-image-input="true"
                  >
                    
                    <div className="image-input-wrapper w-150px h-150px"></div>
                    
                    <label
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title="Change avatar"
                    >
                      <i className="bi bi-pencil-fill fs-7"></i>
                      
                      <input
                        type="file"
                        name="avatar"
                        accept=".png, .jpg, .jpeg"
                      />
                      <input type="hidden" name="avatar_remove" />
                     
                    </label>
                   
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      title="Cancel avatar"
                    >
                      <i className="bi bi-x fs-2"></i>
                    </span>
                   
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title="Remove avatar"
                    >
                      <i className="bi bi-x fs-2"></i>
                    </span>
              
                  </div>
                
                  <div className="text-muted fs-7">
                    Set the product thumbnail image. Only *.png, *.jpg and
                    *.jpeg image files are accepted
                  </div>
              
                </div>
            
              </div> */}
              {/*end::Thumbnail settings*/}


             {/*begin::Status*/}
             <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Company</h2>
                  </div>
                  {/*end::Card title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
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
                    value={data.company}
                    onChange={handleChange}
                    name="company"
                  >
                    <option></option>
                    {
                      company?.map((item: any) => (
                        <option value={item?.id}>{item?.companyName}</option>
                      ))
                    }

                  </select>
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7"></div>
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
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Campaign</h2>
                  </div>
                  {/*end::Card title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
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
                    value={data.campaignSource}
                    onChange={handleChange}
                    name="campaignSource"
                  >
                    <option></option>
                    {
                      campaign?.map((item: any) => (
                        <option value={item?.id}>{item?.campaignName}</option>
                      ))
                    }

                  </select>
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7"></div>
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
              {/*begin::Status*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Source</h2>
                  </div>
                  {/*end::Card title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
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
                    value={data.contactSource}
                    onChange={handleChange}
                    name="contactSource"
                  >
                    <option></option>
                    {
                      source?.map((item: any) => (
                        <option value={item?.id}>{item?.SourceName}</option>
                      ))
                    }

                  </select>
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7"></div>
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
                              <label>Name:</label>
                              <input
                                type="text"
                                value={data.contactName}
                                onChange={handleChange}
                                name="contactName"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Email:</label>
                              <input
                                type="text"
                                value={data.contactEmail}
                                onChange={handleChange}
                                name="contactEmail"
                                className="form-control"
                                
                              />
                            </div>
                            {/*begin::Status*/}
                           
                            {/*end::Status*/}

                            {/* <div className="col-lg-6">
                            <label>Company:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter company"
                              value={data.company}
                              onChange={handleChange}
                            />
                          </div> */}
                          </div>
                         
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>FirstName:</label>
                              <input
                                type="text"
                                value={data.contactFirstName}
                                onChange={handleChange}
                                name="contactFirstName"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>LastName:</label>
                              <input
                                type="text"
                                value={data.contactLastName}
                                onChange={handleChange}
                                name="contactLastName"
                                className="form-control"
                                
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                          <div className="col-lg-6">
                              <label>SecondaryEmail:</label>
                              <input
                                type="text"
                                value={data.contactSecondaryEmail}
                                onChange={handleChange}
                                name="contactSecondaryEmail"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label> Mobile:</label>
                              <input
                                type="text"
                                value={data.contactMobile}
                                onChange={handleChange}
                                name="contactMobile"
                                className="form-control"
                                
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Title:</label>
                              <input
                                type="text"
                                value={data.contactTitle}
                                onChange={handleChange}
                                name="contactTitle"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>JobTitle:</label>
                              <input
                                type="text"
                                value={data.contactJobTitle}
                                onChange={handleChange}
                                name="contactJobTitle"
                                className="form-control"
                                
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>CompanyName:</label>
                              <input
                                type="text"
                                value={data.contactCompanyName}
                                onChange={handleChange}
                                name="contactCompanyName"
                                className="form-control"
                                

                              />
                            </div>
                            <div className="col-lg-6">
                              <label>City:</label>
                              <input
                                type="text"
                                value={data.contactCity}
                                onChange={handleChange}
                                name="contactCity"
                                className="form-control"
                                
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Address:</label>
                              <input
                                type="text"
                                value={data.contactAddress}
                                onChange={handleChange}
                                name="contactAddress"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>State:</label>
                              <input
                                type="text"
                                value={data.contactState}
                                onChange={handleChange}
                                name="contactState"
                                className="form-control"
                                
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Pincode:</label>
                              <input
                                type="text"
                                value={data.contactPincode}
                                onChange={handleChange}
                                name="contactPincode"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Country:</label>
                              <input
                                type="text"
                                value={data.contactCountry}
                                onChange={handleChange}
                                name="contactCountry"
                                className="form-control"
                                
                              />
                            </div>
                          </div>

                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>WebsiteAddress:</label>
                              <input
                                type="text"
                                value={data.contactWebsiteAddress}
                                onChange={handleChange}
                                name="contactWebsiteAddress"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Notes:</label>
                              <input
                                type="text"
                                value={data.contactNotes}
                                onChange={handleChange}
                                name="contactNotes"
                                className="form-control"
                              
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                           
                            <div className="col-lg-6">
                              <label>TwitterHandle:</label>
                              <input
                                type="text"
                                value={data.contactTwitterHandle}
                                onChange={handleChange}
                                name="contactTwitterHandle"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>LinkedinHandle:</label>
                              <input
                                type="text"
                                value={data.contactLinkedinHandle}
                                onChange={handleChange}
                                name="contactLinkedinHandle"
                                className="form-control"
                                
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>FacebookHandle:</label>
                              <input
                                type="text"
                                value={data.contactFacebookHandle}
                                onChange={handleChange}
                                name="contactFacebookHandle"
                                className="form-control"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>InstagramHandle:</label>
                              <input
                                type="text"
                                value={data.contactInstagramHandle}
                                onChange={handleChange}
                                name="contactInstagramHandle"
                                className="form-control"
                                
                              />
                            </div>
                          </div>

                          <div className="form-group row mb-2">
                            
                            
                          </div>

                          
                        </form>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                {/*end::Tab pane*/}
                {/*begin::Tab pane*/}
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
                    handleSubmit()
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
  )
}
