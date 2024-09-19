import React from 'react'
import './Percentage.css'
function Percentage({ percentage}) {
  return (
    <div className='percentage'>
      {percentage ?  (percentage):(<div className="loader"></div>)}
     
</div>
  )
}

export default Percentage
