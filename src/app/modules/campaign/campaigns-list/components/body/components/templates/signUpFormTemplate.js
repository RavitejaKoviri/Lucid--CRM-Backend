import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TemplateImg from "../../../../../../../../_metronic/assets/images/background.jpg";
import "../templates/style.css";
import { v4 as uuid } from "uuid";

function SignUpFormTemplate() {
  const navigation = useNavigate();
  const unique_id = "001";
  let heading = "Nature";
  let inputFieldName = "Enter Customized Placeholder";
  let fontSize = "36px";

  const [state, setState] = useState({
    templateName: "",
    headName: heading,
    namePlaceHolder: inputFieldName,
    emailPlaceHolder: inputFieldName,
    fontSize: { fontSize },
    id: "",
  });

  const obj = {};

  function handleSubmit() {
    obj.mainHeading = state?.headName;
    obj.fieldUser = state?.namePlaceHolder;
    obj.fieldPassword = state?.emailPlaceHolder;
    obj.fontSize = state?.fontSize;
    obj.uniqueId = unique_id;
    obj.nameOfTemplate = state?.templateName;

    console.log(obj, "resspp");

    axios
      .post("https://crmbackend.luciddiagnostics.com/templates", obj, {
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "responseafterpost");
        setState({ id: response?.data?.id });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(state, "state");
  return (
    <div className="d-flex flex-column">
      <div
        className="d-flex flex-row"
        style={{ height: "600px", width: "100%" }}
      >
        <div className="" style={{ textAlign: "center", width: "50%" }}>
          <div>
            <p style={{ color: "#666666", fontSize: 14 }}>
              Name of the Template
            </p>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setState({ ...state, templateName: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-row mt-5">
            <div style={{ marginRight: "10px" }}>
              <p style={{ color: "#666666", fontSize: 12 }}>Heading</p>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setState({ ...state, headName: e.target.value })
                }
              />
            </div>
            <div>
              <p style={{ color: "#666666", fontSize: 12 }}>
                Font Size (ex: 12px, 14px )
              </p>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setState({ ...state, fontSize: e.target.value })
                }
              />
            </div>
          </div>
          <div className="d-flex flex-row mt-5">
            <div style={{ marginRight: "10px" }}>
              <p style={{ color: "#666666", fontSize: "12px" }}>
                Input Field Name
              </p>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setState({ ...state, namePlaceHolder: e.target.value })
                }
              />
            </div>
            <div>
              <p style={{ color: "#666666", fontSize: "12px" }}>
                Input Field Email
              </p>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setState({ ...state, emailPlaceHolder: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            paddingInline: "20%",
            paddingBlock: "2%",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div className="bg bg2">
            <h1
              className=""
              style={{
                color: "#FFFFFF",
                textShadow: "2px 2px #666666",
                fontSize: `${state?.fontSize}`,
                height: "200px",
              }}
            >
              {state.headName}
            </h1>
            <input
              type="text"
              className="form-control mt-5"
              placeholder={state.namePlaceHolder}
            />
            <input
              type="text"
              className="form-control mt-10"
              placeholder={state.emailPlaceHolder}
            />
            <button
              type="submit"
              className="btn mt-15"
              style={{
                height: "40px",
                border: "2px solid #FFFFFF",
                color: "#FFFFFF",
                textShadow: "#000000",
                fontSize: "16px",
              }}
            >
              SUBMIT
            </button>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary me-5"
            >
              Save
            </button>
            <button
              type="submit"
              onClick={() =>
                navigation("response", {
                  state: {
                    uniqueId: unique_id,
                  },
                })
              }
              className="btn btn-info"
            >
              View Responses
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20" style={{ textAlign: "center" }}>
        {state.id ? (
          <>
            <h2>Generated URL</h2>
            <Link to={`/templates/${state?.id}`}>
              <h2>http://localhost:4005/templates/{state?.id}</h2>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default SignUpFormTemplate;
