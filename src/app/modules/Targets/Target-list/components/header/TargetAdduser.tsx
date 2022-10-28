import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CreateTarget,
  getassignedTo,
  getCompanies,
  gettargetsById,
  getTargetStatuses,
  UpdateTarget,
} from "../../_redux/targetAction";

export default function TargetAdduser() {
  const navigation = useNavigate();
  const location = useLocation();
  const id: any = location?.state;
  console.log(id, "dealid");
  const dispatch = useDispatch();
  const [target, setTarget] = useState(false);

  const token = useSelector((state: any) => state?.auth?.authToken);

  const userData = useSelector((state: any) => state?.auth?.user);
  // const company = useSelector((state: any) => state?.TargetData?.Comapnies);
  const status = useSelector((state: any) => state?.TargetData?.targetStatus);
  const user = useSelector((state: any) => state?.TargetData?.assignedTo);
  const targetsById = useSelector(
    (state: any) => state?.TargetData?.targetById
  );
  console.log(status, "status");

  useEffect(() => {
    dispatch(getassignedTo(token));
    dispatch(getCompanies(token));
    dispatch(getTargetStatuses(token));
  }, []);

  const [data, setData] = useState({
    targetName: " ",
    assignedTo: " ",
    targetDescription: " ",
    targetStatus: " ",
    company: userData?.company?.id,
    targetDueDate: " ",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(id, "TestId");
    dispatch(gettargetsById(id?.id, token));
    setTarget(true);
  }, [targetsById?.id]);

  useEffect(() => {
    setData({
      targetName: targetsById?.targetName,
      targetDescription: targetsById?.targetDescription,
      targetDueDate: targetsById?.targetDueDate,
      assignedTo: targetsById?.assignedTo?.id,
      company: user?.company?.id,
      targetStatus: targetsById?.targetStatus?.id,
      // taskOwner: user?.id,
    });
    setTarget(false);
  }, [target]);

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateTarget(data, id?.id, token));
    } else {
      dispatch(CreateTarget(data, token));
    }
    setData({
      targetName: " ",
      assignedTo: " ",
      targetDescription: " ",
      targetStatus: " ",
      company: " ",
      targetDueDate: " ",
    });
  };

  return (
    <>
      <div  className="container-xxl">
        <div
          // id="kt_ecommerce_add_product_form"
          className="form d-flex flex-column flex-lg-row"
          // data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
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
                    // id="kt_ecommerce_add_product_status"
                  ></div>
                </div>
              </div>

              <div className="card-body pt-0">
                <select
                  // className="form-select mb-2"
                  className="form-control form-control-lg form-control-solid"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Select an option"
                  value={data.targetStatus}
                  onChange={handleChange}
                  name="targetStatus"
                >
                  <option value="" disabled selected>
                    -- Select Status --
                  </option>{" "}
                  {status?.map((item: any) => (
                    <option value={item?.id}>{item?.targetStatusName}</option>
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
                    <h2>Target Details</h2>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="form form-label-right">
                    {" "}
                    <div className="form-group row mb-4">
                      <div className="col-lg-6 fv-row">
                        {/* <label>Target Name:</label> */}
                        <input
                          type="text"
                          value={data.targetName}
                          onChange={handleChange}
                          name="targetName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Target Name"

                        />
                      </div>
                      <div className="col-lg-6">
                        {/* <label>Target DueDate:</label> */}
                        <input
                          type="date"
                          value={data.targetDueDate}
                          onChange={handleChange}
                          name="targetDueDate"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                          placeholder=" "
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <div className="col-lg-6">
                        {/* <label className="form-label">Assigned To</label> */}
                        <select
                          className="form-control form-control-solid mb-2"
                          data-control="select2"
                          data-hide-search="true"
                          data-placeholder="Select an option"
                          value={data.assignedTo}
                          onChange={handleChange}
                          name="assignedTo"
                        >
                          <option value="" disabled selected>
                            -- Select Assigned To --
                          </option>

                          {user?.map((item: any) => (
                            <option value={item?.id}>{item?.username}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <div className="col-lg-12">
                        {/* <label>Target Description:</label> */}
                        <input
                          type="text"
                          placeholder="Enter Description"
                          value={data.targetDescription}
                          onChange={handleChange}
                          name="targetDescription"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                        />
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
                  navigation("/target/target");
                }}
              >
                Back
              </button>
              <button
                type="submit"
                id="kt_ecommerce_add_product_submit"
                onClick={() => {
                  // navigation("user");
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
    </>
  );
}
