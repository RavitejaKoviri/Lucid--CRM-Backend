import React, { useState } from 'react'

function Checkbox(props) {
    const {checkbox, checked} = props
    const [nchecked, setnChecked] = useState(checked)
  return (
    <>
    {checkbox === false ? (
            <div
            className="d-flex flex-row"
            onClick={() => setnChecked(true)}
            style={{ width: "100px", height: "30px", borderRadius: "5px", cursor:'pointer' }}
          >
            <div
              style={{
                width: "50px",
                height: "30px",
                color: "#FFFFFF",
                background: "#d9534f",
                fontSize: 16,
                fontWeight: 600,
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                textAlign: "center",
                paddingBlock: "2px",
              }}
            >
              No
            </div>
            <div
              style={{
                width: "50px",
                height: "30px",
                color: "#999999",
                // background: "#24a0ed",
                fontSize: 16,
                fontWeight: 600,
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                textAlign: "center",
                paddingBlock: "2px",
                border: "1px solid #d9534f",
              }}
            >
              Yes
            </div>
          </div>
          ) : (
            <div
              className="d-flex flex-row"
              onClick={() => setnChecked(false)}
              style={{ width: "100px", height: "30px", borderRadius: "5px", cursor:'pointer' }}
            >
              <div
                
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#999999",
                  // background: "#d9534f",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                  border: "1px solid #24a0ed",
                }}
              >
                No
              </div>
              <div
                
                style={{
                  width: "50px",
                  height: "30px",
                  color: "#FFFFFF",
                  background: "#24a0ed",
                  fontSize: 16,
                  fontWeight: 600,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  textAlign: "center",
                  paddingBlock: "2px",
                }}
              >
                Yes
              </div>
            </div>
            
          )}
      </>
  )
}

export default Checkbox