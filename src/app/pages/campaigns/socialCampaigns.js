
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
import FlagIcon from '@material-ui/icons/Flag';
import ChatIcon from '@material-ui/icons/Chat';


const SocialCampaigns = () => {
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
                <div style={{display:'flex',justifyContent:'space-between',borderBottom:"1px solid #D9D9D9",marginBottom:"1rem",padding:"1rem 0 1rem 0"}}>
                <div style={{ fontFamily: 'Segoe UI',fontWeight: 400,fontSize:" 20px",color: "#000000"}}>Social Campaigns </div>
                  <Button variant="outlined" style={{borderColor:"#0067C7",color:"#0067C7"}}>Manage Pages</Button>
                </div>
              
                <div style={{display:"flex",justifyContent:'space-around'}}>
                    <div style={{textAlign:"center",borderRadius:'5px', boxShadow:"0px 0px 6px rgba(0,0,0,0.16)",padding:"3rem  3rem 2rem 3rem",width:'45%'}}>
                        <div style={{fontFamily: 'Segoe UI',fontStyle: "normal",fontWeight: 600,fontSize: "16px",lineHeight: "21px",color: "#000000",marginBottom:"1rem"}}>Page Campaigns</div>
                        <div><FlagIcon style={{marginBottom:"1rem",color:'#638CE8',height:"92px",width:"92px"}}/></div>
                        <div style={{fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: 400,fontSize: "10px",lineHeight: "12px",color: "#282828",marginBottom:"1rem"}} >Create a regular email campaign to your 
                     target audience</div>
                     <Link to="/leads/social/pagecampaign">
                     <Button style={{background: "#638CE8",borderColor:'#638CE8',color:'#ffffff',padding:".7rem .5rem .7rem 0.5rem", borderRadius: "5px",marginBottom:"1rem"}}>Create New</Button>
                     </Link>
                    </div>
                    <div style={{textAlign:"center",borderRadius:'5px', boxShadow:"0px 0px 6px rgba(0,0,0,0.16)",padding:"3rem  3rem 2rem 3rem",width:"45%"}}>
                        <div style={{fontFamily: 'Segoe UI',fontStyle: "normal",fontWeight: 600,fontSize: "16px",lineHeight: "21px",color: "#000000",marginBottom:"1rem"}}>Post Campaigns</div>
                        <div><ChatIcon style={{marginBottom:"1rem",color:'#638CE8',height:"92px",width:"92px"}}/></div>
                        <div style={{fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: 400,fontSize: "10px",color: "#282828",marginBottom:"1rem"}} >Promote your webinars created in google
       Meeting through email campaign</div>
       <Link to="/leads/social/postcampaign">
                     <Button style={{background: "#638CE8",borderColor:'#638CE8',color:'#ffffff',padding:".7rem .5rem .7rem 0.5rem", borderRadius: "5px",marginBottom:"1rem"}}>Create New</Button>
                     </Link>
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

export {SocialCampaigns}
