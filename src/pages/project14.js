import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../component/Loader';

function Project14() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
            setLoading(false); // Set loading to false once data is fetched
        }, 3500); // Simulating a 2-second delay
    }, []);
    return (
        <>
            {loading ? <Loader /> :
                (
                    <>
                        <Link to="/" className='backBtn'><em className='icon icon-arrow-left' /> Back</Link>
                        <section className='projectDetails text-center py-100'>
                            <Container>
                                <h1>E-learning Platform Branding - Logo Design</h1>
                                <div className='mainImg mb-3'>
                                    <img src="/images/projects/14/01.png" className='img-fluid' alt="main-img" />
                                </div>
                                <Row className='py-100 text-start justify-content-center'>
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
                                                <p className='para'>A logo is not just a brand distinguisher but a symbol of identification.

                                                    If you are willing to set your foot in the digital education domain then look right here.

                                                    An attractive logo design of an e-learning app platform is designed by ensuring versatility, human psychology, visual aspects and simplicity.

                                                    To get detailed information about the E-learning branding and other related inquiries, mail us at</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div>
                                    <img src="/images/projects/14/02.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/04.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/05.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/06.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/07.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/08.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/09.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/14/10.png" className='img-fluid mb-3' alt="cover-img" />
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
                                            <li><Link to="https://www.linkedin.com/in/imfaizu/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Linkedin</Link></li>
                                            <li><Link to="https://dribbble.com/fabstudio_design">Dribbble</Link></li>
                                            <li><Link to="https://www.behance.net/fabstudio_design">Behance</Link></li>
                                            <li><Link to="https://www.instagram.com/fabstudio.design?utm_medium=copy_link">Instagram</Link></li>
                                            <li><Link to="https://www.youtube.com/@fabstudio2879">Youtube</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Container>
                        </footer>
                    </>
                )
            }
        </>
    )
}

export default Project14;