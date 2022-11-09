/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {
  CreateDeal,
  getcampaigns,
  getcompanies,
  getdealStatuses,
  getsource,

} from "../../_redux/dealAction";

export default function DealsAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
;

  const [deal, setDeal] = useState(false);
  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const source = useSelector((state: any) => state?.deal?.Source);
  const campaign = useSelector((state: any) => state?.deal?.campaigns);
  const company = useSelector((state: any) => state?.deal?.Companies);
  const status = useSelector((state: any) => state?.deal?.dealStatus);

  console.log(status, "status");

  useEffect(() => {
    dispatch(getsource(token));
    dispatch(getcampaigns(token));
    dispatch(getcompanies(token));
    dispatch(getdealStatuses(token));
  }, []);

  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    dealName: "",
    dealContactPersonName: "",
    dealContactPersonPhoneNumber: "",
    dealContactPersonEmail: "",
    dealContactPersonAlternateEmail: "",
    dealContactPersonAlternatePhoneNumber: "",
    dealType: "",
    dealSource: "",
    campaignSource: "",
    company: user?.company?.id,
    dealStatus: "",
    dealOwner: user?.id,
    image:imageUrl,
    description: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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

 
  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
      dispatch(CreateDeal(data, token));
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
      description: "",
      image: [],
    });
    navigation('/deals/deals')
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
              className="form-control form-control-lg form-control-solid"
                placeholder="Enter Image description"
              />
             
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
                    value={data.dealStatus}
                    onChange={handleChange}
                    name="dealStatus"
                  >
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.dealStatusName}</option>
                    ))}
                  </select>
                 
                  <div className="d-none mt-10">
                    <label className="form-label">
                      Select publishing date and time
                    </label>
                    <input
                    className="form-control form-control-lg form-control-solid"
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
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
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
                    {campaign?.map((item: any) => (
                      <option value={item?.id}>{item?.campaignName}</option>
                    ))}
                  </select>
                  
                  
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
                    value={data.dealSource}
                    onChange={handleChange}
                    name="dealSource"
                  >
                    <option></option>
                    {source?.map((item: any) => (
                      <option value={item?.id}>{item?.SourceName}</option>
                    ))}
                  </select>
                 
                </div>
              </div>
            </div>
           
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <div className="card card-flush py-4">
                  <div className="card-header">
                    <div className="card-title">
                      <h2>Deal Detials</h2>
                    </div>
                  </div>
                 
                  <div className="card-body pt-0">
                    <div className="form">
                      <div className="form-group row mb-4">
                        <div className="col-lg-6">
                          {/* <label>Deal Name:</label> */}
                          <input
                            type="text"
                            value={data.dealName}
                            onChange={handleChange}
                            name="dealName"
                          className="form-control form-control-lg form-control-solid"
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>Contact PersonName:</label> */}
                          <input
                            type="text"
                            value={data.dealContactPersonName}
                            onChange={handleChange}
                            name="dealContactPersonName"
                          className="form-control form-control-lg form-control-solid"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-4">
                        <div className="col-lg-6">
                          {/* <label>Alternate Email:</label> */}
                          <input
                            type="email"
                            value={data.dealContactPersonAlternateEmail}
                            onChange={handleChange}
                            name="dealContactPersonAlternateEmail"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Email"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label> Phone Number:</label> */}
                          <input
                            type="text"
                            value={data.dealContactPersonPhoneNumber}
                            onChange={handleChange}
                            name="dealContactPersonPhoneNumber"
                          className="form-control form-control-lg form-control-solid"
                            placeholder="Enter Industry"
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <div className="col-lg-6">
                          {/* <label> Person Email:</label> */}
                          <input
                            type="text"
                            value={data.dealContactPersonEmail}
                            onChange={handleChange}
                            name="dealContactPersonEmail"
                          className="form-control form-control-lg form-control-solid"
                            placeholder="Enter Annual Revenue"
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>Alternate PhoneNumber:</label> */}
                          <input
                            type="text"
                            value={
                              data.dealContactPersonAlternatePhoneNumber
                            }
                            onChange={handleChange}
                            name="dealContactPersonAlternatePhoneNumber"
                          className="form-control form-control-lg form-control-solid"
                            placeholder="Enter Company Name"
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-4">

                        <div className="col-lg-6">
                          {/* <label>Deal Type:</label> */}
                          <select
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Select an option"
                            value={data.dealType}
                            onChange={handleChange}
                            name="dealType"
                            className="form-control form-control-lg form-control-solid"
                          >
                            <option>
                              Select
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
              <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation('/deals/deals')
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
          {/*end::Form*/}
        </div>
      </div>
    </>
  );
}
