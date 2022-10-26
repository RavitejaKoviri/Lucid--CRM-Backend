/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateLead, getcampaigns, getcompanies, getLeadsById, getleadStatuses, getsource, UpdateLead } from "../../_redux/cdrAction";

export default function CdrAdduser() {
  const location = useLocation();
  const [lead, setLead] = useState(false);
  const id = location?.state
  console.log(id, "location")
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const user = useSelector(
    (state: any) => state?.auth?.user
  );
  const source = useSelector(
    (state: any) => state?.cdr?.Source
  );
  const campaign = useSelector(
    (state: any) => state?.cdr?.campaigns
  );
  const company = useSelector(
    (state: any) => state?.cdr?.Comapnies
  );
  const status = useSelector(
    (state: any) => state?.cdr?.leadStatus
  );
  const leadById = useSelector(
    (state: any) => state?.LeadData?.LeadsById
  );
  console.log(leadById, "leadById");

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
    dispatch(getleadStatuses(token))
    if (id !== "") {
      dispatch(getLeadsById(id, token))
      setLead(true);
    }
  }, [])

  useEffect(() => {
    setData({
      leadFirstName: leadById?.leadFirstName,
      leadPhonenumber: leadById?.leadPhonenumber,
      leadIndustry: leadById?.leadIndustry,
      leadAnnualRevenueContribution: leadById?.leadAnnualRevenueContribution,
      leadEmailOptOut: leadById?.leadEmailOptOut,
      leadCompanyName: leadById?.leadCompanyName,
      leadLastName: leadById?.leadLastName,
      leadEmail: leadById?.leadEmail,
      leadWebsite: leadById?.leadWebsite,
      leadSource: leadById?.leadSource,
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
      leadAnnualRevenueContribution: " ",
      leadEmailOptOut: " ",
      leadCompanyName: " ",
      leadLastName: " ",
      leadEmail: " ",
      leadWebsite: " ",
      leadSource: " ",
      campaignSource: " ",
      company: user?.company?.id,
      leadStatus: " ",
      leadOwner: user?.id,
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
      leadAnnualRevenueContribution: " ",
      leadEmailOptOut: " ",
      leadCompanyName: " ",
      leadLastName: " ",
      leadEmail: " ",
      leadWebsite: " ",
      leadSource: " ",
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
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            className="form d-flex flex-column flex-lg-row"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
              
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
              </div>
             
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Campaign</h2>
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
              </div>
              
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Source</h2>
                  </div>
                
                  <div className="card-toolbar">
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
                    ></div>
                  </div>
                </div>
              
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
              </div>
             

            </div>
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
             
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  role="tab-panel"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>CDR Details</h2>
                        </div>
                      </div>
                   
                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-4">
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
                          <div className="form-group row mb-4">
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
                          <div className="form-group row mb-4">
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
                          <div className="form-group row mb-4">
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
                          <div className="form-group row mb-4">
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
                    navigation('/cdr/cdr')
                  }}
                >
                  Back
                </button>
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
