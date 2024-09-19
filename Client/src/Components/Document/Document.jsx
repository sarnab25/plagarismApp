import React from 'react'
import './document.css'
import Percentage from '../Percentage/Percentage'
function Document({setshowDetails, details, percentage}) {
  return (
    <div className='document'>
      <div className="percentage">
        <Percentage percentage={percentage}/>
      </div>
      🥲
      {details}
      <div className="download-container">
        
      <button className='download'>Download Report</button>
      <div className="x-btn" onClick={()=>setshowDetails(false)}>Close</div>
      </div>
       
    </div>
  )
}

export default Document
