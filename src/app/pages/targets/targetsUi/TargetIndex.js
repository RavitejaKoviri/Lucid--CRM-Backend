import React, { useState } from "react";
// import Board, { moveCard } from "@lourenci/react-kanban";
// import "@lourenci/react-kanban/dist/styles.css";
// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";
import boards from "./data";

// @mui material components
import Icon from "@mui/material/Icon";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";
// html-react-parser components
import parse from "html-react-parser";

const TargetIndex = () => {
  // const [controller] = useArgonController();
  // const { darkMode } = controller;
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  return (
    <>
      <div className="tab-content">
        <Board 
        initialBoard={boards}
        allowAddCard
        allowAddColumn
        renderColumnHeader={({ id, title }, { addCard }) => (
          <>
            <div className="mb-9" key={id} style={{margin:15}}>
              <div className="d-flex flex-stack">
                <div className="fw-bold fs-4">{title}
                <span className="fs-6 text-gray-400 ms-2">2</span></div>
                {/* begin::Menu */}
                <div>
                  <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                    <span className="svg-icon svg-icon-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                          <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                  </button>
                  {/* begin::Menu 1 */}
                  <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_631f1dcbb4a9f">
                    {/* begin::Header */}
                    <div className="px-7 py-5">
                      <div className="fs-5 text-dark fw-bold">Filter Options</div>
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
                        <label className="form-label fw-semibold">Status:</label>
                        {/* end::Label */}
                        {/* begin::Input */}
                        <div>
                          <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_631f1dcbb4a9f" data-allow-clear="true">
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                        {/* end::Input */}
                      </div>
                      {/* end::Input group */}
                      {/* begin::Input group */}
                      <div className="mb-10">
                        {/* begin::Label */}
                        <label className="form-label fw-semibold">Member Type:</label>
                        {/* end::Label */}
                        {/* begin::Options */}
                        <div className="d-flex">
                          {/* begin::Options */}
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" value="1" />
                            <span className="form-check-label">Author</span>
                          </label>
                          {/* end::Options */}
                          {/* begin::Options */}
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                            <span className="form-check-label">Customer</span>
                          </label>
                          {/* end::Options */}
                        </div>
                        {/* end::Options */}
                      </div>
                      {/* end::Input group */}
                      {/* begin::Input group */}
                      <div className="mb-10">
                        {/* begin::Label */}
                        <label className="form-label fw-semibold">Notifications:</label>
                        {/* end::Label */}
                        {/* begin::Switch */}
                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                          <label className="form-check-label">Enabled</label>
                        </div>
                        {/* end::Switch */}
                      </div>
                      {/* end::Input group */}
                      {/* begin::Actions */}
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
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
        renderCard={({ id, template }, { dragging }) => (
          <div
            style={{display:'block', width:'calc(450px - 40px)', margin:15}}
            key={id}
            dragging={dragging.toString() || undefined}
          
          >
            {template}
          </div>
        )}
        onCardNew={() => null}
        />
      </div>
    </>
  )
}

export {TargetIndex}
