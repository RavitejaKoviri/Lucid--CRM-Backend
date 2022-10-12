import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateTicket, getAllcustomers, getAllticketStatus, getAllUsers, getcompany } from "../../_redux/ticketAction";
// import { getAllticketStatus } from "../../_redux/ticketCrud";
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

export default function TicketAdduser() {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(
        (state: any) => state?.auth?.authToken
    );
    const company = useSelector(
        (state: any) => state?.TicketData?.Companies
    );
    const users = useSelector(
        (state: any) => state?.TicketData?.users
    );
    const customers = useSelector(
        (state: any) => state?.TicketData?.customers
    );
    console.log(customers, "customers");

    const ticketStatus = useSelector(
        (state: any) => state?.TicketData?.ticketStatus
    );
    console.log(ticketStatus, "ticketStatus");


    useEffect(() => {
        dispatch(getAllticketStatus(token))
        dispatch(getAllcustomers(token))
        dispatch(getAllUsers(token))
        dispatch(getcompany(token))

    }, [])

    const [data, setData] = useState({
        ticketName: " ",
        // ticketPriority: " ",
        ticketAssignedTo: " ",
        ticketStatus: " ",
        customer: " ",
        company: " ",
        ticketStartDate: " ",
        ticketEndDate: " ",
    })
    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(data, "EDIT_PROFILE");
        dispatch(CreateTicket(data, token));
        setData({
            ticketName: " ",
            // ticketPriority: " ",
            ticketAssignedTo: " ",
            ticketStatus: " ",
            customer: " ",
            company: " ",
            ticketStartDate: " ",
            ticketEndDate: " ",
        })
    };

    return (
        <>
            <div
                className="content d-flex flex-column flex-column-fluid"
                id="kt_content"
            >
                <div id="kt_content_container" className="container-xxl">
                    <div
                        id="kt_ecommerce_add_product_form"
                        className="form d-flex flex-column flex-lg-row"
                        data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
                    >
                        <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">



                            {/*begin::Status*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>users</h2>
                                    </div>
                                    {/*end::Card title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        <div
                                            className="rounded-circle bg-success w-15px h-15px"
                                            id="kt_ecommerce_add_product_status"
                                        ></div>
                                    </div>
                                    {/*begin::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select2*/}
                                    <select
                                        className="form-select mb-2"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Select an option"
                                        id="kt_ecommerce_add_product_status_select"
                                        value={data.ticketAssignedTo}
                                        onChange={handleChange}
                                        name="ticketAssignedTo"
                                    >
                                        <option></option>

                                        {
                                            users.map((item: any) => (
                                                <option value={item?.id}>{item?.username}</option>

                                            ))
                                        }
                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the product status.</div>
                                    {/*end::Description*/}
                                    {/*begin::Datepicker*/}
                                    <div className="d-none mt-10">
                                        <label className="form-label">
                                            Select publishing date and time
                                        </label>
                                        <input
                                            className="form-control"
                                            id="kt_ecommerce_add_product_status_datepicker"
                                            placeholder="Pick date & time"
                                        />
                                    </div>
                                    {/*end::Datepicker*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Status*/}



                            {/*begin::Status*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Company</h2>
                                    </div>
                                    {/*end::Card title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        <div
                                            className="rounded-circle bg-success w-15px h-15px"
                                        ></div>
                                    </div>
                                    {/*begin::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select2*/}
                                    <select
                                        className="form-select mb-2"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Select an option"
                                        value={data.company}
                                        onChange={handleChange}
                                        name="company"
                                    >
                                        <option></option>
                                        {
                                            company?.map((item: any) => (
                                                <option value={item?.id}>{item?.companyName}</option>
                                            ))
                                        }

                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the product status.</div>
                                    {/*end::Description*/}
                                    {/*begin::Datepicker*/}
                                    <div className="d-none mt-10">
                                        <label className="form-label">
                                            Select publishing date and time
                                        </label>
                                        <input
                                            className="form-control"
                                            id="kt_ecommerce_add_product_status_datepicker"
                                            placeholder="Pick date & time"
                                        />
                                    </div>
                                    {/*end::Datepicker*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Status*/}

                            {/*begin::Status*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>customers</h2>
                                    </div>
                                    {/*end::Card title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        <div
                                            className="rounded-circle bg-success w-15px h-15px"
                                        ></div>
                                    </div>
                                    {/*begin::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select2*/}
                                    <select
                                        className="form-select mb-2"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Select an option"
                                        value={data.customer}
                                        onChange={handleChange}
                                        name="customer"
                                    >
                                        <option></option>
                                        {
                                            customers?.map((item: any) => (
                                                <option value={item?.id}>{item?.customerName}</option>
                                            ))
                                        }

                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the product status.</div>
                                    {/*end::Description*/}
                                    {/*begin::Datepicker*/}
                                    <div className="d-none mt-10">
                                        <label className="form-label">
                                            Select publishing date and time
                                        </label>
                                        <input
                                            className="form-control"
                                            id="kt_ecommerce_add_product_status_datepicker"
                                            placeholder="Pick date & time"
                                        />
                                    </div>
                                    {/*end::Datepicker*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Status*/}


                            {/*begin::Status*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>ticketStatus</h2>
                                    </div>
                                    {/*end::Card title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        <div
                                            className="rounded-circle bg-success w-15px h-15px"
                                        ></div>
                                    </div>
                                    {/*begin::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select2*/}
                                    <select
                                        className="form-select mb-2"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Select an option"
                                        value={data.ticketStatus}
                                        onChange={handleChange}
                                        name="ticketStatus"
                                    >
                                        <option></option>
                                        {
                                            ticketStatus?.map((item: any) => (
                                                <option value={item?.id}>{item?.ticketStatusName}</option>
                                            ))
                                        }

                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the product status.</div>
                                    {/*end::Description*/}
                                    {/*begin::Datepicker*/}
                                    <div className="d-none mt-10">
                                        <label className="form-label">
                                            Select publishing date and time
                                        </label>
                                        <input
                                            className="form-control"
                                            id="kt_ecommerce_add_product_status_datepicker"
                                            placeholder="Pick date & time"
                                        />
                                    </div>
                                    {/*end::Datepicker*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Status*/}







                        </div>
                        {/*end::Aside column*/}
                        {/*begin::Main column*/}
                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                            {/*begin:::Tabs*/}
                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
                                {/*begin:::Tab item*/}
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-active-primary pb-4 active"
                                        data-bs-toggle="tab"
                                        href="#kt_ecommerce_add_product_general"
                                    >
                                        General
                                    </a>
                                </li>
                                {/*end:::Tab item*/}

                            </ul>
                            {/*end:::Tabs*/}
                            {/*begin::Tab content*/}
                            <div className="tab-content">
                                {/*begin::Tab pane*/}
                                <div
                                    className="tab-pane fade show active"
                                    id="kt_ecommerce_add_product_general"
                                    role="tab-panel"
                                >
                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                        {/*begin::General options*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>General</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <form className="form">
                                                    <div className="form-group row mb-2">
                                                        <div className="col-lg-6">
                                                            <label>Ticket Name</label>
                                                            <input
                                                                type="text"
                                                                value={data.ticketName}
                                                                onChange={handleChange}
                                                                name="ticketName"
                                                                className="form-control"
                                                                placeholder="Enter TicketName"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Ticket Priority</label>
                                                            <input
                                                                type="text"
                                                                // value={data.ticketPriority}
                                                                // onChange={handleChange}
                                                                // name="ticketPriority"
                                                                className="form-control"
                                                                placeholder="Enter Ticket priority"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Ticket Assigned To</label>
                              <input
                                type="text"
                                value={data.ticketAssignedTo}
                                onChange={handleChange}
                                name="ticketAssignedTo"
                                className="form-control"
                                placeholder="Enter Ticket Assigned To"
                                
                              />
                            </div>
                            <div className="col-lg-6">
                              <label> Ticket Status</label>
                              <input
                                type="text"
                                value={data.ticketStatus}
                                onChange={handleChange}
                                name="ticketStatus"
                                className="form-control"
                                placeholder="Enter TicketStatus"
                              />
                            </div>
                          </div> */}
                                                    {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Customer</label>
                              <input
                                type="text"
                                value={data.customer}
                                onChange={handleChange}
                                name="customer"
                                className="form-control"
                                placeholder="Enter customer"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Company</label>
                              <input
                                type="text"
                                value={data.company}
                                onChange={handleChange}
                                name="company"
                                className="form-control"
                                placeholder="Enter Company"
                              />
                            </div>
                          </div> */}
                                                    <div className="form-group row mb-2">
                                                        <div className="col-lg-6">
                                                            <label>Ticket StartDate</label>
                                                            <input
                                                                type="date"
                                                                value={data.ticketStartDate}
                                                                onChange={handleChange}
                                                                name="ticketStartDate"
                                                                className="form-control"
                                                                placeholder="Enter Ticket StartDate"
                                                            />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Ticket EndDate</label>
                                                            <input
                                                                type="date"
                                                                value={data.ticketEndDate}
                                                                onChange={handleChange}
                                                                name="ticketEndDate"
                                                                className="form-control"
                                                                placeholder="Enter Ticket EndDate"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Website:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Website"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Source:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Source"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>CampaignSource:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter CampaignSource"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Company:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company"
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Status:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Status"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Owner:</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Owner"
                              />
                            </div>
                          </div> */}
                                                </form>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*end::Tab pane*/}

                            </div>
                            <div className="d-flex justify-content-end">
                                <a
                                    href="../../demo6/dist/apps/ecommerce/catalog/products.html"
                                    id="kt_ecommerce_add_product_cancel"
                                    className="btn btn-light me-5"
                                >
                                    Cancel
                                </a>
                                <button
                                    type="submit"
                                    id="kt_ecommerce_add_product_submit"
                                    onClick={() => {
                                        handleSubmit()
                                    }}
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
                    </div>
                    {/*end::Form*/}
                </div>
            </div>
        </>
    );
}
