import React from "react";
import { useNavigate } from "react-router-dom";

function CampaignCreate() {
  const navigation = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="m-15">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search here..."
          // style={{width:'50%'}}
        />
      </div>
      <div class="container">
        <div class="row">
          <div
            onClick={() => {
              navigation("emailcampaign");
            }}
            className="col my-5 d-flex pt-5 mx-5"
            style={{
              cursor: "pointer",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
            }}
          >
            <i class="bi bi-envelope fa-2x my-4 me-5"></i>
            <div>
              <h5 class="card-title" style={{ color: "#24a0ed" }}>
                Email Campaign
              </h5>
              <p class="card-text my-3" style={{ color: "#888888" }}>
                Create and send regular email campaigns to your contacts.
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              navigation("signupform");
            }}
            className="col my-5 d-flex pt-5 mx-5"
            style={{
              cursor: "pointer",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
            }}
          >
            <i class="bi bi-input-cursor fa-2x my-4 me-5"></i>
            <div>
              <h5 class="card-title" style={{ color: "#24a0ed" }}>
                Signup Form
              </h5>
              <p class="card-text my-3" style={{ color: "#888888" }}>
                Increase conversion rates by turning your website visitors into
                contacts using signup forms.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            onClick={() => {
              navigation("automation");
            }}
            className="col my-5 d-flex pt-5 mx-5"
            style={{
              cursor: "pointer",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
            }}
          >
            <i class="bi bi-gear fa-2x my-4 me-5"></i>
            <div>
              <h5 class="card-title" style={{ color: "#24a0ed" }}>
                Automation
              </h5>
              <p class="card-text my-3" style={{ color: "#888888" }}>
                Initiate automated message series and action flows for contacts
                based on their activities using workflows. Send automated emails
                with autoresponders.
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              navigation("socialcampaign");
            }}
            className="col my-5 d-flex pt-5 mx-5"
            style={{
              cursor: "pointer",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
            }}
          >
            <i class="bi bi-share fa-2x my-4 me-5"></i>
            <div>
              <h5 class="card-title" style={{ color: "#24a0ed" }}>
                Social Campaign
              </h5>
              <p class="card-text my-3" style={{ color: "#888888" }}>
                Reach out to your followers and engage with them by posting your
                campaigns on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCreate;
