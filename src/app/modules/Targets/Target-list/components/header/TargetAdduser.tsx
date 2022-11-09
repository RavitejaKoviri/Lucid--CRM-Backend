import { Formik } from "formik";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {
  CreateTarget,
  getassignedTo,
  getCompanies,
  getTargetStatuses,
} from "../../_redux/targetAction";

export default function TargetAdduser() {
  const navigation = useNavigate();
  
  const dispatch = useDispatch();
  const [target, setTarget] = useState(false);

  const token = useSelector((state: any) => state?.auth?.authToken);

  const userData = useSelector((state: any) => state?.auth?.user);
  // const company = useSelector((state: any) => state?.TargetData?.Comapnies);
  const status = useSelector((state: any) => state?.TargetData?.targetStatus);
  const user = useSelector((state: any) => state?.TargetData?.assignedTo);
  
  console.log(userData, "status");

  useEffect(() => {
    dispatch(getassignedTo(token));
    dispatch(getCompanies(token));
    dispatch(getTargetStatuses(token));
  }, []);
  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();

  const [data, setData] = useState({
    targetName: "",
    assignedTo: "",
    targetDescription: "",
    targetStatus: "",
    company: userData?.company?.id,
    targetDueDate: "",
    image:imageUrl,
    description: "",
  });

  // const handleChange = (e: any) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

 
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

  
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value, image: imageUrl, company: userData?.company?.id });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    
      dispatch(CreateTarget(data, token));
    
    setData({
      targetName: "",
      assignedTo: "",
      targetDescription: "",
      targetStatus: "",
      company: "",
      targetDueDate: "",
      description: "",
      image: [],
    });
    navigation("/target/target");
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
                    <div
                      className="rounded-circle bg-success w-15px h-15px"
                      id="kt_ecommerce_add_product_status"
                    ></div>
                  </div>
                </div>
               
            
                <div className="card-body pt-0">
                  <select
                   className="form-control form-control-lg form-control-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.targetStatus}
                    onChange={handleChange}
                    name="targetStatus"
                  >
                    {" "}
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.targetStatusName}</option>
                    ))}
                  </select></div>

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
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                >
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
                      <div className="col-lg-4 fv-row">
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
                      <div className="col-lg-4">
                        {/* <label>Target DueDate:</label> */}
                        <input
                          type="text"
                          value={data.targetDueDate}
                          onChange={handleChange}
                          onFocus={(e)=>{e.target.type='date'}}
                          name="targetDueDate"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                          placeholder="Select Target Due Date"
                        />
                      </div>
                      <div className="col-lg-4">
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
                            Select Assigned To
                          </option>

                          {user?.map((item: any) => (
                            <option value={item?.id}>{item?.username}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* <div className="form-group row mb-4">
                      
                    </div> */}
                    <div className="form-group row mb-2">
                      <div className="col-lg-12">
                        {/* <label>Target Description:</label> */}
                        <textarea
                          // type="text"
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
    </div></div></div></div></>
  );
}
