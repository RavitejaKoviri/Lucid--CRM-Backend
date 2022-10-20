/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateSource, getcampaigns, getcompanies, getSourcesById, getsource, UpdateSource, getsourceStatuses } from "../../_redux/sourceAction";

export default function SourceAdduser() {
  const location = useLocation();
  const [Source, setSource] = useState(false);
  const id = location?.state
  console.log(id, "location")
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const sourceById = useSelector(
    (state: any) => state?.Sources?.SourcesById
  );
  console.log(sourceById, "leadById");

  useEffect(() => {
    dispatch(getsource(token))
    dispatch(getcampaigns(token))
    dispatch(getcompanies(token))
    dispatch(getsourceStatuses(token))
  }, [])
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getSourcesById(id, token))
    setSource(true);
  }, [sourceById?.id])
  const [data, setData] = useState(
    {
      SourceName: " ",
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateSource(id, data, token));
    }
    else {
      dispatch(CreateSource(data, token));
    }
    setData({
      SourceName: " ",
    })
  };
  useEffect(() => {
    setData({
      SourceName: sourceById?.SourceName,
    })
    setSource(false);
  }, [Source])
  return (
    <>

      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2 ">
                            <div className="col-lg-6 ">
                              {/* <label>Name:</label> */}
                              <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={data.SourceName}
                                onChange={handleChange}
                                name="Name"
                                className="form-control"
                                
                                
                              />
                            </div>
                            
                    </div>
                    
                  
                  
                 
                    

                  </form>
                </div>
        </div>
       </>
  );
}
