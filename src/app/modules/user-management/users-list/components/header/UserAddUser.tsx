import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateUser, fetchRoles, UsersLoading } from "../../_redux/userAction";
import { fetchCompanies } from "../../../../Roles/redux/rolesAction";

// import { FC, useState } from 'react'
// import * as Yup from 'yup'
// import { useFormik } from 'formik'
// import { isNotEmpty, toAbsoluteUrl } from '../../../../../_metronic/helpers'
// import { initialUser, User } from '../core/_models'
// import clsx from 'clsx'
// import { useListView } from '../core/ListViewProvider'
// import { UsersListLoading } from '../components/loading/UsersListLoading'
// import { createUser, updateUser } from '../core/_requests'
// import { useQueryResponse } from '../core/QueryResponseProvider'

export default function UserAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const token = useSelector((state: any) => state?.auth?.authToken);

  const userData = useSelector((state: any) => state?.auth?.user);
  // const company = useSelector((state: any) => state?.TargetData?.Comapnies);
  const status = useSelector((state: any) => state?.TargetData?.targetStatus);
  const user = useSelector((state: any) => state?.TargetData?.assignedTo);

  // const userAdmin = useSelector((state: any) => state?.auth?.user);
  const targetsById = useSelector(
    (state: any) => state?.TargetData?.targetById
  );
  const userById = useSelector((state: any) => state?.UserData?.UsersById);
  const Roles = useSelector((state: any) => state?.ManageUserData?.Roles);
  const RolesByAdmin = Roles?.filter(
    (item: any) => item?.company?.id === userData?.company?.id
  );
  const companies = useSelector((state: any) => state?.Roles?.Companies);

  console.log(companies, "companies");
  console.log(Roles, "crmroles");
  console.log(RolesByAdmin, "RolesByAdmin");
  const companyId = userData?.company?.id;
  console.log(companyId, "ASD");

  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    dispatch(fetchCompanies(token));
  }, []);
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
      .post("https://crmbackend.luciddiagnostics.com/upload/", formdata, {
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
  useEffect(() => {
    setData({
      username: userById?.username,
      email: userById?.email,
      password: userById?.password,
      mobile: userById?.mobile,
      firstname: userById?.firstname,
      lastname: userById?.lastname,
      gender: userById?.gender,
      image: userById?.image,
      description: userById?.description,
      company: companyId,
      crmrole: "",
    });

    console.log("hello");
  }, [user]);

  const handleSubmit = () => {
    console.log(data, "ASDdd");
    dispatch(CreateUser(data, token));
    dispatch(UsersLoading(true));
    setData({
      username: "",
      email: "",
      password: "",
      mobile: "",
      firstname: "",
      lastname: "",
      gender: "",
      image: imageUrl,
      description: "",
      company: "",
      crmrole: "",
    });
  };

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    firstname: "",
    lastname: "",
    gender: "",
    image: imageUrl,
    description: "",
    company: "",
    crmrole: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(fetchRoles(token));
  }, [dispatch]);
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
            </div>

            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <div className="card card-flush py-4">
                  <div className="card-header">
                    <div className="card-title">
                      <h2>User Details</h2>
                    </div>
                  </div>

                  <div className="card-body pt-0">
                    <form className="form">
                      <div className="form-group row mb-4">
                        <div className="col-lg-5">
                          {/* <label>UserName:</label> */}
                          <input
                            type="text"
                            value={data.username}
                            onChange={handleChange}
                            name="username"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="User Name"
                          />
                        </div>
                        <div className="col-lg-5">
                          {/* <label>Email:</label> */}
                          <input
                            type="text"
                            value={data.email}
                            onChange={handleChange}
                            name="email"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Email "
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-4">
                        <div className="col-lg-5">
                          {/* <label>Password:</label> */}
                          <input
                            type="text"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Password"
                          />
                        </div>
                        <div className="col-lg-5">
                          {/* <label className="form-label ">MobileNo:</label> */}
                          <input
                            type="text"
                            name="mobile"
                            value={data.mobile}
                            onChange={handleChange}
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Mobile Number "
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-4">
                        <div className="col-lg-5">
                          {/* <label>FirstName:</label> */}
                          <input
                            type="text"
                            name="firstname"
                            value={data.firstname}
                            onChange={handleChange}
                            className="form-control form-control-lg form-control-solid"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-lg-5">
                          {/* <label>LastName:</label> */}
                          <input
                            type="text"
                            name="lastname"
                            value={data.lastname}
                            onChange={handleChange}
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <div className="d-flex flex-column  col-lg-5">
                          {/* <label className="form-label">Gender</label> */}

                          <select
                            className="form-control form-control-lg form-control-solid"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Select an option"
                            name="gender"
                            value={data?.gender}
                            onChange={handleChange}
                          >
                            <option value="" disabled selected>
                              Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">others</option>
                          </select>
                        </div>
                        <div className="d-flex flex-column  col-lg-5">
                          {/* <label className="form-label">Gender</label> */}

                          <select
                            className="form-control form-control-lg form-control-solid"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Select an option"
                            name="crmrole"
                            value={data?.crmrole}
                            onChange={handleChange}
                          >
                            <option value="" disabled selected>
                              Select Role
                            </option>
                            {userData?.isSuperAdmin === true
                              ? Roles?.map((item: any) => (
                                  <option value={item?.id}>
                                    {item?.name} ({item?.company?.companyName})
                                  </option>
                                ))
                              : RolesByAdmin?.filter(
                                  (item: any) =>
                                    item?.name !== userData?.crmrole?.name
                                )?.map((item: any) => (
                                  <option value={item?.id}>
                                    {item?.name} ({item?.company?.companyName})
                                  </option>
                                ))}
                          </select>
                        </div>
                      </div>
                      {userData?.isSuperAdmin === true ? (
                        <div className="form-group row mb-2">
                          <div className="d-flex flex-column  col-lg-5">
                            {/* <label className="form-label">Gender</label> */}

                            <select
                              className="form-control form-control-lg form-control-solid mt-3"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Select a Company"
                              name="company"
                              value={data?.company}
                              onChange={handleChange}
                            >
                              <option value={userData?.company?.id} selected>
                                Select Company
                                {/* {userData?.company?.companyName} */}
                              </option>
                              {companies?.map((item: any) => (
                                <option value={item?.id}>
                                  {item?.companyName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ) : (
                        <div className="form-group row mb-2">
                          <div className="d-flex flex-column  col-lg-5">
                            {/* <label className="form-label">Gender</label> */}

                            <select
                              className="form-control form-control-lg form-control-solid mt-3"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Select an option"
                              name="company"
                              value={data?.company}
                              onChange={handleChange}
                            >
                              <option
                                value={userData?.company?.id}
                                disabled
                                selected
                              >
                                {userData?.company?.companyName}
                              </option>
                              {/* {companies?.map((item: any) => (
                              <option value={item?.id} disabled>
                                {item?.companyName}
                              </option>
                            ))} */}
                            </select>
                          </div>
                        </div>
                      )}
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
                navigation("/team-members/team-members");
              }}
            >
              Back
            </button>
            <button
              onClick={() => {
                handleSubmit();
              }}
              type="submit"
              id="kt_ecommerce_add_product_submit"
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
        {/*end::Form*/}
      </div>
    </>
  );
}
