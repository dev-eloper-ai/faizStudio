import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../component/Loader';

function Project3() {

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
                                <h1>A Teen's Personal Banking Platform Design</h1>
                                <div className='mainImg mb-3'>
                                    <img src="/images/projects/3/01.png" className='img-fluid' alt="main-img" />
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
                                                <p className='para'>How about giving a digital look to teens pocket money? Sounds interesting right?

                                                    Introducing Duckcard, a teen's personal banking platform design to help in managing teenagers finances.

                                                    The platform is embedded with features like scan & pay, personalized QR themes, expert financial advices, investment learning tips etc.

                                                    Help and secure the finances of this tech savvy generation by investing in this excellent business idea.

                                                    If you need more info about teens banking online platform design, you can mail us at</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div>
                                    <img src="/images/projects/3/02.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/03.jpg" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/04.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/05.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/06.jpg" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/06.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/07.png" className='img-fluid mb-3' alt="cover-img" />
                                    <img src="/images/projects/3/08.png" className='img-fluid mb-3' alt="cover-img" />
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

export default Project3;