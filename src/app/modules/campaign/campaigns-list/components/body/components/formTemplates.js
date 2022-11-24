import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";
import Template from "../../../../../../../_metronic/assets/images/sampleTemplate.png";

function FormTemplates() {
  const navigation = useNavigate();

  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ width: "200px", border: "0px solid #000000" }}
      >
        <img src={Template} alt="" style={{ borderRadius: "6px" }} />
        <button
          onClick={() => navigation("signupformtemplate")}
          type="submit"
          className="btn btn-danger"
          style={{}}
        >
          Use Template
        </button>
        {/* <button
          onClick={() => navigation("response")}
          type="submit"
          className="btn btn-info"
          style={{}}
        >
          View Response
        </button> */}
      </div>
    </>
  );
}

export default FormTemplates;
