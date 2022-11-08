import React from "react";
import { useNavigate } from "react-router-dom";
import { KTSVG } from "../../../../../../_metronic/helpers";

function CampaignBody() {
  const navigation = useNavigate();
  return (
    // <div
    //   className="d-flex justify-content-end"
    //   data-kt-user-table-toolbar="base"
    // >
    //   <button
    //     type="button"
    //     className="btn btn-primary my-1"
    //     // data-bs-toggle="modal"
    //     // data-bs-target="#kt_modal_update_role"
    //     onClick={() => {
    //       navigation("campaigncreate");
    //     }}
    //   >
    //     <KTSVG
    //       path="/media/icons/duotune/arrows/arr075.svg"
    //       className="svg-icon-2"
    //     />
    //     Create
    //   </button>

    // </div>
    <div className="content d-flex flex-column flex-column-fluid">
      <div id="kt_content_container" className="container-xxl">
        <div className="form  flex-column flex-lg-row">
          <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <div className="tab-content">
              <div className="tab-pane fade show active" role="tab-panel">
                <div className="d-flex flex-column gap-7 gap-lg-6">
                  <div className="card card-flush py-4">
                    {/* <div className="card-header">
                      
                    </div> */}

                    <div className="card-body pt-0">
                      <form className="form">
                        <div className="form-group row mb-2">
                          <div className="col-lg-4"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => {
                  // handleSubmit();
                  navigation("campaigncreate");
                }}
                className="btn btn-primary"
              >
                <KTSVG
                  path="/media/icons/duotune/arrows/arr075.svg"
                  className="svg-icon-2"
                />
                <span className="indicator-label">Create</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignBody;
