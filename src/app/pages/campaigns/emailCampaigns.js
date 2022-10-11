import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MenuComponent } from "../../../_metronic/assets/ts/components";
import { AsideDefault } from "../../../_metronic/layout/components/aside/AsideDefault";
import { Content } from "../../../_metronic/layout/components/Content";
import { Footer } from "../../../_metronic/layout/components/Footer";
import { ScrollTop } from "../../../_metronic/layout/components/ScrollTop";
import { PageDataProvider } from "../../../_metronic/layout/core";
import {
  ActivityDrawer,
  DrawerMessenger,
  ThemeModeProvider,
} from "../../../_metronic/partials";
import { RightToolbar } from "../../../_metronic/partials/layout/RightToolbar";
import { HeaderWrapper2 } from "./headwerWrapper";
import Group795 from "../../../_metronic/assets/images/Group 795.png";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from '@material-ui/core/Button';
import ClearIcon from "@material-ui/icons/Clear";



const EmailCampaigns = () => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.key]);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{margin:"0 30%"}}>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #000",
          padding:"1rem 0 1rem 0",
          justifyContent:"space-between",
          marginBottom:"3rem",
         
        }}
      >
        <div>Create Campaign</div>
        <div
          style={{ cursor: "pointer", marginLeft: "5rem" }}
          onClick={toggleDrawer(anchor, false)}
        >
          <ClearIcon />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ fontFamily: "Segoe UI", fontWeight: 400, fontSize: "16px" }}
        >
          Name
        </div>
        <input
          type="text"
          style={{ marginLeft: "1rem", width: "100%", height: "35px" }}
          placeholder="This is for your own reference"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"2rem",
        }}
      >
        <div
          style={{ fontFamily: "Segoe UI", fontWeight: 400, fontSize: "16px" }}
        >
          Topic Name*
        </div>
        <select
          type="text"
          style={{  width: "100%", height: "35px" }}
          placeholder="This is for your own reference"
        >
             <option value="volvo" disabled>BrandTopics</option>
  <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div style={{padding:"1rem 0 1rem 0",display:"flex",justifyContent:"end",backgroundColor:"#E8F9FD"}}>   <Button style={{background: "#638CE8",borderColor:'#638CE8',color:'#ffffff', borderRadius: "5px",marginBottom:"1rem"}}>Create Campaign</Button></div>
    </div>
  );

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-row flex-column-fluid">
            <AsideDefault />
            <div
              className="wrapper d-flex flex-column flex-row-fluid"
              id="kt_wrapper"
              style={{ backgroundColor: "#ffffff" }}
            >
              <HeaderWrapper2 />
              <div
                id="kt_content"
                className="content d-flex flex-column flex-column-fluid"
                style={{ backgroundColor: "#ffffff", marginTop: "-4rem" }}
              >
                <Content>
                  <div
                    style={{
                      paddingBottom: "1rem",
                      fontFamily: "Segoe UI",
                      fontWeight: 400,
                      fontSize: " 20px",
                      color: "#000000",
                      borderBottom: "1px solid #D9D9D9",
                      marginBottom: "2rem",
                    }}
                  >
                    Email Campaigns{" "}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: " 17px",
                      color: "#848484",
                      textAlign: "center",
                      marginBottom: "3rem",
                    }}
                  >
                    What type of campaign would you like to create?
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>
                      {["top"].map((anchor) => (
                        <>
                          <div
                            onClick={toggleDrawer(anchor, true)}
                            style={{
                              textAlign: "center",
                              borderRadius: "5px",
                              boxShadow: "0px 0px 6px rgba(0,0,0,0.16)",
                              padding: "3rem  3rem 7rem 3rem",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "Segoe UI",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "21px",
                                color: "#000000",
                                marginBottom: "3rem",
                              }}
                            >
                              Regular email
                            </div>
                            <div>
                              <img
                                src={Group795}
                                style={{ marginBottom: "3rem" }}
                                alt="img"
                              />
                            </div>
                            <div
                              style={{
                                fontFamily: "Montserrat",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "10px",
                                lineHeight: "12px",
                                color: "#282828",
                              }}
                            >
                              Create a regular email campaign to your <br />
                              target audience
                            </div>
                          </div>
                    
                            <SwipeableDrawer
                              anchor={anchor}
                              open={state[anchor]}
                              onClose={toggleDrawer(anchor, false)}
                              onOpen={toggleDrawer(anchor, true)}
                            >
                              <div>{list(anchor)}</div>
                                
                            </SwipeableDrawer>
                         
                        </>
                      ))}
                    </div>

                    <div
                      style={{
                        textAlign: "center",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 6px rgba(0,0,0,0.16)",
                        padding: "3rem  3rem 7rem 3rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Segoe UI",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "21px",
                          color: "#000000",
                          marginBottom: "3rem",
                        }}
                      >
                        Google Meeting
                      </div>
                      <div>
                        <img
                          src={Group795}
                          style={{ marginBottom: "3rem" }}
                          alt="img"
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "10px",
                          color: "#282828",
                        }}
                      >
                        Promote your webinars created in google
                        <br />
                        Meeting through email campaign
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 6px rgba(0,0,0,0.16)",
                        padding: "3rem  3rem 7rem 3rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Segoe UI",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "21px",
                          color: "#000000",
                          marginBottom: "3rem",
                        }}
                      >
                        Websoc Forms
                      </div>
                      <div>
                        <img
                          src={Group795}
                          style={{ marginBottom: "3rem" }}
                          alt="img"
                        />
                      </div>
                      <div
                        style={{
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "10px",
                          lineHeight: "12px",
                          color: "#282828",
                        }}
                      >
                        Promote your webinars created in google
                        <br />
                        Meeting through email campaign
                      </div>
                    </div>
                  </div>
                </Content>
              </div>

              <Footer />
            </div>
          </div>
        </div>
        <ActivityDrawer />
        <RightToolbar />
        <DrawerMessenger />
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  );
};

export { EmailCampaigns };
