/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CreateDeal,
  getcampaigns,
  getcompanies,
  getdealsById,
  getdealStatuses,
  getsource,
  UpdateDeal,
} from "../../_redux/dealAction";

export default function DealsAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const id: any = location?.state
  console.log(id, "dealid");

  const [deal, setDeal] = useState(false);
  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const source = useSelector((state: any) => state?.deal?.Source);
  const campaign = useSelector((state: any) => state?.deal?.campaigns);
  const company = useSelector((state: any) => state?.deal?.Companies);
  const status = useSelector((state: any) => state?.deal?.dealStatus);
  const dealById = useSelector((state: any) => state?.deal?.dealsById);
  console.log(status, "status");

  useEffect(() => {
    dispatch(getsource(token));
    dispatch(getcampaigns(token));
    dispatch(getcompanies(token));
    dispatch(getdealStatuses(token));
  }, []);
  const [data, setData] = useState({
    dealName: " ",
    dealContactPersonName: " ",
    dealContactPersonPhoneNumber: " ",
    dealContactPersonEmail: " ",
    dealContactPersonAlternateEmail: " ",
    dealContactPersonAlternatePhoneNumber: " ",
    dealType: " ",
    dealSource: " ",
    campaignSource: " ",
    company: user?.company?.id,
    dealStatus: " ",
    dealOwner: user?.id,
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getdealsById(id?.id, token))
    setDeal(true);
  }, [dealById?.id])

  useEffect(() => {
    setData({
      dealName: dealById?.dealName,
      dealContactPersonName: dealById?.dealContactPersonName,
      dealContactPersonPhoneNumber: dealById?.dealContactPersonPhoneNumber,
      dealContactPersonEmail: dealById?.dealContactPersonEmail,
      dealContactPersonAlternateEmail: dealById?.dealContactPersonAlternateEmail,
      dealContactPersonAlternatePhoneNumber: dealById?.dealContactPersonAlternatePhoneNumber,
      dealType: dealById?.dealType,
      dealSource: dealById?.dealSource?.id,
      campaignSource: dealById?.campaignSource?.id,
      company: user?.company?.id,
      dealStatus: dealById?.dealStatus?.id,
      dealOwner: user?.id,
    })
    setDeal(false);
  }, [deal])
  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");

    if (id !== null) {
      dispatch(UpdateDeal(data, id?.id, token));
    }
    else {
      dispatch(CreateDeal(data, token));
    }
    setData({
      dealName: " ",
      dealContactPersonName: " ",
      dealContactPersonPhoneNumber: " ",
      dealContactPersonEmail: " ",
      dealContactPersonAlternateEmail: " ",
      dealContactPersonAlternatePhoneNumber: " ",
      dealType: " ",
      dealSource: " ",
      campaignSource: " ",
      company: " ",
      dealStatus: " ",
      dealOwner: " ",
    });
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

              {/*end::Thumbnail settings*/}
              {/*begin::Status*/}
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
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
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
                    value={data.dealStatus}
                    onChange={handleChange}
                    name="dealStatus"
                  >
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.dealStatusName}</option>
                    ))}
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
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
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
                    {campaign?.map((item: any) => (
                      <option value={item?.id}>{item?.campaignName}</option>
                    ))}
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
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
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
                    value={data.dealSource}
                    onChange={handleChange}
                    name="dealSource"
                  >
                    <option></option>
                    {source?.map((item: any) => (
                      <option value={item?.id}>{item?.SourceName}</option>
                    ))}
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
                  {/*end::Datepicker*/}
                </div>
                {/*end::Card body*/}
              </div>
            </div>
            {/*end::Aside column*/}
            {/*begin::Main column*/}
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              {/*begin::Tab content*/}
              <div className="d-flex flex-column gap-7 gap-lg-10">
                {/*begin::General options*/}
                <div className="card card-flush py-4">
                  {/*begin::Card header*/}
                  <div className="card-header">
                    <div className="card-title">
                      <h2>DEAL DETAILS</h2>
                    </div>
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className="card-body pt-0">
                    {/*begin::Input group*/}
                    <div className="form">
                      <div className="form-group row mb-2">
                        <div className="col-lg-6">
                          <label>Deal Name:</label>
                          <input
                            type="text"
                            value={data.dealName}
                            onChange={handleChange}
                            name="dealName"
                            className="form-control"
                            placeholder="Enter FirstName"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Contact PersonName:</label>
                          <input
                            type="text"
                            value={data.dealContactPersonName}
                            onChange={handleChange}
                            name="dealContactPersonName"
                            className="form-control"
                            placeholder="Enter PhoneNumber"
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-2">
                        <div className="col-lg-6">
                          <label>AlternateEmail:</label>
                          <input
                            type="email"
                            value={data.dealContactPersonAlternateEmail}
                            onChange={handleChange}
                            name="dealContactPersonAlternateEmail"
                            className="form-control"
                          // placeholder="Enter EmailOptOut"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label> PhoneNumber:</label>
                          <input
                            type="text"
                            value={data.dealContactPersonPhoneNumber}
                            onChange={handleChange}
                            name="dealContactPersonPhoneNumber"
                            className="form-control"
                            placeholder="Enter Industry"
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <div className="col-lg-6">
                          <label> PersonEmail:</label>
                          <input
                            type="text"
                            value={data.dealContactPersonEmail}
                            onChange={handleChange}
                            name="dealContactPersonEmail"
                            className="form-control"
                            placeholder="Enter AnnualRevenue"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>AlternatePhoneNumber:</label>
                          <input
                            type="text"
                            value={
                              data.dealContactPersonAlternatePhoneNumber
                            }
                            onChange={handleChange}
                            name="dealContactPersonAlternatePhoneNumber"
                            className="form-control"
                            placeholder="Enter CompanyName"
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">

                        <div className="col-lg-6">
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
                            <option>
                              --Select --
                            </option>
                            <option value="ExistingBusiness">Existing Business</option>
                            <option value="NewBusiness">New Business </option>
                          </select>
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
