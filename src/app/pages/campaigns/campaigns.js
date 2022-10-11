import { Toolbar } from "@mui/material";
import React,{useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MenuComponent } from "../../../_metronic/assets/ts/components";
import { AsideDefault } from "../../../_metronic/layout/components/aside/AsideDefault";
import { Content } from "../../../_metronic/layout/components/Content";
import { Footer } from "../../../_metronic/layout/components/Footer";
import { ScrollTop } from "../../../_metronic/layout/components/ScrollTop";
import { PageDataProvider } from "../../../_metronic/layout/core";
import { ActivityDrawer, DrawerMessenger, ThemeModeProvider } from "../../../_metronic/partials";
import { RightToolbar } from "../../../_metronic/partials/layout/RightToolbar";
import { HeaderWrapper2 } from "./headwerWrapper";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import Button from '@material-ui/core/Button';
import Group343 from "../../../_metronic/assets/images/Group 343.png"
import Group351 from "../../../_metronic/assets/images/Group 351.png"


const Campaigns = () => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='d-flex flex-column flex-root'>
          <div className='page d-flex flex-row flex-column-fluid'>
            <AsideDefault />
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper' style={{backgroundColor:"#ffffff"}}>
              <HeaderWrapper2 />
              <div id='kt_content' className='content d-flex flex-column flex-column-fluid' style={{backgroundColor:"#ffffff",marginTop:'-3rem'}}>
                <Content>
                  <h1 >Welcome,Naveen Ganta</h1>
                  <p>We want to help you drive success in every step you take with email marketing.</p>
                  <div style={{border:"1px solid #000", textAlign:"center", borderRadius:'10px',padding:"2rem 3rem 2rem 3rem"}}>
                  <div style={{marginBottom:"1rem"}}>
                  <MailOutlineOutlinedIcon style={{width:"91px",height:"91px"}} />
                  </div>
                  <div style={{fontFamily: 'Segoe UI',fontStyle: "normal",fontWeight: 600,fontSize: "20px",marginBottom:"1rem"}}>Let Us begin with your first campaign</div>
                  <div style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "14px",color:"#505050",marginBottom:"1rem"}} >Build your target audience,design your template,and achive your email marketing goals</div>
                  <Button style={{background: "#638CE8",borderColor:'#638CE8',color:'#ffffff',padding:".7rem .5rem .7rem 0.5rem", borderRadius: "5px",marginBottom:"1rem"}}>Create Campaign</Button>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{textAlign:'center',margin:"3rem"}}>
                    <div><img src={Group343} alt="img" style= {{marginBottom:"1rem"}}/></div>
                      <div style={{fontFamily: 'Segoe UI',fontWeight: 600,fontSize: "16px",color: "#000000",marginBottom:"1rem"}}>Email Automation</div>
                      <div style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "12px",color: "#505050",lineHeight: "15px",marginBottom:"1rem"}}>Automate your email marketing and increase ROI by creating workflow.Let each contact go
                                through a unique path based on their engagement pattern. </div>
                                <Button variant="outlined" style={{borderColor:"#0067C7",color:"#0067C7"}}>Create Workflow</Button>
                    </div>
                    <div style={{textAlign:'center',margin:"3rem"}}>
                    <div><img src={Group351} alt="img" style= {{marginBottom:"2.5rem"}} /></div>
                      <div  style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "12px",color: "#505050",lineHeight: "15px",marginBottom:"1rem"}}>Create a signup from embed it on your website to increase
                                        your contact base.</div>
                                        <Button variant="outlined" style={{borderColor:"#0067C7",color:"#0067C7"}}>Create Signup From</Button>
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
  )
}

export {Campaigns}
