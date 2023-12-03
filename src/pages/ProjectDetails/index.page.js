import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectDetails() {
  return (
    <>
    <Link to=""><em className='icon icon-arrow-left'/> Back</Link>
    <section className='projectDetails py-100'>
        <Container>

            <h1>Makko - Logo and brand identity for the social network</h1>
            <div className='mainImg mb-3'>
                <img src="/images/main-img.jpg" className='img-fluid' alt="main-img"/>
            </div>

            <div>
                <img src="/images/cover-img.jpg" className='img-fluid mb-3' alt="cover-img"/>
                <Row className="mb-3">
                    <Col md={6}>
                        <img src="/images/grid-img-1.jpg" className='img-fluid' alt="grid-img-1"/>
                    </Col>
                    <Col md={6}>
                        <img src="/images/grid-img-1.jpg" className='img-fluid' alt="grid-img-1"/>
                    </Col>
                </Row>

                <img src="/images/inner-img.jpg" className='img-fluid mb-3' alt="inner-img"/>
                <img src="/images/footer-img.jpg" className='img-fluid' alt="inner-img"/>
            </div>
        </Container>


    </section>
    <footer className='footer'>
        <div className="marquee-container">
            <div className="marquee-content">
                {/* Your content goes here */}
                creativity meets functionality — creativity meets functionality — creativity meets functionality —
            </div>
        </div>
        <Container>
            <div className='footer_inner'>
                <h4 className='d-flex align-items-end justify-content-center mb-0'>Thankyou <img src="/images/thankyou.png" className='img-fluid' alt="thankyou" /> for</h4>
                <h4>your interest in my portfolio!</h4>
                <img src="/images/footer-btm-shap.svg" className='img-fluid ms-5' alt="footer-path-img" />
                <Link to="#" className="btn btn-light mx-auto">Get in Touch <em className='icon icon-arrow-right' /></Link>

                <div className='footer_links'>
                    <ul className='list-unstyled mb-0 ps-0 d-flex align-items-center'>
                        <li><Link to="">Linkedin</Link></li>
                        <li><Link to="">Dribbble</Link></li>
                        <li><Link to="">Behance</Link></li>
                        <li><Link to="">Instagram</Link></li>
                        <li><Link to="">Youtube</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
    </>
  )
}

export default ProjectDetails;