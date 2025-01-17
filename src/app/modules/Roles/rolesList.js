import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchRoleById,
  fetchRoles,
  fetchUsersByCompanyId,
} from "../user-management/users-list/_redux/userAction";
import {
  fetchAllModules,
  fetchCrmRoles,
  fetchRolePermissionsById,
} from "./redux/rolesAction";
import RolesTable from "./rolesTable";

function RolesListHeader() {
  return (
    <div class="toolbar py-2" id="kt_toolbar">
      {/* begin::Container */}
      <div
        id="kt_toolbar_container"
        class="container-fluid d-flex align-items-center"
      >
        {/* begin::Page title */}
        <div class="flex-grow-1 flex-shrink-0 me-5">
          {/* begin::Page title */}
          <div
            data-kt-swapper="true"
            data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
          >
            {/* begin::Title */}
            <h1 class="d-flex align-items-center text-dark fw-bold my-1 fs-3">
              Roles List
            </h1>
            {/* end::Title */}
            {/* begin::Separator */}
            <span class="h-20px border-gray-200 border-start mx-3"></span>
            {/* end::Separator */}
            {/* begin::Breadcrumb */}
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-1">
              {/* begin::Item */}
              <li class="breadcrumb-item text-muted">
                <a
                  href="../../demo6/dist/index.html"
                  class="text-muted text-hover-primary"
                >
                  Home
                </a>
              </li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item text-muted">Apps</li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item text-muted">User Management</li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item text-muted">Roles</li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              {/* end::Item */}
              {/* begin::Item */}
              <li class="breadcrumb-item text-dark">Roles List</li>
              {/* end::Item */}
            </ul>
            {/* end::Breadcrumb */}
          </div>
          {/* end::Page title */}
        </div>
        {/* end::Page title */}
        {/* begin::Action group */}
        <div class="d-flex align-items-center flex-wrap">
          {/* begin::Wrapper */}
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
          {/* end::Wrapper */}
          {/* begin::Wrapper */}
          <div class="d-flex align-items-center">
            {/* begin::Daterangepicker */}
            <a
              href="#"
              class="btn btn-sm btn-bg-light btn-color-gray-500 btn-active-color-primary me-2"
              id="kt_dashboard_daterangepicker"
              data-bs-toggle="tooltip"
              data-bs-dismiss="click"
              data-bs-trigger="hover"
              title="Select dashboard daterange"
            >
              <span
                class="fw-semibold me-1"
                id="kt_dashboard_daterangepicker_title"
              >
                Range:
              </span>
              {/* <span class="fw-bold" id="kt_dashboard_daterangepicker_date">
                September 12
              </span> */}
            </a>
            {/* end::Daterangepicker */}
            {/* begin::Actions */}
            <div class="d-flex align-items-center">
              <button
                type="button"
                class="btn btn-sm btn-icon btn-color-primary btn-active-light btn-active-color-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_campaign"
              >
                {/* begin::Svg Icon | path: icons/duotune/files/fil005.svg */}
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
                {/* end::Svg Icon */}
              </button>
            </div>
            {/* end::Actions */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Action group */}
      </div>
      {/* end::Container */}
    </div>
  );
}

// const Roles = ({ id }) => {
//   const dispatch = useDispatch();
//   const rolePermissionsById = useSelector(
//     (state) => state?.Roles?.RolePermissionsById
//   );
//   const token = useSelector((state) => state?.auth?.authToken);
//   useEffect(() => {
//     dispatch(fetchRolePermissionsById(id, token));
//   }, []);

//   return (
//     <div class="d-flex flex-column text-gray-600">
//       {rolePermissionsById?.map((item) => (
//         <div class="d-flex align-items-center py-2">
//           <span class="bullet bg-primary me-3"></span>{item?.allmodule?.name}
//         </div>
//       ))}
//     </div>
//   )
// }

