/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateLead, getcampaigns, getcompanies, getLeadsById, getleadStatuses, getsource, UpdateLead } from "../../_redux/leadAction";

export default function LeadAdduser() {
  const location = useLocation();
  const [lead, setLead] = useState(false);
  const id = location?.state


  console.log("location")
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
      .post("http://65.2.10.157:5377/upload/", formdata, {
        headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        console.log(data[0].url, "imageupload");
        setImageUrl(data[0].id);
      })
      .catch(() => { });
  };

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
    dispatch(getleadStatuses(token))
  }, [])
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getLeadsById(id, token))
    setLead(true);
  }, [leadById?.id])

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
      image: leadById?.image,
      description: leadById?.description
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
      image: imageUrl,
      description: "",
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value, image: imageUrl, company: user?.company?.id });
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
      image: [],
      description: "",
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

              {/*begin::Thumbnail settings*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Image</h2>
                  </div>
                  {/*end::Card title*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body text-center pt-0">
                  {/*begin::Image input*/}
                  {/*begin::Image input placeholder*/}
                  {/* <style>.image-input-placeholder [data-th</style> */}
                  {/*end::Image input placeholder*/}
                  <div
                    className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                  >
                    {selectedPreviewFile ? (
                      <div className="image-input-wrapper w-150px h-150px">
                        <label
                          // className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                          // data-kt-image-input-action="change"
                          data-bs-toggle="tooltip"
                          title="Remove avatar"
                        >
                          <i className="bi bi-x fs-2"></i>
                          {/*begin::Inputs*/}
                          <img
                            src={preview}
                            alt="no image is selected"
                            style={{
                              height: "150px",
                              width: "150px",
                              // marginTop: "20px",
                            }}
                          />
                          {/*end::Inputs*/}
                        </label>
                      </div>
                    ) : (

                      data?.image?.length > 0 ? (<div className="image-input-wrapper w-150px h-150px">
                        <label
                          // className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                          // data-kt-image-input-action="change"
                          data-bs-toggle="tooltip"
                          title="Remove avatar"
                        >
                          {/* <i className="bi bi-x fs-7"></i> */}
                          {/*begin::Inputs*/}
                          <img
                            src={`http://65.2.10.157:5377${data?.image[0]?.url}`}
                            alt="no image to preview"
                            style={{
                              height: "150px",
                              width: "150px",
                              // marginTop: "20px",
                            }}
                          />
                          {/*end::Inputs*/}
                        </label>
                        <label
                          className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                          data-kt-image-input-action="change"
                          data-bs-toggle="tooltip"
                          title="Change avatar"
                        >
                          <i className="bi bi-pencil-fill fs-7"></i>
                          {/*begin::Inputs*/}
                          <input
                            type="file"
                            multiple
                            // name="avatar"
                            accept=".png, .jpg, .jpeg"
                            onChange={(event: any) => {
                              handleUploadImage(event.currentTarget.files[0]);
                            }}
                          />
                          {/*end::Inputs*/}
                        </label>
                      </div>) : (
                        <>
                          <div
                            className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                          >
                            <div className="image-input-wrapper w-150px h-150px">
                              <label
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change"
                                data-bs-toggle="tooltip"
                                title="Change avatar"
                              >
                                <i className="bi bi-pencil-fill fs-7"></i>
                                {/*begin::Inputs*/}
                                <input
                                  type="file"
                                  multiple
                                  // name="avatar"
                                  accept=".png, .jpg, .jpeg"
                                  onChange={(event: any) => {
                                    handleUploadImage(event.currentTarget.files[0]);
                                  }}
                                />
                                {/*end::Inputs*/}
                              </label>
                            </div>

                          </div>
                          <div className="text-muted fs-7">
                            Set the product thumbnail image. Only *.png, *.jpg and
                            *.jpeg image files are accepted
                          </div>
                        </>
                      )
                    )
                    }
                  </div>
                  {/*end::Image input*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Thumbnail settings*/}
              <input
                type="text"
                value={data.description}
                onChange={handleChange}
                name="description"
                className="form-control"
                placeholder="Enter Image description"
              />
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

                      </div>

                    </form>
                  </div>
                </div>















              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation('/leads/list')
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
