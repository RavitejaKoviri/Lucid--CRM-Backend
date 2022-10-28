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

  const [data, setData] = useState({
    ticketStatus: "",
    ticketName: "",
    ticketPriority: "",
    ticketAssignedTo: "",
    customer: "",
    ticketStartDate: "",
    ticketEndDate: "",
    company: user?.company?.id,
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getticketsById(id?.id, token));
    setTickets(true);
  }, [ticketsById?.id]);

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
    });
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
      ticketStatus: "",
      ticketName: "",
      ticketPriority: "",
      ticketAssignedTo: "",
      customer: "",
      ticketStartDate: "",
      ticketEndDate: "",
      company: "",
    });
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
