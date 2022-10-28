/* eslint-disable jsx-a11y/anchor-is-valid */
import { off } from 'process'
import React, { FC } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { Dropdown1, ChatInner } from '../../../../_metronic/partials'

const CompanyList: FC = () => {
  return (


    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
      {/*begin::Container*/}
      <div id="kt_content_container" className="container-xxl">

        {/*begin::Toolbar*/}
        <div className="d-flex flex-wrap flex-stack pb-7">
          {/*begin::Title*/}
          <div className="d-flex flex-wrap align-items-center my-1">
            <h3 className="fw-bold me-5 my-1">Users (38)</h3>
            {/*begin::Search*/}
            <div className="d-flex align-items-center position-relative my-1">
              {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
              <span className="svg-icon svg-icon-3 position-absolute ms-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                  <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              <input type="text" id="kt_filter_search" className="form-control form-control-sm border-body bg-body w-150px ps-10" placeholder="Search" />
            </div>
            {/*end::Search*/}
          </div>
          {/*end::Title*/}
          {/*begin::Controls*/}
          <div className="d-flex flex-wrap my-1">
            {/*begin::Tab nav*/}
            <ul className="nav nav-pills me-6 mb-2 mb-sm-0">
              <li className="nav-item m-0">
                <a className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active" data-bs-toggle="tab" href="#kt_project_users_card_pane">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
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
                  {/*end::Svg Icon*/}
                </a>
              </li>
              <li className="nav-item m-0">
                <a className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary" data-bs-toggle="tab" href="#kt_project_users_table_pane">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                      <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </a>
              </li>
            </ul>
            {/*end::Tab nav*/}
            {/*begin::Actions*/}
            <div className="d-flex my-0">
              {/*begin::Select*/}
              <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Filter" className="form-select form-select-sm border-body bg-body w-150px me-5">
                <option value="1">Recently Updated</option>
                <option value="2">Last Month</option>
                <option value="3">Last Quarter</option>
                <option value="4">Last Year</option>
              </select>
              {/*end::Select*/}
              {/*begin::Select*/}
              <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Export" className="form-select form-select-sm border-body bg-body w-100px">
                <option value="1">Excel</option>
                <option value="1">PDF</option>
                <option value="2">Print</option>
              </select>
              {/*end::Select*/}
            </div>
            {/*end::Actions*/}
          </div>
          {/*end::Controls*/}
        </div>
        {/*end::Toolbar*/}
        {/*begin::Tab Content*/}
        <div className="tab-content">
          {/*begin::Tab pane*/}
          <div id="kt_project_users_card_pane" className="tab-pane fade show active">
            {/*begin::Row*/}
            <div className="row g-6 g-xl-9">
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <img src="assets/media//avatars/300-2.jpg" alt="image" />
                      <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Karina Clark</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <span className="symbol-label fs-2x fw-semibold text-primary bg-light-primary">S</span>
                      <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Sean Bean</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Developer at Loop Inc</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <img src="assets/media//avatars/300-1.jpg" alt="image" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Alan Johnson</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Web Designer at Nextop Ltd.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <img src="assets/media//avatars/300-14.jpg" alt="image" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Robert Doe</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Marketing Analytic at Avito Ltd.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <img src="assets/media//avatars/300-6.jpg" alt="image" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Olivia Wild</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Art Director at Seal Inc.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <span className="symbol-label fs-2x fw-semibold text-warning bg-light-warning">A</span>
                      <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Adam Williams</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">System Arcitect at Wolto Co.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <span className="symbol-label fs-2x fw-semibold text-info bg-light-info">P</span>
                      <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Peter Marcus</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <span className="symbol-label fs-2x fw-semibold text-success bg-light-success">N</span>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Neil Owen</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Accountant at Numbers Co.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6 col-xxl-4">
                {/*begin::Card*/}
                <div className="card">
                  {/*begin::Card body*/}
                  <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-65px symbol-circle mb-5">
                      <img src="assets/media//avatars/300-12.jpg" alt="image" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Benjamin Jacob</a>
                    {/*end::Name*/}
                    {/*begin::Position*/}
                    <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
                    {/*end::Position*/}
                    {/*begin::Info*/}
                    <div className="d-flex flex-center flex-wrap">
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                        <div className="fw-semibold text-gray-400">Earnings</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">23</div>
                        <div className="fw-semibold text-gray-400">Tasks</div>
                      </div>
                      {/*end::Stats*/}
                      {/*begin::Stats*/}
                      <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                        <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                        <div className="fw-semibold text-gray-400">Sales</div>
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Pagination*/}
            <div className="d-flex flex-stack flex-wrap pt-10">
              <div className="fs-6 fw-semibold text-gray-700">Showing 1 to 10 of 50 entries</div>
              {/*begin::Pages*/}
              <ul className="pagination">
                <li className="page-item previous">
                  <a href="#" className="page-link">
                    <i className="previous"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">4</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">5</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">6</a>
                </li>
                <li className="page-item next">
                  <a href="#" className="page-link">
                    <i className="next"></i>
                  </a>
                </li>
              </ul>
              {/*end::Pages*/}
            </div>
            {/*end::Pagination*/}
          </div>
          {/*end::Tab pane*/}
          {/*begin::Tab pane*/}
          <div id="kt_project_users_table_pane" className="tab-pane fade">
            {/*begin::Card*/}
            <div className="card card-flush">
              {/*begin::Card body*/}
              <div className="card-body pt-0">
                {/*begin::Table container*/}
                <div className="table-responsive">
                  {/*begin::Table*/}
                  <table id="kt_project_users_table" className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold">
                    {/*begin::Head*/}
                    <thead className="fs-7 text-gray-400 text-uppercase">
                      <tr>
                        <th className="min-w-250px">Manager</th>
                        <th className="min-w-150px">Date</th>
                        <th className="min-w-90px">Amount</th>
                        <th className="min-w-90px">Status</th>
                        <th className="min-w-50px text-end">Details</th>
                      </tr>
                    </thead>
                    {/*end::Head*/}
                    {/*begin::Body*/}
                    <tbody className="fs-6">
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Emma Smith</a>
                              <div className="fw-semibold fs-6 text-gray-400">smith@kpmg.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Mar 10, 2022</td>
                        <td>$743.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Melody Macy</a>
                              <div className="fw-semibold fs-6 text-gray-400">melody@altbox.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Sep 22, 2022</td>
                        <td>$599.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Max Smith</a>
                              <div className="fw-semibold fs-6 text-gray-400">max@kt.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Nov 10, 2022</td>
                        <td>$953.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Sean Bean</a>
                              <div className="fw-semibold fs-6 text-gray-400">sean@dellito.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>May 05, 2022</td>
                        <td>$635.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Brian Cox</a>
                              <div className="fw-semibold fs-6 text-gray-400">brian@exchange.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Mar 10, 2022</td>
                        <td>$431.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Mikaela Collins</a>
                              <div className="fw-semibold fs-6 text-gray-400">mik@pex.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Dec 20, 2022</td>
                        <td>$856.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Francis Mitcham</a>
                              <div className="fw-semibold fs-6 text-gray-400">f.mit@kpmg.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>May 05, 2022</td>
                        <td>$556.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Olivia Wild</a>
                              <div className="fw-semibold fs-6 text-gray-400">olivia@corpmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Aug 19, 2022</td>
                        <td>$446.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Neil Owen</a>
                              <div className="fw-semibold fs-6 text-gray-400">owen.neil@gmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Mar 10, 2022</td>
                        <td>$877.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Dan Wilson</a>
                              <div className="fw-semibold fs-6 text-gray-400">dam@consilting.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Sep 22, 2022</td>
                        <td>$775.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Emma Bold</a>
                              <div className="fw-semibold fs-6 text-gray-400">emma@intenso.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Mar 10, 2022</td>
                        <td>$434.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Ana Crown</a>
                              <div className="fw-semibold fs-6 text-gray-400">ana.cf@limtel.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Oct 25, 2022</td>
                        <td>$543.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Robert Doe</a>
                              <div className="fw-semibold fs-6 text-gray-400">robert@benko.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Dec 20, 2022</td>
                        <td>$695.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">John Miller</a>
                              <div className="fw-semibold fs-6 text-gray-400">miller@mapple.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Feb 21, 2022</td>
                        <td>$419.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Lucy Kunic</a>
                              <div className="fw-semibold fs-6 text-gray-400">lucy.m@fentech.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Mar 10, 2022</td>
                        <td>$827.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Ethan Wilder</a>
                              <div className="fw-semibold fs-6 text-gray-400">ethan@loop.com.au</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Jun 24, 2022</td>
                        <td>$607.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Olivia Wild</a>
                              <div className="fw-semibold fs-6 text-gray-400">olivia@corpmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Oct 25, 2022</td>
                        <td>$498.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Robert Doe</a>
                              <div className="fw-semibold fs-6 text-gray-400">robert@benko.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Jul 25, 2022</td>
                        <td>$901.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Melody Macy</a>
                              <div className="fw-semibold fs-6 text-gray-400">melody@altbox.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Jun 24, 2022</td>
                        <td>$723.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Sean Bean</a>
                              <div className="fw-semibold fs-6 text-gray-400">sean@dellito.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Sep 22, 2022</td>
                        <td>$657.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Neil Owen</a>
                              <div className="fw-semibold fs-6 text-gray-400">owen.neil@gmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Sep 22, 2022</td>
                        <td>$798.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Ana Crown</a>
                              <div className="fw-semibold fs-6 text-gray-400">ana.cf@limtel.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Apr 15, 2022</td>
                        <td>$694.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Olivia Wild</a>
                              <div className="fw-semibold fs-6 text-gray-400">olivia@corpmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Jul 25, 2022</td>
                        <td>$725.00</td>
                        <td>
                          <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Sean Bean</a>
                              <div className="fw-semibold fs-6 text-gray-400">sean@dellito.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Nov 10, 2022</td>
                        <td>$901.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Mikaela Collins</a>
                              <div className="fw-semibold fs-6 text-gray-400">mik@pex.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Nov 10, 2022</td>
                        <td>$576.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                              </div>
                              {/*end::Avatar*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Emma Smith</a>
                              <div className="fw-semibold fs-6 text-gray-400">smith@kpmg.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Oct 25, 2022</td>
                        <td>$935.00</td>
                        <td>
                          <span className="badge badge-light-danger fw-bold px-4 py-3">Rejected</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Emma Bold</a>
                              <div className="fw-semibold fs-6 text-gray-400">emma@intenso.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Jun 24, 2022</td>
                        <td>$558.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Ethan Wilder</a>
                              <div className="fw-semibold fs-6 text-gray-400">ethan@loop.com.au</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Jul 25, 2022</td>
                        <td>$616.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Neil Owen</a>
                              <div className="fw-semibold fs-6 text-gray-400">owen.neil@gmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Aug 19, 2022</td>
                        <td>$761.00</td>
                        <td>
                          <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {/*begin::User*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Wrapper*/}
                            <div className="me-5 position-relative">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-35px symbol-circle">
                                <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Online*/}
                              <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                              {/*end::Online*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Info*/}
                            <div className="d-flex flex-column justify-content-center">
                              <a href="" className="mb-1 text-gray-800 text-hover-primary">Olivia Wild</a>
                              <div className="fw-semibold fs-6 text-gray-400">olivia@corpmail.com</div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </td>
                        <td>Nov 10, 2022</td>
                        <td>$686.00</td>
                        <td>
                          <span className="badge badge-light-warning fw-bold px-4 py-3">Pending</span>
                        </td>
                        <td className="text-end">
                          <a href="#" className="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                    </tbody>
                    {/*end::Body*/}
                  </table>
                  {/*end::Table*/}
                </div>
                {/*end::Table container*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card*/}
          </div>
          {/*end::Tab pane*/}
        </div>
        {/*end::Tab Content*/}
        {/*begin::Modals*/}
        {/*begin::Modal - View Users*/}
        <div className="modal fade" id="kt_modal_view_users" tabIndex={-1} aria-hidden="true">
          {/*begin::Modal dialog*/}
          <div className="modal-dialog mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header pb-0 border-0 justify-content-end">
                {/*begin::Close*/}
                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                      <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*begin::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                {/*begin::Heading*/}
                <div className="text-center mb-13">
                  {/*begin::Title*/}
                  <h1 className="mb-3">Browse Users</h1>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="text-muted fw-semibold fs-5">If you need more info, please check out our
                    <a href="#" className="link-primary fw-bold">Users Directory</a>.</div>
                  {/*end::Description*/}
                </div>
                {/*end::Heading*/}
                {/*begin::Users*/}
                <div className="mb-15">
                  {/*begin::List*/}
                  <div className="mh-375px scroll-y me-n7 pe-7">
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Emma Smith
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Art Director</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">smith@kpmg.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$23,000</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Melody Macy
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Marketing Analytic</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">melody@altbox.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$50,500</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Max Smith
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Software Enginer</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">max@kt.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$75,900</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Sean Bean
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Web Developer</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">sean@dellito.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$10,500</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Brian Cox
                            <span className="badge badge-light fs-8 fw-semibold ms-2">UI/UX Designer</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">brian@exchange.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$20,000</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Mikaela Collins
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Head Of Marketing</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">mik@pex.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$9,300</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Francis Mitcham
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Software Arcitect</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$15,000</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Olivia Wild
                            <span className="badge badge-light fs-8 fw-semibold ms-2">System Admin</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$23,000</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Neil Owen
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Account Manager</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$45,800</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Dan Wilson
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Web Desinger</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">dam@consilting.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$90,500</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Emma Bold
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Corporate Finance</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">emma@intenso.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$5,000</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Ana Crown
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Customer Relationship</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$70,000</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-5">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-6">
                          {/*begin::Name*/}
                          <a href="#" className="d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary">Robert Doe
                            <span className="badge badge-light fs-8 fw-semibold ms-2">Marketing Executive</span></a>
                          {/*end::Name*/}
                          {/*begin::Email*/}
                          <div className="fw-semibold text-muted">robert@benko.com</div>
                          {/*end::Email*/}
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Sales*/}
                        <div className="text-end">
                          <div className="fs-5 fw-bold text-dark">$45,500</div>
                          <div className="fs-7 text-muted">Sales</div>
                        </div>
                        {/*end::Sales*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::List*/}
                </div>
                {/*end::Users*/}
                {/*begin::Notice*/}
                <div className="d-flex justify-content-between">
                  {/*begin::Label*/}
                  <div className="fw-semibold">
                    <label className="fs-6">Adding Users by Team Members</label>
                    <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                  </div>
                  {/*end::Label*/}
                  {/*begin::Switch*/}
                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input className="form-check-input" type="checkbox" value="" checked />
                    <span className="form-check-label fw-semibold text-muted">Allowed</span>
                  </label>
                  {/*end::Switch*/}
                </div>
                {/*end::Notice*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - View Users*/}
        {/*begin::Modal - Users Search*/}
        <div className="modal fade" id="kt_modal_users_search" tabIndex={-1} aria-hidden="true">
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header pb-0 border-0 justify-content-end">
                {/*begin::Close*/}
                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                      <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*begin::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                {/*begin::Content*/}
                <div className="text-center mb-13">
                  <h1 className="mb-3">Search Users</h1>
                  <div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
                </div>
                {/*end::Content*/}
                {/*begin::Search*/}
                <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
                  {/*begin::Form*/}
                  <form data-kt-search-element="form" className="w-100 position-relative mb-5" autoComplete="off">
                    {/*begin::Hidden input(Added to disable form autocomplete)*/}
                    <input type="hidden" />
                    {/*end::Hidden input*/}
                    {/*begin::Icon*/}
                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    {/*end::Icon*/}
                    {/*begin::Input*/}
                    <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                    {/*end::Input*/}
                    {/*begin::Spinner*/}
                    <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                      <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                    </span>
                    {/*end::Spinner*/}
                    {/*begin::Reset*/}
                    <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                      <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                          <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    {/*end::Reset*/}
                  </form>
                  {/*end::Form*/}
                  {/*begin::Wrapper*/}
                  <div className="py-5">
                    {/*begin::Suggestions*/}
                    <div data-kt-search-element="suggestions">
                      {/*begin::Heading*/}
                      <h3 className="fw-semibold mb-5">Recently searched:</h3>
                      {/*end::Heading*/}
                      {/*begin::Users*/}
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        {/*begin::User*/}
                        <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                            <span className="badge badge-light">Art Director</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                            <span className="badge badge-light">Marketing Analytic</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                            <span className="badge badge-light">Software Enginer</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                            <span className="badge badge-light">Web Developer</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                            <span className="badge badge-light">UI/UX Designer</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}
                    </div>
                    {/*end::Suggestions*/}
                    {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                    <div data-kt-search-element="results" className="d-none">
                      {/*begin::Users*/}
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                              <div className="fw-semibold text-muted">smith@kpmg.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                              <div className="fw-semibold text-muted">melody@altbox.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                              <div className="fw-semibold text-muted">max@kt.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                              <div className="fw-semibold text-muted">sean@dellito.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                              <div className="fw-semibold text-muted">brian@exchange.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                              <div className="fw-semibold text-muted">mik@pex.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                              <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                              <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                              <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                              <div className="fw-semibold text-muted">dam@consilting.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                              <div className="fw-semibold text-muted">emma@intenso.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                              <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                              <div className="fw-semibold text-muted">robert@benko.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                              <div className="fw-semibold text-muted">miller@mapple.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                              <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                              <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                              <div className="fw-semibold text-muted">dam@consilting.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-center mt-15">
                        <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
                        <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Results*/}
                    {/*begin::Empty*/}
                    <div data-kt-search-element="empty" className="text-center d-none">
                      {/*begin::Message*/}
                      <div className="fw-semibold py-10">
                        <div className="text-gray-600 fs-3 mb-2">No users found</div>
                        <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                      </div>
                      {/*end::Message*/}
                      {/*begin::Illustration*/}
                      <div className="text-center px-5">
                        <img src="assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
                      </div>
                      {/*end::Illustration*/}
                    </div>
                    {/*end::Empty*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Search*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Users Search*/}
        {/*end::Modals*/}
      </div>
      {/*end::Container*/}
    </div>

  )
}

export { CompanyList }
