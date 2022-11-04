/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { CreateDepartment,  } from "../../_redux/departmentAction";

export default function AddDepartment() {
  
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const user = useSelector(
    (state: any) => state?.auth?.user
  );

  const company = useSelector(
    (state: any) => state?.DepartmentData?.Comapnies
  );


  const companyId = useSelector(
    (state: any) => state?.auth?.user?.company?.id
  );


  
  

 

  const [data, setData] = useState(
    {
      departmentName: " ",
      company: user?.company?.id,
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
   

      console.log(user, "data")
      dispatch(CreateDepartment(data, token));
    
    setData({
      departmentName: " ",
      company: " ",
    })
    navigation("/department/department");
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
                          <h2>Department Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2">
                          <div className="col-lg-6">
                              <label>Department Name</label>
                              <input
                                type="text"
                                value={data.departmentName}
                                onChange={handleChange}
                                name="departmentName"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter DepartMent"
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
                    navigation("/department/department");
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
