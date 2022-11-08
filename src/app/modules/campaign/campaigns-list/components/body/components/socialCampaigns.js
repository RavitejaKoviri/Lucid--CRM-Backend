import React from 'react'
import { useNavigate } from 'react-router-dom'

function SocialCampaigns() {
  const navigation = useNavigate()
  return (
    <div className="d-flex flex-column justify-content-center">
        <div className="m-15">
              <input
                type="text"
                className="form-control w-50"
                placeholder="Search here..."
              />
            </div>
            <div class="container">
              <div class="row" >
                <div onClick={()=>{navigation("")}} className="col my-5 d-flex p-4 mx-4" style={{cursor:'pointer', border:'2px solid #24a0ed', borderRadius:'10px'}}>
                  <i class="bi bi-envelope fa-2x my-4 me-5"></i>
                  <div>
                    <h5 class="card-title">Email Campaign</h5>
                    <p class="card-text my-3">
                      Create and send regular email campaigns to your contacts.
                    </p>
                  </div>
                </div>
                <div onClick={()=>{navigation("")}} className="col my-5 d-flex p-4 mx-5" style={{cursor:'pointer', border:'2px solid #24a0ed', borderRadius:'10px'}}>
                  <i class="bi bi-input-cursor fa-2x my-4 me-5"></i>
                  <div>
                    <h5 class="card-title">Signup Form</h5>
                    <p class="card-text my-3">
                      Increase conversion rates by turning your website visitors
                      into contacts using signup forms.
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
    </div>
  )
}

export default SocialCampaigns