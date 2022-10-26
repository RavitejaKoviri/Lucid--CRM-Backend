/* eslint-disable react-hooks/exhaustive-deps */
import { any } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateContact, getcampaigns, getcompanies, getContactById, getsource, UpdateContact } from "../../_redux/contactAction";
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
  const id: any = location?.state
  const [contact, setContact] = useState(false);
  
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
  const user = useSelector(
    (state: any) => state?.auth?.users
  );
  const ContactById = useSelector(
    (state: any) => state?.ContactData?.ContactById
  );
 
  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
  }, [])

  const [data, setData] = useState({
    company: user?.company,
    contactCompanyName: " ",
    contactName: " ",
    contactEmail: " ",
    contactMobile: " ",
    contactTitle: " ",
    contactFirstName: " ",
    contactLastName: " ",
    contactJobTitle: " ",
    contactCity: " ",
    contactAddress: " ",
    contactState: " ",
    contactPincode: " ",
    contactCountry: " ",
    contactWebsiteAddress: " ",
    contactSecondaryEmail: " ",
    contactNotes: " ",
    contactTwitterHandle: " ",
    contactFacebookHandle: " ",
    contactInstagramHandle: " ",
    contactLinkedinHandle: " ",
    contactSource: " ",
    campaignSource: " ",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    console.log(id?.id,"Testid");
    
    dispatch(getContactById(id?.id, token));
    setContact(true);
  },[ContactById?.id])
  console.log(ContactById,"ContactByIdId");
  
  
  useEffect(() => {
    setData({
      company: ContactById?.company,
      contactCompanyName: ContactById?.contactCompanyName,
      contactName: ContactById?.contactName,
      contactEmail: ContactById?.contactEmail,
      contactMobile: ContactById?.contactMobile,
      contactTitle: ContactById?.contactTitle,
      contactFirstName: ContactById?.contactFirstName,
      contactLastName: ContactById?.contactLastName,
      contactJobTitle: ContactById?.contactJobTitle,
      contactCity: ContactById?.contactCity,
      contactAddress: ContactById?.contactAddress,
      contactState: ContactById?.contactState,
      contactPincode: ContactById?.contactPincode,
      contactCountry: ContactById?.contactCountry,
      contactWebsiteAddress: ContactById?.contactWebsiteAddress,
      contactSecondaryEmail: ContactById?.contactSecondaryEmail,
      contactNotes: ContactById?.contactNotes,
      contactTwitterHandle: ContactById?.contactTwitterHandle,
      contactFacebookHandle: ContactById?.contactFacebookHandle,
      contactInstagramHandle: ContactById?.contactInstagramHandle,
      contactLinkedinHandle: ContactById?.contactLinkedinHandle,
      contactSource: ContactById?.contactSource,
      campaignSource: ContactById?.campaignSource,
    })
    setContact(false);
    console.log("hello")
  }, [contact])

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateContact(id, data, token));
    }
    else {
      dispatch(CreateContact(data, token));
    }

    console.log(data, "data")
    setData({
      company: " ",
      contactCompanyName: " ",
      contactName: " ",
      contactEmail: " ",
      contactMobile: " ",
      contactTitle: " ",
      contactFirstName: " ",
      contactLastName: " ",
      contactJobTitle: " ",
      contactCity: " ",
      contactAddress: " ",
      contactState: " ",
      contactPincode: " ",
      contactCountry: " ",
      contactWebsiteAddress: " ",
      contactSecondaryEmail: " ",
      contactNotes: " ",
      contactTwitterHandle: " ",
      contactFacebookHandle: " ",
      contactInstagramHandle: " ",
      contactLinkedinHandle: " ",
      contactSource: " ",
      campaignSource: " ",
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
                  
                  <div className="text-muted fs-7"></div>
                  
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
                  <div className="text-muted fs-7"></div>
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
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Name:</label>
                              <input
                                type="text"
                                placeholder="Name"
                                value={data.contactName}
                                onChange={handleChange}
                                // name="Name"
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
                                placeholder="Email"
                              />
                            </div>
                            
                          </div>

                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>First Name:</label>
                              <input
                                type="text"
                                value={data.contactFirstName}
                                onChange={handleChange}
                                name="contactFirstName"
                                className="form-control"
                                placeholder="FirstName"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Last Name:</label>
                              <input
                                type="text"
                                value={data.contactLastName}
                                onChange={handleChange}
                                name="contactLastName"
                                className="form-control"
                                placeholder="LastName"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Secondary Email:</label>
                              <input
                                type="text"
                                value={data.contactSecondaryEmail}
                                onChange={handleChange}
                                name="contactSecondaryEmail"
                                className="form-control"
                                placeholder="SecondaryEmail"
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
                                placeholder="Mobile"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Title:</label>
                              <input
                                type="text"
                                value={data.contactTitle}
                                onChange={handleChange}
                                name="contactTitle"
                                className="form-control"
                                placeholder="Title"
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
                                placeholder="JobTitle"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>CompanyName:</label>
                              <input
                                type="text"
                                value={data.contactCompanyName}
                                onChange={handleChange}
                                name="contactCompanyName"
                                className="form-control"
                                placeholder="CompanyName"

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
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Address:</label>
                              <input
                                type="text"
                                value={data.contactAddress}
                                onChange={handleChange}
                                name="contactAddress"
                                className="form-control"
                                placeholder="Address"
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
                                placeholder="State"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Pincode:</label>
                              <input
                                type="text"
                                value={data.contactPincode}
                                onChange={handleChange}
                                name="contactPincode"
                                className="form-control"
                                placeholder="Pincode"
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
                                placeholder="Country"
                              />
                            </div>
                          </div>

                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Website Address:</label>
                              <input
                                type="text"
                                value={data.contactWebsiteAddress}
                                onChange={handleChange}
                                name="contactWebsiteAddress"
                                className="form-control"
                                placeholder="WebsiteAddress"
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
                                placeholder="Notes"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">

                            <div className="col-lg-6">
                              <label>Twitter Handle:</label>
                              <input
                                type="text"
                                value={data.contactTwitterHandle}
                                onChange={handleChange}
                                name="contactTwitterHandle"
                                className="form-control"
                                placeholder="TwitterHandle"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Linkedin Handle:</label>
                              <input
                                type="text"
                                value={data.contactLinkedinHandle}
                                onChange={handleChange}
                                name="contactLinkedinHandle"
                                className="form-control"
                                placeholder="LinkedinHandle"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <div className="col-lg-6">
                              <label>Facebook Handle:</label>
                              <input
                                type="text"
                                value={data.contactFacebookHandle}
                                onChange={handleChange}
                                name="contactFacebookHandle"
                                className="form-control"
                                placeholder="FacebookHandle"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Instagram Handle:</label>
                              <input
                                type="text"
                                value={data.contactInstagramHandle}
                                onChange={handleChange}
                                name="contactInstagramHandle"
                                className="form-control"
                                placeholder="InstagramHandle"
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
                    navigation('/contacts/contacts')
                  }}
                >
                  Back
                </button>
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
