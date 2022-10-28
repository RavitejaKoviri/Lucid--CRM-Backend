/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateBrands, getBrandsById, getBrandsStatuses, getsource, UpdateBrands } from "../../_redux/brandsAction";

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
  const BrandsById = useSelector(
    (state: any) => state?.BrandsData?.BrandsById
  );
  const companyId = useSelector(
    (state: any) => state?.auth?.user?.company?.id
  );
  console.log(companyId, "DepartmentById");
  console.log(BrandsById, "BrandsById");
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getBrandsById(token, companyId))
    setBrands(true);
  }, [BrandsById?.id])
  useEffect(() => {
    setData({
      brandName: BrandsById?.brandName,
      company: BrandsById?.company,
    })
    setBrands(false);
    console.log("hello")
  }, [Brands])

  const [data, setData] = useState(
    {
      brandName: " ",
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

      console.log(user, "data")
      dispatch(CreateBrands(data, token));
    }
    setData({
      brandName: " ",
      company: " ",
    })
  };
  return (
    <>
      <div className="content d-flex flex-column flex-column-fluid">
        <div id="kt_content_container" className="container-xxl">
          <div className="form d-flex flex-column flex-lg-row">
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Brand Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2">
                          <div className="col-lg-6">
                              <label>Brand Name</label>
                              <input
                                type="text"
                                value={data.brandName}
                                onChange={handleChange}
                                name="brandName"
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter Brands'
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
                    navigation("/brands/brands");
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
