/* eslint-disable no-unused-expressions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function SavedTemplate() {
  const params = useParams();

  const [state, setState] = useState("");
  const [inkokaState, setInkokaState] = useState({
    user: "",
    email: "",
    name:""
  });

  console.log(inkokaState, "inkokaState")

  useEffect(() => {
    axios
      .get(`http://localhost:5377/templates/${params?.id}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const obj = {};
  
  function onSubmit() {
    (obj.responseField1 = inkokaState.user),
      (obj.responseField2 = inkokaState.email);
      (obj.responserName = inkokaState.name);

    axios
      .put(`http://localhost:5377/templates/${params?.id}`, obj)
      .then((res) => {
       console.log(res)
      })
      .catch((error) => console.log(error));
  }

  console.log(params);
  console.log(state, "State");
  return (
    <div className="d-flex flex-column h-100" style={{marginInline:"10%", marginBlock:'5%'}}>
    <div
      className="d-flex flex-row"
      style={{ height: "600px", width: "100%" }}
    >
      <div className="" style={{ textAlign: "center", width: "50%" }}>
        <div>
          <p style={{ color: "#666666", fontSize: 16 }}>Name</p>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setInkokaState({ ...inkokaState, name: e.target.value })}
          />
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
              height:'200px'
            }}
          >
            {state?.mainHeading}
          </h1>
          <input
            type="text"
            className="form-control mt-5"
            placeholder={state.fieldUser}
            onChange={(e)=>setInkokaState({...inkokaState, user:e.target.value})}
          />
          <input
            type="text"
            className="form-control mt-10"
            placeholder={state.fieldPassword}
            onChange={(e)=>setInkokaState({...inkokaState, email:e.target.value})}
          />
          <button
            type="submit"
            className="btn mt-15"
            onClick={onSubmit}
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
        
      </div>
    </div>
  </div>
  );
}

export default SavedTemplate;
