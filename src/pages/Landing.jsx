import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>

    <Row className='w-100 mt-5 d-flex justify-conent-center align-items-center ps-4'>
      <Col md={1}> </Col>

      <Col md={5} className='p-3'>
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam possimus eveniet laborum? Molestias accusamus maxime iste in odio minima nam sequi, numquam asperiores a neque fugit ipsum quod cumque!</p>
      <Link to={'/home'} ><button className='btn btn-warning mt-5'>Get Started</button></Link>
      </Col>

      <Col md={1}> </Col>

      <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm1rZGhzNHpqMTN6dHJvbWUyNmdmNTB4djBxNzd0b2M1MWdwdmhvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcfGCgPFGzZ6Ros/giphy.webp" alt=" no image" className='w-75' />
      
      </Col>      
    </Row>

    <div className='container'>
      <h3 className='text-center my-5'>Features</h3>

      <Row>

      <Col md={1}></Col>
      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.3e5714c3b9c94df63e388e0aa8c8c6ca?rik=fgEq2oasiyLloA&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fZ9nyDUIvUPNKg%2fgiphy.gif&ehk=KQAbBfvPTpD%2bZcyOMtDPJqMWRE8KzxR6PafdONuqmlk%3d&risl=&pid=ImgRaw&r=0" height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      
      </Col>
      <Col md={4} className='px-md-5'>
      <Card style={{ width: '100%'}} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.c6dfa22150790c670c988c5196f6ba0e?rik=cB7w58RcmPEyNQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2fATbrBq9pc.gif&ehk=Z3EjvqRpRvFy0GokffQFtMCO36jlJuzpEM8%2bvilC4o8%3d&risl=&pid=ImgRaw&r=0" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>  
      </Col>

      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-3 mt-3'>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.p1JDNT5-7MngqBYMmw83-AHaEK?rs=1&pid=ImgDetMain" height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
       </Card>
      </Col>

      <Col md={1}></Col>
    </Row>
    </div>

    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 border border-light p-3 my-5 border-2 rounded">
          <div className="row p-4">
            <div className="col-md-6">
              <h3 className='text-warning'>Simple fast and Powerful</h3>
              <p className='mt-5'><span className='fs-5'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Possimus eligendi rem, eos unde numquam dicta autem omnis. Numquam quia dicta quam laborum ducimus ducimus ducimus </p>
              <p> <span className='fs-5'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Possimus eligendi rem, eos unde numquam dicta autem omnis. Numquam quia dicta quam laborum ducimus ducimus ducimus</p>
              <p> <span className='fs-5'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Possimus eligendi rem, eos unde numquam dicta autem omnis. Numquam quia dicta quam laborum ducimus ducimus ducimus</p>
            </div>

            <div className="col-md-6">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/z8USUQtZZLQ" title="Podimeesha Mulakkana Kaalam | Animated Film Song Video | Animation Song Videos | Cartoon Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
            </div>
          </div>

        </div>
        <div className="col-md-2"></div>
      </div>
    </div>

    

    
    </>
  )
}

export default Landing