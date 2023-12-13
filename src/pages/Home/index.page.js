import React, {useState, useEffect, useRef } from 'react';
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../component/AnimateLetters';
import NumberCounter from 'number-counter';
import 'animate.css';

function HomePage() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['W', 'o', 'r', 'k']
    const ourArray = ['O', 'u', 'r']
    const caseArray = ['C', 'a', 's', 'e', 'S', 't', 'u', 'd', 'y']
    const expArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    const stickyRef = useRef(null);

    useEffect(() => {
      // Adding scroll event listener
      document.addEventListener('scroll', horizontalScroll);
  
      return () => {
        // Cleanup: Remove the scroll event listener when the component unmounts
        document.removeEventListener('scroll', horizontalScroll);
      };
    }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount
  
    const horizontalScroll = () => {
      const sticky = stickyRef.current;
  
      if (!sticky) {
        return; // Guard against accessing properties on a null element
      }
  
      const stickyPosition = sticky.getBoundingClientRect().top;
  
      if (stickyPosition > 1) {
        return;
      } else {
        const stickyParent = document.querySelector('.sticky-parent');
        const scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft = (sticky.scrollWidth / (stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height)) * (-scrolled) * 0.85;
      }
    };
    return (
        <>
            <header className='header'>
                <Navbar>
                    <Link to="#" className='menuIcon'><em className='icon icon-menu-alt'/></Link>
                    <Nav>
                        <Nav.Link href="#home" className='active'>Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#casestudy">CaseStudy</Nav.Link>
                        <Nav.Link href="#experiece">Experience</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <div>
                        <img src="/images/box-flip.svg" className='img-fluid' alt="box-flip"/>
                    </div>
                </Navbar>
            </header>

            <section className='bannerSec position-relative'>
                <Container>
                    <div className='bannerSec_main'>
                        <h1><span>hey</span>
                            Buddy.. <br/>
                            I am Faizan Ahmed<br/>
                            UIUX Designer
                        </h1>
                        <div className='bannerSec_main_img'>
                            <img src="/images/bannerimg.png" className='img-fluid' alt="bannerimg"/>
                            <div className='bannerSec_main_circle'>
                                <img src="/images/banner-circle-img.png" className='img-fluid' alt="banner-circle-img"/>
                            </div>
                        </div>

                        <p className='bannerSec_main_tagline'> I'm a selectively 
                            <span>skilled product designer</span> <br/> with strong focus on producing 
                            <span>high quality</span> & <br/> impactful 
                            <span>digital experience.</span></p>
                    </div>
                </Container>
                <div className='bannerSec_leftimg position-absolute'>
                    <img src="/images/banner-top-left.png" className='img-fluid' alt="banner-top-left"/>
                </div>
                <div className='bannerSec_rightimg position-absolute'>
                    <img src="/images/banner-top-right.png" className='img-fluid' alt="banner-top-right"/>
                </div>
<div className='text-center'>

                <img src="/images/banner-btm-path.svg" className='img-fluid' alt="banner-btm-path"/>
</div>
            </section>

            <section className='aboutUs py-100'>
                <Container>
                    <div className='aboutUs_text'>
                        <h2>Transforming ideas into captivating  <img src="/images/aboutus.svg" className='img-fluid' alt="aboutus"/> realities, I sculpt seamless digital journey with a fusion of innovation & elegance</h2>
                    </div>

                    <Row className='justify-content-between'>
                        <Col md={4}>
                            <div className='counter counter-first'>
                                <img src="/images/first.png" className='img-fluid w-100' alt="counter-top-img"/>
                                {/* <h2>08 <span>+</span></h2> */}
                                <h2>0<NumberCounter start={0} end={8} delay={4} className="increment"/><span>+</span></h2>
                                <p>years of unwavering passion, I am a skilled UI/UX designer dedicated to creating immersive digital experiences.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='counter'>
                                <img src="/images/second.png" className='img-fluid w-100' alt="counter-top-img"/>
                                {/* <h2>27 <span>K</span></h2> */}
                                <h2><NumberCounter start={0} end={27} delay={2} className="increment"/><span>K</span></h2>
                                <p>Lorem ipsum dolor consectetur adip Aenean iaculis vitaer nulla blandit justo nec nec elit consectetur.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='counter'>
                                <img src="/images/third.png" className='img-fluid w-100' alt="counter-top-img"/>
                                {/* <h2>10 <span>+</span></h2> */}
                                <h2><NumberCounter start={0} end={10} delay={3} className="increment"/><span>+</span></h2>
                                <p>Lorem ipsum dolor consectetur adip Aenean iaculis vitaer nulla blandit justo nec nec elit consectetur.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='videoSec py-100 pt-0'>
                <Container>
                    <img src="/images/video-section.png" className='img-fluid w-100' alt="video-section"/>
                </Container>
            </section>
            <section className='caseStudy py-100'>
                <Container>
                    <Row>
                        <Col md={9}>
                            <div className='commonHead'>
                                <h2 className='commonHead_title'>
                                    {/* <p>Work</p> */}
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={ourArray}
                                        idx={15}
                                    />
                                    <p className='btmText'>
                                        <AnimatedLetters
                                            letterClass={letterClass}
                                            strArray={caseArray}
                                            idx={15}
                                        />
                                    </p>
                                </h2>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='commonHead'>
                                <h2 className='commonHead_subtitle'>
                                    <p>Explore latest casestudy showcasing how innovative solutions transformed challenges into success stories seamlessly.</p>
                                    <Link to="#" className='commonHead_link'>Learn more <em className='icon icon-arrow-right' /></Link>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <div className="sticky-parent">
                        <div className="sticky" ref={stickyRef}>
                            <div className="horizontal">
                                <div className="dim">
                                    <div className='projectCard'>
                                        <div className='d-flex align-items-start'>
                                            <span className='projectCard_count'>01</span>
                                            <h2>eRides</h2>
                                        </div>
                                        <p>Now introduce e-rides concept in your vicinity and allow people to tour around...</p>
                                        <img src="/images/slider-card-1.png" className='img-fluid' alt='slideimg'/>
                                    </div>
                                </div>
                                <div className="dim">
                                    <div className='projectCard projectCard-even'>
                                        <img src="/images/slider-card-2.png" className='img-fluid' alt='slideimg'/>
                                        <div className='d-flex align-items-start'>
                                            <span className='projectCard_count'>02</span>
                                            <h2>Quick Bites</h2>
                                        </div>
                                        <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                    </div>
                                </div>  
                                <div className="dim">
                                    <div className='projectCard'>
                                        <div className='d-flex align-items-start'>
                                            <span className='projectCard_count'>03</span>
                                            <h2>Mega Mover</h2>
                                        </div>
                                        <p>Unveiling a Brand New Visual Identity Revolution for Online logistics App-MegaMover!</p>
                                        <img src="/images/slider-card-3.png" className='img-fluid' alt='slideimg'/>
                                    </div>
                                </div>  
                                <div className="dim">
                                    <div className='projectCard projectCard-even'>
                                        <img src="/images/slider-card-2.png" className='img-fluid' alt='slideimg'/>
                                        <div className='d-flex align-items-start'>
                                            <span className='projectCard_count'>04</span>
                                            <h2>Quick Bites</h2>
                                        </div>
                                        <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                    </div>
                                </div>  
                                <div className="dim">
                                    <div className='projectCard'>
                                        <div className='d-flex align-items-start'>
                                            <span className='projectCard_count'>05</span>
                                            <h2>Quick Bites</h2>
                                        </div>
                                        <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                        <img src="/images/slider-card-2.png" className='img-fluid' alt='slideimg'/>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='workedExp py-100'>
                <Container>
                    <Row>
                        <Col md={9}>
                            <div className='commonHead'>
                                <h2 className='commonHead_title'>
                                    {/* <p>Work</p> */}
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={15}
                                    />
                                    <p className='btmText'>
                                        <AnimatedLetters
                                            letterClass={letterClass}
                                            strArray={expArray}
                                            idx={15}
                                        />
                                    </p>
                                </h2>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='commonHead'>
                                <h2 className='commonHead_subtitle'>
                                    <p>I'm always open to new opportunities, collaborations, and discussions about the exciting world of design.</p>
                                    <Link to="#" className='commonHead_link'>Learn more <em className='icon icon-arrow-right' /></Link>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='workedExp_expList justify-content-end'>
                        <Col md={9}>
                            <ul className='list-unstyled mb-0 ps-0'>
                                <li>
                                    <Row>
                                        <Col md={5}>
                                            <div className='workedExp_expList_info d-flex align-items-center'>
                                                <div className='logo'>
                                                    <img src="/images/exp-codiant.svg" className='img-fluid' alt="codiant-logo" />
                                                </div>
                                                <p className='mb-0'>Codiant Software<br /> Technologies Pvt. Ltd.</p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <p className='designation'>Sr. UIUX Designer</p>
                                        </Col>
                                        <Col md={4}>
                                            <p className='duration'>Oct 2021 - Present</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col md={5}>
                                            <div className='workedExp_expList_info d-flex align-items-center'>
                                                <div className='logo'>
                                                    <img src="/images/exp-pixbrand.svg" className='img-fluid' alt="pixbrand-logo" />
                                                </div>
                                                <p className='mb-0'>Pix Brand Private<br /> Limited</p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <p className='designation'>Sr. UIUX Designer</p>
                                        </Col>
                                        <Col md={4}>
                                            <p className='duration'>Sep 2020 - Oct 2021</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col md={5}>
                                            <div className='workedExp_expList_info d-flex align-items-center'>
                                                <div className='logo'>
                                                    <img src="/images/exp-faizstudio.svg" className='img-fluid' alt="faizstudio-logo" />
                                                </div>
                                                <p className='mb-0'>FabStudio <br />( Freelance Design )</p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <p className='designation'>Founder & UIUX Designer</p>
                                        </Col>
                                        <Col md={4}>
                                            <p className='duration'>Aug 2019 - Jul 2021</p>
                                        </Col>
                                    </Row>
                                </li>

                                <li>
                                    <Row>
                                        <Col md={5}>
                                            <div className='workedExp_expList_info d-flex align-items-center'>
                                                <div className='logo'>
                                                    <img src="/images/exp-pxper.svg" className='img-fluid' alt="pxper-logo" />
                                                </div>
                                                <p className='mb-0'>PxPer by Shree KDK <br />Enterprise</p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <p className='designation'>Graphic Designer & Product Designer</p>
                                        </Col>
                                        <Col md={4}>
                                            <p className='duration'>Jul 2016 - Mar 2019</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col md={5}>
                                            <div className='workedExp_expList_info d-flex align-items-center'>
                                                <div className='logo'>
                                                    <img src="/images/exp-friends.svg" className='img-fluid' alt="friends-logo" />
                                                </div>
                                                <p className='mb-0'>Friends Graphics & <br />Printing Press</p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <p className='designation'>Internship Trainee</p>
                                        </Col>
                                        <Col md={4}>
                                            <p className='duration'>May 2013 - Mar 2016</p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </Col>
                    </Row>
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

export default HomePage;