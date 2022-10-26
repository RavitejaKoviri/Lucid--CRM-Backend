import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateTask, gettaskcompanies, gettaskcontact, gettaskStatus,gettasksById,UpdateTask } from "../../_redux/taskAction";
// import {
//   CreateDeal,
//   getcampaigns,
//   getcompanies,
//   getdealStatuses,
//   getsource,
// } from "../../_redux/taskAction";

export default function TaskAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const id: any = location?.state
  console.log(id, "dealid");

  const [task, setTask] = useState(false);

  const token = useSelector((state: any) => state?.auth?.authToken);
  const user = useSelector((state: any) => state?.auth?.user);
  const contact = useSelector((state: any) => state?.tasks?.taskcontact);
  const company = useSelector((state: any) => state?.tasks?.Comapnies);
  const status = useSelector((state: any) => state?.tasks?.taskStatus);
  const taskById = useSelector((state: any) => state?.tasks?.tasksById);

  console.log(user, "user");

  useEffect(() => {
    dispatch(gettaskcompanies(token));
    dispatch(gettaskStatus(token));
    dispatch(gettaskcontact(token));

  }, []);
  const [data, setData] = useState({
    subject: " ",
    taskRepeat: " ",
    taskRemainder: " ",
    taskPriority: " ",
    taskDueDate: " ",
    taskDescription: " ",
    contact: " ",
    company: user?.company?.id,
    taskStatus: " ",
    taskOwner: user?.id,
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(id, "TestId");
    dispatch(gettasksById(id?.id, token))
    setTask(true);
  }, [taskById?.id])

  useEffect(() => {
    setData({
      subject: taskById?.subject,
      taskRepeat: taskById?.taskRepeat,
      taskRemainder: taskById?.taskRemainder,
      taskPriority: taskById?.taskPriority,
      taskDueDate: taskById?.taskDueDate,
      taskDescription: taskById?.taskDescription,
      contact: taskById?.contact?.id,
      company: user?.company?.id,
      taskStatus: taskById?.taskStatus?.id,
      taskOwner: user?.id,
    })
    setTask(false);
  }, [task])


  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    if (id !== null) {
      dispatch(UpdateTask(data, id?.id, token));
    }
    else {
      dispatch(CreateTask(data, token));
    }
    setData({
      subject: " ",
      taskRepeat: " ",
      taskRemainder: " ",
      taskPriority: " ",
      taskDueDate: " ",
      taskDescription: " ",
      contact: " ",
      company: " ",
      taskStatus: " ",
      taskOwner: " ",
    });
  };
  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            className="form d-flex flex-column flex-lg-row"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
            
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Status</h2>
                  </div>
                  
                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                </div>
                
                <div className="card-body pt-0">
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.taskStatus}
                    onChange={handleChange}
                    name="taskStatus"
                  >
                    <option></option>
                    {status?.map((item: any) => (
                      <option value={item?.id}>{item?.taskStatusName}</option>
                    ))}
                  </select>
                
                  <div className="d-none mt-10">
                    <label className="form-label">
                      Select publishing date and time
                    </label>
                    <input
                      className="form-control"
                      id="kt_ecommerce_add_product_status_datepicker"
                      placeholder="Pick date & time"
                    />
                  </div>
                </div>
              </div>
              
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>contact</h2>
                  </div>
                 
                  <div className="card-toolbar">
                    <div className="rounded-circle bg-success w-15px h-15px"></div>
                  </div>
                </div>
              
                <div className="card-body pt-0">
                  {/*begin::Select2*/}
                  <select
                    className="form-select mb-2"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Select an option"
                    value={data.contact}
                    onChange={handleChange}
                    name="contact"
                  >
                    <option></option>
                    {contact?.map((item: any) => (
                      <option value={item?.id}>{item?.contactName}</option>
                    ))}
                  </select>
                
                  <div className="d-none mt-10">
                    <label className="form-label">
                      Select publishing date and time
                    </label>
                    <input
                      className="form-control"
                      id="kt_ecommerce_add_product_status_datepicker"
                      placeholder="Pick date & time"
                    />
                  </div>
                </div>
                
              </div>
              
            </div>
           
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
             
              <div className="tab-content">
                <div className="tab-pane fade show active" role="tab-panel">
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Task Details</h2>
                        </div>
                      </div>
                     
                      <div className="card-body pt-0">
                        <form className="form">
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Subject:</label>
                              <input
                                type="text"
                                value={data.subject}
                                onChange={handleChange}
                                name="subject"
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Subject'
                                />
                            </div>
                            <div className="col-lg-6">
                              <label>Task DueDate:</label>
                              <input
                                type="date"
                                value={data.taskDueDate}
                                onChange={handleChange}
                                name="taskDueDate"
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                // placeholder="Enter EmailOptOut"
                              />
                            </div>
                          </div>

                          <div className="form-group row mb-2">
                           
                            <div className="col-lg-6">
                              <label>Task Repeat:</label>
                              <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.taskRepeat}
                                onChange={handleChange}
                                name="taskRepeat"
                              >
                                <option >
                                  --Select --
                                </option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <label>Task Remainder:</label>
                             
                                <select
                                className="form-select mb-2"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.taskRemainder}
                                onChange={handleChange}
                                name="taskRemainder"
                              >
                                <option >
                                  --Select --
                                </option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-lg-6">
                              <label>Task Priority:</label>
                             
                               <select
                                className="form-select mb-3"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                value={data.taskPriority}
                                onChange={handleChange}
                                name="taskPriority"
                              >
                                <option >
                                  --Select --
                                </option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                              </select>
                            </div>
                            
                          </div>
                          <div className="form-group row mb-2">
                          <div className="col-lg-12">
                              <label>Task Description:</label>
                              <textarea
                                // type="text"
                                value={
                                  data.taskDescription
                                }
                                onChange={handleChange}
                                name="taskDescription"
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder="Enter CompanyName"
                              />
                            </div>
                            
                          </div>
                         
                        </form>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
              <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation('/tasks/tasks')
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleSubmit();
                    // navigation("users");
                  }}
                  className="btn btn-primary"
                >
                  <span className="indicator-label">Save Changes</span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/*end::Form*/}
        </div>
      </div>
    </>
  );
}
