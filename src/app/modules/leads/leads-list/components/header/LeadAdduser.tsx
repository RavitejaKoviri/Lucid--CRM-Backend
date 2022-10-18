/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateLead, getcampaigns, getcompanies, getLeadsById, getleadStatuses, getsource, UpdateLead } from "../../_redux/leadAction";

export default function LeadAdduser() {
  const location = useLocation();
  const [lead, setLead] = useState(false);
  const id = location?.state

  
  console.log( "location")
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const user = useSelector(
    (state: any) => state?.auth?.user
  );
  const source = useSelector(
    (state: any) => state?.LeadData?.Source
  );
  const campaign = useSelector(
    (state: any) => state?.LeadData?.campaigns
  );
  const company = useSelector(
    (state: any) => state?.LeadData?.Comapnies
  );
  const status = useSelector(
    (state: any) => state?.LeadData?.leadStatus
  );
  const leadById = useSelector(
    (state: any) => state?.LeadData?.LeadsById
  );
  console.log(leadById, "leadById");
  console.log(leadById?.id, "leadById1");

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
    dispatch(getleadStatuses(token))
  }, [])
  useEffect(()=>{
    console.log(id,"TestId");
      dispatch(getLeadsById(id, token))
      setLead(true);
  },[leadById?.id])

  useEffect(() => {
    setData({
      leadFirstName: leadById?.leadFirstName,
      leadPhonenumber: leadById?.leadPhonenumber,
      leadGender: leadById?.leadGender,
      leadIndustry: leadById?.leadIndustry,
      leadStatusName: leadById?.leadStatusName,
      leadStatusId: leadById?.leadStatusId,
      leadAppointmentDate: leadById?.leadAppointmentDate,
      leadAnnualRevenueContribution: leadById?.leadAnnualRevenueContribution,
      leadEmailOptOut: leadById?.leadEmailOptOut,
      leadCompanyName: leadById?.leadCompanyName,
      leadLastName: leadById?.leadLastName,
      leadSpecialityName: leadById?.leadSpecialityName,
      leadLocationName: leadById?.leadLocationName,
      leadEmail: leadById?.leadEmail,
      utmMedium: leadById?.utmMedium,
      leadWebsite: leadById?.leadWebsite,
      utmSource: leadById?.utmSource,
      utmCampaign: leadById?.utmCampaign,
      leadSource: leadById?.leadSource,
      utmAdgroup: leadById?.utmAdgroup,
      utmTerm: leadById?.utmTerm,
      leadId: leadById?.leadId,
      leadBusinessUnit: leadById?.leadBusinessUnit,
      campaignSource: leadById?.campaignSource,
      company: leadById?.company,
      leadStatus: leadById?.leadStatus,
      leadOwner: leadById?.leadOwner,
    })
    setLead(false);
    console.log("hello")
  }, [lead])

  const [data, setData] = useState(
    {
      leadFirstName: " ",
      leadPhonenumber: " ",
      leadIndustry: " ",
      leadGender: "",
      leadAppointmentDate: "",
      leadAnnualRevenueContribution: " ",
      leadEmailOptOut: " ",
      leadStatusName: "",
      leadCompanyName: " ",
      leadLastName: " ",
      leadEmail: " ",
      leadWebsite: " ",
      leadStatusId: "",
      leadLocationName: "",
      utmSource: "",
      utmCampaign: "",
      utmAdgroup: "",
      utmTerm: "",
      utmMedium: "",
      leadId: "",
      leadSource: " ",
      leadBusinessUnit: "",
      campaignSource: " ",
      leadSpecialityName: "",
      company: user?.company?.id,
      leadStatus: " ",
      leadOwner: user?.id,
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data, "TEST");

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateLead(id, data, token));
    }
    else {
      dispatch(CreateLead(data, token));
    }
    setData({
      leadFirstName: " ",
      leadPhonenumber: " ",
      leadIndustry: " ",
      leadGender: "",
      leadAppointmentDate: "",
      leadStatusName: "",
      leadLocationName: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      leadId: "",
      leadBusinessUnit: "",
      utmTerm: "",
      utmAdgroup: "",
      leadAnnualRevenueContribution: " ",
      leadEmailOptOut: " ",
      leadCompanyName: " ",
      leadLastName: " ",
      leadSpecialityName: "",
      leadEmail: " ",
      leadWebsite: " ",
      leadSource: " ",
      leadStatusId: "",
      campaignSource: " ",
      company: " ",
      leadStatus: " ",
      leadOwner: " ",
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
            className="form d-flex flex-column flex-lg-row"
          // data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
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
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Status</h2>
                  </div>

                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
                    ></div>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.leadStatus}
                    onChange={handleChange}
                    name="leadStatus"
                  >
                    <option></option>
                    {
                      status?.map((item: any) => (
                        <option value={item?.id}>{item?.leadStatusName}</option>
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
              {/*begin::Status*/}
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
                    value={data.leadSource}
                    onChange={handleChange}
                    name="leadSource"
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
              {/*begin::Status*/}
              {/* <div className="card card-flush py-4">
              
                <div className="card-header">
           
                  <div className="card-title">
                    <h2>Company</h2>
                  </div>
               
                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
                    ></div>
                  </div>
              
                </div>
            
                <div className="card-body pt-0">
               
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
              
                </div>
              
              </div> */}



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
                              {/* <label>Lead ID:</label> */}
                              <input
                                type="text"
                                value={data.leadId}
                                onChange={handleChange}
                                name="leadId"
                                className="form-control"
                              // placeholder="Enter LeadId"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Lead FirstName:</label>
                              <input
                                type="text"
                                value={data.leadFirstName}
                                onChange={handleChange}
                                name="leadFirstName"
                                className="form-control"
                                placeholder="Enter FirstName"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Lead LastName:</label>
                              <input
                                type="text"
                                value={data.leadLastName}
                                onChange={handleChange}
                                name="leadLastName"
                                className="form-control"
                                placeholder="Enter LastNamer"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>PhoneNumber:</label>
                              <input
                                type="text"
                                value={data.leadPhonenumber}
                                onChange={handleChange}
                                name="leadPhonenumber"
                                className="form-control"
                                placeholder="Enter PhoneNumber"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label> Email:</label>
                              <input
                                type="email"
                                value={data.leadEmail}
                                onChange={handleChange}
                                name="leadEmail"
                                className="form-control"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Gender:</label>
                              <input
                                type="text"
                                value={data.leadGender}
                                onChange={handleChange}
                                name="leadGender"
                                className="form-control"
                                placeholder="Enter Gender"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>AppointmentDate:</label>
                              <input
                                type="date"
                                value={data.leadAppointmentDate}
                                onChange={handleChange}
                                name="leadAppointmentDate"
                                className="form-control"
                                placeholder="Enter AppointmentDate"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>StatusName:</label>
                              <input
                                type="text"
                                value={data.leadStatusName}
                                onChange={handleChange}
                                name="leadStatusName"
                                className="form-control"
                                placeholder="Enter StatusName"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>StatusID:</label>
                              <input
                                type="text"
                                value={data.leadStatusId}
                                onChange={handleChange}
                                name="leadStatusId"
                                className="form-control"
                                placeholder="Enter StatusID"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Speciality Name:</label>
                              <input
                                type="text"
                                value={data.leadSpecialityName}
                                onChange={handleChange}
                                name="leadSpecialityName"
                                className="form-control"
                                placeholder="Enter SpecialityName"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Location Name:</label>
                              <input
                                type="email"
                                value={data.leadLocationName}
                                onChange={handleChange}
                                name="leadLocationName"
                                className="form-control"
                                placeholder="Enter Location"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>utmSource:</label>
                              <input
                                type="text"
                                value={data.utmSource}
                                onChange={handleChange}
                                name="utmSource"
                                className="form-control"
                                placeholder="Enter utmSource"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>utmMedium:</label>
                              <input
                                type="email"
                                value={data.utmMedium}
                                onChange={handleChange}
                                name="utmMedium"
                                className="form-control"
                                placeholder="Enter utmMedium"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>utmCampaign:</label>
                              <input
                                type="text"
                                value={data.utmCampaign}
                                onChange={handleChange}
                                name="utmCampaign"
                                className="form-control"
                                placeholder="Enter utmCampaign"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>leadBusinessUnit:</label>
                              <input
                                type="text"
                                value={data.leadBusinessUnit}
                                onChange={handleChange}
                                name="leadBusinessUnit"
                                className="form-control"
                                placeholder="Enter leadBusinessUnit"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>utmTerm:</label>
                              <input
                                type="text"
                                value={data.utmTerm}
                                onChange={handleChange}
                                name="utmTerm"
                                className="form-control"
                                placeholder="Enter utmTerm"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>utmAdgroup:</label>
                              <input
                                type="text"
                                value={data.utmAdgroup}
                                onChange={handleChange}
                                name="utmAdgroup"
                                className="form-control"
                                placeholder="Enter utmAdgroup"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>EmailOptOut:</label>
                              <input
                                type="email"
                                value={data.leadEmailOptOut}
                                onChange={handleChange}
                                name="leadEmailOptOut"
                                className="form-control"
                                placeholder="Enter EmailOptOut"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Industry:</label>
                              <input
                                type="text"
                                value={data.leadIndustry}
                                onChange={handleChange}
                                name="leadIndustry"
                                className="form-control"
                                placeholder="Enter Industry"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>AnnualRevenue:</label>
                              <input
                                type="text"
                                value={data.leadAnnualRevenueContribution}
                                onChange={handleChange}
                                name="leadAnnualRevenueContribution"
                                className="form-control"
                                placeholder="Enter AnnualRevenue"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>CompanyName:</label>
                              <input
                                type="text"
                                value={data.leadCompanyName}
                                onChange={handleChange}
                                name="leadCompanyName"
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
                                value={data.leadWebsite}
                                onChange={handleChange}
                                name="leadWebsite"
                                className="form-control"
                                placeholder="Enter Website"
                              />
                            </div>
                            {/* <div className="col-lg-6">
                              <label>Source:</label>
                              <input
                                type="text"
                                value={data.leadSource}
                                onChange={handleChange}
                                name="leadSource"
                                className="form-control"
                                placeholder="Source"
                              />
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
                          <div
                            className="dropzone"
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
                  onClick={() => {
                    handleSubmit()
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
