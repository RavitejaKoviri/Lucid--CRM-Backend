/* eslint-disable no-unused-expressions */
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormImage from "../../../../../../../_metronic/assets/images/formImage2.png";

function EmailCampaign() {
  const navigation = useNavigate();
  const token = useSelector((state) => state?.auth?.authToken);

  // title states and functions
  const [formTitle, setFormTitle] = useState("Untitled Signup Form");
  const [titleEdit, setTitleEdit] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState();

  function EditTitleButton() {
    setTitleEdit(true);
  }

  function ChangeTitle() {
    setFormTitle(enteredTitle);
    setTitleEdit(false);
  }

  function cancelEdit() {
    setTitleEdit(false);
  }

  // accordion
  const [accord, setAccord] = useState({
    subject: false,
    sender: false,
    recipient: false,
  });

  const [email, setEmail] = useState({
    subject: "",
    message: "",
    from: "",
    to: "",
    topic: ""
  });

  const obj = {};
  function onSubmit() {
    (obj.subject = email.subject),
      (obj.message = email.message),
      (obj.from = email.from),
      (obj.to = email.to);

    console.log(obj, "obj");
    axios
      .post("http://65.2.10.157:5377/users-permissions/send", obj, {
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        (console.log(response, "responseafterpost"))
        setEmail({ ...email, subject: "" })
        setEmail({ ...email, to: "" })
        setEmail({ ...email, message: "" })
        setEmail({ ...email, from: "" })
        setAccord({ ...accord, subject: false })
        setAccord({ ...accord, sender: false })
        setAccord({ ...accord, recipient: false })
      })
      .catch(() => {
      })
  }

  console.log(enteredTitle, "title");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 0,
        }}
      >
        <div className="d-flex flex-row">
          <div>
            <i
              class="bi bi-arrow-left fa-2x me-5"
              style={{ color: "black", cursor: "pointer" }}
            ></i>
          </div>
          <div>
            {titleEdit === false ? (
              <div className="d-flex flex-row">
                <h1 className="me-3">{formTitle}</h1>
                <div
                  onClick={EditTitleButton}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  <i className="bi bi-pencil fa-2x"></i>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-row">
                <input
                  type="text"
                  placeholder="Untitled Signup Form"
                  onChange={(e) => setEnteredTitle(e.target.value)}
                  style={{
                    width: "50%",
                    height: "44px",
                    borderRadius: "4px",
                    fontSize: 18,
                    marginRight: 10,
                  }}
                />
                <button className="btn btn-primary me-3" onClick={ChangeTitle}>
                  Save
                </button>
                <button className="btn btn-warning me-3" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary me-5"
            onClick={onSubmit}
          >
            Send Mail
          </button>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <div
        className="d-flex flex-row my-10 p-10"
        style={{ background: "#FFFFFF", borderRadius: "10px" }}
      >
        <div style={{ width: "15%" }}>
          <p
            style={{
              fontSize: 18,
              color: "#888888",
              marginRight: "8%",
              fontWeight: 550,
            }}
          >
            TOPIC
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 18,
                color: "#000000",
                marginRight: "8%",
                fontWeight: 400,
              }}
            >
              Marketing
            </p>
          </div>
          <div>
            <select
              style={{
                borderColor: "#d9534f",
                border: "2px solid #d9534f",
                color: "#d9534f",
                height: "40px",
                borderRadius: "4px",
                outline: "none",
                fontSize: "14px",
              }}
            >
              <option disabled selected>
                More Options
              </option>
              <option value={"Marketing"}>Marketing</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ background: "#FFFFFF", borderRadius: "10px" }}>
        {accord.subject === false ? (
          <div className="d-flex flex-row my-10 p-10">
            <div style={{ width: "15%" }}>
              <p
                style={{
                  fontSize: 18,
                  color: "#888888",
                  marginRight: "8%",
                  fontWeight: 550,
                }}
              >
                SUBJECT
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 14,
                    color: "#000000",
                    marginRight: "8%",
                    fontWeight: 400,
                  }}
                >
                  Give a suitable subject line to this campaign.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setAccord({ ...accord, subject: true })}
                  type="text"
                  className="btn btn-danger"
                >
                  Add Subject
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-row my-10 p-10">
            <div className="d-flex flex-column w-100">
              <div>
                <p
                  style={{
                    fontSize: 18,
                    color: "#888888",
                    marginRight: "7%",
                    fontWeight: 550,
                  }}
                >
                  MESSAGE
                </p>
                <p style={{ fontSize: 14 }}>
                  Give a suitable subject line to this campaign.
                </p>
              </div>
              <div className="d-flex flex-row mt-5">
                <div
                  className="d-flex flex-column mt-5"
                  style={{ width: "15%" }}
                >
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, marginBlock: "4px" }}
                  >
                    Subject*
                  </p>
                  <p
                    className="mt-8"
                    style={{ fontSize: 16, marginBlock: "4px" }}
                  >
                    Message*
                  </p>
                </div>
                <div className="d-flex flex-column w-100">
                  <input
                    type="text"
                    className="mt-5"
                    onChange={(e) =>
                      setEmail({ ...email, subject: e.target.value })
                    }
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #888888",
                      borderRadius: "4px",
                      height: 40,
                      minWidth: "60%",
                      outline: "none",
                      marginInline: "0%",
                    }}
                  />
                  <input
                    type="text"
                    className="mt-5"
                    onChange={(e) =>
                      setEmail({ ...email, message: e.target.value })
                    }
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #888888",
                      borderRadius: "4px",
                      height: 40,
                      minWidth: "60%",
                      outline: "none",
                    }}
                  />
                  <div className="d-flex flex-row mt-8">
                    <button className="btn btn-primary me-5">Save</button>
                    <button
                      onClick={() => setAccord({ ...accord, subject: false })}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ background: "#FFFFFF", borderRadius: "10px" }}>
        {accord.sender === false ? (
          <div
            className="d-flex flex-row my-10 p-10"
            style={{ background: "#FFFFFF", borderRadius: "10px" }}
          >
            <div style={{ width: "15%" }}>
              <p
                style={{
                  fontSize: 18,
                  color: "#888888",
                  marginRight: "8%",
                  fontWeight: 550,
                }}
              >
                SENDER
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 14,
                    color: "#000000",
                    marginRight: "8%",
                    fontWeight: 400,
                  }}
                >
                  Who is sending this email campaign?
                </p>
              </div>
              <div>
                <button
                  onClick={() => setAccord({ ...accord, sender: true })}
                  type="text"
                  className="btn btn-danger"
                >
                  Add Sender Details
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-row my-10 p-10">
            <div className="d-flex flex-column w-100">
              <div>
                <p
                  style={{
                    fontSize: 18,
                    color: "#888888",
                    marginRight: "7%",
                    fontWeight: 550,
                  }}
                >
                  SENDER
                </p>
                <p style={{ fontSize: 14 }}>
                  Who is sending this email campaign?
                </p>
              </div>
              <div className="d-flex flex-row mt-5">
                <div
                  className="d-flex flex-column mt-5"
                  style={{ width: "15%" }}
                >
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, marginBlock: "4px" }}
                  >
                    Sender Name
                  </p>
                  <p
                    className="mt-8"
                    style={{ fontSize: 16, marginBlock: "4px" }}
                  >
                    Sender Email Address
                  </p>
                </div>
                <div className="d-flex flex-column w-100">
                  <input
                    type="text"
                    className="mt-5"
                    // onChange={(e)=>setEmail({...email, subject:e.target.value})}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #888888",
                      borderRadius: "4px",
                      height: 40,
                      minWidth: "60%",
                      outline: "none",
                      marginInline: "0%",
                    }}
                  />
                  <input
                    type="text"
                    className="mt-5"
                    onChange={(e) =>
                      setEmail({ ...email, from: e.target.value })
                    }
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #888888",
                      borderRadius: "4px",
                      height: 40,
                      minWidth: "60%",
                      outline: "none",
                    }}
                  />
                  <div className="d-flex flex-row mt-8">
                    <button className="btn btn-primary me-5">Save</button>
                    <button
                      onClick={() => setAccord({ ...accord, sender: false })}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ background: "#FFFFFF", borderRadius: "10px" }}>
        {accord.recipient === false ? (
          <div
            className="d-flex flex-row my-10 p-10"
            style={{ background: "#FFFFFF", borderRadius: "10px" }}
          >
            <div style={{ width: "15%" }}>
              <p
                style={{
                  fontSize: 18,
                  color: "#888888",
                  marginRight: "8%",
                  fontWeight: 550,
                }}
              >
                RECIPIENT
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 14,
                    color: "#000000",
                    marginRight: "8%",
                    fontWeight: 400,
                  }}
                >
                  Add the contacts you want to send this email to.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setAccord({ ...accord, recipient: true })}
                  type="text"
                  className="btn btn-danger"
                >
                  Add Recipients
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-row my-10 p-10">
            <div className="d-flex flex-column w-100">
              <div>
                <p
                  style={{
                    fontSize: 18,
                    color: "#888888",
                    marginRight: "7%",
                    fontWeight: 550,
                  }}
                >
                  RECIPIENT
                </p>
                <p style={{ fontSize: 14 }}>
                  Add the contacts you want to send this email to.
                </p>
              </div>
              <div className="d-flex flex-row mt-5">
                <div
                  className="d-flex flex-column mt-5"
                  style={{ width: "15%" }}
                >
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, marginBlock: "4px" }}
                  >
                    Recipient Name
                  </p>
                  <p
                    className="mt-8"
                    style={{ fontSize: 16, marginBlock: "4px" }}
                  >
                    Recipient Email Address
                  </p>
                </div>
                <div className="d-flex flex-column w-100">
                  <input
                    type="text"
                    className="mt-5"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #888888",
                      borderRadius: "4px",
                      height: 40,
                      minWidth: "60%",
                      outline: "none",
                      marginInline: "0%",
                    }}
                  />
                  <input
                    type="text"
                    className="mt-5"
                    onChange={(e) => setEmail({ ...email, to: e.target.value })}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #888888",
                      borderRadius: "4px",
                      height: 40,
                      minWidth: "60%",
                      outline: "none",
                    }}
                  />
                  <div className="d-flex flex-row mt-8">
                    <button className="btn btn-primary me-5">Save</button>
                    <button
                      onClick={() => setAccord({ ...accord, recipient: false })}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="d-flex flex-row my-10 p-10"
        style={{ background: "#FFFFFF", borderRadius: "10px" }}
      >
        <p
          style={{
            fontSize: 18,
            color: "#888888",
            marginRight: "8%",
            fontWeight: 550,
          }}
        >
          CONTENT
        </p>
        <div>
          <img src={FormImage} />
          <p className="my-5" style={{ fontSize: "14px", color: "#888888" }}>
            Create the content of your campaign.
          </p>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              navigation("templates");
            }}
          >
            Create Content
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailCampaign;
