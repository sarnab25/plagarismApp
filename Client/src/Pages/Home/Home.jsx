import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
function Home() {
  const navigate=useNavigate()

  const handleClick=()=>
  {
    navigate('/user-document-upload')
  }
  return (
    <div className="upload-container">
    <div className='text'>
      <h1>Real-time AI-Powered Plagiarism Detection</h1>
      <button onClick={handleClick}>Upload Your Document</button>
    </div>
    </div>
  )
}

export default Home
