import React, { useContext, useEffect, useMemo, useState } from "react";
// import  { moveCard } from "@lourenci/react-kanban";
// import "@lourenci/react-kanban/dist/styles.css";
// @asseinfo/react-kanban components
import Board, { moveCard } from "@asseinfo/react-kanban";
// import boards from "./data";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
// @mui material components
import Icon from "@mui/material/Icon";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";
// html-react-parser components
import parse from "html-react-parser";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from "react-redux";
import { getAlldeals, getdealsById, UpdateDeal } from "../_redux/dealAction";
import DealContext from "../table/columns/context";
import axios from "axios";
import { Button } from "@mui/material";

const DealIndex = () => {
  // const [controller] = useArgonController();
  // const { darkMode } = controller;
  const dispatch = useDispatch();
  // const [newCardForm, setNewCardForm] = useState(false);
  // const [formValue, setFormValue] = useState("");

  // const openNewCardForm = (event, id) => setNewCardForm(id);
  // const closeNewCardForm = () => setNewCardForm(false);
  // const handeSetFormValue = ({ currentTarget }) =>
  //   setFormValue(currentTarget.value);
  const { searchTerm } = useContext(DealContext);
  const dealsData = useSelector((state) => state?.deal?.deals);
  const deal = useSelector((state) => state?.deal?.dealsById);
  console.log(deal, "deal");
  const deals = dealsData.filter((val) => {
    if (searchTerm === "") {
      return val;
    }
    if (val?.dealName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
      return val;
    }
    if (val?.dealContactPersonName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
      return val;
    }
  });
  const token = useSelector((state) => state?.auth?.authToken);
  useEffect(() => {
    dispatch(getAlldeals(token));
  }, []);
  console.log(deals, "deals");

  const Qualification = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Qualification"
  );
  const NeedsAnalysis = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Needs Analysis"
  );
  const ValueProposition = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Value Proposition"
  );
  const IdentifyDecisionMakers = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Identify Decision Makers"
  );
  const Proposal = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Proposal/Price Quote"
  );
  const Negotiation = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Negotiation/Review"
  );
  const ClosedWon = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Closed Won"
  );
  const ClosedLost = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Closed Lost"
  );
  const ClosedCompetition = deals?.filter(
    (item) => item?.dealStatus?.dealStatusName === "Closed-Lost to Competition"
  );
  console.log(Qualification, "ValueProposition");

  const boards = {
    columns: [
      {
        id: "Value Proposition",
        title: "Value Proposition",
        cards: ValueProposition ? ValueProposition : [],
      },
      {
        id: "Qualification",
        title: "Qualification",
        cards: Qualification ? Qualification : [],
      },
      {
        id: "Proposal/Price Quote",
        title: "Proposal/Price Quote",
        cards: Proposal ? Proposal : [],
      },
      {
        id: "Negotiation/Review",
        title: "Negotiation/Review",
        cards: Negotiation ? Negotiation : [],
      },
      {
        id: "Needs Analysis",
        title: "Needs Analysis",
        cards: NeedsAnalysis ? NeedsAnalysis : [],
      },
      {
        id: "Identify Decision Makers",
        title: "Identify Decision Makers",
        cards: IdentifyDecisionMakers ? IdentifyDecisionMakers : [],
      },
      {
        id: "Closed-Lost to Competition",
        title: "Closed-Lost to Competition",
        cards: ClosedCompetition ? ClosedCompetition : [],
      },
      {
        id: "Closed Won",
        title: "Closed Won",
        cards: ClosedWon ? ClosedWon : [],
      },
      {
        id: "Closed Lost",
        title: "Closed Lost",
        cards: ClosedLost ? ClosedLost : [],
      },
    ],
  };

  function handleCardMove(board, card, source, destination) {

    axios.get(`http://65.2.10.157:5377/deal-statuses?dealStatusName=${destination?.toColumnId}`, {
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
    }).then(({ data }) => {
      const dealStatus = data[0]
      const dealdata = { ...card, dealStatus }
      dispatch(UpdateDeal(dealdata, card?.id, token))
      console.log(dealdata, "dealdata");
    })
      .catch(() => { });

  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    dispatch(getdealsById(id, token))
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="tab-content">
        <Board
          initialBoard={boards}
          allowAddCard
          allowAddColumn
          onCardDragEnd={handleCardMove}
          renderColumnHeader={({ id, title }, { addCard }) => (
            <>
              <div className="mb-9" key={id} style={{ margin: 15 }}>
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">
                    {title}
                    {/* <span className="fs-6 text-gray-400 ms-2">2</span> */}
                  </div>
                  {/* begin::Menu */}
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="currentColor"
                            />
                            <rect
                              x="14"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x="5"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="currentColor"
                              opacity="0.3"
                            />
                            <rect
                              x="14"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="currentColor"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/* end::Svg Icon */}
                    </button>
                    {/* begin::Menu 1 */}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_631f1dcbb4a9f"
                    >
                      {/* begin::Header */}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">
                          Filter Options
                        </div>
                      </div>
                      {/* end::Header */}
                      {/* begin::Menu separator */}
                      <div className="separator border-gray-200"></div>
                      {/* end::Menu separator */}
                      {/* begin::Form */}
                      <div className="px-7 py-5">
                        {/* begin::Input group */}
                        <div className="mb-10">
                          {/* begin::Label */}
                          <label className="form-label fw-semibold">
                            Status:
                          </label>
                          {/* end::Label */}
                          {/* begin::Input */}
                          <div>
                            <select
                              className="form-select form-select-solid"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_631f1dcbb4a9f"
                              data-allow-clear="true"
                            >
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                          {/* end::Input */}
                        </div>

                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/* end::Actions */}
                      </div>
                      {/* end::Form */}
                    </div>
                    {/* end::Menu 1 */}
                  </div>
                  {/* end::Menu */}
                </div>
                <div className="h-3px w-100 bg-warning"></div>
              </div>
              {/* <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}} >
              <h6>{title}</h6>
              <button
                onClick={(event) => openNewCardForm(event, id)}
              >
                <Icon
                >
                  add
                </Icon>
              </button>
            </div> */}
              {/* {newCardForm === id ? (
              <div>
                <input
                  value={formValue}
                  onChange={handeSetFormValue}
                />
                <div style={{display:'flex'}}>
                  <button
                    onClick={() => {
                      addCard({ id: uuidv4(), template: formValue });
                      setFormValue("");
                    }}
                  >
                    add
                  </button>
                  <div>
                    <button
                      onClick={closeNewCardForm}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : null} */}
            </>
          )}
          renderCard={({ id, dealName, dealContactPersonName }, { dragging }) => (
            <div
              style={{
                display: "block",
                width: "calc(450px - 40px)",
                margin: 15,
              }}
              key={id}
              dragging={dragging.toString() || undefined}
            >
              <div className="card mb-6 mb-xl-9">
                {/* begin::Card body */}
                <div className="card-body">
                  {/* begin::Header */}
                  <div className="d-flex flex-stack mb-3">
                    {/* begin::Badge */}
                    <div className="badge badge-light">Development</div>
                    {/* end::Badge */}
                    {/* begin::Menu */}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <rect
                                x="5"
                                y="5"
                                width="5"
                                height="5"
                                rx="1"
                                fill="currentColor"
                              />
                              <rect
                                x="14"
                                y="5"
                                width="5"
                                height="5"
                                rx="1"
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x="5"
                                y="14"
                                width="5"
                                height="5"
                                rx="1"
                                fill="currentColor"
                                opacity="0.3"
                              />
                              <rect
                                x="14"
                                y="14"
                                width="5"
                                height="5"
                                rx="1"
                                fill="currentColor"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        {/* end::Svg Icon */}
                      </button>
                      {/* begin::Menu 3 */}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        {/* begin::Heading */}
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        {/* end::Heading */}
                        {/* begin::Menu item */}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
                        {/* end::Menu item */}
                        {/* begin::Menu item */}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link flex-stack px-3">
                            Create Payment
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="Specify a target name for future usage and reference"
                            ></i>
                          </a>
                        </div>
                        {/* end::Menu item */}
                        {/* begin::Menu item */}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        {/* end::Menu item */}
                        {/* begin::Menu item */}
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          {/* begin::Menu sub */}
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/* begin::Menu item */}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            {/* end::Menu item */}
                            {/* begin::Menu item */}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            {/* end::Menu item */}
                            {/* begin::Menu item */}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            {/* end::Menu item */}
                            {/* begin::Menu separator */}
                            <div className="separator my-2"></div>
                            {/* end::Menu separator */}
                            {/* begin::Menu item */}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                {/* begin::Switch */}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  {/* begin::Input */}
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    value="1"
                                    checked="checked"
                                    name="notifications"
                                  />
                                  {/* end::Input */}
                                  {/* end::Label */}
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                  {/* end::Label */}
                                </label>
                                {/* end::Switch */}
                              </div>
                            </div>
                            {/* end::Menu item */}
                          </div>
                          {/* end::Menu sub */}
                        </div>
                        {/* end::Menu item */}
                        {/* begin::Menu item */}
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                        {/* end::Menu item */}
                      </div>
                      {/* end::Menu 3 */}
                    </div>
                    {/* end::Menu */}
                    {/* begin::Menu */}
                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        onClick={() => { handleClickOpen(id) }}
                      >
                        {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                        <svg width="16" height="14" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2944_960)">
                            <path d="M13.4184 5.65781C12.1474 3.17789 9.63116 1.5 6.74999 1.5C3.86882 1.5 1.35186 3.17906 0.0815497 5.65805C0.0279345 5.7641 0 5.88128 0 6.00012C0 6.11896 0.0279345 6.23613 0.0815497 6.34219C1.35257 8.82211 3.86882 10.5 6.74999 10.5C9.63116 10.5 12.1481 8.82094 13.4184 6.34195C13.472 6.2359 13.5 6.11872 13.5 5.99988C13.5 5.88104 13.472 5.76387 13.4184 5.65781V5.65781ZM6.74999 9.375C6.08248 9.375 5.42995 9.17706 4.87494 8.80621C4.31992 8.43536 3.88734 7.90826 3.63189 7.29156C3.37645 6.67486 3.30961 5.99626 3.43984 5.34157C3.57006 4.68688 3.8915 4.08552 4.3635 3.61351C4.8355 3.14151 5.43687 2.82007 6.09156 2.68985C6.74624 2.55962 7.42484 2.62646 8.04154 2.88191C8.65824 3.13735 9.18535 3.56993 9.5562 4.12495C9.92705 4.67997 10.125 5.33249 10.125 6C10.1252 6.44327 10.0381 6.88224 9.86852 7.29181C9.69899 7.70138 9.45039 8.07353 9.13695 8.38697C8.82351 8.70041 8.45137 8.949 8.0418 9.11853C7.63223 9.28807 7.19326 9.37522 6.74999 9.375V9.375ZM6.74999 3.75C6.54916 3.75281 6.34963 3.78269 6.15678 3.83883C6.31574 4.05485 6.39202 4.32068 6.37179 4.58811C6.35156 4.85555 6.23616 5.10688 6.04651 5.29652C5.85686 5.48617 5.60553 5.60157 5.3381 5.6218C5.07066 5.64203 4.80483 5.56575 4.58882 5.4068C4.46581 5.85998 4.48801 6.34033 4.6523 6.78023C4.81659 7.22014 5.1147 7.59745 5.50466 7.85905C5.89462 8.12066 6.3568 8.25339 6.82615 8.23856C7.2955 8.22374 7.74838 8.0621 8.12105 7.7764C8.49372 7.4907 8.76742 7.09533 8.90362 6.64593C9.03982 6.19654 9.03166 5.71575 8.88029 5.27123C8.72893 4.82671 8.44197 4.44085 8.05982 4.16796C7.67767 3.89507 7.21957 3.74889 6.74999 3.75V3.75Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2944_960">
                              <rect width="13.5" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        {/* end::Svg Icon */}
                      </button>
                      {/* begin::Menu 3 */}

                      {/* end::Menu 3 */}
                    </div>
                    {/* end::Menu */}
                  </div>

                  {/* end::Header */}
                  {/* begin::Title */}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      {dealName}
                    </a>
                  </div>
                  {/* end::Title */}
                  {/* begin::Content */}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    {dealContactPersonName}
                  </div>
                  {/* end::Content */}
                  {/* begin::Footer */}
                  <div className="d-flex flex-stack flex-wrapr">
                    {/* begin::Users */}
                    <div className="symbol-group symbol-hover my-1">
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        title="Alan Warden"
                      >
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                          A
                        </span>
                      </div>
                      <div
                        className="symbol symbol-35px symbol-circle"
                        data-bs-toggle="tooltip"
                        title="Michelle Swanston"
                      >
                        <img
                          alt="Pic"
                          src={toAbsoluteUrl("/media/avatars/300-7.jpg")}
                        />
                      </div>
                    </div>
                    {/* end::Users */}
                    {/* begin::Stats */}
                    <div className="d-flex my-1">
                      {/* begin::Stat */}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        {/* begin::Svg Icon | path: icons/duotune/communication/com008.svg */}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/* end::Svg Icon */}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">
                          1
                        </span>
                      </div>
                      {/* end::Stat */}
                      {/* begin::Stat */}
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        {/* begin::Svg Icon | path: icons/duotune/communication/com012.svg */}
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                              fill="currentColor"
                            />
                            <rect
                              x="6"
                              y="12"
                              width="7"
                              height="2"
                              rx="1"
                              fill="currentColor"
                            />
                            <rect
                              x="6"
                              y="7"
                              width="12"
                              height="2"
                              rx="1"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/* end::Svg Icon */}
                        <span className="ms-1 fs-7 fw-bold text-gray-600">
                          1
                        </span>
                      </div>
                      {/* end::Stat */}
                    </div>
                    {/* end::Stats */}
                  </div>
                  {/* end::Footer */}
                </div>
                {/* end::Card body */}
              </div>
            </div>
          )}
          onCardNew={() => null}
        />
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className='card mb-5 mb-xl-10'>
          <div
            className='card-header border-0 cursor-pointer'
            role='button'
            data-bs-toggle='collapse'
            data-bs-target='#kt_account_profile_details'
            aria-expanded='true'
            aria-controls='kt_account_profile_details'
          >
            <div className='card-title m-0'>
              <h3 className='fw-bolder m-0'>DEALS DATA</h3>
            </div>
          </div>
          <div className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Deal Name</label>

                <div className='col-lg-8'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                    placeholder='First name'
                    value={deal?.dealName}
                  />
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Person Name</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company name'
                    value={deal?.dealContactPersonName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Person PhoneNumber</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='tel'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Phone number'
                    value={deal?.dealContactPersonPhoneNumber}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Aternate PhoneNumber</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealContactPersonAlternatePhoneNumber}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Email</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealContactPersonEmail}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Alternate Email</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealContactPersonAlternateEmail}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>dealOwner</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealOwner?.username}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Source</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealSource?.SourceName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Status</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealStatus?.dealStatusName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Deal Type</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.dealType}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Company</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.company?.companyName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>campaign Source</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={deal?.campaignSource?.campaignName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { DealIndex };
