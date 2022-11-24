import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TempResponse() {
  // const location = useLocation()
  const [state, setState] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5377/templates")
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(state, "state");
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tr style={{ height: "40px" }}>
          <th>S No.</th>
          <th>Name of the Template</th>
          <th>Purpose</th>
          <th>Responser Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      {(state) ? (
         state.map((item, index) => (
          <>
            <tr style={{ height: "40px" }}>
              <td>{index + 1}</td>
              <td>{item?.templateName}</td>
              <td>{item?.mainHeading}</td>
              <td>{item?.responserName}</td>
              <td>{item?.responseField1}</td>
              <td>{item?.responseField2}</td>
            </tr>
          </>
        ))
      ) : (<></>)}
       
      </table>
    </div>
  );
}

export default TempResponse;
