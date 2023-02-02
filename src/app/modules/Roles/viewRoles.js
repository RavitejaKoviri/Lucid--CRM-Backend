import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchRoleById,
  fetchUsersByCompanyId,
} from "../user-management/users-list/_redux/userAction";
import accountImage from "../../../_metronic/assets/images/account.png";
import {
  fetchAllModules,
  fetchAllUsers,
  fetchUserById,
} from "./redux/rolesAction";

const UserDetailsComponent = ({ item }) => {
  console.log(item, "item");
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.authToken);
  const getUsersDataById = () => {
    dispatch(fetchUserById(token, item?.id));
  };
  const UserById = useSelector((state) => state?.Roles?.UserById);
  return (
    <>
      <tr>
        {/*begin::Checkbox */}
        <td>
          <div class="form-check form-check-sm form-check-custom form-check-solid">
            <input class="form-check-input" type="checkbox" value="1" />
          </div>
        </td>
        {/*end::Checkbox */}
        {/*begin::ID */}
        <td>{item?.id?.slice(0, 6)}</td>
        {/*begin::ID */}
        {/*begin::User= */}
        <td class="d-flex align-items-center">
          {/*begin:: Avatar  */}
          <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
            <a href="../../demo6/dist/apps/user-management/users/view.html">
              <div class="symbol-label">
                <img
                  src={
                    item?.image?.url
                      ? `http://65.2.10.157:5377${item?.image?.url}`
                      : accountImage
                  }
                  alt=""
                  class="w-100"
                />
              </div>
            </a>
          </div>
          {/*end::Avatar */}
          {/*begin::User details */}
          <div class="d-flex flex-column">
            <a
              href="../../demo6/dist/apps/user-management/users/view.html"
              class="text-gray-800 text-hover-primary mb-1"
            >
              {item?.username}
            </a>
            <span>{item?.email}</span>
          </div>
          {/*begin::User details */}
        </td>
        {/*end::user= */}
        {/*begin::Joined date= */}
        <td>{item?.createdAt?.slice(0, 10)}</td>
        {/*end::Joined date= */}
        {/*begin::Action= */}
        <td class="text-end">
          <div
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
            <span class="svg-icon svg-icon-5 m-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon */}
          </div>
          {/*begin::Menu */}
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            {/*begin::Menu item */}
            <div class="menu-item px-3">
              <div
                class="menu-link px-3"
                type="button"
                // class="btn btn-light btn-active-light-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_role"
                onClick={() => getUsersDataById()}
              >
                View
              </div>
            </div>
            {/*end::Menu item */}
            {/*begin::Menu item */}
            <div class="menu-item px-3">
              <div
                class="menu-link px-3"
                data-kt-roles-table-filter="delete_row"
              >
                Delete
              </div>
            </div>
            {/*end::Menu item */}
          </div>
          {/*end::Menu */}
        </td>
        {/*end::Action= */}
      </tr>
      <div
        class="modal fade"
        id="kt_modal_update_role"
        tabindex="-1"
        aria-hidden="true"
      >
        {/*begin::Modal dialog */}

        <div class="modal-dialog modal-dialog-centered mw-750px">
          {/*begin::Modal content */}
          <div class="modal-content">
            {/*begin::Modal header */}
            <div class="modal-header">
              {/*begin::Modal title */}
              <h2 class="fw-bold">User Data</h2>
              <div
                class="btn btn-icon btn-sm btn-active-icon-primary"
                data-kt-roles-modal-action="close"
              >
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                <span class="svg-icon svg-icon-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="currentColor"
                    />
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon */}
              </div>
              {/*end::Close */}
            </div>
            {/*end::Modal header */}
            {/*begin::Modal body */}

            <div class="modal-body scroll-y mx-5 my-7">
              {/*begin::Form */}
              <form id="kt_modal_update_role_form" class="form" action="#">
                {/*begin::Scroll */}

                <div className="row mb-6">
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">User Name</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.username}
                    />
                  </div>
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">Contact Phone</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.mobile}
                    />
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">first Name</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.firstname}
                    />
                  </div>
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">Last Name</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.lastname}
                    />
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">gender</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.gender}
                    />
                  </div>
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">Email</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.email}
                    />
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">Crmrole</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.crmrole?.name}
                    />
                  </div>
                  <label className="col-lg-3 col-form-label fw-bold fs-6">
                    <span className="required">Company</span>
                  </label>

                  <div className="col-lg-3 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Phone number"
                      value={UserById?.company?.companyName}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ViewRoles() {
  const dispatch = useDispatch();
  const query = useLocation();
  // console.log(query, "query");
  //   const UserById = useSelector((state) => state?.Roles?.UserById);
  const token = useSelector((state) => state?.auth?.authToken);
  const userAdmin = useSelector((state) => state?.auth?.user);
  const RoleById = useSelector((state) => state?.ManageUserData?.RoleById);
  const allUsers = useSelector((state) => state?.Roles?.Users);
  const UsersByCompanyId = useSelector(
    (state) => state?.ManageUserData?.UsersByCompanyId
  );
  const UsersByRole = UsersByCompanyId?.filter(
    (item) => item?.crmrole?.id === query?.state
  );
  const UsersByRoleSuperAdmin = allUsers?.filter(
    (item) => item?.crmrole?.id === query?.state
  );
  const rolePermissionsById = useSelector(
    (state) => state?.Roles?.RolePermissionsById
  );
  const companyId = userAdmin?.company?.id;
  // console.log(UsersByRole, "UsersByRole");
  // console.log(rolePermissionsById, "rolePermissionsById");
  useEffect(() => {
    dispatch(fetchUsersByCompanyId(companyId, token));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllUsers(token));
  }, [dispatch]);
  // useEffect(()=>{dispatch(fetchRoleById(RoleById?.id,token))},[])

  return (
    <div>
      <div class="toolbar py-2" id="kt_toolbar">
        {/*begin::Container */}
        <div
          id="kt_toolbar_container"
          class="container-fluid d-flex align-items-center"
        >
          {/*begin::Page title */}
          <div class="flex-grow-1 flex-shrink-0 me-5">
            {/*begin::Page title */}
            <div
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
              class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
            >
              {/*begin::Title */}
              <h1 class="d-flex align-items-center text-dark fw-bold my-1 fs-3">
                View Role Details
              </h1>
              {/*end::Title */}
              {/*begin::Separator */}
              <span class="h-20px border-gray-200 border-start mx-3"></span>
              {/*end::Separator */}
              {/*begin::Breadcrumb */}
              <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-1">
                {/*begin::Item */}
                <li class="breadcrumb-item text-muted">
                  <a
                    href="../../demo6/dist/index.html"
                    class="text-muted text-hover-primary"
                  >
                    Home
                  </a>
                </li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item">
                  <span class="bullet bg-gray-200 w-5px h-2px"></span>
                </li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item text-muted">Apps</li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item">
                  <span class="bullet bg-gray-200 w-5px h-2px"></span>
                </li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item text-muted">User Management</li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item">
                  <span class="bullet bg-gray-200 w-5px h-2px"></span>
                </li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item text-muted">Roles</li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item">
                  <span class="bullet bg-gray-200 w-5px h-2px"></span>
                </li>
                {/*end::Item */}
                {/*begin::Item */}
                <li class="breadcrumb-item text-dark">View Role</li>
                {/*end::Item */}
              </ul>
              {/*end::Breadcrumb */}
            </div>
            {/*end::Page title */}
          </div>
          {/*end::Page title */}
          {/*begin::Action group */}
          <div class="d-flex align-items-center flex-wrap">
            {/*begin::Wrapper */}
            <div class="flex-shrink-0 me-2">
              <ul class="nav">
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-semibold fs-7 px-4 me-1"
                    data-bs-toggle="tab"
                    href="#"
                  >
                    Day
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semibold fs-7 px-4 me-1"
                    data-bs-toggle="tab"
                    href=""
                  >
                    Week
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semibold fs-7 px-4"
                    data-bs-toggle="tab"
                    href="#"
                  >
                    Year
                  </a>
                </li>
              </ul>
            </div>
            {/*end::Wrapper */}
            {/*begin::Wrapper */}
            <div class="d-flex align-items-center">
              {/*begin::Daterangepicker */}
              <a
                href="#"
                class="btn btn-sm btn-bg-light btn-color-gray-500 btn-active-color-primary me-2"
                id="kt_dashboard_daterangepicker"
                data-bs-toggle="tooltip"
                data-bs-dismiss="click"
                data-bs-trigger="hover"
                title="Select dashboard daterange"
              >
                {/* <span
                  class="fw-semibold me-1"
                  id="kt_dashboard_daterangepicker_title"
                >
                  Range:
                </span> */}
                {/* <span class="fw-bold" id="kt_dashboard_daterangepicker_date">
                  September 12
                </span> */}
              </a>
              {/*end::Daterangepicker */}
              {/*begin::Actions */}
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-sm btn-icon btn-color-primary btn-active-light btn-active-color-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_campaign"
                >
                  {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg */}
                  <span class="svg-icon svg-icon-2x">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z"
                        fill="currentColor"
                      />
                      <rect
                        x="11"
                        y="19"
                        width="10"
                        height="2"
                        rx="1"
                        transform="rotate(-90 11 19)"
                        fill="currentColor"
                      />
                      <rect
                        x="7"
                        y="13"
                        width="10"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                      <path
                        d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon */}
                </button>
              </div>
              {/*end::Actions */}
            </div>
            {/*end::Wrapper */}
          </div>
          {/*end::Action group */}
        </div>
        {/*end::Container */}
      </div>
      {/*end::Toolbar */}
      {/*begin::Content */}
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        {/*begin::Container */}
        <div id="kt_content_container" class="container-xxl">
          {/*begin::Layout */}
          <div class="d-flex flex-column flex-lg-row">
            {/*begin::Sidebar */}
            <div class="flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10">
              {/*begin::Card */}
              <div class="card card-flush">
                {/*begin::Card header */}
                <div class="card-header">
                  {/*begin::Card title */}
                  <div class="card-title">
                    {userAdmin?.isSuperAdmin === true ? (
                      <h2 class="mb-0">
                        {UsersByRoleSuperAdmin[0]?.crmrole?.name ||
                          query?.state?.roleName}{" "}
                        (
                        {UsersByRoleSuperAdmin[0]?.company?.companyName ||
                          query?.state?.company}
                        )
                      </h2>
                    ) : (
                      <h2 class="mb-0">{query?.state?.roleName}</h2>
                    )}
                  </div>
                  {/*end::Card title */}
                </div>
                {/*end::Card header */}
                {/*begin::Card body */}
                <div class="card-body pt-0">
                  {/*begin::Permissions */}
                  <div class="d-flex flex-column text-gray-600">
                    {rolePermissionsById?.map((item) => (
                      <div class="d-flex align-items-center py-2">
                        <span class="bullet bg-primary me-3"></span>
                        {item?.allmodule?.name}
                      </div>
                    ))}
                  </div>
                  {/*end::Permissions */}
                </div>
                {/*end::Card body */}
                {/*begin::Card footer */}
                {/* <div class="card-footer pt-0">
                  <button
                    type="button"
                    class="btn btn-light btn-active-primary"
                  >
                    Edit Role
                  </button>
                </div> */}
                {/*end::Card footer */}
              </div>
            </div>
            <div class="flex-lg-row-fluid ms-lg-10">
              {/*begin::Card */}
              <div class="card card-flush mb-6 mb-xl-9">
                {/*begin::Card header */}
                <div class="card-header pt-5">
                  {/*begin::Card title */}
                  <div class="card-title">
                    <h2 class="d-flex align-items-center">
                      Users Assigned
                      {userAdmin?.isSuperAdmin === true ? (
                        <span class="text-gray-600 fs-6 ms-1">
                          ({UsersByRoleSuperAdmin?.length})
                        </span>
                      ) : (
                        <span class="text-gray-600 fs-6 ms-1">
                          ({UsersByRole?.length})
                        </span>
                      )}
                    </h2>
                  </div>
                  {/*end::Card title */}
                  {/*begin::Card toolbar */}
                  <div class="card-toolbar">
                    {/*begin::Search */}
                    <div
                      class="d-flex align-items-center position-relative my-1"
                      data-kt-view-roles-table-toolbar="base"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                      <span class="svg-icon svg-icon-1 position-absolute ms-6">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="17.0365"
                            y="15.1223"
                            width="8.15546"
                            height="2"
                            rx="1"
                            transform="rotate(45 17.0365 15.1223)"
                            fill="currentColor"
                          />
                          <path
                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon */}
                      <input
                        type="text"
                        data-kt-roles-table-filter="search"
                        class="form-control form-control-solid w-250px ps-15"
                        placeholder="Search Users"
                      />
                    </div>
                    {/*end::Search */}
                    {/*begin::Group actions */}
                    <div
                      class="d-flex justify-content-end align-items-center d-none"
                      data-kt-view-roles-table-toolbar="selected"
                    >
                      <div class="fw-bold me-5">
                        <span
                          class="me-2"
                          data-kt-view-roles-table-select="selected_count"
                        ></span>
                        Selected
                      </div>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-kt-view-roles-table-select="delete_selected"
                      >
                        Delete Selected
                      </button>
                    </div>
                    {/*end::Group actions */}
                  </div>
                  {/*end::Card toolbar */}
                </div>
                {/*end::Card header */}
                {/*begin::Card body */}
                <div class="card-body pt-0">
                  {/*begin::Table */}
                  <table
                    class="table align-middle table-row-dashed fs-6 gy-5 mb-0"
                    id="kt_roles_view_table"
                  >
                    {/*begin::Table head */}
                    <thead>
                      <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                        <th class="w-10px pe-2">
                          <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              data-kt-check="true"
                              data-kt-check-target="#kt_roles_view_table .form-check-input"
                              value="1"
                            />
                          </div>
                        </th>
                        <th class="min-w-50px">ID</th>
                        <th class="min-w-150px">User</th>
                        <th class="min-w-125px">Joined Date</th>
                        <th class="text-end min-w-100px">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">
                      {userAdmin?.isSuperAdmin === true
                        ? UsersByRoleSuperAdmin.map((item) => (
                            <UserDetailsComponent
                              // id={item?.crmrole?.id}
                              // img={item?.image?.url}
                              // userName={item?.username}
                              // email={item?.email}
                              // date={item?.createdAt?.slice(0, 10)}
                              item={item}
                            />
                          ))
                        : UsersByRole.map((item) => (
                            <UserDetailsComponent
                              // id={item?.crmrole?.id}
                              // img={item?.image?.url}
                              // userName={item?.username}
                              // email={item?.email}
                              // date={item?.createdAt?.slice(0, 10)}
                              item={item}
                            />
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRoles;
