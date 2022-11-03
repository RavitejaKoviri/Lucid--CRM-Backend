import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getticketStatuses,
  CreateTicket,
  getassignedTo,
  getcustomerTo,
  getticketsById,
  UpdateTickets,
} from "../../_redux/ticketAction";

export default function TicketAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const id: any = location?.state;
  console.log(id, "dealid");
  const [tickets, setTickets] = useState(false);

  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const userassign = useSelector((state: any) => state?.TicketData?.assignedTo);
  const customer = useSelector((state: any) => state?.TicketData?.customerTo);
  const ticketsById = useSelector(
    (state: any) => state?.TicketData?.ticketsById
  );

  const status = useSelector((state: any) => state?.TicketData?.ticketStatus);
  console.log(status, "status");

  useEffect(() => {
    dispatch(getticketStatuses(token));
    dispatch(getassignedTo(token));
    dispatch(getcustomerTo(token));
  }, []);
  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();

  const [data, setData] = useState({
    ticketStatus: "",
    ticketName: "",
    ticketPriority: "",
    ticketAssignedTo: "",
    customer: "",
    ticketStartDate: "",
    ticketEndDate: "",
    company: user?.company?.id,
    image: imageUrl,
    description: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getticketsById(id?.id, token));
    setTickets(true);
  }, [ticketsById?.id])
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

  useEffect(() => {
    setData({
      ticketName: ticketsById?.ticketName,
      ticketStartDate: ticketsById?.ticketStartDate,
      ticketEndDate: ticketsById?.ticketEndDate,
      customer: ticketsById?.customer?.id,
      ticketAssignedTo: ticketsById?.ticketAssignedTo?.id,
      company: user?.company?.id,
      ticketStatus: ticketsById?.ticketStatus?.id,
      ticketPriority: ticketsById?.ticketPriority,
      image: ticketsById?.image,
      description: ticketsById?.description,
    })
    setTickets(false);
  }, [tickets]);

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");

    if (id !== null) {
      dispatch(UpdateTickets(data, id?.id, token));
    } else {
      dispatch(CreateTicket(data, token));
    }
    setData({
      ticketStatus: '',
      ticketName: '',
      ticketPriority: '',
      ticketAssignedTo: '',
      customer: '',
      ticketStartDate: '',
      ticketEndDate: '',
      company: '',
      description: "",
      image: [],
    });
    navigation("/ticket/ticket");
  };

  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
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
                className="form-control"
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
                    id="kt_ecommerce_add_product_status_select"
                    value={data.ticketStatus}
                    onChange={handleChange}
                    name="ticketStatus"
                  >
                    <option>--Select Status --</option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.ticketStatusName}</option>
                    ))}
                    {/* <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option> */}
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
                <div
                  className="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                  role="tab-panel"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Ticket Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-6 mb-4">
                              {/* <label>Name</label> */}
                              <input
                                type="text"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter TicketName"
                                value={data.ticketName}
                                onChange={handleChange}
                                name="ticketName"
                              />
                            </div>
                            <div className="col-lg-6 mb-4">
                              {/* <label>Priority</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.ticketPriority}
                                onChange={handleChange}
                                name="ticketPriority"
                              >
                                <option>--Select Priority --</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6 mb-4">
                              {/* <label>AssignedTo</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.ticketAssignedTo}
                                onChange={handleChange}
                                name="ticketAssignedTo"
                              >
                                <option>--Select AssignedTo --</option>

                                {userassign?.map((item: any) => (
                                  <option value={item?.id}>
                                    {item?.username}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-6 mb-4">
                              {/* <label>Customer</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.customer}
                                onChange={handleChange}
                                name="customer"
                              >
                                <option>--Select customer --</option>

                                {customer?.map((item: any) => (
                                  <option value={item?.id}>
                                    {item?.customerName}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6 mb-4">
                              {/* <label>Start Date</label> */}
                              <input
                                type="date"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter customer"
                                value={data.ticketStartDate}
                                onChange={handleChange}
                                name="ticketStartDate"
                              />
                            </div>
                            <div className="col-lg-6">
                              {/* <label>End Date</label> */}
                              <input
                                type="date"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Company"
                                value={data.ticketEndDate}
                                onChange={handleChange}
                                name="ticketEndDate"
                              />
                            </div>
                          </div>

                          {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Website:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Website"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Source:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Source"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>CampaignSource:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter CampaignSource"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Company:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Status:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Status"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Owner:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Owner"
                              />
                            </div>
                          </div> */}
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
                    navigation("/ticket/ticket");
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  id="kt_ecommerce_add_product_submit"
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
