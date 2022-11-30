import { useEffect } from "react";
import { useIntl } from "react-intl";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageTitle } from "../../../_metronic/layout/core";
import {
  ListsWidget4,
  ListsWidget5,
  MixedWidget8,
  StatisticsWidget5,
  MixedWidget7,
  ListsWidget9,
  TablesWidget9,
  ListsWidget3,
  TablesWidget11,
  MixedWidget6,
} from "../../../_metronic/partials/widgets";
// import { getAllTasks } from '../../modules/task/tasks-list/_redux/taskAction'
import { RootStateOrAny } from "react-redux";
// import { getcampaigns, getLeads } from '../../modules/leads/leads-list/_redux/leadAction'
// import { getAllContacts } from '../../modules/Contact/contacts-list/_redux/contactAction'
// import { getAllBookings } from '../../modules/booking/bookings-list/_redux/bookingAction'
// import { getAlldeals } from '../../modules/deal/deals-list/_redux/dealAction'
import {
  getAllBookings,
  getAllCampaigns,
  getAllContacts,
  getAllDeals,
  getAllLeads,
  getAllTasks,
  getAllTickets,
  getCdrs,
} from "./_redux/dashboardAction";
const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById("kt_layout_toolbar")?.classList.remove("d-none");
    return () => {
      document.getElementById("kt_layout_toolbar")?.classList.add("d-none");
    };
  }, []);
  const companyId = useSelector((state: any) => state?.auth?.user?.company?.id);
  //   const token = useSelector((state) => state?.auth?.authToken);
  const token: any = useSelector<RootStateOrAny>(
    ({ auth }) => auth.authToken,
    shallowEqual
  );
  useEffect(() => {
    dispatch(getAllTasks(token, companyId));
    dispatch(getAllLeads(token, companyId));
    dispatch(getAllContacts(token, companyId));
    dispatch(getAllBookings());
    dispatch(getAllDeals(token, companyId));
    dispatch(getAllCampaigns(token));
    dispatch(getCdrs(token));
    dispatch(getAllTickets(token, companyId));
  }, []);
  // const task = useSelector((state) => state?.ManageTaskData?.Tasks);
  const task: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.Tasks,
    shallowEqual
  );
  const leads: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.Leads,
    shallowEqual
  );
  const contacts: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.Contacts,
    shallowEqual
  );
  const bookings: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.booking,
    shallowEqual
  );
  const deals: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.deals,
    shallowEqual
  );
  const campaigns: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.campaigns,
    shallowEqual
  );
  const cdrs: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.CDRS,
    shallowEqual
  );
  const Tickets: any = useSelector<RootStateOrAny>(
    ({ Dashboard }) => Dashboard.Tickets,
    shallowEqual
  );
  console.log(task, "tasks");
  console.log(leads, "leads");
  console.log(contacts, "contacts");
  console.log(bookings, "bookings");
  console.log(deals, "deals");
  console.log(campaigns, "campaigns");
  console.log(Tickets, "cdrs");
  const bucketListedTasks = task?.filter(
    (item: any) => item?.taskStatus?.taskStatusName === "Bucket List"
  );
  const toDoTasks = task?.filter(
    (item: any) => item?.taskStatus?.taskStatusName === "To-Do"
  );
  const delegatedTasks = task?.filter(
    (item: any) => item?.taskStatus?.taskStatusName === "Delegated"
  );
  const inProgressTasks = task?.filter(
    (item: any) => item?.taskStatus?.taskStatusName === "In-Progress"
  );
  const doneTasks = task?.filter(
    (item: any) => item?.taskStatus?.taskStatusName === "Done"
  );
  const verificationTasks = task?.filter(
    (item: any) => item?.taskStatus?.taskStatusName === "Verification"
  );
  const TicketsINProgress = Tickets?.filter(
    (item: any) => item?.ticketStatus?.ticketStatusName === "In Progress"
  );
  const TicketsINClosed = Tickets?.filter(
    (item: any) => item?.ticketStatus?.ticketStatusName === "Closed"
  );
  const TicketsINEscalated = Tickets?.filter(
    (item: any) => item?.ticketStatus?.ticketStatusName === "Escalated"
  );
  const TicketsINOpen = Tickets?.filter(
    (item: any) => item?.ticketStatus?.ticketStatusName === "Open"
  );
  const callDuration = cdrs
    ?.map((item: any) => Number(item?.call_duration))
    .reduce((a: any, b: any) => a + b, 0);

  return (
    <>
      <PageTitle breadcrumbs={[]} description="#XRS-45670">
        Dashboard
      </PageTitle>
      {/* Row */}
      <div id="kt_content_container" className="container-xxl">
        <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
          <div className="col-xl-3">
            <div className="row g-5 g-xl-8">
              <Link to="/leads/list">
                <div
                  className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x- h-xl-100"
                  style={{
                    backgroundColor: "#F1416C",
                    backgroundImage: `url$('assets/media/svg/shapes/wave-bg-red.svg')`,
                  }}
                >
                  <div className="card-header pt-5 mb-3">
                    <div
                      className="d-flex flex-center rounded-circle h-80px w-80px"
                      style={{
                        border: "1px dashed rgba(255, 255, 255, 0.4)",
                        backgroundColor: "#F1416C",
                      }}
                    >
                      <i className="fonticon-incoming-call text-white fs-2qx lh-0"></i>
                    </div>
                  </div>

                  <div className="card-body d-flex align-items- mb-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4hx text-white fw-bold me-6">
                        {leads?.length ? leads?.length : 0}
                      </span>
                      <div className="fw-bold fs-6 text-white">
                        <span className="d-block">Leads</span>
                        {/* <span className="">Calls</span> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="card-footer"
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                      backgroundColor: "rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="fw-bold text-white py-2">
                      <span className="fs-1 d-block">
                        {leads?.length ? leads?.length : 0}
                      </span>
                      <span className="opacity-50">Generated Leads</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-3">
            <Link to="/contacts">
              <div
                className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x- h-xl-100"
                style={{
                  backgroundColor: "#7239EA",
                  backgroundImage: `url$('assets/media/svg/shapes/wave-bg-purple.svg')`,
                }}
              >
                <div className="card-header pt-5 mb-3">
                  <div
                    className="d-flex flex-center rounded-circle h-80px w-80px"
                    style={{
                      border: "1px dashed rgba(255, 255, 255, 0.4)",
                      backgroundColor: "#7239EA",
                    }}
                  >
                    <i className="fonticon-outgoing-call text-white fs-2qx lh-0"></i>
                  </div>
                </div>

                <div className="card-body d-flex align-items- mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fs-4hx text-white fw-bold me-6">
                      {contacts?.length ? contacts?.length : 0}
                    </span>
                    <div className="fw-bold fs-6 text-white">
                      <span className="d-block">Contacts</span>
                      {/* <span className="">Calls</span> */}
                    </div>
                  </div>
                </div>

                <div
                  className="card-footer"
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="fw-bold text-white py-2">
                    <span className="fs-1 d-block">
                      {contacts?.length ? contacts?.length : 0}
                    </span>
                    <span className="opacity-50">Problems Solved</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3">
            <div className="row g-5 g-xl-8">
              <Link to="/tasks">
                <div
                  className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x- h-xl-100"
                  style={{
                    backgroundColor: "#F1416C",
                    backgroundImage: `url$('assets/media/svg/shapes/wave-bg-red.svg')`,
                  }}
                >
                  <div className="card-header pt-5 mb-3">
                    <div
                      className="d-flex flex-center rounded-circle h-80px w-80px"
                      style={{
                        border: "1px dashed rgba(255, 255, 255, 0.4)",
                        backgroundColor: "#F1416C",
                      }}
                    >
                      <i className="fonticon-incoming-call text-white fs-2qx lh-0"></i>
                    </div>
                  </div>

                  <div className="card-body d-flex align-items- mb-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4hx text-white fw-bold me-6">
                        {task?.length ? task?.length : 0}
                      </span>
                      <div className="fw-bold fs-6 text-white">
                        <span className="d-block">Tasks</span>
                        {/* <span className="">Calls</span> */}
                      </div>
                    </div>
                  </div>

                  <div
                    className="card-footer"
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                      backgroundColor: "rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="fw-bold text-white py-2">
                      <span className="fs-1 d-block">
                        {task?.length ? task?.length : 0}
                      </span>
                      <span className="opacity-50">Tasks Completed</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-3">
            <Link to="/deals">
              <div
                className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x- h-xl-100"
                style={{
                  backgroundColor: "#7239EA",
                  backgroundImage: `url$('assets/media/svg/shapes/wave-bg-purple.svg')`,
                }}
              >
                <div className="card-header pt-5 mb-3">
                  <div
                    className="d-flex flex-center rounded-circle h-80px w-80px"
                    style={{
                      border: "1px dashed rgba(255, 255, 255, 0.4)",
                      backgroundColor: "#7239EA",
                    }}
                  >
                    <i className="fonticon-outgoing-call text-white fs-2qx lh-0"></i>
                  </div>
                </div>

                <div className="card-body d-flex align-items- mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fs-4hx text-white fw-bold me-6">
                      {deals?.length ? deals?.length : 0}
                    </span>
                    <div className="fw-bold fs-6 text-white">
                      <span className="d-block">Deals</span>
                      {/* <span className="">Calls</span> */}
                    </div>
                  </div>
                </div>

                <div
                  className="card-footer"
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="fw-bold text-white py-2">
                    <span className="fs-1 d-block">
                      {deals?.length ? deals?.length : 0}
                    </span>
                    <span className="opacity-50">Deals Completed</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-12">
            <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
              {/* <div className="row g-5 g-xl-10 mb-5 mb-xl-10"> */}
              <div className="col-xl-6">
                <div className="card card-flush h-lg-100">
                  <div className="card-header pt-5">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold text-dark">CDR</span>
                      <span className="text-gray-400 mt-1 fw-semibold fs-6">
                        {cdrs?.length} Inbound Calls today
                      </span>
                    </h3>

                    {/* <div className="card-toolbar">

											<span className="badge badge-light-danger fs-base mt-n3">

												<span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
														<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
													</svg>
												</span>
											</span>

										</div> */}
                  </div>

                  <div className="card-body d-flex align-items- pt-6">
                    <div className="row align-items-center mx-0 w-100">
                      <div className="col-7 px-0">
                        <div className="d-flex flex-column content-justify-center">
                          {/* <div className="d-flex fs-6 fw-semibold align-items-center">

														<div className="bullet bg-success me-3" style={{ borderRadius: "3px", width: "12px", height: "12px" }}></div>

														<div className="fs-5 fw-bold text-gray-600 me-5">CRM Team Performance:</div>

														<div className="ms-auto fw-bolder text-gray-700 text-">72.56%</div>

													</div> */}

                          <div className="d-flex fs-6 fw-semibold align-items-center my-4">
                            <div
                              className="bullet bg-primary me-3"
                              style={{
                                borderRadius: "3px",
                                width: "12px",
                                height: "12px",
                              }}
                            ></div>

                            <div className="fs-5 fw-bold text-gray-600 me-5">
                              Recurring Calls:
                            </div>

                            <div className="ms-auto fw-bolder text-gray-700 text-">
                              {callDuration} Mins
                            </div>
                          </div>

                          <div className="d-flex fs-6 fw-semibold align-items-center">
                            <div
                              className="bullet me-3"
                              style={{
                                borderRadius: "3px",
                                backgroundColor: "#E4E6EF",
                                width: "12px",
                                height: "12px",
                              }}
                            ></div>

                            <div className="fs-5 fw-bold text-gray-600 me-5">
                              Tickets Raised:
                            </div>

                            <div className="ms-auto fw-bolder text-gray-700 text-">
                              {Tickets?.length}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-5 d-flex justify-content- px-0">
                        <div
                          id="kt_card_widget_19_chart"
                          className="min-h-auto h-150px w-150px"
                          data-kt-size="150"
                          data-kt-line="25"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div
                  className="card h-lg-100"
                  style={{
                    background:
                      "linear-gradient(112.14deg, #FF8A00 0%, #E96922 100%)",
                  }}
                >
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-sm-7 pe-0 mb-5 mb-sm-0">
                        <div className="d-flex justify-content-between h-100 flex-column pt-xl-5 pb-xl-2 ps-xl-7">
                          <div className="my-6">
                            <div className="my-6">
                              {/* <div> */}
                              <h3 className="fs-2x fw-semibold text-white">
                                Bookings
                              </h3>
                              <span className="fw-semibold text-white opacity-75">
                                Total Number of Bookings
                              </span>
                              {/* </div> */}
                              {/* <div> */}
                              <h1 className="fs-2x fw-semibold text-white">
                                {bookings?.length ? bookings?.length : 0}
                              </h1>
                              {/* </div> */}
                            </div>

                            {/* <div className="d-flex align-items-center flex-wrap d-grid gap-2">
												
																<div className="d-flex align-items-center me-5 me-xl-13">
														
																	<div className="symbol symbol-30px symbol-circle me-3">
																		<span className="symbol-label" style={{background: "rgba(255, 255, 255, 0.15)"}}>
																		
																			<span className="svg-icon svg-icon-4 svg-icon-white">
																				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																					<path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
																					<path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
																				</svg>
																			</span>
										
																		</span>
																	</div>
										
																	<div className="m-0">
																		<a href="../../demo6/dist/pages/user-profile/projects.html" className="text-white text-opacity-75 fs-8">Projects</a>
																		<span className="fw-bold text-white fs-7 d-block">Up to 500</span>
																	</div>
															
																</div>
																
																<div className="d-flex align-items-center">
												
																	<div className="symbol symbol-30px symbol-circle me-3">
																		<span className="symbol-label" style={{background: "rgba(255, 255, 255, 0.15)"}}>
																		
																			<span className="svg-icon svg-icon-4 svg-icon-white">
																				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																					<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
																					<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
																				</svg>
																			</span>
															
																		</span>
																	</div>
																
																	<div className="m-0">
																		<a href="../../demo6/dist/apps/user-management/users/list.html" className="text-white text-opacity-75 fs-8">Tasks</a>
																		<span className="fw-bold text-white fs-7 d-block">Unlimited</span>
																	</div>
											
																</div>
														
															</div> */}
                          </div>

                          {/* <div className="m-0">
															<a href="#" className="btn btn-color-white bg-white bg-opacity-15 bg-hover-opacity-25 fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Add Booking</a>
														</div> */}
                        </div>
                      </div>

                      <div className="col-sm-5">
                        <img
                          src="assets/media/svg/illustrations/easy/7.svg"
                          className="h-200px h-lg-250px my-n6"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="col-xl-12">
        <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
          <div className="col-xl-12 col-xxl-4">
            <div className="row gy-5 g-xl-10">
              <div className="col-md-6 col-xxl-12">
                <div
                  className="card card-flush border-0 h-xl-100"
                  data-theme="light"
                  style={{ backgroundColor: "#22232B" }}
                >
                  <div className="card-header pt-2">
                    <h3 className="card-title">
                      <span className="text-white fs-3 fw-bold me-2">
                        Tickets
                      </span>
                      <span className="badge badge-success">Active</span>
                    </h3>

                    {/* <div className="card-toolbar">

											<button className="btn btn-icon bg-white bg-opacity-10 btn-color-white btn-active-success w-25px h-25px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">

												<span className="svg-icon svg-icon-5">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
														<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
													</svg>
												</span>

											</button>

											<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

												<div className="menu-item px-3">
													<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
												</div>

												<div className="separator mb-3 opacity-75"></div>

												<div className="menu-item px-3">
													<a href="#" className="menu-link px-3">New Ticket</a>
												</div>

												<div className="menu-item px-3">
													<a href="#" className="menu-link px-3">New Customer</a>
												</div>

												<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

													<a href="#" className="menu-link px-3">
														<span className="menu-title">New Group</span>
														<span className="menu-arrow"></span>
													</a>

													<div className="menu-sub menu-sub-dropdown w-175px py-4">

														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3">Admin Group</a>
														</div>

														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3">Staff Group</a>
														</div>

														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3">Member Group</a>
														</div>

													</div>

												</div>

												<div className="menu-item px-3">
													<a href="#" className="menu-link px-3">New Contact</a>
												</div>

												<div className="separator mt-3 opacity-75"></div>

												<div className="menu-item px-3">
													<div className="menu-content px-3 py-3">
														<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
													</div>
												</div>

											</div>

										</div> */}
                  </div>

                  <div className="card-body d-flex justify-content-between flex-column pt-1 px-0 pb-0">
                    <div className="d-flex flex-wrap px-9 mb-5">
                      <div
                        className="rounded min-w-125px py-3 px-4 my-1 me-6"
                        style={{
                          border: "1px dashed rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="text-white fs-2 fw-bold">
                            {TicketsINOpen?.length}
                          </div>
                        </div>

                        <div className="fw-semibold fs-6 text-white opacity-50">
                          Tickets Open{" "}
                        </div>
                      </div>

                      <div
                        className="rounded min-w-125px py-3 px-4 my-1"
                        style={{
                          border: "1px dashed rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="text-white fs-2 fw-bold">
                            {TicketsINClosed?.length}
                          </div>
                        </div>

                        <div className="fw-semibold fs-6 text-white opacity-50">
                          Tickets Closed
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap px-9 ">
                      <div
                        className="rounded min-w-125px py-3 px-4 my-1 me-6"
                        style={{
                          border: "1px dashed rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="text-white fs-2 fw-bold">
                            {TicketsINProgress?.length}
                          </div>
                        </div>

                        <div className="fw-semibold fs-6 text-white opacity-50">
                          Tickets Progress{" "}
                        </div>
                      </div>

                      <div
                        className="rounded min-w-125px py-3 px-4 my-1"
                        style={{
                          border: "1px dashed rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="text-white fs-2 fw-bold">
                            {TicketsINEscalated?.length}
                          </div>
                        </div>

                        <div className="fw-semibold fs-6 text-white opacity-50">
                          Tickets Escalated
                        </div>
                      </div>
                    </div>

                    <div
                      id="kt_card_widget_1_chart"
                      data-kt-chart-color="primary"
                      style={{ height: "105px" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xxl-12">
                <div className="card card-flush h-xl-100">
                  <div className="card-header pt-5">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold text-dark fs-3">
                        Task
                      </span>
                      <span className="text-gray-400 mt-1 fw-semibold fs-6">
                        Tasks Updates............
                      </span>
                    </h3>

                    {/* <div className="card-toolbar">

											<button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">

												<span className="svg-icon svg-icon-1">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
														<rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
														<rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
														<rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
													</svg>
												</span>

											</button>

											<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

												<div className="menu-item px-3">
													<div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
												</div>

												<div className="separator mb-3 opacity-75"></div>

												<div className="menu-item px-3">
													<a href="#" className="menu-link px-3">New Ticket</a>
												</div>

												<div className="menu-item px-3">
													<a href="#" className="menu-link px-3">New Customer</a>
												</div>

												<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

													<a href="#" className="menu-link px-3">
														<span className="menu-title">New Group</span>
														<span className="menu-arrow"></span>
													</a>

													<div className="menu-sub menu-sub-dropdown w-175px py-4">

														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3">Admin Group</a>
														</div>

														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3">Staff Group</a>
														</div>

														<div className="menu-item px-3">
															<a href="#" className="menu-link px-3">Member Group</a>
														</div>

													</div>

												</div>

												<div className="menu-item px-3">
													<a href="#" className="menu-link px-3">New Contact</a>

													<div className="separator mt-3 opacity-75"></div>

													<div className="menu-item px-3">
														<div className="menu-content px-3 py-3">
															<a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
														</div>
													</div>

												</div>

											</div>

										</div> */}

                    <div className="card-body">
                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                            className="me-3 w-30px"
                            alt=""
                          />

                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                            >
                              bucket Listed
                            </a>
                            {/* <span className="text-gray-400 fw-semibold d-block fs-6">Community</span> */}
                          </div>
                        </div>

                        <div className="d-flex align-items-center w-100 mw-125px">
                          <div className="progress h-6px w-100 me-2 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{
                                width:
                                  (bucketListedTasks?.length / task?.length) *
                                  100,
                              }}
                              aria-valuenow={65}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                          <span className="text-gray-400 fw-semibold">
                            {(bucketListedTasks?.length / task?.length) * 100}%
                          </span>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-4"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src="assets/media/svg/brand-logos/instagram-2-1.svg"
                            className="me-3 w-30px"
                            alt=""
                          />

                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                            >
                              verification
                            </a>
                            {/* <span className="text-gray-400 fw-semibold d-block fs-6">Social Media</span> */}
                          </div>
                        </div>

                        <div className="d-flex align-items-center w-100 mw-125px">
                          <div className="progress h-6px w-100 me-2 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{
                                width:
                                  (verificationTasks?.length / task?.length) *
                                  100,
                              }}
                              aria-valuenow={87}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                          <span className="text-gray-400 fw-semibold">
                            {(verificationTasks?.length / task?.length) * 100}%
                          </span>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-4"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src="assets/media/svg/brand-logos/slack-icon.svg"
                            className="me-3 w-30px"
                            alt=""
                          />

                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                            >
                              Done
                            </a>
                            {/* <span className="text-gray-400 fw-semibold d-block fs-6">Messenger</span> */}
                          </div>
                        </div>

                        <div className="d-flex align-items-center w-100 mw-125px">
                          <div className="progress h-6px w-100 me-2 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{
                                width: (doneTasks?.length / task?.length) * 100,
                              }}
                              aria-valuenow={44}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                          <span className="text-gray-400 fw-semibold">
                            {(doneTasks?.length / task?.length) * 100}%
                          </span>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-4"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src="assets/media/svg/brand-logos/google-icon.svg"
                            className="me-3 w-30px"
                            alt=""
                          />

                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                            >
                              In Progress
                            </a>
                            {/* <span className="text-gray-400 fw-semibold d-block fs-6">SEO & PPC</span> */}
                          </div>
                        </div>

                        <div className="d-flex align-items-center w-100 mw-125px">
                          <div className="progress h-6px w-100 me-2 bg-light-info">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{
                                width:
                                  (inProgressTasks?.length / task?.length) *
                                  100,
                              }}
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                          <span className="text-gray-400 fw-semibold">
                            {(inProgressTasks?.length / task?.length) * 100}%
                          </span>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-4"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src="assets/media/svg/brand-logos/google-icon.svg"
                            className="me-3 w-30px"
                            alt=""
                          />

                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                            >
                              delegated{" "}
                            </a>
                            {/* <span className="text-gray-400 fw-semibold d-block fs-6">SEO & PPC</span> */}
                          </div>
                        </div>

                        <div className="d-flex align-items-center w-100 mw-125px">
                          <div className="progress h-6px w-100 me-2 bg-light-info">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{
                                width:
                                  (delegatedTasks?.length / task?.length) * 100,
                              }}
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                          <span className="text-gray-400 fw-semibold">
                            {(delegatedTasks?.length / task?.length) * 100}%
                          </span>
                        </div>
                      </div>

                      <div className="separator separator-dashed my-4"></div>

                      <div className="d-flex flex-stack">
                        <div className="d-flex align-items-center me-3">
                          <img
                            src="assets/media/svg/brand-logos/google-icon.svg"
                            className="me-3 w-30px"
                            alt=""
                          />

                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                            >
                              To Do{" "}
                            </a>
                            {/* <span className="text-gray-400 fw-semibold d-block fs-6">SEO & PPC</span> */}
                          </div>
                        </div>

                        <div className="d-flex align-items-center w-100 mw-125px">
                          <div className="progress h-6px w-100 me-2 bg-light-info">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{
                                width: (toDoTasks?.length / task?.length) * 100,
                              }}
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                          <span className="text-gray-400 fw-semibold">
                            {(toDoTasks?.length / task?.length) * 100}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-xxl-8 mb-5 mb-xl-10">
            <div className="card card-flush h-xl-100">
              <div className="card-header py-7">
                <div
                  className="card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0"
                  data-kt-table-widget-3="tabs_nav"
                >
                  <div
                    className="fs-4 fw-bold pb-3 border-bottom border-3 border-primary cursor-pointer"
                    data-kt-table-widget-3="tab"
                    data-kt-table-widget-3-value="Show All"
                  >
                    All Campaigns ({campaigns?.length ? campaigns?.length : 0})
                  </div>
                  {/* 
									<div className="fs-4 fw-bold text-muted pb-3 cursor-pointer" data-kt-table-widget-3="tab" data-kt-table-widget-3-value="Pending">Draft</div>

									<div className="fs-4 fw-bold text-muted pb-3 cursor-pointer" data-kt-table-widget-3="tab" data-kt-table-widget-3-value="Completed">Completed</div> */}
                </div>

                <div className="card-toolbar">
                  <Link
                    to="/campaigns/campaigns/campaignadduser"
                    type="button"
                    className="btn btn-primary"
                  >
                    Create Campaign
                  </Link>
                </div>
              </div>

              <div className="card-body pt-1">
                {/* <div className="d-flex flex-stack flex-wrap gap-4">

									<div className="d-flex align-items-center flex-wrap gap-3 gap-xl-9">

										<div className="d-flex align-items-center fw-bold">

											<div className="text-muted fs-7">Type</div>

											<select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-hide-search="true" data-control="select2" data-dropdown-css-className="w-150px" data-placeholder="Select an option">
												<option></option>
												<option value="Show All" selected>Show All</option>
												<option value="Newest">Newest</option>
												<option value="oldest">Oldest</option>
											</select>

										</div>

										<div className="d-flex align-items-center fw-bold">

											<div className="text-muted fs-7 me-2">Status</div>

											<select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-hide-search="true" data-control="select2" data-dropdown-css-className="w-150px" data-placeholder="Select an option" data-kt-table-widget-3="filter_status">
												<option></option>
												<option value="Show All" selected>Show All</option>
												<option value="Live Now">Live Now</option>
												<option value="Reviewing">Reviewing</option>
												<option value="Paused">Paused</option>
											</select>

										</div>

										<div className="d-flex align-items-center fw-bold">

											<div className="text-muted me-2">Budget</div>

											<select className="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-hide-search="true" data-dropdown-css-className="w-150px" data-control="select2" data-placeholder="Select an option" data-kt-table-widget-3="filter_status">
												<option></option>
												<option value="Show All" selected>Show All</option>
												<option value="&lt;5000">Less than $5,000</option>
												<option value="5000-10000">$5,001 - $10,000</option>
												<option value="&gt;10000">More than $10,001</option>
											</select>

										</div>

									</div>

									<div className="d-flex align-items-center gap-4">

										<a href="#" className="text-hover-primary ps-4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">

											<span className="svg-icon svg-icon-2 svg-icon-gray-400">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
												</svg>
											</span>

										</a>

										<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_631f1e5a1483f">

											<div className="px-7 py-5">
												<div className="fs-5 text-dark fw-bold">Filter Options</div>
											</div>

											<div className="separator border-gray-200"></div>

											<div className="px-7 py-5">

												<div className="mb-10">

													<label className="form-label fw-semibold">Status:</label>

													<div>
														<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_631f1e5a1483f" data-allow-clear="true">
															<option></option>
															<option value="1">Approved</option>
															<option value="2">Pending</option>
															<option value="2">In Process</option>
															<option value="2">Rejected</option>
														</select>
													</div>

												</div>

												<div className="mb-10">

													<label className="form-label fw-semibold">Member Type:</label>

													<div className="d-flex">

														<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
															<input className="form-check-input" type="checkbox" value="1" />
															<span className="form-check-label">Author</span>
														</label>

														<label className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="2" checked />
															<span className="form-check-label">Customer</span>
														</label>

													</div>

												</div>

												<div className="mb-10">

													<label className="form-label fw-semibold">Notifications:</label>

													<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
														<input className="form-check-input" type="checkbox" value="" name="notifications" checked />
														<label className="form-check-label">Enabled</label>
													</div>

												</div>

												<div className="d-flex justify-content-end">
													<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
													<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
												</div>

											</div>

										</div>

									</div>

								</div> */}

                {/* <div className="separator separator-dashed my-5"></div> */}
                <div style={{ overflow: "scroll" }}>
                  <table
                    id="kt_widget_table_3"
                    className="table table-row-dashed align-middle fs-6 gy-4 my-0 pb-3"
                    data-kt-table-widget-3="all"
                  >
                    <thead className="d-none">
                      <tr>
                        <th>Campaign</th>
                        <th>Platforms</th>
                        <th>Status</th>
                        <th>Team</th>
                        <th>Date</th>
                        <th>Progress</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns?.map((item: any) => (
                        <tr>
                          <td className="min-w-175px">
                            <div className="position-relative ps-6 pe-3 py-2">
                              <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info"></div>
                              <a
                                href="#"
                                className="mb-1 text-dark text-hover-primary fw-bold"
                              >
                                {item?.campaignName ? item?.campaignName : " "}
                              </a>
                              <div className="fs-7 text-muted fw-bold">
                                Created on{" "}
                                {item?.createdAt
                                  ? item?.createdAt?.slice(0, 10)
                                  : " "}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="mb-1 text-dark text-hover-primary fw-bold">
                              {item?.company ? item?.company?.companyName : " "}
                              {/* <a href="#">
																	<img src="assets/media/svg/brand-logos/facebook-4.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/twitter-2.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/linkedin-2.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/youtube-3.svg" className="w-20px" alt="" />
																</a> */}
                            </div>

                            {/* <div className="fs-7 text-muted fw-bold">Labor 24 - 35 years</div> */}
                          </td>
                          <td>
                            <span className="badge badge-light-success">
                              {item?.campaignStatus?.campaignStatusName}
                            </span>
                          </td>
                          {/* <td className="min-w-125px">
											
															<div className="symbol-group symbol-hover mb-1">
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-6.jpg" alt="" />
																</div>
														
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-5.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-25.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-9.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-danger">
																		<span className="fs-7 text-inverse-danger">E</span>
																	</div>
																</div>
																
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-dark">
																		<span className="fs-8 text-inverse-dark">+0</span>
																	</div>
																</div>
															</div>
													
															<div className="fs-7 fw-bold text-muted">Team Members</div>
														</td> */}
                          {/* <td className="min-w-150px">
															<div className="mb-2 fw-bold">24 Dec 21 - 06 Jan 22</div>
															<div className="fs-7 fw-bold text-muted">Date range</div>
														</td> */}
                          <td className="d-none">Pending</td>
                          <td className="text-end">
                            <button
                              type="button"
                              className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                            >
                              <span className="svg-icon">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {/* <tr>
														<td className="min-w-175px">
															<div className="position-relative ps-6 pe-3 py-2">
																<div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning"></div>
																<a href="#" className="mb-1 text-dark text-hover-primary fw-bold">Halloween</a>
																<div className="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
															</div>
														</td>
														<td>
															
															<div className="d-flex gap-2 mb-2">
																<a href="#">
																	<img src="assets/media/svg/brand-logos/twitter-2.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/youtube-3.svg" className="w-20px" alt="" />
																</a>
															</div>
															
															<div className="fs-7 text-muted fw-bold">Labor 37 - 52 years</div>
														</td>
														<td>
															<span className="badge badge-light-primary">Reviewing</span>
														</td>
														<td className="min-w-125px">
													
															<div className="symbol-group symbol-hover mb-1">
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-1.jpg" alt="" />
																</div>
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-25.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-6.jpg" alt="" />
																</div>
																
															</div>
															
															<div className="fs-7 fw-bold text-muted">Team Members</div>
														</td>
														<td className="min-w-150px">
															<div className="mb-2 fw-bold">03 Feb 22 - 14 Feb 22</div>
															<div className="fs-7 fw-bold text-muted">Date range</div>
														</td>
														<td className="d-none">Completed</td>
														<td className="text-end">
															<button type="button" className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
														
																<span className="svg-icon">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																		<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
																	</svg>
																</span>
												
															</button>
														</td>
													</tr>
													<tr>
														<td className="min-w-175px">
															<div className="position-relative ps-6 pe-3 py-2">
																<div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success"></div>
																<a href="#" className="mb-1 text-dark text-hover-primary fw-bold">Cyber Monday</a>
																<div className="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
															</div>
														</td>
														<td>
															
															<div className="d-flex gap-2 mb-2">
																<a href="#">
																	<img src="assets/media/svg/brand-logos/facebook-4.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="w-20px" alt="" />
																</a>
															</div>
															
															<div className="fs-7 text-muted fw-bold">Labor 24 - 38 years</div>
														</td>
														<td>
															<span className="badge badge-light-success">Live Now</span>
														</td>
														<td className="min-w-125px">
													
															<div className="symbol-group symbol-hover mb-1">
																
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-danger">
																		<span className="fs-7 text-inverse-danger">M</span>
																	</div>
																</div>
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-6.jpg" alt="" />
																</div>
																
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-primary">
																		<span className="fs-7 text-inverse-primary">N</span>
																	</div>
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-13.jpg" alt="" />
																</div>
															
															</div>
														
															<div className="fs-7 fw-bold text-muted">Team Members</div>
														</td>
														<td className="min-w-150px">
															<div className="mb-2 fw-bold">19 Mar 22 - 04 Apr 22</div>
															<div className="fs-7 fw-bold text-muted">Date range</div>
														</td>
														<td className="d-none">Pending</td>
														<td className="text-end">
															<button type="button" className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
																
																<span className="svg-icon">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																		<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
																	</svg>
																</span>
													
															</button>
														</td>
													</tr>
													<tr>
														<td className="min-w-175px">
															<div className="position-relative ps-6 pe-3 py-2">
																<div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger"></div>
																<a href="#" className="mb-1 text-dark text-hover-primary fw-bold">Thanksgiving</a>
																<div className="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
															</div>
														</td>
														<td>
															
															<div className="d-flex gap-2 mb-2">
																<a href="#">
																	<img src="assets/media/svg/brand-logos/twitter-2.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/linkedin-2.svg" className="w-20px" alt="" />
																</a>
															</div>
															
															<div className="fs-7 text-muted fw-bold">Labor 24 - 38 years</div>
														</td>
														<td>
															<span className="badge badge-light-warning">Paused</span>
														</td>
														<td className="min-w-125px">
													
															<div className="symbol-group symbol-hover mb-1">
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-6.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-25.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-1.jpg" alt="" />
																</div>
														
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-primary">
																		<span className="fs-7 text-inverse-primary">N</span>
																	</div>
																</div>
														
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-5.jpg" alt="" />
																</div>
																
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-dark">
																		<span className="fs-8 text-inverse-dark">+0</span>
																	</div>
																</div>
															
															</div>
														
															<div className="fs-7 fw-bold text-muted">Team Members</div>
														</td>
														<td className="min-w-150px">
															<div className="mb-2 fw-bold">20 Jun 22 - 30 Jun 22</div>
															<div className="fs-7 fw-bold text-muted">Date range</div>
														</td>
														<td className="d-none">Pending</td>
														<td className="text-end">
															<button type="button" className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
														
																<span className="svg-icon">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																		<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
																	</svg>
																</span>
														
															</button>
														</td>
													</tr>
													<tr>
														<td className="min-w-175px">
															<div className="position-relative ps-6 pe-3 py-2">
																<div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-primary"></div>
																<a href="#" className="mb-1 text-dark text-hover-primary fw-bold">Happy Mother's Day</a>
																<div className="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
															</div>
														</td>
														<td>
															
															<div className="d-flex gap-2 mb-2">
																<a href="#">
																	<img src="assets/media/svg/brand-logos/youtube-3.svg" className="w-20px" alt="" />
																</a>
															</div>
															
															<div className="fs-7 text-muted fw-bold">Labor 30 - 40 years</div>
														</td>
														<td>
															<span className="badge badge-light-warning">Paused</span>
														</td>
														<td className="min-w-125px">
												
															<div className="symbol-group symbol-hover mb-1">
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-23.jpg" alt="" />
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-13.jpg" alt="" />
																</div>
																
															</div>
															
															<div className="fs-7 fw-bold text-muted">Team Members</div>
														</td>
														<td className="min-w-150px">
															<div className="mb-2 fw-bold">01 Aug 22 - 01 Sep 22</div>
															<div className="fs-7 fw-bold text-muted">Date range</div>
														</td>
														<td className="d-none">Completed</td>
														<td className="text-end">
															<button type="button" className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
															
																<span className="svg-icon">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																		<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
																	</svg>
																</span>
														
															</button>
														</td>
													</tr>
													<tr>
														<td className="min-w-175px">
															<div className="position-relative ps-6 pe-3 py-2">
																<div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success"></div>
																<a href="#" className="mb-1 text-dark text-hover-primary fw-bold">Team Getaway</a>
																<div className="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
															</div>
														</td>
														<td>
															
															<div className="d-flex gap-2 mb-2">
																<a href="#">
																	<img src="assets/media/svg/brand-logos/twitter-2.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="w-20px" alt="" />
																</a>
																<a href="#">
																	<img src="assets/media/svg/brand-logos/youtube-3.svg" className="w-20px" alt="" />
																</a>
															</div>
															
															<div className="fs-7 text-muted fw-bold">Labor 24 - 38 years</div>
														</td>
														<td>
															<span className="badge badge-light-success">Live Now</span>
														</td>
														<td className="min-w-125px">
														
															<div className="symbol-group symbol-hover mb-1">
																
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-6.jpg" alt="" />
																</div>
														
																<div className="symbol symbol-circle symbol-25px">
																	<img src="assets/media/avatars/300-13.jpg" alt="" />
																</div>
																
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-primary">
																		<span className="fs-7 text-inverse-primary">N</span>
																	</div>
																</div>
															
																<div className="symbol symbol-circle symbol-25px">
																	<div className="symbol-label bg-info">
																		<span className="fs-7 text-inverse-info">A</span>
																	</div>
																</div>
																
															</div>
															
															<div className="fs-7 fw-bold text-muted">Team Members</div>
														</td>
														<td className="min-w-150px">
															<div className="mb-2 fw-bold">24 Jul 22 - 26 Jul 22</div>
															<div className="fs-7 fw-bold text-muted">Date range</div>
														</td>
														<td className="d-none">Completed</td>
														<td className="text-end">
															<button type="button" className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
																
																<span className="svg-icon">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
																		<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
																	</svg>
																</span>
															
															</button>
														</td>
													</tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
const DashboardWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
