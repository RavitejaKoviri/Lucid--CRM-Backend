import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EmailCampaign() {
  const navigation = useNavigate();
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
          <button className="btn btn-danger">Delete</button>
        </div>
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
          FORM
        </p>
        <div>
          {/* <img src={FormImage} /> */}
          <p className="my-5" style={{ fontSize: "14px", color: "#888888" }}>
            Are you in need of a signup form? Choose one from our templates.
          </p>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              // navigation("templates");
            }}
          >
            Choose templates
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailCampaign