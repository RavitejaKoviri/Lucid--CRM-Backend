import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRolePermissions,
  fetchCrmRoles,
  fetchCompanies,
} from "../redux/rolesAction";
import {
  fetchRoleById,
  fetchRoles,
} from "../../user-management/users-list/_redux/userAction";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddNewRole() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [companies, setCompanies] = useState("");
  const UserById = useSelector((state) => state?.Roles?.UserById);
  const rolePermissions = useSelector((state) => state?.Roles?.RolePermissions);
  const crmRoles = useSelector((state) => state?.Roles?.CrmRoles);
  const companies = useSelector((state) => state?.Roles?.Companies);
  const token = useSelector((state) => state?.auth?.authToken);
  const user = useSelector((state) => state?.auth?.user);

  const [roleName, setRoleName] = useState("");
  const [companyName, setCompanyName] = useState(
    user?.isSuperAdmin === true ? "" : user?.company?.id
  );

  useEffect(() => {
    dispatch(fetchRolePermissions(token));
  }, [UserById?.id]);

  useEffect(() => {
    dispatch(fetchRoles(token));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCrmRoles(token));
  }, [dispatch]);

  useEffect(() => {
    // axios
    //   .get("http://65.2.10.157:5377/companies", {
    //     headers: {
    //       "content-type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(({data}) => {

    //     setCompanies(data);
    //     // console.log(response, "response");
    //   })
    //   .catch((err) => {
    //     // console.log(err, "err");
    //   });
    dispatch(fetchCompanies(token));
  }, []);

  function handleRoleName(e) {
    e.preventDefault();
    setRoleName(e.target.value);
  }
  function selectCompany(e) {
    e.preventDefault();
    setCompanyName(e.target.value);
  }

  const obj = {};

  function handleSubmit() {
    obj.name = roleName;
    obj.company = companyName;

    axios
      .post("http://65.2.10.157:5377/crmroles", obj, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response, "response");
        alert("Submitted");
      })
      .catch((err) => {
        // console.log(err, "err");
      });
    navigate(-1);
  }

  console.log(roleName, companyName);
  console.log(rolePermissions, "rolePermissions", crmRoles, "crmRoles");
  console.log(UserById, "UserById");
  console.log(companies, "companies");
  console.log(user, "user");

  return (
    <div>
      <div className="d-flex flex-row">
        <input
          type="text"
          placeholder="Role Name"
          className="col-4"
          onChange={handleRoleName}
          style={{
            border: "1px solid #666666",
            borderRadius: "6px",
            height: 44,
            fontSize: 16,
            marginRight: "20px",
            outline: "none",
            paddingInline: "10px",
          }}
        />
        {user?.isSuperAdmin === true ? (
          <>
            {" "}
            <select
              type="text"
              placeholder="Company"
              onChange={selectCompany}
              className="col-4"
              style={{
                border: "1px solid #666666",
                borderRadius: "6px",
                height: 44,
                fontSize: 16,
                marginInline: "20px",
                outline: "none",
                paddingInline: "10px",
              }}
            >
              <option value={""} disabled selected>
                Select Company
              </option>
              {companies?.map((item) => (
                <option value={item?.id}>{item?.companyName}</option>
              ))}
            </select>
          </>
        ) : (
          <>
            {" "}
            <input
              disabled
              type="text"
              placeholder="Role Name"
              className="col-4"
              value={user?.company?.companyName}
              style={{
                border: "1px solid #666666",
                borderRadius: "6px",
                height: 44,
                fontSize: 16,
                marginRight: "20px",
                outline: "none",
                paddingInline: "10px",
              }}
            />
          </>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddNewRole;
