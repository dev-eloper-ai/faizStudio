import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectDetails() {
    return (
        <>
            <Link to="/" className='backBtn'><em className='icon icon-arrow-left' /> Back</Link>
            <section className='projectDetails py-100'>
                <Container>
                    <h1>Makko - Logo and brand identity for the social network</h1>
                    <div className='mainImg mb-3'>
                        <img src="/images/main-img.jpg" className='img-fluid' alt="main-img" />
                    </div>
                    <Row className='py-100 justify-content-center'>
                        <Col md={10}>
                            <Row>
                                <Col md={3}>
                                    <ul>
                                        <li>
                                            <p>Client</p>
                                            <h3>The Lorem Ipsum</h3>
                                        </li>
                                        <li>
                                            <p>Location</p>
                                            <h3>Indore, India</h3>
                                        </li>
                                        <li>
                                            <p>year</p>
                                            <h3>2023</h3>
                                        </li>
                                        <li>
                                            <p>Tools</p>
                                            <h3>Adobe XD • Figma • Adobe Photoshop • Adobe Illustrator • CorelDraw</h3>
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={7} className='offset-md-2'>
                                    <p className='para'>
                                        Alpha Flea market is here to showcase “underground art” at your own Indore, the one and only incredible town of foodies and art lovers; to let you discover the undiscovered.

                                        Here is the bunch of astonishing but hidden artists from across the globe that will do nothing but just steal your souls. Feel the entirely different cosmos of shopping, food, music, dance, art and aroma. We bet! You won’t be able resist yourself and will surely command your watch to stop for a while because we will be freezing your hearts in the gallery of arts. Your taste buds will enjoy the delightful rides and your soul will be grooving on the beats of music. The colorful butterflies called love, peace and happiness will paint your town like a rainbow.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div>
                        <img src="/images/cover-img.jpg" className='img-fluid mb-3' alt="cover-img" />
                        <Row className="mb-3">
                            <Col md={6}>
                                <img src="/images/grid-img-1.jpg" className='img-fluid' alt="grid-img-1" />
                            </Col>
                            <Col md={6}>
                                <img src="/images/grid-img-1.jpg" className='img-fluid' alt="grid-img-1" />
                            </Col>
                        </Row>

                        <img src="/images/inner-img.jpg" className='img-fluid mb-3' alt="inner-img" />
                        <img src="/images/footer-img.jpg" className='img-fluid' alt="inner-img" />
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