function RolesListCard(props) {
  const dispatch = useDispatch();
  const { id, roleName, company } = props;
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.authToken);
  const userData = useSelector((state) => state?.auth?.user);
  const companyId = userData?.company?.id;

  // console.log(userData, "userData");
  const UsersByCompanyId = useSelector(
    (state) => state?.ManageUserData?.UsersByCompanyId
  );
  const UsersByRole = UsersByCompanyId?.filter(
    (item) => item?.crmrole?.name === roleName
  );
  useEffect(() => {
    dispatch(fetchUsersByCompanyId(companyId, token));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchRolePermissionsById(id, token));
  };

  return (
    <div class="col-md-4">
      <div class="card card-flush h-md-100">
        <div class="card-header">
          <div class="card-title">
            <h2>{roleName}</h2>
          </div>
        </div>

        <div class="card-body pt-1">
          {userData?.isSuperAdmin === true ? (
            <div class="fw-bold text-gray-600 mb-5">
              Company Name: {company}
            </div>
          ) : (
            <div class="fw-bold text-gray-600 mb-5">
              Total users with this role: {UsersByRole?.length}
            </div>
          )}
        </div>
        {/* <Roles id={id} /> */}
        {userData?.isSuperAdmin === true ? (
          <>
            <button
              type="button"
              class="btn btn-light btn-active-light-primary m-2"
              onClick={() => {
                handleClick();
                navigate("/apps/user-management/roles/view", {
                  state: { id: id, roleName: roleName, company: company },
                });
              }}
            >
              View Role
            </button>
            <button
              type="button"
              class="btn btn-light btn-active-light-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_update_role"
              onClick={() => {
                handleClick();
              }}
            >
              Edit Role
            </button>
          </>
        ) : (
          <div class="card-footer flex-wrap pt-0">
            {UsersByRole?.length > 0 ? (
              <button
                type="button"
                class="btn btn-light btn-active-light-primary m-2"
                onClick={() => {
                  handleClick();
                  navigate("/apps/user-management/roles/view", {
                    state: id,
                  });
                }}
              >
                View Role
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-light btn-active-light-primary m-2"
                onClick={() => {
                  // handleClick();
                  navigate("/team-members/team-members/adduser", {
                    state: id,
                  });
                }}
              >
                Add User to this Role
              </button>
            )}

            <button
              type="button"
              class="btn btn-light btn-active-light-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_update_role"
              onClick={() => {
                handleClick();
              }}
            >
              Edit Role
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function RolesList() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const UserById = useSelector((state) => state?.Roles?.UserById);
  // const AllModules = useSelector((state) => state?.Roles?.Modules);
  const crmRoles = useSelector((state) => state?.Roles?.CrmRoles);
  const token = useSelector((state) => state?.auth?.authToken);
  // const Roles = useSelector((state) => state?.ManageUserData?.Roles);
  // const RoleById = useSelector((state) => state?.ManageUserData?.RoleById);
  const user = useSelector((state) => state?.auth?.user);
  const rolePermissionsById = useSelector(
    (state) => state?.Roles?.RolePermissionsById
  );

  // console.log(rolePermissionsById, "rolePermissionsById");
  const crmRolesByAdmin = crmRoles?.filter(
    (item) => item?.company?.id === user?.company?.id
  );

  useEffect(() => {
    dispatch(fetchRoles(token));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCrmRoles(token));
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchRolePermissionsById(token));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllModules(token));
  }, [UserById?.id]);

  const RoleName = ({ roleName }) => {
    return (
      <input
        class="form-control form-control-solid"
        placeholder="Enter a role name"
        name="role_name"
        value={roleName}
      />
    );
  };
  return (
    <>
      <RolesListHeader />
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        {/*begin::Container */}
        <div id="kt_content_container" class="container-xxl">
          {/*begin::Row */}
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {/*begin::Col */}
            {user?.isSuperAdmin === true
              ? crmRoles?.map((item) => (
                  <RolesListCard
                    id={item?.id}
                    roleName={item?.name}
                    company={item?.company?.companyName}
                  />
                ))
              : crmRolesByAdmin?.map((item) => (
                  <RolesListCard id={item?.id} roleName={item?.name} />
                ))}

            <div class="ol-md-4">
              {/*begin::Card */}
              <div class="card h-md-100">
                {/*begin::Card body */}
                <div class="card-body d-flex flex-center">
                  {/*begin::Button */}
                  <button
                    type="button"
                    class="btn btn-clear d-flex flex-column flex-center"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_add_role"
                  >
                    {/*begin::Illustration */}
                    <img
                      src="assets/media/illustrations/sketchy-1/4.png"
                      alt=""
                      class="mw-100 mh-150px mb-7"
                    />
                    {/*end::Illustration */}
                    {/*begin::Label */}
                    <div
                      onClick={() => {
                        navigation("addnewrole");
                      }}
                      class="fw-bold fs-3 text-gray-600 text-hover-primary"
                    >
                      Add New Role
                    </div>
                    {/*end::Label */}
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                  <h2 class="fw-bold">Update Role</h2>
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
                    <div
                      class="d-flex flex-column scroll-y me-n7 pe-7"
                      id="kt_modal_update_role_scroll"
                      data-kt-scroll="true"
                      data-kt-scroll-activate="{default: false, lg: true}"
                      data-kt-scroll-max-height="auto"
                      data-kt-scroll-dependencies="#kt_modal_update_role_header"
                      data-kt-scroll-wrappers="#kt_modal_update_role_scroll"
                      data-kt-scroll-offset="300px"
                    >
                      {/*begin::Input group */}
                      <div class="fv-row mb-10">
                        {/*begin::Label */}
                        <label class="fs-5 fw-bold form-label mb-2">
                          <span class="required">Role name</span>
                        </label>
                        {/*end::Label */}
                        {/*begin::Input */}

                        <RoleName
                          roleName={rolePermissionsById[0]?.crmrole?.name}
                        />
                        {/* <h1>{rolePermissionsById[0]?.crmrole?.name}</h1> */}

                        {/*end::Input */}
                      </div>
                      {/*end::Input group */}
                      {/*begin::Permissions */}
                      <div class="fv-row">
                        {/*begin::Label */}
                        <label class="fs-5 fw-bold form-label mb-2">
                          Role Permissions
                        </label>
                        {/*end::Label */}
                        {/*begin::Table wrapper */}
                        <div class="table-responsive">
                          {/*begin::Table */}
                          <table class="table align-middle table-row-dashed fs-6 gy-5">
                            {/*begin::Table body */}
                            <tbody class="text-gray-600 fw-semibold">
                              {/*begin::Table row */}
                              <tr>
                                <td class="text-gray-800">
                                  Administrator Access
                                  <i
                                    class="fas fa-exclamation-circle ms-1 fs-7"
                                    data-bs-toggle="tooltip"
                                    title="Allows a full access to the system"
                                  ></i>
                                </td>
                                <td>
                                  {/*begin::Checkbox */}
                                  <label class="form-check form-check-sm form-check-custom form-check-solid me-9">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="kt_roles_select_all"
                                    />
                                    <span
                                      class="form-check-label"
                                      for="kt_roles_select_all"
                                    >
                                      Select all
                                    </span>
                                  </label>
                                  {/*end::Checkbox */}
                                </td>
                              </tr>
                              {rolePermissionsById?.map((item) => (
                                <RolesTable item={item} />
                              ))}
                            </tbody>
                            {/*end::Table body */}
                          </table>
                          {/*end::Table */}
                        </div>
                      </div>
                    </div>
                    <div class="text-center pt-15">
                      <button
                        type="reset"
                        class="btn btn-light me-3"
                        data-kt-roles-modal-action="close"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        class="btn btn-primary"
                        data-kt-roles-modal-action="submit"
                      >
                        <span
                          class="indicator-label"
                          // onClick={handleSubmit}
                        >
                          Submit
                        </span>
                        <span class="indicator-progress">
                          Please wait...
                          <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RolesList;
