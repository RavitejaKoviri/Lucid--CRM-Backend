import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRolePermissions,
  fetchCrmRoles,
  fetchCompanies,
  fetchAllModules,
} from "./redux/rolesAction";
import {
  fetchRoleById,
  fetchRoles,
} from "../user-management/users-list/_redux/userAction";
import axios from "axios";
import CheckBoxStatus from "./checkbox";

function RolePermissions() {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [module, setModule] = useState("");
  const [company, setCompany] = useState("");

  const [create, setCreate] = useState(false);
  const [read, setRead] = useState(false);
  const [update, setUpdate] = useState(false);
  const [dlt, setDlt] = useState(false);

  const UserById = useSelector((state) => state?.Roles?.UserById);
  const rolePermissions = useSelector((state) => state?.Roles?.RolePermissions);
  const crmRoles = useSelector((state) => state?.Roles?.CrmRoles);
  const companies = useSelector((state) => state?.Roles?.Companies);
  const allModules = useSelector((state) => state?.Roles?.Modules);
  const token = useSelector((state) => state?.auth?.authToken);

  useEffect(() => {
    dispatch(fetchRolePermissions(token));
  }, [UserById?.id]);

  useEffect(() => {
    dispatch(fetchRoles(token));
  }, []);

  useEffect(() => {
    dispatch(fetchCrmRoles(token));
  }, []);

  useEffect(() => {
    dispatch(fetchAllModules(token));
  }, []);

  useEffect(() => {
    dispatch(fetchCompanies(token));
  }, []);

  const obj = {};

  function handleSubmit() {
    obj.Create = create;
    obj.Get = read;
    obj.Update = update;
    obj.Delete = dlt;
    obj.allmodule = module;
    obj.crmrole = role;

    axios
      .post("http://65.2.10.157:5377/rolepermissions", obj, {
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
  }
  console.log(rolePermissions);
  console.log(create, "create");

  return (
    <div>
      <h1>Role Permissions</h1>
      <div className="d-flex flex-row mt-10">
        <select
          onChange={(e) => setModule(e.target.value)}
          className="col-4"
          style={{
            border: "1px solid #666666",
            borderRadius: "6px",
            height: 44,
            fontSize: 16,
            marginRight: "20px",
            outline: "none",
            paddingInline: "10px",
          }}
        >
          <option value={""} disabled selected>
            Select Module
          </option>
          {allModules?.map((item) => (
            <option value={item?.id}>{item?.name}</option>
          ))}
        </select>
        <select
          onChange={(e) => setRole(e.target.value)}
          className="col-4 col-xs-6"
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
            Select Role
          </option>
          {crmRoles?.map((item) => (
            <option value={item?.id}>{item?.name}</option>
          ))}
        </select>
      </div>
      <div className="d-flex flex-row mt-20">
        <select
          onChange={(e) => setCompany(e.target.value)}
          className="col-4 col-xs-6"
          style={{
            border: "1px solid #666666",
            borderRadius: "6px",
            height: 44,
            fontSize: 16,
            marginRight: "20px",
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
      </div>
      <div className="d-flex flex-row mt-20 col-md-6 col-xs-10">
        <div className="me-10 d-flex flex-row">
          <p className="me-3 my-1" style={{ fontSize: "16px" }}>
            Create
          </p>
          {/* <input type="checkbox" style={{width:'22px', height:'20px'}} defaultChecked={create} onChange={() => setCreate(!create)} /> */}
          {create === false ? (
            <div
              className="d-flex flex-row"
              onClick={() => setCreate(true)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #d9534f",
                }}
              >
                Yes
              </div>
            </div>
          ) : (
            <div
              className="d-flex flex-row"
              onClick={() => setCreate(false)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #24a0ed",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                Yes
              </div>
            </div>
          )}
        </div>
        <div className="me-10 d-flex flex-row">
          <p className="me-3 my-1" style={{ fontSize: "16px" }}>
            Get
          </p>
          {/* <input type="checkbox" style={{width:'22px', height:'20px'}} defaultChecked={read} onChange={() => setRead(true)} /> */}
          {read === false ? (
            <div
              className="d-flex flex-row"
              onClick={() => setRead(true)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #d9534f",
                }}
              >
                Yes
              </div>
            </div>
          ) : (
            <div
              className="d-flex flex-row"
              onClick={() => setRead(false)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #24a0ed",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                Yes
              </div>
            </div>
          )}
        </div>
        <div className="me-10 d-flex flex-row">
          <p className="me-3 my-1" style={{ fontSize: "16px" }}>
            Update
          </p>
          {/* <input
            type="checkbox"
            style={{ width: "22px", height: "20px" }}
            onChange={() => setUpdate(true)}
          /> */}
          {update === false ? (
            <div
              className="d-flex flex-row"
              onClick={() => setUpdate(true)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #d9534f",
                }}
              >
                Yes
              </div>
            </div>
          ) : (
            <div
              className="d-flex flex-row"
              onClick={() => setUpdate(false)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #24a0ed",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                Yes
              </div>
            </div>
          )}
        </div>
        <div className="d-flex flex-row">
          <p className="me-3 my-1" style={{ fontSize: "16px" }}>
            Delete
          </p>
          {/* <input
            type="checkbox"
            style={{ width: "22px", height: "20px" }}
            onChange={() => setDlt(true)}
          /> */}
          {dlt === false ? (
            <div
              className="d-flex flex-row"
              onClick={() => setDlt(true)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #d9534f",
                }}
              >
                Yes
              </div>
            </div>
          ) : (
            <div
              className="d-flex flex-row"
              onClick={() => setDlt(false)}
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #24a0ed",
                }}
              >
                No
              </div>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                Yes
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
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

export default RolePermissions;