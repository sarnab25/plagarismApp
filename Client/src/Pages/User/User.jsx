import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import Document from '../../Components/Document/Document'
import axios from 'axios'
import './User.css'
function User() {
 const [file , setfile]=useState(null)
const [showDetails, setshowDetails]= useState(false)
const [details, setdetails]= useState("")
const [percentage, setpercentage]=useState(null)
 const handleChange =(event)=>
 {
  setfile(event.target.files[0])
 }

  const handleSubmit=async(event)=>
  {
    event.preventDefault()

    const formData = new FormData()
    formData.append('filetoUpload',file)
   
    try {
      const response =await axios.post("https://plagarismapp.onrender.com/plagarism/check",formData,{ headers: {
        'Content-Type': 'multipart/form-data',
      },})
      console.log(response)

      setpercentage(response.data.percentage)
       
      
      

    } catch (error) {
      if(error.response && error.response.status===400)
      {
        setdetails(error.response.data.message)
      }
    }
  }

  return (
    <>
    <div className='report-container'>
        <div className="upload-container-user">
            <FontAwesomeIcon icon={ faUpload} style={{fontSize:"15rem"}}/>
            <form  onSubmit={handleSubmit}>
            <label htmlFor="file-upload"></label>
            <input type="file" id='filetoUpload'   onChange={handleChange}/>
            <button onClick={()=> setshowDetails(true)}>Analyze</button>
            </form>
           
        </div>
        {/* <div className="detail-container">
        <div className="percentage-container">
            <Percentage/>
        </div>
        <div className="document-container">
            <Document/>
            <button className='download'>Download Report</button>
        </div>
        </div> */}
    </div>

    {
      showDetails && <Document setshowDetails={setshowDetails} details={details} percentage={percentage}/>
    }
    </>
  )
}

export default User
