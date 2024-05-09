/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CreateLead,
  getcampaigns,
  getcompanies,
  getLeadsById,
  getleadStatuses,
  getsource,
  Loading,
  UpdateLead,
} from "../../_redux/leadAction";

export default function EditLead() {
  const location = useLocation();
  const [lead, setLead] = useState(false);
  const id = location?.state;

  console.log("location");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const source = useSelector((state: any) => state?.LeadData?.Source);
  const campaign = useSelector((state: any) => state?.LeadData?.campaigns);
  const company = useSelector((state: any) => state?.LeadData?.Comapnies);
  const status = useSelector((state: any) => state?.LeadData?.leadStatus);
  const leadById = useSelector((state: any) => state?.LeadData?.LeadsById);
  console.log(leadById, "leadById");
  console.log(leadById?.id, "leadById1");

  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedPreviewFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedPreviewFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedPreviewFile]);
  const handleUploadImage = (document: any) => {
    setSelectedPreviewFile(document);
    const selectedFile = document;
    var formdata = new FormData();
    formdata.append("files", selectedFile, selectedFile.name);
    console.log("iamges ---", formdata);
    // console.log(blog?.image?.id, "blog?.image[0]?.id");
    // axios
    //   .delete(
    //     blog?.image &&
    //       `http://43.205.49.41:5377/upload/files/${blog?.image[0]?.id}`
    //   )
    //   .then(({ data }) => {
    //     console.log(data[0].url);
    //   })
    //   .catch(() => {});
    axios
      .post("https://crmbackend.luciddiagnostics.com/upload/", formdata, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data[0].url, "imageupload");
        setImageUrl(data[0].id);
      })
      .catch(() => {});
  };

  useEffect(() => {
    dispatch(getsource(token));
    dispatch(getcampaigns(token));
    dispatch(getcompanies(token));
    dispatch(getleadStatuses(token));
  }, []);
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getLeadsById(id, token));
    setLead(true);
  }, [leadById?.id]);

  useEffect(() => {
    setData({
      leadFirstName: leadById?.leadFirstName,
      leadMobileNumber: leadById?.leadMobileNumber,
      leadGender: leadById?.leadGender,
      leadIndustry: leadById?.leadIndustry,
      leadStatusName: leadById?.leadStatusName,
      leadStatusId: leadById?.leadStatusId,
      date: leadById?.date,
      revenue: leadById?.revenue,
      leadEmailOptOut: leadById?.leadEmailOptOut,
      leadCompanyName: leadById?.leadCompanyName,
      leadLastName: leadById?.leadLastName,
      // description: leadById?.description,
      leadLocation: leadById?.leadLocation,
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
      image: leadById?.image,
      description: leadById?.description,
      leadDigitalMediaSource:leadById.leadDigitalMediaSource,
      leadAddress:leadById.leadAddress,
      leadAge: leadById.leadAge,
      leadRemarks: leadById.leadRemarks,
      leadCallType:leadById.leadCallType,
    });
    setLead(false);
    console.log("hello");
  }, [lead]);

  const [data, setData] = useState({
    leadFirstName: " ",
    leadMobileNumber: " ",
    leadIndustry: " ",
    leadGender: "",
    date: "",
    revenue: " ",
    leadEmailOptOut: " ",
    leadStatusName: "",
    leadCompanyName: " ",
    leadLastName: " ",
    leadEmail: " ",
    leadWebsite: " ",
    leadStatusId: "",
    leadLocation: "",
    utmSource: "",
    utmCampaign: "",
    utmAdgroup: "",
    utmTerm: "",
    utmMedium: "",
    leadId: "",
    leadSource: " ",
    leadBusinessUnit: "",
    campaignSource: " ",
    // description: "",
    company: user?.company?.id,
    leadStatus: " ",
    leadOwner: user?.id,
    image: imageUrl,
    description: "",
    leadDigitalMediaSource:"",
      leadAddress:"",
      leadAge: "",
      leadRemarks: "",
      leadCallType:"",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      image: imageUrl,
      company: user?.company?.id,
    });
  };
  console.log(data, "TEST");

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(UpdateLead(id, data, token));
    dispatch(Loading(true));
    setData({
      leadFirstName: " ",
      leadMobileNumber: " ",
      leadIndustry: " ",
      leadGender: "",
      date: "",
      leadStatusName: "",
      leadLocation: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      leadId: "",
      leadBusinessUnit: "",
      utmTerm: "",
      utmAdgroup: "",
      revenue: " ",
      leadEmailOptOut: " ",
      leadCompanyName: " ",
      leadLastName: " ",
      // description: "",
      leadEmail: " ",
      leadWebsite: " ",
      leadSource: " ",
      leadStatusId: "",
      campaignSource: " ",
      company: " ",
      leadStatus: " ",
      leadOwner: " ",
      image: [],
      description: "",
      leadDigitalMediaSource:"",
      leadAddress:"",
      leadAge: "",
      leadRemarks: "",
      leadCallType:"",
    });
    navigation("/leads/list");
  };
  return (
    <>
      <div className="content d-flex flex-column flex-column-fluid">
        <div id="kt_content_container" className="container-xxl">
          <div className="form d-flex flex-column flex-lg-row">
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
              {/*begin::Thumbnail settings*/}
              
              {/*end::Thumbnail settings*/}
              {/* <input
                type="text"
                value={data.description}
                onChange={handleChange}
                name="description"
                className="form-control"
                placeholder="Enter Image description"
              /> */}
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Status</h2>
                  </div>
                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
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
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.leadStatusName}</option>
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
                </div>
              </div>

              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Lead/Call Type</h2>
                  </div>

                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                </div>

                <div className="card-body pt-0">
                <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.leadCallType}
                    onChange={handleChange}
                    name="leadCallType"
                  >
                    <option value={""} disabled selected>
                      Select Lead/Call Type
                    </option>
                    
                      <option value="home visit enquiry">Home Visit</option>
                      <option value="Report Enquiry">Report Enquiry</option>
                      <option value="Test /Pkg Enquiry">Test /Pkg Enquiry</option>
                      <option value="Location/Branch Enquiry">Location/Branch Enquiry</option>
                  </select>

                  <div className="d-none mt-10">
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
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                </div>

                <div className="card-body pt-0">
                <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.leadDigitalMediaSource}
                    onChange={handleChange}
                    name="leadDigitalMediaSource"
                  >
                    <option value={""} disabled selected>
                      Select Source
                    </option>
                      <option value="Digital">Digital</option>
                      <option value="Walk-In">Walk-In</option>
                      <option value="Reference">Reference</option>
                    
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
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <div className="card card-flush py-4">
                  <div className="card-header">
                    <div className="card-title">
                      <h2>Lead Personal Details</h2>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <form className="form">
                      {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <input
                                type="text"
                                value={data.leadId}
                                onChange={handleChange}
                                name="leadId"
                                className="form-control"
                                placeholder="Enter LeadId"
                              />
                            </div>
                          </div> */}
                      <div className="form-group row my-8">
                      <div className="col-lg-4">
                          {/* <label>PhoneNumber:</label> */}
                          <input
                            type="text"
                            value={data.leadMobileNumber}
                            onChange={handleChange}
                            name="leadMobileNumber"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div className="col-lg-4">
                          {/* <label>Lead FirstName:</label> */}
                          
                          <input
                            type="text"
                            value={data.leadFirstName}
                            onChange={handleChange}
                            name="leadFirstName"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-lg-4">
                          <input
                            type="text"
                            value={data.leadLastName}
                            onChange={handleChange}
                            name="leadLastName"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                      <div className="col-lg-4">
                          {/* <label> Email:</label> */}
                          <input
                            type="number"
                            value={data.leadAge}
                            onChange={handleChange}
                            name="leadAge"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Age"
                          />
                        </div>
                        <div className="col-lg-4">
                        <select
                            className="form-select form-select-solid form-select-lg"
                            // data-control="select2"
                            // data-hide-search="true"
                            name="leadGender"
                            value={data?.leadGender}
                            onChange={handleChange}
                          >
                            <option value="" disabled selected>
                              Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">others</option>
                          </select>
                        </div>
                       
                        <div className="col-lg-4">
                          {/* <label> Email:</label> */}
                          <input
                            type="email"
                            value={data.leadEmail}
                            onChange={handleChange}
                            name="leadEmail"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        {/* <div className="col-lg-6">
                              <label>Gender:</label>
                              <input
                                type="text"
                                value={data.leadGender}
                                onChange={handleChange}
                                name="leadGender"
                                className="form-control"
                                placeholder="Enter Gender"
                              />
                            </div> */}
                        
                          {/* <label>Lead Gender</label> */}
                         
                        
                        <div className="col-lg-6">
                          {/* <label>AppointmentDate:</label> */}
                          <input
                            type="text"
                            value={data.date}
                            onChange={handleChange}
                            onFocus={(e) => {
                              e.target.type = "date";
                            }}
                            name="date"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Appointment Date"
                          />
                        </div>
                      </div>

                      {/* <div className="form-group row my-8">
                        
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <div className="card card-flush py-4">
                  <div className="card-header">
                    <div className="card-title">
                      <h2>Lead Details</h2>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <form className="form">
                      {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <input
                                type="text"
                                value={data.leadId}
                                onChange={handleChange}
                                name="leadId"
                                className="form-control"
                                placeholder="Enter LeadId"
                              />
                            </div>
                          </div> */}
                          <div className="form-group row my-8">
                        <div className="col-lg-12">
                          {/* <label>Speciality Name:</label> */}
                          <input
                            type="text"
                            value={data.leadRemarks}
                            onChange={handleChange}
                            name="Remarks"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Remarks"
                          />
                        </div>
                        </div>
                        <div className="form-group row my-8">
                        {/* <div className="col-lg-6"> */}
                          {/* <label>Speciality Name:</label> */}
                          {/* <input
                            type="text"
                            value={data.description}
                            onChange={handleChange}
                            name="description"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Speciality Name"
                          />
                        </div> */}
                        <div className="col-lg-12">
                          {/* <label>Location Name:</label> */}
                          <input
                            type="email"
                            value={data.leadAddress}
                            onChange={handleChange}
                            name="leadAddress"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        {/* <div className="col-lg-6"> */}
                          {/* <label>Speciality Name:</label> */}
                          {/* <input
                            type="text"
                            value={data.description}
                            onChange={handleChange}
                            name="description"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Speciality Name"
                          />
                        </div> */}
                        <div className="col-lg-12">
                          {/* <label>Location Name:</label> */}
                          <input
                            type="email"
                            value={data.leadLocation}
                            onChange={handleChange}
                            name="leadLocation"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row my-8">
                        <div className="col-lg-6">
                          {/* <label>StatusName:</label> */}
                          <input
                            type="text"
                            value={data.leadStatusName}
                            onChange={handleChange}
                            name="leadStatusName"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Status Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>StatusID:</label> */}
                          <input
                            type="text"
                            value={data.leadStatusId}
                            onChange={handleChange}
                            name="leadStatusId"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Status ID"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        <div className="col-lg-6">
                          {/* <label>utmSource:</label> */}
                          <input
                            type="text"
                            value={data.utmSource}
                            onChange={handleChange}
                            name="utmSource"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Utm Source"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>utmMedium:</label> */}
                          <input
                            type="email"
                            value={data.utmMedium}
                            onChange={handleChange}
                            name="utmMedium"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Utm Medium"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        <div className="col-lg-6">
                          {/* <label>utmCampaign:</label> */}
                          <input
                            type="text"
                            value={data.utmCampaign}
                            onChange={handleChange}
                            name="utmCampaign"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Utm Campaign"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>leadBusinessUnit:</label> */}
                          <input
                            type="text"
                            value={data.leadBusinessUnit}
                            onChange={handleChange}
                            name="leadBusinessUnit"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Lead Business Unit"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        <div className="col-lg-6">
                          {/* <label>utmTerm:</label> */}
                          <input
                            type="text"
                            value={data.utmTerm}
                            onChange={handleChange}
                            name="utmTerm"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Utm Term"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>utmAdgroup:</label> */}
                          <input
                            type="text"
                            value={data.utmAdgroup}
                            onChange={handleChange}
                            name="utmAdgroup"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Utm Adgroup"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        <div className="col-lg-6">
                          {/* <label>EmailOptOut:</label> */}
                          <input
                            type="email"
                            value={data.leadEmailOptOut}
                            onChange={handleChange}
                            name="leadEmailOptOut"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Email Opt Out"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>Industry:</label> */}
                          <input
                            type="text"
                            value={data.leadIndustry}
                            onChange={handleChange}
                            name="leadIndustry"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Industry"
                          />
                        </div>
                      </div>
                      <div className="form-group row my-8">
                        <div className="col-lg-6">
                          {/* <label>AnnualRevenue:</label> */}
                          <input
                            type="text"
                            value={data.revenue}
                            onChange={handleChange}
                            name="revenue"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Revenue"
                          />
                        </div>
                        {/* <div className="col-lg-6"> */}
                        {/* <label>CompanyName:</label> */}
                        {/* <input
                            type="text"
                            value={data.leadCompanyName}
                            onChange={handleChange}
                            name="leadCompanyName"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Enter Company Name"
                          />
                        </div> */}
                        <div className="col-lg-6">
                          {/* <label>Website:</label> */}
                          <input
                            type="text"
                            value={data.leadWebsite}
                            onChange={handleChange}
                            name="leadWebsite"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      {/* <div className="form-group row my-8">
                        
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation("/leads/list");
                  }}
                >
                  Back
                </button>
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
        </div>
      </div>
    </>
  );
}
