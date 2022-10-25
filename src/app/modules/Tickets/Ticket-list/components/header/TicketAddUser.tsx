import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getticketStatuses,
  CreateTicket,
  getassignedTo,
  getcustomerTo,
  getticketsById,
  UpdateTickets,
} from "../../_redux/ticketAction";


export default function TicketAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const id: any = location?.state
  console.log(id, "dealid");
  const [tickets, setTickets] = useState(false);

  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const userassign = useSelector(
    (state: any) => state?.TicketData?.assignedTo
  );
  const customer = useSelector(
    (state: any) => state?.TicketData?.customerTo
  );
  const ticketsById = useSelector((state: any) => state?.TicketData?.ticketsById);

  const status = useSelector((state: any) => state?.TicketData?.ticketStatus);
  console.log(status, "status");

  useEffect(() => {
    dispatch(getticketStatuses(token));
    dispatch(getassignedTo(token));
    dispatch(getcustomerTo(token));

  }, []);

  const [data, setData] = useState({
    ticketStatus: '',
    ticketName: '',
    ticketPriority: '',
    ticketAssignedTo: '',
    customer: '',
    ticketStartDate: '',
    ticketEndDate: '',
    company: user?.company?.id,
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getticketsById(id?.id, token))
    setTickets(true);
  }, [ticketsById?.id])

  useEffect(() => {
    setData({
      ticketName: ticketsById?.ticketName,
      ticketStartDate: ticketsById?.ticketStartDate,
      ticketEndDate:ticketsById?.ticketEndDate,
      customer: ticketsById?.customer?.id,
      ticketAssignedTo: ticketsById?.ticketAssignedTo?.id,
      company: user?.company?.id,
      ticketStatus: ticketsById?.ticketStatus?.id,
      ticketPriority: ticketsById?.ticketPriority,
    })
    setTickets(false);
  }, [tickets])


  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    
    if (id !== null) {
      dispatch(UpdateTickets(data, id?.id, token));
    }
    else {
      dispatch(CreateTicket(data, token));
    }
    setData({
      ticketStatus: '',
      ticketName: '',
      ticketPriority: '',
      ticketAssignedTo: '',
      customer: '',
      ticketStartDate: '',
      ticketEndDate: '',
      company: '',
    });
  };



  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            className="form d-flex flex-column flex-lg-row"

          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">

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
                    value={data.ticketStatus}
                    onChange={handleChange}
                    name="ticketStatus"
                  >
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.ticketStatusName}</option>
                    ))}
                    {/* <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option> */}
                  </select>
                  {/*end::Select2*/}

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
                          <h2>Ticket Details</h2>
                        </div>
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-0">
                        {/*begin::Input group*/}
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter TicketName"
                                value={data.ticketName}
                                onChange={handleChange}
                                name="ticketName"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>Priority</label>
                              <select
                                className="form-select mb-3"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.ticketPriority}
                                onChange={handleChange}
                                name="ticketPriority"
                              >
                                <option >
                                  --Select --
                                </option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>AssignedTo</label>
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.ticketAssignedTo}
                                onChange={handleChange}
                                name="ticketAssignedTo"
                              ><option></option>


                                {
                                  userassign?.map((item: any) => (
                                    <option value={item?.id}>{item?.username}</option>
                                  ))
                                }

                              </select>
                            </div>
                            <div className="col-lg-6">
                              <label>Customer</label>
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.customer}
                                onChange={handleChange}
                                name="customer"
                              ><option></option>


                                {
                                  customer?.map((item: any) => (
                                    <option value={item?.id}>{item?.customerName}</option>
                                  ))
                                }

                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>StartDate</label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Enter customer"
                                value={data.ticketStartDate}
                                onChange={handleChange}
                                name="ticketStartDate"
                              />
                            </div>
                            <div className="col-lg-6">
                              <label>EndDate</label>
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Enter Company"
                                value={data.ticketEndDate}
                                onChange={handleChange}
                                name="ticketEndDate"
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
                <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation('/ticket/ticket')
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  id="kt_ecommerce_add_product_submit"
                  onClick={() => {
                    handleSubmit();
                    // navigation("users");
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
