import React from "react";

function FacebookPost() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ color: "#666666" }}>Create Post Campaign</h1>
        <button type="button" className="btn btn-danger">
          Save and Exit
        </button>
      </div>
      <div
        className="mt-15"
        style={{
          justifyContent: "center",
          paddingInline: "20%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              color: "#666666",
              fontSize: 24,
              marginRight: 20,
              outline: "none",
            }}
          >
            Name
          </p>
          <input
            type="text"
            placeholder="This is for your own reference"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "5px",
              fontSize: 16,
              paddingInline: 10,
              border: "1px solid #888888",
            }}
          />
        </div>
        <div>
          <p style={{ fontSize: 16, color: "#666666", marginTop: "10px" }}>
            Select Facebook page to get started
          </p>
          <div
            style={{
              width: "100%",
              border: "1px solid #888888",
              marginBlock: "20px",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                textAlign: "center",
              }}
            >
              <i class="bi bi-facebook fa-3x" style={{ color: "#3b5998" }}></i>
              <p
                style={{ fontSize: 16, color: "#666666", marginBlock: "10px" }}
              >
                You haven't integrated your Facebook account.
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "fit-content" }}
                >
                  Connect to Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 16, color: "#666666" }}>
            What would you like to create?
          </p>
          <div
            style={{
              width: "100%",
              border: "1px solid #888888",
              marginBlock: "20px",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                textAlign: "center",
              }}
            >
              <i
                class="bi bi-file-earmark-check fa-3x"
                style={{ color: "#777777" }}
              ></i>
              <p
                style={{ fontSize: 16, color: "#666666", marginBlock: "10px" }}
              >
                No content created yet.
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "fit-content" }}
                >
                  Connect to Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookPost;
