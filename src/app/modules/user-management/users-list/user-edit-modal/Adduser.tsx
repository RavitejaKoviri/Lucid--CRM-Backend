import React from "react";
import { useNavigate } from "react-router-dom";
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

export default function Adduser() {
  const navigation = useNavigate();
  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div id="kt_content_container" className="container-xxl">
          <form
            id="kt_ecommerce_add_product_form"
            className="form d-flex flex-column flex-lg-row"
            data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
              {/*begin::Thumbnail settings*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Thumbnail</h2>
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
                  <div
                    className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                    data-kt-image-input="true"
                  >
                    {/*begin::Preview existing avatar*/}
                    <div className="image-input-wrapper w-150px h-150px"></div>
                    {/*end::Preview existing avatar*/}
                    {/*begin::Label*/}
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
                        name="avatar"
                        accept=".png, .jpg, .jpeg"
                      />
                      <input type="hidden" name="avatar_remove" />
                      {/*end::Inputs*/}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Cancel*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      title="Cancel avatar"
                    >
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Cancel*/}
                    {/*begin::Remove*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title="Remove avatar"
                    >
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Remove*/}
                  </div>
                  {/*end::Image input*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7">
                    Set the product thumbnail image. Only *.png, *.jpg and
                    *.jpeg image files are accepted
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Thumbnail settings*/}
              {/*begin::Status*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Status</h2>
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
                  >
                    <option></option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option>
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
              {/*begin::Category & tags*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Product Details</h2>
                  </div>
                  {/*end::Card title*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                  {/*begin::Input group*/}
                  {/*begin::Label*/}
                  <label className="form-label">Categories</label>
                  {/*end::Label*/}
                  {/*begin::Select2*/}
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-placeholder="Select an option"
                    data-allow-clear="true"
                  >
                    <option></option>
                    <option value="Computers">Computers</option>
                    <option value="Watches">Watches</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Cameras">Cameras</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Household">Household</option>
                    <option value="Handbags">Handbags</option>
                    <option value="Wines">Wines</option>
                    <option value="Sandals">Sandals</option>
                  </select>
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7 mb-7">
                    Add product to a category.
                  </div>
                  {/*end::Description*/}
                  {/*end::Input group*/}
                  {/*begin::Button*/}
                  <a
                    href="../../demo6/dist/apps/ecommerce/catalog/add-category.html"
                    className="btn btn-light-primary btn-sm mb-10"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="11"
                          y="18"
                          width="12"
                          height="2"
                          rx="1"
                          transform="rotate(-90 11 18)"
                          fill="currentColor"
                        />
                        <rect
                          x="6"
                          y="11"
                          width="12"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}Create new category
                  </a>
                  {/*end::Button*/}
                  {/*begin::Input group*/}
                  {/*begin::Label*/}
                  <label className="form-label d-block">Tags</label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <input
                    id="kt_ecommerce_add_product_tags"
                    name="kt_ecommerce_add_product_tags"
                    className="form-control mb-2"
                    value=""
                  />
                  {/*end::Input*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7">Add tags to a product.</div>
                  {/*end::Description*/}
                  {/*end::Input group*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Category & tags*/}
              {/*begin::Weekly sales*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Weekly Sales</h2>
                  </div>
                  {/*end::Card title*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                  <span className="text-muted">
                    No data available. Sales data will begin capturing once
                    product has been published.
                  </span>
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Weekly sales*/}
              {/*begin::Template settings*/}
              <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                  {/*begin::Card title*/}
                  <div className="card-title">
                    <h2>Product Template</h2>
                  </div>
                  {/*end::Card title*/}
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                  {/*begin::Select store template*/}
                  {/*end::Select store template*/}
                  {/*begin::Select2*/}
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    id="kt_ecommerce_add_product_store_template"
                  >
                    <option></option>
                    <option value="default">Default template</option>
                    <option value="electronics">Electronics</option>
                    <option value="office">Office stationary</option>
                    <option value="fashion">Fashion</option>
                  </select>
                  {/*end::Select2*/}
                  {/*begin::Description*/}
                  <div className="text-muted fs-7">
                    Assign a template from your current theme to define how a
                    single product is displayed.
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Template settings*/}
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
                {/*begin:::Tab item*/}
                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#kt_ecommerce_add_product_advanced"
                  >
                    Advanced
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
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">
                            Product Name
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="product_name"
                            className="form-control mb-2"
                            placeholder="Product name"
                            value=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            A product name is required and recommended to be
                            unique.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div>
                          {/*begin::Label*/}
                          <label className="form-label">Description</label>
                          {/*end::Label*/}
                          {/*begin::Editor*/}
                          <div
                            id="kt_ecommerce_add_product_description"
                            className="min-h-200px mb-2"
                          ></div>
                          {/*end::Editor*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a description to the product for better
                            visibility.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::General options*/}
                    {/*begin::Media*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Media</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="fv-row mb-2">
                          {/*begin::Dropzone*/}
                          <div
                            className="dropzone"
                            id="kt_ecommerce_add_product_media"
                          >
                            {/*begin::Message*/}
                            <div className="dz-message needsclick">
                              {/*begin::Icon*/}
                              <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                              {/*end::Icon*/}
                              {/*begin::Info*/}
                              <div className="ms-4">
                                <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                  Drop files here or click to upload.
                                </h3>
                                <span className="fs-7 fw-semibold text-gray-400">
                                  Upload up to 10 files
                                </span>
                              </div>
                              {/*end::Info*/}
                            </div>
                          </div>
                          {/*end::Dropzone*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Description*/}
                        <div className="text-muted fs-7">
                          Set the product media gallery.
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Media*/}
                    {/*begin::Pricing*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Pricing</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">
                            Base Price
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="price"
                            className="form-control mb-2"
                            placeholder="Product price"
                            value=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set the product price.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="fv-row mb-10">
                          {/*begin::Label*/}
                          <label className="fs-6 fw-semibold mb-2">
                            Discount Type
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="Select a discount type that will be applied to this product"
                            ></i>
                          </label>
                          {/*End::Label*/}
                          {/*begin::Row*/}
                          <div
                            className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9"
                            data-kt-buttons="true"
                            data-kt-buttons-target="[data-kt-button='true']"
                          >
                            {/*begin::Col*/}
                            <div className="col">
                              {/*begin::Option*/}
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                {/*begin::Radio*/}
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="discount_option"
                                    value="1"
                                  />
                                </span>
                                {/*end::Radio*/}
                                {/*begin::Info*/}
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    No Discount
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col">
                              {/*begin::Option*/}
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                {/*begin::Radio*/}
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="discount_option"
                                    value="2"
                                  />
                                </span>
                                {/*end::Radio*/}
                                {/*begin::Info*/}
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    Percentage %
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col">
                              {/*begin::Option*/}
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                {/*begin::Radio*/}
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="discount_option"
                                    value="3"
                                  />
                                </span>
                                {/*end::Radio*/}
                                {/*begin::Info*/}
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    Fixed Price
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Row*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div
                          className="d-none mb-10 fv-row"
                          id="kt_ecommerce_add_product_discount_percentage"
                        >
                          {/*begin::Label*/}
                          <label className="form-label">
                            Set Discount Percentage
                          </label>
                          {/*end::Label*/}
                          {/*begin::Slider*/}
                          <div className="d-flex flex-column text-center mb-5">
                            <div className="d-flex align-items-start justify-content-center mb-7">
                              <span
                                className="fw-bold fs-3x"
                                id="kt_ecommerce_add_product_discount_label"
                              >
                                0
                              </span>
                              <span className="fw-bold fs-4 mt-1 ms-2">%</span>
                            </div>
                            <div
                              id="kt_ecommerce_add_product_discount_slider"
                              className="noUi-sm"
                            ></div>
                          </div>
                          {/*end::Slider*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a percentage discount to be applied on this
                            product.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div
                          className="d-none mb-10 fv-row"
                          id="kt_ecommerce_add_product_discount_fixed"
                        >
                          {/*begin::Label*/}
                          <label className="form-label">
                            Fixed Discounted Price
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="dicsounted_price"
                            className="form-control mb-2"
                            placeholder="Discounted price"
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set the discounted product price. The product will
                            be reduced at the determined fixed price
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Tax*/}
                        <div className="d-flex flex-wrap gap-5">
                          {/*begin::Input group*/}
                          <div className="fv-row w-100 flex-md-root">
                            {/*begin::Label*/}
                            <label className="required form-label">
                              Tax className
                            </label>
                            {/*end::Label*/}
                            {/*begin::Select2*/}
                            <select
                              className="form-select mb-2"
                              name="tax"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Select an option"
                            >
                              <option></option>
                              <option value="0">Tax Free</option>
                              <option value="1">Taxable Goods</option>
                              <option value="2">Downloadable Product</option>
                            </select>
                            {/*end::Select2*/}
                            {/*begin::Description*/}
                            <div className="text-muted fs-7">
                              Set the product tax className.
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row w-100 flex-md-root">
                            {/*begin::Label*/}
                            <label className="form-label">VAT Amount (%)</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              type="text"
                              className="form-control mb-2"
                              value=""
                            />
                            {/*end::Input*/}
                            {/*begin::Description*/}
                            <div className="text-muted fs-7">
                              Set the product VAT about.
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end:Tax*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Pricing*/}
                  </div>
                </div>
                {/*end::Tab pane*/}
                {/*begin::Tab pane*/}
                <div
                  className="tab-pane fade"
                  id="kt_ecommerce_add_product_advanced"
                  role="tab-panel"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    {/*begin::Inventory*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Inventory</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">SKU</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="sku"
                            className="form-control mb-2"
                            placeholder="SKU Number"
                            value=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product SKU.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">Barcode</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            name="sku"
                            className="form-control mb-2"
                            placeholder="Barcode Number"
                            value=""
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product barcode number.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10 fv-row">
                          {/*begin::Label*/}
                          <label className="required form-label">
                            Quantity
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div className="d-flex gap-3">
                            <input
                              type="number"
                              name="shelf"
                              className="form-control mb-2"
                              placeholder="On shelf"
                              value=""
                            />
                            <input
                              type="number"
                              name="warehouse"
                              className="form-control mb-2"
                              placeholder="In warehouse"
                            />
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Enter the product quantity.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="fv-row">
                          {/*begin::Label*/}
                          <label className="form-label">Allow Backorders</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div className="form-check form-check-custom form-check-solid mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Allow customers to purchase products that are out of
                            stock.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Inventory*/}
                    {/*begin::Variations*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Variations</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div
                          className=""
                          data-kt-ecommerce-catalog-add-product="auto-options"
                        >
                          {/*begin::Label*/}
                          <label className="form-label">
                            Add Product Variations
                          </label>
                          {/*end::Label*/}
                          {/*begin::Repeater*/}
                          <div id="kt_ecommerce_add_product_options">
                            {/*begin::Form group*/}
                            <div className="form-group">
                              <div
                                data-repeater-list="kt_ecommerce_add_product_options"
                                className="d-flex flex-column gap-3"
                              >
                                <div
                                  data-repeater-item=""
                                  className="form-group d-flex flex-wrap align-items-center gap-5"
                                >
                                  {/*begin::Select2*/}
                                  <div className="w-100 w-md-200px">
                                    <select
                                      className="form-select"
                                      name="product_option"
                                      data-placeholder="Select a variation"
                                      data-kt-ecommerce-catalog-add-product="product_option"
                                    >
                                      <option></option>
                                      <option value="color">Color</option>
                                      <option value="size">Size</option>
                                      <option value="material">Material</option>
                                      <option value="style">Style</option>
                                    </select>
                                  </div>
                                  {/*end::Select2*/}
                                  {/*begin::Input*/}
                                  <input
                                    type="text"
                                    className="form-control mw-100 w-200px"
                                    name="product_option_value"
                                    placeholder="Variation"
                                  />
                                  {/*end::Input*/}
                                  <button
                                    type="button"
                                    data-repeater-delete=""
                                    className="btn btn-sm btn-icon btn-light-danger"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          opacity="0.5"
                                          x="7.05025"
                                          y="15.5356"
                                          width="12"
                                          height="2"
                                          rx="1"
                                          transform="rotate(-45 7.05025 15.5356)"
                                          fill="currentColor"
                                        />
                                        <rect
                                          x="8.46447"
                                          y="7.05029"
                                          width="12"
                                          height="2"
                                          rx="1"
                                          transform="rotate(45 8.46447 7.05029)"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group mt-5">
                              <button
                                type="button"
                                data-repeater-create=""
                                className="btn btn-sm btn-light-primary"
                              >
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                <span className="svg-icon svg-icon-2">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      opacity="0.5"
                                      x="11"
                                      y="18"
                                      width="12"
                                      height="2"
                                      rx="1"
                                      transform="rotate(-90 11 18)"
                                      fill="currentColor"
                                    />
                                    <rect
                                      x="6"
                                      y="11"
                                      width="12"
                                      height="2"
                                      rx="1"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}Add another variation
                              </button>
                            </div>
                            {/*end::Form group*/}
                          </div>
                          {/*end::Repeater*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Variations*/}
                    {/*begin::Shipping*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Shipping</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="fv-row">
                          {/*begin::Input*/}
                          <div className="form-check form-check-custom form-check-solid mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="kt_ecommerce_add_product_shipping_checkbox"
                              value="1"
                            />
                            <label className="form-check-label">
                              This is a physical product
                            </label>
                          </div>
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set if the product is a physical or digital item.
                            Physical products may require shipping.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Shipping form*/}
                        <div
                          id="kt_ecommerce_add_product_shipping"
                          className="d-none mt-10"
                        >
                          {/*begin::Input group*/}
                          <div className="mb-10 fv-row">
                            {/*begin::Label*/}
                            <label className="form-label">Weight</label>
                            {/*end::Label*/}
                            {/*begin::Editor*/}
                            <input
                              type="text"
                              name="weight"
                              className="form-control mb-2"
                              placeholder="Product weight"
                              value=""
                            />
                            {/*end::Editor*/}
                            {/*begin::Description*/}
                            <div className="text-muted fs-7">
                              Set a product weight in kilograms (kg).
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="form-label">Dimension</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                              <input
                                type="number"
                                name="width"
                                className="form-control mb-2"
                                placeholder="Width (w)"
                                value=""
                              />
                              <input
                                type="number"
                                name="height"
                                className="form-control mb-2"
                                placeholder="Height (h)"
                                value=""
                              />
                              <input
                                type="number"
                                name="length"
                                className="form-control mb-2"
                                placeholder="Lengtn (l)"
                                value=""
                              />
                            </div>
                            {/*end::Input*/}
                            {/*begin::Description*/}
                            <div className="text-muted fs-7">
                              Enter the product dimensions in centimeters (cm).
                            </div>
                            {/*end::Description*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                        {/*end::Shipping form*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Shipping*/}
                    {/*begin::Meta options*/}
                    <div className="card card-flush py-4">
                      {/*begin::Card header*/}
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Meta Options</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label">Meta Tag Title</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control mb-2"
                            name="meta_title"
                            placeholder="Meta tag name"
                          />
                          {/*end::Input*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a meta tag title. Recommended to be simple and
                            precise keywords.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-10">
                          {/*begin::Label*/}
                          <label className="form-label">
                            Meta Tag Description
                          </label>
                          {/*end::Label*/}
                          {/*begin::Editor*/}
                          <div
                            id="kt_ecommerce_add_product_meta_description"
                            className="min-h-100px mb-2"
                          ></div>
                          {/* end::Editor */}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a meta tag description to the product for
                            increased SEO ranking.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div>
                          {/*begin::Label*/}
                          <label className="form-label">
                            Meta Tag Keywords
                          </label>
                          {/*end::Label*/}
                          {/*begin::Editor*/}
                          <input
                            id="kt_ecommerce_add_product_meta_keywords"
                            name="kt_ecommerce_add_product_meta_keywords"
                            className="form-control mb-2"
                          />
                          {/*end::Editor*/}
                          {/*begin::Description*/}
                          <div className="text-muted fs-7">
                            Set a list of keywords that the product is related
                            to. Separate the keywords by adding a comma
                            <code>,</code>between each keyword.
                          </div>
                          {/*end::Description*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Card header*/}
                    </div>
                    {/*end::Meta options*/}
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
                    navigation("users");
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
          </form>
          {/*end::Form*/}
        </div>
      </div>
    </>
  );
}
