import React, { useEffect } from 'react'
import Videocard from './Videocard'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategory, removeCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category({dragOut,setDragout}) {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addStatus, setAddStatus] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);


  console.log(categoryName);

  const handleCategoryAdd = async () => {
    if(categoryName){
      const reqBody = {
      categoryName,
      allVideos: []
    }

    const result = await addCategoryApi(reqBody)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setCategoryName("")
      handleClose()
      toast.success('Category added successfully')
      setAddStatus(true)

    }
    else{
      toast.error('something went wrong')
    }

  }
  else{
    toast.info('please add a category name')
  }
}

  const getCategory = async () => {
    const result = await getAllCategory()
    setAllCategory(result.data)
  }
  console.log(allCategory);

  const handleDelete = async (id) => {
    await removeCategoryApi(id)
    setAddStatus(true)

  }

  const dragOver = (e) => {
    e.preventDefault()

  }
  //category
  const videoDrop = async (e, selectedCategory) => {
    console.log('category id is:', selectedCategory);

    //videodetails

    const vDetails = JSON.parse(e.dataTransfer.getData("VideoDetails"))
    console.log(vDetails);
    //category all video-videodetails
    if (selectedCategory.allVideos.find(item => item.id == vDetails.id)) {
      toast.info('video already in the category')
    }
    else {
      selectedCategory.allVideos.push(vDetails)
      const result = await updateCategoryApi(selectedCategory.id, selectedCategory)
      console.log(result);
      setUpdateStatus(true)
    }
    /* console.log(selectedCategory); */

  }

  const ondrag = (e,videoId, categoryDetails)=>{
    console.log(videoId, categoryDetails);
    const datashare = {videoId, categoryDetails}
    e.dataTransfer.setData("datashare",JSON.stringify(datashare))

  }


  useEffect(() => {
    setAddStatus(false)
    setUpdateStatus(false)
    setDragout(false)
    getCategory()
  }, [addStatus, updateStatus,dragOut])



  return (
    <>
      <h5 className='mt-5 md-mt-0'>Category</h5>

      <button onClick={handleShow} className='btn btn-warning w-100 mt-5'>Add Category</button>

      {allCategory.length > 0 ?
        allCategory?.map((item) => (
          <div className='p-3 border rounded mt-4' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className='d-flex justify-content-between'>
              <p className='mb-4'>{item.categoryName}</p>
              <button className='btn btn-danger' onClick={(id) => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            {item?.allVideos?.length>0?
              item?.allVideos?.map((video) => (
              <div draggable onDragStart={(e)=>ondrag(e, video.id, item)}>
                <Videocard video={video} isPresent={true} />
              </div>
              )) : null}
          </div>
        ))

        :

        <p>No category Added yet</p>}




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='Category Name' onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-right' theme='colored' autoClose={2000}/>


    </>
  )
}

export default Category