import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
    <div className="row w-100 p-5">
      <div className="col-md-4">
        <h4 className='text-warning mb-5'><FontAwesomeIcon icon={faVideo} className='me-3'/>Media player </h4>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere suscipit aliquid nihil doloremque odit alias? Quos molestiae dolore ad voluptatibus atque perferendis officia necessitatibus, beatae vitae, dignissimos amet officiis?</p>
      </div>
      <div className="col-md-2 d-flex justify-content-center">
        <div>
        <h4 className='mb-4'>Links</h4>
        <Link to={'/'}><p>Landing Page</p></Link>
        <Link to={'home'}><p>Home</p></Link>
        <Link to={'/watchhistory'}><p>Watch History</p></Link>
        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <h4 className='mb-4'>Guides</h4>
        <div>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
        </div>
        
      </div>
      <div className="col-md-3 d-flex jusify-content-center">
        <div>
          <h4>Contact Us</h4>
          <div className='d-flex mt-4'>
            <input type="text" className='form-control' placeholder='Email ID' />
            <button className='btn btn-warning ms-4'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-between mt-4' >
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faWhatsapp} />


          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Footer