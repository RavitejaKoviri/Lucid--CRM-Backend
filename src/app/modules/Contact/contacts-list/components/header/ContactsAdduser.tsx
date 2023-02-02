/* eslint-disable react-hooks/exhaustive-deps */
import { any } from "prop-types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ContactLoading,
  CreateContact,
  getcampaigns,
  getcompanies,
  getContactById,
  getsource,
  UpdateContact,
} from "../../_redux/contactAction";
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
  const location = useLocation();
  const dispatch = useDispatch();
  const id: any = location?.state;
  const [contact, setContact] = useState(false);

  const token = useSelector((state: any) => state?.auth?.authToken);
  const source = useSelector((state: any) => state?.ContactData?.Source);
  const campaign = useSelector((state: any) => state?.ContactData?.campaigns);
  const company = useSelector((state: any) => state?.ContactData?.Comapnies);
  const user = useSelector((state: any) => state?.auth?.user);
  console.log(user, "user");

  const ContactById = useSelector(
    (state: any) => state?.ContactData?.ContactById
  );

  useEffect(() => {
    dispatch(getsource(token));
    dispatch(getcampaigns(token));
    dispatch(getcompanies(token));
  }, []);

  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    company: user?.company,
    contactCompanyName: "",
    contactName: "",
    contactEmail: "",
    contactMobile: "",
    contactTitle: "",
    contactFirstName: "",
    contactLastName: "",
    contactJobTitle: "",
    contactCity: "",
    contactAddress: "",
    contactState: "",
    contactPincode: "",
    contactCountry: "",
    contactWebsiteAddress: "",
    contactSecondaryEmail: "",
    contactNotes: "",
    contactTwitterHandle: "",
    contactFacebookHandle: "",
    contactInstagramHandle: "",
    contactLinkedinHandle: "",
    contactSource: "",
    campaignSource: "",
    image: imageUrl,
    description: "",
  });
  // const handleChange = (e: any) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  useEffect(() => {
    console.log(id?.id, "Testid");

    dispatch(getContactById(id?.id, token));
    setContact(true);
  }, [ContactById?.id]);
  console.log(ContactById, "ContactByIdId");

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
      .post("http://103.195.244.172:4377/upload/", formdata, {
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

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      image: imageUrl,
      company: user?.company?.id,
    });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CreateContact(data, token));
    dispatch(ContactLoading(true));
    setData({
      company: "",
      contactCompanyName: "",
      contactName: "",
      contactEmail: "",
      contactMobile: "",
      contactTitle: "",
      contactFirstName: "",
      contactLastName: "",
      contactJobTitle: "",
      contactCity: "",
      contactAddress: "",
      contactState: "",
      contactPincode: "",
      contactCountry: "",
      contactWebsiteAddress: "",
      contactSecondaryEmail: "",
      contactNotes: "",
      contactTwitterHandle: "",
      contactFacebookHandle: "",
      contactInstagramHandle: "",
      contactLinkedinHandle: "",
      contactSource: "",
      campaignSource: "",
      description: "",
      image: [],
    });
    navigation("/contacts/contacts");
  };
  useEffect(() => {
    console.log("i was called");
    setData({
      company: "",
      contactCompanyName: "",
      contactName: "",
      contactEmail: "",
      contactMobile: "",
      contactTitle: "",
      contactFirstName: "",
      contactLastName: "",
      contactJobTitle: "",
      contactCity: "",
      contactAddress: "",
      contactState: "",
      contactPincode: "",
      contactCountry: "",
      contactWebsiteAddress: "",
      contactSecondaryEmail: "",
      contactNotes: "",
      contactTwitterHandle: "",
      contactFacebookHandle: "",
      contactInstagramHandle: "",
      contactLinkedinHandle: "",
      contactSource: "",
      campaignSource: "",
      description: "",
      image: [],
    });
  }, []);

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
                  <div className="image-input image-input-empty image-input-outline image-input-placeholder mb-3">
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
                    ) : data?.image?.length > 0 ? (
                      <div className="image-input-wrapper w-150px h-150px">
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
                      </div>
                    ) : (
                      <>
                        <div className="image-input image-input-empty image-input-outline image-input-placeholder mb-3">
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
                                  handleUploadImage(
                                    event.currentTarget.files[0]
                                  );
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
                    )}
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
                    <option value={""} disabled selected>
                      Select Campaign
                    </option>
                    {campaign?.map((item: any) => (
                      <option value={item?.id}>{item?.campaignName}</option>
                    ))}
                  </select>

                  <div className="text-muted fs-7"></div>

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
                    value={data.contactSource}
                    onChange={handleChange}
                    name="contactSource"
                  >
                    <option value={""} disabled selected>
                      Select Source
                    </option>
                    {source?.map((item: any) => (
                      <option value={item?.id}>{item?.SourceName}</option>
                    ))}
                  </select>
                  <div className="text-muted fs-7"></div>
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
            </div>

            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                  role="tab-panel"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Contact Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Name:</label> */}
                              <input
                                type="text"
                                placeholder="Contact Name"
                                value={data.contactName}
                                name="contactName"
                                onChange={handleChange}
                                className="form-control form-control-lg form-control-solid"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Email:</label> */}
                              <input
                                type="text"
                                value={data.contactEmail}
                                onChange={handleChange}
                                name="contactEmail"
                                className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Secondary Email:</label> */}
                              <input
                                type="text"
                                value={data.contactSecondaryEmail}
                                onChange={handleChange}
                                name="contactSecondaryEmail"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Secondary Email"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>First Name:</label> */}
                              <input
                                type="text"
                                value={data.contactFirstName}
                                onChange={handleChange}
                                name="contactFirstName"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="First Name"
                              />
                            </div>
                          </div>

                          {/* <div className="form-group row my-8">
                            
                            
                          </div> */}
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Last Name:</label> */}
                              <input
                                type="text"
                                value={data.contactLastName}
                                onChange={handleChange}
                                name="contactLastName"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Last Name"
                              />
                            </div>

                            <div className="col-lg-6">
                              {/* <label> Mobile:</label> */}
                              <input
                                type="text"
                                value={data.contactMobile}
                                onChange={handleChange}
                                name="contactMobile"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Mobile"
                              />
                            </div>
                          </div>

                          {/* <div className="form-group row my-8">
                            
                          </div> */}
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-7 gap-lg-10 my-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Contact Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Title:</label> */}
                              <input
                                type="text"
                                value={data.contactTitle}
                                onChange={handleChange}
                                name="contactTitle"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Title"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>JobTitle:</label> */}
                              <input
                                type="text"
                                value={data.contactJobTitle}
                                onChange={handleChange}
                                name="contactJobTitle"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Job Title"
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>CompanyName:</label> */}
                              <input
                                type="text"
                                value={data.contactCompanyName}
                                onChange={handleChange}
                                name="contactCompanyName"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Company Name"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Address:</label> */}
                              <input
                                type="text"
                                value={data.contactAddress}
                                onChange={handleChange}
                                name="contactAddress"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>City:</label> */}
                              <input
                                type="text"
                                value={data.contactCity}
                                onChange={handleChange}
                                name="contactCity"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="City"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>State:</label> */}
                              <input
                                type="text"
                                value={data.contactState}
                                onChange={handleChange}
                                name="contactState"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="State"
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Country:</label> */}
                              <input
                                type="text"
                                value={data.contactCountry}
                                onChange={handleChange}
                                name="contactCountry"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Country"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Pincode:</label> */}
                              <input
                                type="text"
                                value={data.contactPincode}
                                onChange={handleChange}
                                name="contactPincode"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Pincode"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-7 gap-lg-10 my-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Contact Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Website Address:</label> */}
                              <input
                                type="text"
                                value={data.contactWebsiteAddress}
                                onChange={handleChange}
                                name="contactWebsiteAddress"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Website Address"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Notes:</label> */}
                              <input
                                type="text"
                                value={data.contactNotes}
                                onChange={handleChange}
                                name="contactNotes"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Notes"
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Twitter Handle:</label> */}
                              <input
                                type="text"
                                value={data.contactTwitterHandle}
                                onChange={handleChange}
                                name="contactTwitterHandle"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Twitter Handle"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Linkedin Handle:</label> */}
                              <input
                                type="text"
                                value={data.contactLinkedinHandle}
                                onChange={handleChange}
                                name="contactLinkedinHandle"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Linkedin Handle"
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-6">
                              {/* <label>Facebook Handle:</label> */}
                              <input
                                type="text"
                                value={data.contactFacebookHandle}
                                onChange={handleChange}
                                name="contactFacebookHandle"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Facebook Handle"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Instagram Handle:</label> */}
                              <input
                                type="text"
                                value={data.contactInstagramHandle}
                                onChange={handleChange}
                                name="contactInstagramHandle"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Instagram Handle"
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
                    navigation("/contacts/contacts");
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  id="kt_ecommerce_add_product_submit"
                  onClick={() => {
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
