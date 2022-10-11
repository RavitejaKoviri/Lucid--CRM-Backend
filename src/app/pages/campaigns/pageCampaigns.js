
import React,{useEffect} from "react";
import { Outlet, useLocation,Link } from "react-router-dom";
import { MenuComponent } from "../../../_metronic/assets/ts/components";
import { AsideDefault } from "../../../_metronic/layout/components/aside/AsideDefault";
import { Content } from "../../../_metronic/layout/components/Content";
import { Footer } from "../../../_metronic/layout/components/Footer";
import { ScrollTop } from "../../../_metronic/layout/components/ScrollTop";
import { PageDataProvider } from "../../../_metronic/layout/core";
import { ActivityDrawer, DrawerMessenger, ThemeModeProvider } from "../../../_metronic/partials";
import { RightToolbar } from "../../../_metronic/partials/layout/RightToolbar";
import { HeaderWrapper2 } from "./headwerWrapper";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';


const PageCampaigns = () => {
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
              <div id='kt_content' className='content d-flex flex-column flex-column-fluid' style={{backgroundColor:"#ffffff",marginTop:'-5rem'}}>
                <Content>
                <div style={{display:'flex',justifyContent:'space-between',borderBottom:"1px solid #D9D9D9",marginBottom:"5rem",padding:"1rem 0 1rem 0"}}>
                <div style={{ fontFamily: 'Segoe UI',fontWeight: 400,fontSize:" 20px",color: "#000000"}}>Page Campaigns </div>
                  <Button variant="outlined" style={{borderColor:"#0067C7",color:"#0067C7"}}>Save and Exit</Button>
                </div>
                <div style={{margin: "0 20%"}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}>
                <div style={{fontFamily: 'Segoe UI',fontWeight: 400,fontSize: "16px"}} >Name</div>
                <input type="text" style={{marginLeft:"1rem",width:'100%',height: "35px"}} placeholder='This is for your own reference' />
              </div>
              <div style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "14px",lineHeight: "17px",color: "#2E2E2E",margin:'3rem 0 0.5rem 0'}}>Select Facebook page to get started</div>
              <div>
                <div style={{border: "1px solid #B6B6B6",textAlign:'center',borderRadius: "2px"}}>
                <div>
                <FacebookIcon style={{width:"39px",height:'39px',color:"#8A8A8A",marginTop:"1rem"}}/>
                </div>
                <div style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "14px",color: "#000000",margin:'1rem 0 1rem 0'}}>You haven’t integrated your Facebook account</div>
                <Button style={{background: "#638CE8",height:"32px", borderColor:'#638CE8',color:'#ffffff', borderRadius: "3px",marginBottom:"3rem"}}>Connect to Facebook</Button>
                   
                </div>
              </div>
              <div style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "14px",lineHeight: "17px",color: "#2E2E2E",margin:'3rem 0 0.5rem 0'}}>What would you like to create?</div>
              <div>
                <div style={{border: "1px solid #B6B6B6",textAlign:'center',borderRadius: "2px"}}>
                <div>
                <AssignmentOutlinedIcon style={{width:"39px",height:'39px',color:"#8A8A8A",marginTop:"1rem"}}/>
                </div>
                <div style={{fontFamily: 'Montserrat',fontWeight: 400,fontSize: "14px",color: "#000000",margin:'1rem 0 1rem 0'}}>No content created yet</div>
                <Button style={{background: "#638CE8",height:"32px", borderColor:'#638CE8',color:'#ffffff', borderRadius: "3px",marginBottom:"3rem"}}>Connect to Facebook</Button>
                   
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
  )
}

export {PageCampaigns}
