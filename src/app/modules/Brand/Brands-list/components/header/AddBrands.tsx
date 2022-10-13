/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateBrands, getcampaigns, getcompanies, getBrandsById, getBrandsStatuses, getsource, UpdateBrands } from "../../_redux/brandsAction";

export default function AddBrands() {
  const location = useLocation();
  const [Brands, setBrands] = useState(false);
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
    (state: any) => state?.BrandsData?.Source
  );
  const campaign = useSelector(
    (state: any) => state?.BrandsData?.campaigns
  );
  const company = useSelector(
    (state: any) => state?.BrandsData?.Comapnies
  );
  const status = useSelector(
    (state: any) => state?.BrandsData?.BrandsStatus
  );
  const BrandsById = useSelector(
    (state: any) => state?.BrandsData?.BrandssById
  );
  console.log(BrandsById, "BrandsById");

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
    dispatch(getBrandsStatuses(token))
    if (id !== "") {
      dispatch(getBrandsById(id, token))
      setBrands(true);
    }
  }, [])

  // useEffect(() => {
  //   setData({
  //     BrandsName: BrandsById?.BrandsName,
  //     company: BrandsById?.company,
  //   })
  //   setBrands(false);
  //   console.log("hello")
  // }, [Brands])

  const [data, setData] = useState(
    {
      BrandsName: " ",
      company: user?.company?.id,
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateBrands(id, data, token));
    }
    else {
      
      console.log(user,"data")
      dispatch(CreateBrands(data, token));
    }
    setData({
      BrandsName: " ",
      company: " ",
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
                              <label>Brand Name</label>
                              <input
                                type="text"
                                value={data.BrandsName}
                                onChange={handleChange}
                                name="BrandsName"
                                className="form-control"
                                placeholder="Enter Brands"
                              />
                            </div>
                            {/* <div className="col-lg-6">
                              <label>Company</label>
                              <input
                                type="text"
                                value={data.company?.companyName}
                                // onChange={handleChange}
                                // name="company"
                                className="form-control"
                                placeholder="Company"
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
                                value={data.BrandsStatus}
                                onChange={handleChange}
                                name="BrandsStatus"
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
