import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TempResponse() {
  const location = useLocation();
  const [state, setState] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://65.2.10.157:5377/templates?uniqueId=${location?.state?.uniqueId}`
      )
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(state, "state");
  return (
    <div>
      {state ? (
        state.map((item) => (
          <div
            className="mb-5"
            style={{
              width: "100%",
              background: "#FFFFFF",
              padding: "2%",
              borderRadius: "20px",
            }}
          >
            <table>
              <tr>
                <td
                  style={{
                    color: "#666666",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Name of the Template&nbsp;{" "}
                </td>
                <td
                  style={{
                    color: "#666666",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  : {item?.nameOfTemplate}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "#666666",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Purpose{" "}
                </td>
                <td
                  style={{
                    color: "#666666",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  : {item?.mainHeading}
                </td>
              </tr>
            </table>

            <div className="d-flex flex-row col-12 mt-5">
              {item?.templateResponses.map((i) => (
                <div
                  className="me-3"
                  style={{
                    width: "fit-content",
                    padding: "1%",
                    borderRadius: "10px",

                    backgroundColor: "#F1416C",
                  }}
                >
                  <table>
                    <tr>
                      <td
                        style={{
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Name of Responser{" "}
                      </td>
                      <td
                        style={{
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        : {i?.responserName}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Response
                      </td>
                      <td
                        style={{
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        : {i?.responseField1}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Response
                      </td>
                      <td
                        style={{
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        : {i?.responseField2}
                      </td>
                    </tr>
                  </table>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default TempResponse;
