/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolePermissionsById } from "./redux/rolesAction";

const RolesTable = ({ item }) => {
  // console.log(item, "item");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [create, setCreate] = useState(item?.Create);
  const [read, setRead] = useState(item?.Get);
  const [update, setUpdate] = useState(item?.Update);
  const [dlt, setDlt] = useState(item?.Delete);
  const token = useSelector((state) => state?.auth?.authToken);

  useEffect(() => {
    dispatch(fetchRolePermissionsById(item?.crmrole?.id, token));
    setLoading(false);
  }, [loading, dispatch]);
  // console.log(create, read, update, dlt, "CRUD");
  function handleRead(id, get) {
    const obj = {};
    obj.Get = !get;
    handleSubmit(id, obj);
    setLoading(true);
  }
  function handleCreate(id, create) {
    const obj = {};
    obj.Create = !create;
    handleSubmit(id, obj);
    setLoading(true);
  }
  function handleUpdate(id, update) {
    const obj = {};
    obj.Update = !update;
    handleSubmit(id, obj);
    setLoading(true);
  }
  function handleDlt(id, del) {
    const obj = {};
    obj.Delete = !del;
    handleSubmit(id, obj);
    setLoading(true);
  }

  function handleSubmit(id, obj) {
    axios
      .put(`http://103.195.244.172:4377/rolepermissions/${id}`, obj, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response, "response");
        // alert("Submitted");
      })
      .catch((err) => {
        // console.log(err, "erroror");
      });
  }
  return (
    <tr>
      <td class="text-gray-800">{item?.allmodule?.name}</td>
      <td>
        <div class="d-flex">
          <label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
            <input
              class="form-check-input"
              type="checkbox"
              defaultChecked={item?.Get}
              value={""}
              onChange={() => handleRead(item?.id, item?.Get)}
              name="user_management_read"
            />
            <span class="form-check-label">Read</span>
          </label>
          <label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
            <input
              class="form-check-input"
              type="checkbox"
              defaultChecked={item?.Update}
              onChange={() => handleUpdate(item?.id, item?.Update)}
              value=""
              name="user_management_write"
            />
            <span class="form-check-label">Update</span>
          </label>
          <label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
            <input
              class="form-check-input"
              type="checkbox"
              defaultChecked={item?.Create}
              onChange={() => handleCreate(item?.id, item?.Create)}
              value=""
              name="user_management_write"
            />
            <span class="form-check-label">Create</span>
          </label>
          <label class="form-check form-check-custom form-check-solid">
            <input
              class="form-check-input"
              type="checkbox"
              defaultChecked={item?.Delete}
              onChange={() => handleDlt(item?.id, item?.Delete)}
              value=""
              name="user_management_create"
            />
            <span class="form-check-label">Delete</span>
          </label>
        </div>
      </td>
    </tr>
  );
};

export default RolesTable;
