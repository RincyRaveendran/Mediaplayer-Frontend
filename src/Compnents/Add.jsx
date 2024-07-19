import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);

  const [videoDetails,setVideoDetails] = useState({
    caption:"",
    imageUrl:"",
    embedLink:""
  })
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink =(e)=>{
    const link=e.target.value
    console.log(link);
    if(link.startsWith('https://youtu.be/')){
      setVideoDetails({...videoDetails,embedLink:`https:/www.youtube.com/embed/${link.slice(17,28)}`})
    }
    else{
      setVideoDetails({...videoDetails,embedLink:`https:/www.youtube.com/embed/${link.slice(-11)}`})
     
    }
  }
//https://youtu.be/ijBxe70sd8M?si=1Po3NffENYDelepL

  const handleUpload = async(e)=>{
    e.preventDefault()

    const{caption,imageUrl,embedLink} = videoDetails
    if(!caption || !imageUrl ||!embedLink){
      toast.info('please fill the form completely')
    }
    else{
      const result = await allVideoApi(videoDetails)
    if(result.status>=200 && result.status<300){
      toast.success('video added successfully')
      handleClose()
      setAddVideoStatus(result.data)
    }
    else{
      toast.error('something went wrong')
      console.log(result);
    }
    }

  }



  return (
    <>

    <div className='d-flex align-items-center'>
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn fs-5'><FontAwesomeIcon icon={faCloudArrowUp} /></button>

    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} /> Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded'>
            <div className='mb-2'>
              <input type="text" className='form-control' placeholder='Video Caption' onChange={(e)=>setVideoDetails({...videoDetails,
                caption:e.target.value})} />
            </div>
            <div className='mb-2'>
              <input type="text" className='form-control' placeholder='Video image' onChange={(e)=>setVideoDetails({...videoDetails,
                imageUrl:e.target.value})} />
            </div>
            <div className='mb-2'>
              <input type="text" className='form-control' placeholder='Video url' onChange={(e)=>getLink(e)} />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload} >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    
      <ToastContainer position='top-right' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add