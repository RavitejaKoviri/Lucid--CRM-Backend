import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CreateTask,
  gettaskcompanies,
  gettaskcontact,
  gettaskStatus,
} from "../../_redux/taskAction";
// import {
//   CreateDeal,
//   getcampaigns,
//   getcompanies,
//   getdealStatuses,
//   getsource,
// } from "../../_redux/taskAction";

export default function TaskAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const contact = useSelector((state: any) => state?.tasks?.taskcontact);
  const company = useSelector((state: any) => state?.tasks?.Comapnies);
  const status = useSelector((state: any) => state?.tasks?.taskStatus);
  // const taskById = useSelector((state: any) => state?.tasks?.tasksById);

  console.log(user, "user");

  useEffect(() => {
    dispatch(gettaskcompanies(token));
    dispatch(gettaskStatus(token));
    dispatch(gettaskcontact(token));
  }, []);
  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    subject: "",
    taskRepeat: "",
    taskRemainder: "",
    taskPriority: "",
    taskDueDate: "",
    taskDescription: "",
    contact: "",
    company: user?.company?.id,
    taskStatus: "",
    taskOwner: user?.id,
    image: imageUrl,
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

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CreateTask(data, token));
    setData({
      subject: "",
      taskRepeat: "",
      taskRemainder: "",
      taskPriority: "",
      taskDueDate: "",
      taskDescription: "",
      contact: "",
      company: "",
      taskStatus: "",
      taskOwner: "",
      description: "",
      image: [],
    });
    navigation("/tasks/tasks");
  };
  const ref = useRef();
  return (
    <>
      <div className="content d-flex flex-column flex-column-fluid">
        <div id="kt_content_container" className="container-xxl">
          <div className="form d-flex flex-column flex-lg-row">
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
                className="form-control"
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
                    className="form-control form-control-lg form-control-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.taskStatus}
                    onChange={handleChange}
                    name="taskStatus"
                  >
                    <option value={""} disabled selected>
                      Select Status
                    </option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.taskStatusName}</option>
                    ))}
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
                    <h2>contact</h2>
                  </div>

                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                </div>

                <div className="card-body pt-0">
                  {/*begin::Select2*/}
                  <select
                    className="form-control form-control-lg form-control-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.contact}
                    onChange={handleChange}
                    name="contact"
                  >
                    <option value={""} disabled selected>
                      Select Contact
                    </option>
                    {contact?.map((item: any) => (
                      <option value={item?.id}>{item?.contactName}</option>
                    ))}
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
              <div className="tab-content">
                <div className="tab-pane fade show active" role="tab-panel">
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Task Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              {/* <label>Subject:</label> */}
                              <input
                                type="text"
                                value={data.subject}
                                onChange={handleChange}
                                name="subject"
                                className="form-control form-control-lg form-control-solid mb-lg-0 my-5"
                                placeholder="Subject"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Task DueDate:</label> */}
                              <input
                                type="text"
                                value={data.taskDueDate}
                                onChange={handleChange}
                                onFocus={(e) => {
                                  e.target.type = "date";
                                }}
                                name="taskDueDate"
                                className="form-control form-control-lg form-control-solid mb-lg-0 my-5"
                                placeholder="Select Task Due Date"
                              />
                            </div>
                          </div>

                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              {/* <label>Task Repeat:</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid mt-5"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.taskRepeat}
                                onChange={handleChange}
                                name="taskRepeat"
                              >
                                <option>Select Task Repeat</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              {/* <label>Task Remainder:</label> */}

                              <select
                                className="form-control form-control-lg form-control-solid mt-5"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.taskRemainder}
                                onChange={handleChange}
                                name="taskRemainder"
                              >
                                <option>Select Task Remainder</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-12">
                              {/* <label>Task Priority:</label> */}

                              <select
                                className="form-control form-control-lg form-control-solid my-5"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.taskPriority}
                                onChange={handleChange}
                                name="taskPriority"
                              >
                                <option>Select Task Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-12">
                              {/* <label>Task Description:</label> */}
                              <textarea
                                // type="text"
                                value={data.taskDescription}
                                onChange={handleChange}
                                name="taskDescription"
                                className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                placeholder="Enter Company Name"
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
                    navigation("/tasks/tasks");
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
