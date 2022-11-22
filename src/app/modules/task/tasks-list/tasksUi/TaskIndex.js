import React, { useContext, useEffect, useMemo, useState } from "react";
// import Board, { moveCard } from "@lourenci/react-kanban";
// import "@lourenci/react-kanban/dist/styles.css";
// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";
import DialogActions from "@mui/material/DialogActions";
// import boards from "./data";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
// @mui material components
import Icon from "@mui/material/Icon";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";
// html-react-parser components
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteTask,
  getAllTasks,
  gettasksById,
  UpdateTask,
} from "../_redux/taskAction";
import TaskContext from "../table/columns/context";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskIndex = () => {
  // const [controller] = useArgonController();
  // const { darkMode } = controller;
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const user = useSelector((state) => state?.auth?.user);
  const rolePermissionsByUser = useSelector(
    (state) => state?.Dashboard?.RolePermissionsById
  );
  // const [newCardForm, setNewCardForm] = useState(false);
  // const [formValue, setFormValue] = useState("");

  // const openNewCardForm = (event, id) => setNewCardForm(id);
  // const closeNewCardForm = () => setNewCardForm(false);
  // const handeSetFormValue = ({ currentTarget }) =>
  //   setFormValue(currentTarget.value);
  const { searchTerm } = useContext(TaskContext);
  const taskData = useSelector((state) => state?.tasks?.Tasks);
  const token = useSelector((state) => state?.auth?.authToken);
  const tasks = useSelector((state) => state?.tasks?.tasksById);
  const companyId = useSelector((state) => state?.auth?.user?.company?.id);
  console.log(tasks, "task");
  useEffect(() => {
    dispatch(getAllTasks(token, companyId));
  }, []);
  const task = taskData.filter((val) => {
    if (searchTerm === "") {
      return val;
    }
    if (
      val?.contact?.contactFirstName
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase())
    ) {
      return val;
    }
    if (val?.taskPriority?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
      return val;
    }
  });
  console.log(task, "tasks");

  const bucketListedTasks = task?.filter(
    (item) => item?.taskStatus?.taskStatusName === "Bucket List"
  );
  const toDoTasks = task?.filter(
    (item) => item?.taskStatus?.taskStatusName === "To-Do"
  );
  const delegatedTasks = task?.filter(
    (item) => item?.taskStatus?.taskStatusName === "Delegated"
  );
  const inProgressTasks = task?.filter(
    (item) => item?.taskStatus?.taskStatusName === "In-Progress"
  );
  const doneTasks = task?.filter(
    (item) => item?.taskStatus?.taskStatusName === "Done"
  );
  const verificationTasks = task?.filter(
    (item) => item?.taskStatus?.taskStatusName === "Verification"
  );
  // console.log(bucketListedTasks, "bucketListedTasks");
  // console.log(toDoTasks, "toDoTasks");
  // console.log(delegatedTasks, "delegatedTasks");
  // console.log(inProgressTasks, "inProgressTasks");
  // console.log(doneTasks, "doneTasks");
  // console.log(verificationTasks, "verificationTasks");

  const boards = {
    columns: [
      {
        id: "Bucket List",
        title: "Bucket List",
        cards: bucketListedTasks,
      },
      {
        id: "To-Do",
        title: "ToDo",
        cards: toDoTasks,
      },
      {
        id: "Assigned",
        title: "Assigned",
        cards: delegatedTasks,
      },
      {
        id: "In-Progress",
        title: "In progress",
        cards: inProgressTasks,
      },
      {
        id: "Done",
        title: "Done",
        cards: doneTasks,
      },
      {
        id: "Verification",
        title: "Verified/Closed",
        cards: verificationTasks,
      },
    ],
  };
  function handleCardMove(board, card, source, destination) {
    axios
      .get(
        `http://65.2.10.157:5377/task-statuses?taskStatusName=${destination?.toColumnId}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        const taskStatus = data[0];
        const taskdata = { ...card, taskStatus };
        dispatch(UpdateTask(taskdata, card?.id, token));
        console.log(taskStatus, "taskStatus");
      })
      .catch(() => {});
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id) => {
    dispatch(gettasksById(id, token));
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
          renderCard={({ id, taskPriority, subject }, { dragging }) => (
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
                  <div className="d-flex flex-end mb-3">
                    {/* begin::Badge */}
                    {/* <div className="badge badge-light">Development</div> */}
                    {/* end::Badge */}

                    {/* <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
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
                      </button>
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                        data-kt-menu="true"
                      >
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                            Payments
                          </div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Create Invoice
                          </a>
                        </div>
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
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Generate Bill
                          </a>
                        </div>
                        <div
                          className="menu-item px-3"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="right-end"
                        >
                          <a href="#" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Plans
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Billing
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                Statements
                              </a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    value="1"
                                    checked="checked"
                                    name="notifications"
                                  />
                                  <span className="form-check-label text-muted fs-6">
                                    Recuring
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="#" className="menu-link px-3">
                            Settings
                          </a>
                        </div>
                      </div>
                    </div> */}

                    <div>
                      <button
                        type="button"
                        className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                        onClick={() => {
                          handleClickOpen(id);
                        }}
                      >
                        {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2944_960)">
                            <path
                              d="M13.4184 5.65781C12.1474 3.17789 9.63116 1.5 6.74999 1.5C3.86882 1.5 1.35186 3.17906 0.0815497 5.65805C0.0279345 5.7641 0 5.88128 0 6.00012C0 6.11896 0.0279345 6.23613 0.0815497 6.34219C1.35257 8.82211 3.86882 10.5 6.74999 10.5C9.63116 10.5 12.1481 8.82094 13.4184 6.34195C13.472 6.2359 13.5 6.11872 13.5 5.99988C13.5 5.88104 13.472 5.76387 13.4184 5.65781V5.65781ZM6.74999 9.375C6.08248 9.375 5.42995 9.17706 4.87494 8.80621C4.31992 8.43536 3.88734 7.90826 3.63189 7.29156C3.37645 6.67486 3.30961 5.99626 3.43984 5.34157C3.57006 4.68688 3.8915 4.08552 4.3635 3.61351C4.8355 3.14151 5.43687 2.82007 6.09156 2.68985C6.74624 2.55962 7.42484 2.62646 8.04154 2.88191C8.65824 3.13735 9.18535 3.56993 9.5562 4.12495C9.92705 4.67997 10.125 5.33249 10.125 6C10.1252 6.44327 10.0381 6.88224 9.86852 7.29181C9.69899 7.70138 9.45039 8.07353 9.13695 8.38697C8.82351 8.70041 8.45137 8.949 8.0418 9.11853C7.63223 9.28807 7.19326 9.37522 6.74999 9.375V9.375ZM6.74999 3.75C6.54916 3.75281 6.34963 3.78269 6.15678 3.83883C6.31574 4.05485 6.39202 4.32068 6.37179 4.58811C6.35156 4.85555 6.23616 5.10688 6.04651 5.29652C5.85686 5.48617 5.60553 5.60157 5.3381 5.6218C5.07066 5.64203 4.80483 5.56575 4.58882 5.4068C4.46581 5.85998 4.48801 6.34033 4.6523 6.78023C4.81659 7.22014 5.1147 7.59745 5.50466 7.85905C5.89462 8.12066 6.3568 8.25339 6.82615 8.23856C7.2955 8.22374 7.74838 8.0621 8.12105 7.7764C8.49372 7.4907 8.76742 7.09533 8.90362 6.64593C9.03982 6.19654 9.03166 5.71575 8.88029 5.27123C8.72893 4.82671 8.44197 4.44085 8.05982 4.16796C7.67767 3.89507 7.21957 3.74889 6.74999 3.75V3.75Z"
                              fill="black"
                            />
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
                    {user?.isSuperAdmin === true ? (
                      <>
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                            onClick={() => {
                              navigation("EditTask", { state: { id } });
                            }}
                          >
                            {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.20902 9.2895C1.13965 9.28938 1.07106 9.27483 1.00762 9.24677C0.944181 9.2187 0.887274 9.17775 0.840518 9.1265C0.792918 9.07569 0.756595 9.01539 0.733933 8.94956C0.71127 8.88373 0.70278 8.81385 0.709018 8.7445L0.831518 7.3975L6.49052 1.7405L8.25902 3.5085L2.60152 9.165L1.25452 9.2875C1.23939 9.2889 1.22421 9.28956 1.20902 9.2895V9.2895ZM8.61202 3.155L6.84402 1.387L7.90452 0.326501C7.95096 0.280012 8.0061 0.243133 8.0668 0.217971C8.1275 0.192809 8.19256 0.179857 8.25827 0.179857C8.32398 0.179857 8.38904 0.192809 8.44974 0.217971C8.51044 0.243133 8.56558 0.280012 8.61202 0.326501L9.67252 1.387C9.71901 1.43344 9.75589 1.48858 9.78105 1.54928C9.80621 1.60998 9.81916 1.67504 9.81916 1.74075C9.81916 1.80646 9.80621 1.87152 9.78105 1.93222C9.75589 1.99292 9.71901 2.04806 9.67252 2.0945L8.61252 3.1545L8.61202 3.155V3.155Z"
                                fill="black"
                              />
                            </svg>
                            {/* end::Svg Icon */}
                          </button>
                          {/* begin::Menu 3 */}

                          {/* end::Menu 3 */}
                        </div>

                        <div>
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                            onClick={() => {
                              dispatch(DeleteTask(id, token));
                            }}
                          >
                            {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                            <svg
                              width="10"
                              height="12"
                              viewBox="0 0 10 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.875 0.75C0.676088 0.75 0.485322 0.829018 0.34467 0.96967C0.204018 1.11032 0.125 1.30109 0.125 1.5V2.25C0.125 2.44891 0.204018 2.63968 0.34467 2.78033C0.485322 2.92098 0.676088 3 0.875 3H1.25V9.75C1.25 10.1478 1.40804 10.5294 1.68934 10.8107C1.97064 11.092 2.35218 11.25 2.75 11.25H7.25C7.64782 11.25 8.02936 11.092 8.31066 10.8107C8.59196 10.5294 8.75 10.1478 8.75 9.75V3H9.125C9.32391 3 9.51468 2.92098 9.65533 2.78033C9.79598 2.63968 9.875 2.44891 9.875 2.25V1.5C9.875 1.30109 9.79598 1.11032 9.65533 0.96967C9.51468 0.829018 9.32391 0.75 9.125 0.75H6.5C6.5 0.551088 6.42098 0.360322 6.28033 0.21967C6.13968 0.0790176 5.94891 0 5.75 0L4.25 0C4.05109 0 3.86032 0.0790176 3.71967 0.21967C3.57902 0.360322 3.5 0.551088 3.5 0.75H0.875ZM3.125 3.75C3.22446 3.75 3.31984 3.78951 3.39016 3.85984C3.46049 3.93016 3.5 4.02554 3.5 4.125V9.375C3.5 9.47446 3.46049 9.56984 3.39016 9.64017C3.31984 9.71049 3.22446 9.75 3.125 9.75C3.02554 9.75 2.93016 9.71049 2.85984 9.64017C2.78951 9.56984 2.75 9.47446 2.75 9.375V4.125C2.75 4.02554 2.78951 3.93016 2.85984 3.85984C2.93016 3.78951 3.02554 3.75 3.125 3.75V3.75ZM5 3.75C5.09946 3.75 5.19484 3.78951 5.26517 3.85984C5.33549 3.93016 5.375 4.02554 5.375 4.125V9.375C5.375 9.47446 5.33549 9.56984 5.26517 9.64017C5.19484 9.71049 5.09946 9.75 5 9.75C4.90054 9.75 4.80516 9.71049 4.73484 9.64017C4.66451 9.56984 4.625 9.47446 4.625 9.375V4.125C4.625 4.02554 4.66451 3.93016 4.73484 3.85984C4.80516 3.78951 4.90054 3.75 5 3.75V3.75ZM7.25 4.125V9.375C7.25 9.47446 7.21049 9.56984 7.14017 9.64017C7.06984 9.71049 6.97446 9.75 6.875 9.75C6.77554 9.75 6.68016 9.71049 6.60983 9.64017C6.53951 9.56984 6.5 9.47446 6.5 9.375V4.125C6.5 4.02554 6.53951 3.93016 6.60983 3.85984C6.68016 3.78951 6.77554 3.75 6.875 3.75C6.97446 3.75 7.06984 3.78951 7.14017 3.85984C7.21049 3.93016 7.25 4.02554 7.25 4.125V4.125Z"
                                fill="black"
                              />
                            </svg>
                            {/* end::Svg Icon */}
                          </button>
                          {/* begin::Menu 3 */}

                          {/* end::Menu 3 */}
                        </div>
                      </>
                    ) : (
                      <>
                        {rolePermissionsByUser?.filter(
                          (item) =>
                            item?.allmodule?.name === "Tasks" &&
                            item?.Update === true
                        )?.length > 0 && (
                          <div>
                            <button
                              type="button"
                              className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                              onClick={() => {
                                navigation("EditTask", { state: { id } });
                              }}
                            >
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.20902 9.2895C1.13965 9.28938 1.07106 9.27483 1.00762 9.24677C0.944181 9.2187 0.887274 9.17775 0.840518 9.1265C0.792918 9.07569 0.756595 9.01539 0.733933 8.94956C0.71127 8.88373 0.70278 8.81385 0.709018 8.7445L0.831518 7.3975L6.49052 1.7405L8.25902 3.5085L2.60152 9.165L1.25452 9.2875C1.23939 9.2889 1.22421 9.28956 1.20902 9.2895V9.2895ZM8.61202 3.155L6.84402 1.387L7.90452 0.326501C7.95096 0.280012 8.0061 0.243133 8.0668 0.217971C8.1275 0.192809 8.19256 0.179857 8.25827 0.179857C8.32398 0.179857 8.38904 0.192809 8.44974 0.217971C8.51044 0.243133 8.56558 0.280012 8.61202 0.326501L9.67252 1.387C9.71901 1.43344 9.75589 1.48858 9.78105 1.54928C9.80621 1.60998 9.81916 1.67504 9.81916 1.74075C9.81916 1.80646 9.80621 1.87152 9.78105 1.93222C9.75589 1.99292 9.71901 2.04806 9.67252 2.0945L8.61252 3.1545L8.61202 3.155V3.155Z"
                                  fill="black"
                                />
                              </svg>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu 3 */}

                            {/* end::Menu 3 */}
                          </div>
                        )}
                        {rolePermissionsByUser?.filter(
                          (item) =>
                            item?.allmodule?.name === "Tasks" &&
                            item?.Delete === true
                        )?.length > 0 && (
                          <div>
                            <button
                              type="button"
                              className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
                              onClick={() => {
                                dispatch(DeleteTask(id, token));
                              }}
                            >
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <svg
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.875 0.75C0.676088 0.75 0.485322 0.829018 0.34467 0.96967C0.204018 1.11032 0.125 1.30109 0.125 1.5V2.25C0.125 2.44891 0.204018 2.63968 0.34467 2.78033C0.485322 2.92098 0.676088 3 0.875 3H1.25V9.75C1.25 10.1478 1.40804 10.5294 1.68934 10.8107C1.97064 11.092 2.35218 11.25 2.75 11.25H7.25C7.64782 11.25 8.02936 11.092 8.31066 10.8107C8.59196 10.5294 8.75 10.1478 8.75 9.75V3H9.125C9.32391 3 9.51468 2.92098 9.65533 2.78033C9.79598 2.63968 9.875 2.44891 9.875 2.25V1.5C9.875 1.30109 9.79598 1.11032 9.65533 0.96967C9.51468 0.829018 9.32391 0.75 9.125 0.75H6.5C6.5 0.551088 6.42098 0.360322 6.28033 0.21967C6.13968 0.0790176 5.94891 0 5.75 0L4.25 0C4.05109 0 3.86032 0.0790176 3.71967 0.21967C3.57902 0.360322 3.5 0.551088 3.5 0.75H0.875ZM3.125 3.75C3.22446 3.75 3.31984 3.78951 3.39016 3.85984C3.46049 3.93016 3.5 4.02554 3.5 4.125V9.375C3.5 9.47446 3.46049 9.56984 3.39016 9.64017C3.31984 9.71049 3.22446 9.75 3.125 9.75C3.02554 9.75 2.93016 9.71049 2.85984 9.64017C2.78951 9.56984 2.75 9.47446 2.75 9.375V4.125C2.75 4.02554 2.78951 3.93016 2.85984 3.85984C2.93016 3.78951 3.02554 3.75 3.125 3.75V3.75ZM5 3.75C5.09946 3.75 5.19484 3.78951 5.26517 3.85984C5.33549 3.93016 5.375 4.02554 5.375 4.125V9.375C5.375 9.47446 5.33549 9.56984 5.26517 9.64017C5.19484 9.71049 5.09946 9.75 5 9.75C4.90054 9.75 4.80516 9.71049 4.73484 9.64017C4.66451 9.56984 4.625 9.47446 4.625 9.375V4.125C4.625 4.02554 4.66451 3.93016 4.73484 3.85984C4.80516 3.78951 4.90054 3.75 5 3.75V3.75ZM7.25 4.125V9.375C7.25 9.47446 7.21049 9.56984 7.14017 9.64017C7.06984 9.71049 6.97446 9.75 6.875 9.75C6.77554 9.75 6.68016 9.71049 6.60983 9.64017C6.53951 9.56984 6.5 9.47446 6.5 9.375V4.125C6.5 4.02554 6.53951 3.93016 6.60983 3.85984C6.68016 3.78951 6.77554 3.75 6.875 3.75C6.97446 3.75 7.06984 3.78951 7.14017 3.85984C7.21049 3.93016 7.25 4.02554 7.25 4.125V4.125Z"
                                  fill="black"
                                />
                              </svg>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu 3 */}

                            {/* end::Menu 3 */}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {/* end::Header */}
                  {/* begin::Title */}
                  <div className="mb-2">
                    <a
                      href="#"
                      className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary"
                    >
                      {taskPriority}
                    </a>
                  </div>
                  {/* end::Title */}
                  {/* begin::Content */}
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">
                    {subject}
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
        <div className="card mb-5 mb-xl-19">
          <div
            className="card-header border-0 cursor-pointer"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#kt_account_profile_details"
            aria-expanded="true"
            aria-controls="kt_account_profile_details"
            style={{ width: "100%" }}
          >
            <div className="card-title m-0">
              <h3 className="fw-bolder m-0">Task DATA</h3>
            </div>
          </div>
          <div className="form">
            <div className="card-body border-top p-9">
              <div className="form-group row mb-2">
                <div className="col-lg-6">
                  <label className="col-lg-8 col-form-label required fw-bold fs-6">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                    placeholder="subject"
                    value={tasks?.subject}
                  />
                </div>

                <div className="col-lg-6">
                  <label className="col-lg-8 col-form-label required fw-bold fs-6">
                    Contact
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="contact"
                    value={tasks?.contact?.contactMobile}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
              </div>
              <div className="form-group row mb-2">
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-12 col-form-label fw-bold fs-6">
                    <span className="required">Task Repeat</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="taskRepeat"
                    value={tasks?.taskRepeat}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-12 col-form-label fw-bold fs-6">
                    <span className="required">Task Remainder</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="taskRemainder"
                    value={tasks?.taskRemainder}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
              </div>

              <div className="form-group row mb-2">
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-8 col-form-label fw-bold fs-6">
                    <span className="required">Task Priority</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="taskPriority"
                    value={tasks?.taskPriority}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-8 col-form-label fw-bold fs-6">
                    <span className="required">company </span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Company"
                    value={tasks?.company?.companyName}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
              </div>

              <div className="form-group row mb-2">
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-8 col-form-label fw-bold fs-6">
                    <span className="required">Task Owner</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="taskOwner"
                    value={tasks?.taskOwner?.username}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-8 col-form-label fw-bold fs-6">
                    <span className="required">Task DueDate</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="taskDueDate"
                    value={tasks?.taskDueDate}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
              </div>

              <div className="form-group row mb-2">
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-8 col-form-label fw-bold fs-6">
                    <span className="required">Task Status</span>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Task Status"
                    value={tasks?.taskStatus?.taskStatusName}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
                <div className="col-lg-6 fv-row">
                  <label className="col-lg-8 col-form-label fw-bold fs-6">
                    <span className="required">Task Description</span>
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Task Description"
                    value={tasks?.taskDescription}
                  />
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block"></div>
                  </div>
                </div>
              </div>

              <div className="form-group row mb-2">
                {/* <div className='col-lg-6 fv-row'>
                <label className='col-lg-8 col-form-label fw-bold fs-6'>
                  <span className='required'>Company</span>
                </label>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={task?.company?.companyName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div>
                <div className='col-lg-6 fv-row'>
                <label className='col-lg-8 col-form-label fw-bold fs-6'>
                  <span className='required'>campaign Source</span>
                </label>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    value={task?.campaignSource?.campaignName}
                  />
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <DialogActions>
          <Button className="btn btn-primary mb-2" onClick={handleClose}>
            Close
          </Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export { TaskIndex };
