import React, { useState } from 'react'
import Add from '../Compnents/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import See from '../Compnents/See'
import Category from '../Compnents/Category'
import { Link } from 'react-router-dom'







function Home() {

  const[addVideoStatus,setAddVideoStatus]= useState([])
  const [dragOut,setDragout]=useState(false)

  return (
    <>

    <div className='d-flex p-5'>
      <Add setAddVideoStatus={setAddVideoStatus}/>
      <h5 className='ms-auto'><Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}> <span className='hide'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>

    </div>

    <div className="row w-100 p-4">
      <div className="col-md-9">
        <See addVideoStatus={addVideoStatus} setDragout={setDragout}/>
      </div>
      <div className="col-md-3 p-4">
        <Category setDragout={setDragout} dragOut={dragOut}/>
      </div>
    </div>

    </>
  )
}

export default Home