import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CampaignLoading, getCampaignById, getCampaignStatuses, UpdateCampaign } from "../../_redux/campaignAction";
import { getCompanies, } from "../../_redux/campaignAction";
import { CreateCampaign } from "../../_redux/campaignCrud";

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

export default function CampaignAdduser() {
  const navigation = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const id = location?.state
  console.log(id, "location")
  const [campaign, setCampaign] = useState(false);

  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );

  const user = useSelector(
    (state: any) => state?.auth?.user
  );

  // const campaign = useSelector(
  //   (state: any) => state?.TargetData?.campaigns
  // );
  // const company = useSelector(
  //   (state: any) => state?.campaignData?.Comapnies
  // );
  const status = useSelector(
    (state: any) => state?.campaignData?.campaignStatus
  );
  const CampaignByIds = useSelector(
    (state: any) => state?.campaignData?.CampaignById
  );
  console.log(status, "status");
  useEffect(() => {

    dispatch(getCompanies(token))
    dispatch(getCampaignStatuses(token))
  }, [])

  // useEffect(() => {
  //   dispatch(getCampaignById(id, token))
  //   setCampaign(true);
  // }, [CampaignByIds?.id])

  const [data, setData] = useState({
    campaignName: "",
    campaignStatus: "",
    company: user?.company?.id,
  })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CreateCampaign(data, token));
    dispatch(CampaignLoading(true))
    setData({
      campaignName: "",
      campaignStatus: "",
      company: "",

    })
    navigation('/campaigns/campaigns')
  };






  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            className="form  flex-column flex-lg-row"
          >

            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">

              <div className="tab-content">
                <div className="tab-pane fade show active" role="tab-panel">
                  <div className="d-flex flex-column gap-7 gap-lg-6">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Campaign Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-4">
                              {/* <label>campaignName:</label> */}
                              <input
                                type="text"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="campaignName"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Campaign Name"
                              />
                            </div>
                            <div className="col-lg-4">

                              {/* <label>Status</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select Status"
                                value={data.campaignStatus}
                                onChange={handleChange}
                                name="campaignStatus"
                              >
                                <option>--Select Status--</option>
                                {status?.map((item: any) => (
                                  <option value={item?.id}>{item?.campaignStatusName}</option>
                                ))}
                              </select>
                            </div>
                            {/* <div className="col-lg-6">
                              <label>Contact PersonName:</label>
                              <input
                                type="text"
                                value={data.campaignName}
                                onChange={handleChange}
                                name="campaignName"
                                 className="form-control form-control-lg form-control-solid"
                                placeholder="Enter PhoneNumber"
                              />
                              
                            </div> */}
                          </div>
                          {/* <div className="form col-4 mt-6">
                      <label>Status</label>
                     <select
                     className="form-control form-control-lg form-control-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.campaignStatus}
                    onChange={handleChange}
                    name="campaignStatus"
                  >
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.campaignStatusName}</option>
                    ))}
                  </select>
                     </div> */}


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
                    navigation('/campaigns/campaigns')
                  }}
                >
                  Back
                </button>
                <button
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
