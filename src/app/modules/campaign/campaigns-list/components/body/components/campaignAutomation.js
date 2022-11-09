import React from 'react'

function CampaignAutomation() {
  return (
   < >
    <h5 class="card-title">Create Signup Autoresponder
</h5>
    <div
        className="d-flex flex-row justify-content-center"
      >
        <div
        style={{fontSize:"14px"}}
        >
          Name
        </div>
        <input
          type="text"
          className="form-control w-50"
          placeholder="This is for your own reference"
        />
      </div>
      <div
       className="d-flex flex-row justify-content-center"
      >
        <div
        >
         Mailing List
        </div>
        <input
          type="text"
          className="form-control w-50"
          placeholder="This is for your own reference"
        />
        <div class="rel drpdnmnu" onclick="fltrdrpdwn('listDiv','lsListDiv');" id="listDiv"><span class="fr"><i class="zcicon-chevron-down f20"></i></span> <p id="listName" purpose="105907000000013191">My Sample List </p></div>
      </div>
   </>
  )
}

export default CampaignAutomation