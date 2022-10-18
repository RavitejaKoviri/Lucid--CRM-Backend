/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateSource, getcampaigns, getcompanies, getSourcesById, getsource, UpdateSource, getsourceStatuses } from "../../_redux/sourceAction";

export default function SourceAdduser() {
  const location = useLocation();
  const [Source, setSource] = useState(false);
  const id = location?.state
  console.log(id, "location")
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const sourceById = useSelector(
    (state: any) => state?.Sources?.SourcesById
  );
  console.log(sourceById, "leadById");

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
    dispatch(getsourceStatuses(token))
  }, [])
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getSourcesById(id, token))
    setSource(true);
  }, [sourceById?.id])
  const [data, setData] = useState(
    {
      SourceName: " ",
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateSource(id, data, token));
    }
    else {
      dispatch(CreateSource(data, token));
    }
    setData({
      SourceName: " ",
    })
  };
  useEffect(() => {
    setData({
      SourceName: sourceById?.SourceName,
    })
    setSource(false);
  }, [Source])
  return (
    <>

      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        {/*begin:::Tabs*/}

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
                    <div className="form-group row mb-2 ">
                      <div className="col-lg-6 ">
                        <label>Name:</label>
                        <input
                          type="text"
                          value={data.SourceName}
                          onChange={handleChange}
                          name="SourceName"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      {/* <div className="col-lg-6">
                              <label>Lead LastName:</label>
                              <input
                                type="text"
                                value={data.leadLastName}
                                onChange={handleChange}
                                name="leadLastName"
                                className="form-control"
                                placeholder="Enter LastNamer"
                              />
                            </div> */}
                    </div>
                    {/* <div className="form-group row mb-2">
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
                          </div> */}
                    {/* <div className="form-group row mb-2">
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
                          </div> */}
                    {/* <div className="form-group row mb-2">
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
                          </div> */}
                    <div className="form-group row mb-2">
                      {/* <div className="col-lg-6">
                              <label>Website:</label>
                              <input
                                type="text"
                                value={data.leadWebsite}
                                onChange={handleChange}
                                name="leadWebsite"
                                className="form-control"
                                placeholder="Enter Website"
                              />
                            </div> */}
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
    </>
  );
}
