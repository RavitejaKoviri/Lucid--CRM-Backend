import React, { useState } from "react";

function SocialMediaPost() {
  const [images, setImages] = useState([]);

  function onImageChange(e) {
    setImages(URL.createObjectURL(e.target.files[0]));
  }

  console.log(images, "images");
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
        <div
          style={{
            width: "100%",
            border: "1px solid #888888",
            marginBlock: "20px",
            borderRadius: "5px",
          }}
        >
          <textarea
            type="text"
            placeholder="Looks like you don't have any post yet."
            style={{
              width: "100%",
              border: "0px",
              padding: 10,
              borderRadius: "5px",
              minHeight: "50px",
              outline: "none",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              border: "0px",
              padding: 10,
              borderRadius: "5px",
            }}
          >
            <img src={images} />
            <label for="upload-photo" style={{ cursor: "pointer", marginTop:'10px' }}>
              <i class="bi bi-image fa-3x"></i>
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              id="upload-photo"
              onChange={onImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div>
          <p style={{ fontSize: 16, color: "#666666" }}>
            Where would you like to post this campaign?
          </p>
          <div
            style={{
              width: "100%",
              border: "1px solid #888888",
              marginBlock: "20px",
              padding:'20px',
              borderRadius: "5px",
              
            }}
          >
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            <i class="bi bi-facebook fa-3x" style={{color:'#3b5998'}}></i>
            <i class="bi bi-twitter fa-3x" style={{color:'#00acee'}}></i>
            <i class="bi bi-linkedin fa-3x" style={{color:'#0A66C2'}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaPost;
