import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../component/AnimateLetters';
import NumberCounter from 'number-counter';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import Loader from '../component/Loader';

function HomePage() {

    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
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
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5, // 50% visibility threshold
      });

      useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
          setLoading(false); // Set loading to false once data is fetched
          setTimeout(() => {
            setIsVisible(true);
          }, 400);
        }, 3500); // Simulating a 2-second delay
      }, []);
    return (
        <>
        {loading ? <Loader className={loading ? '' : 'hidden'} /> : 
            <>
            <main className={`content ${isVisible ? 'visible' : ''}`}>
            {/* Header  */}
                <header className='header'>
                    <Navbar>
                        <Link to="#" className='menuIcon'><em className='icon icon-menu-alt' /></Link>
                        <Nav>
                            <Nav.Link href="#home" className='active'>Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#casestudy">CaseStudy</Nav.Link>
                            <Nav.Link href="#experiece">Experience</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <div>
                            <img src="/images/box-flip.svg" className='img-fluid' alt="box-flip" />
                        </div>
                    </Navbar>
                </header>
            {/* Banner Section  */}
                <section className='bannerSec position-relative' id="home">
                    <Container>
                        <div className='bannerSec_main text-center'>
                            <h1><img src="/images/hey.svg" alt="hey"/>
                                Buddy.. <br />
                            </h1>
                            <h1>
                                I am Faizan Ahmed<br />
                                UIUX Designer
                            </h1>
                            <div className='bannerSec_main_img'>
                                <Link to="/detailpage">
                                    <img src="/images/bannerimg.png" className='img-fluid' alt="bannerimg" />
                                </Link>
                                <div className='bannerSec_main_circle'>
                                    <img src="/images/banner-circle-img.png" className='img-fluid' alt="banner-circle-img" />
                                </div>
                            </div>

                            <p className='bannerSec_main_tagline'> I'm a selectively
                                <span className='text1'> skilled product designer</span> <br /> with strong focus on producing
                                <span className='text2'> high quality</span> & <br /> impactful
                                <span className='text3'> digital experience.</span></p>
                        </div>
                    </Container>
                    <div className='bannerSec_leftimg position-absolute'>
                        <p className='mb-0'>Luxeliving - Web UI</p>
                        <img src="/images/banner-top-left.png" className='img-fluid' alt="banner-top-left" />
                    </div>
                    <div className='bannerSec_rightimg position-absolute'>
                        <img src="/images/banner-top-right.jpg" className='img-fluid' alt="banner-top-right" />
                        <p className='mb-0'>Taquiza - Web UI</p>
                    </div>
                    <div className='svgImg text-center ms-5 ps-5'>
                        <div className="ms-5" ref={ref}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="257.258" height="588.582" viewBox="0 0 257.258 588.582"> 
                                <path className={`path ${inView ? 'animate' : ''}`} id="Path_121133" data-name="Path 121133" d="M2393.107-7656.02s186.351-5.41,216.408-5.41,67.327-19.237,0-16.231-163.4,24.857-138.561,51.588,45.673,26.52,45.673,26.52-75.77-22.31-43.568,6.1,133.543,130.161,78.054,178.714-137.335,110.515-110.516,228.43c7.992,35.139,40.04,65.154,47.617,93.568" transform="translate(-2391.565 7679.483)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            </svg>
                        </div>
                        {/* <img src="/images/banner-btm-path.svg" className='img-fluid' alt="banner-btm-path" /> */}
                    </div>
                </section>
            {/* About us section  */}
                <section className='aboutUs py-100' id="about">
                    <Container>
                        <div className='aboutUs_text'>
                            <h2>Transforming ideas into captivating  <img src="/images/about_image.png" className='img-fluid' height="100" alt="aboutus" /> realities, I sculpt seamless digital journey with a fusion of innovation & elegance</h2>
                        </div>

                        <Row className='justify-content-between'>
                            <Col md={4}>
                                <div className='counter counter-first'>
                                    <img src="/images/first.png" className='img-fluid w-100' alt="counter-top-img" />
                                    {/* <h2>08 <span>+</span></h2> */}
                                    <h2>0<NumberCounter start={0} end={8} delay={4} className="increment" /><span>+</span></h2>
                                    <p>years of unwavering passion, I am a skilled UI/UX designer dedicated to creating immersive digital experiences.</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='counter'>
                                    <img src="/images/second.png" className='img-fluid w-100' alt="counter-top-img" />
                                    {/* <h2>27 <span>K</span></h2> */}
                                    <h2>0<NumberCounter start={0} end={1} delay={2} className="increment" /><span>K+</span></h2>
                                    <p>Each project reflects a commitment to excellence and innovation in design.</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='counter'>
                                    <img src="/images/third.png" className='img-fluid w-100' alt="counter-top-img" />
                                    {/* <h2>10 <span>+</span></h2> */}
                                    <h2><NumberCounter start={0} end={50} delay={3} className="increment" /><span>+</span></h2>
                                    <p>Building strong connections & fostering a positive work environment are integral to my approach in collaborative projects.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            {/* Video Section  */}
                <section className='videoSec py-100 pt-0'>
                    <Container>
                        <img src="/images/video-section.png" className='img-fluid w-100' alt="video-section" />
                    </Container>
                </section>
            {/* Case study section  */}
                <section className='caseStudy py-100' id="casestudy">
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
                                        <Link to="/">
                                            <div className='projectCard'>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>01</span>
                                                    <h2>BornWalks</h2>
                                                </div>
                                                <p>Now introduce e-rides concept in your vicinity and allow people to tour around...</p>
                                                <img src="/images/projects/BornWalks.png" className='img-fluid' alt='BornWalks' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/Cannabies.png" className='img-fluid' alt='Cannabies' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>02</span>
                                                    <h2>Cannabies</h2>
                                                </div>
                                                <p>Unveiling a Brand New Visual Identity Revolution for Online logistics App-MegaMover!</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard '>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>03</span>
                                                    <h2>DuckCard</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                                <img src="/images/projects/DuckCard.png" className='img-fluid' alt='DuckCard' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/eRides.png" className='img-fluid' alt='eRides' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>04</span>
                                                    <h2>eRides</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard'>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>05</span>
                                                    <h2>FunFlix</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                                <img src="/images/projects/FunFlix.png" className='img-fluid' alt='FunFlix' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/GroShoppy.png" className='img-fluid' alt='GroShoppy' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>06</span>
                                                    <h2>GroShoppy</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard'>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>07</span>
                                                    <h2>MegaMover</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                                <img src="/images/projects/MegaMover.png" className='img-fluid' alt='MegaMover' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/PrimWork.png" className='img-fluid' alt='PrimWork' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>08</span>
                                                    <h2>PrimWork</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard'>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>09</span>
                                                    <h2>QuickBites</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                                <img src="/images/projects/QuickBites.png" className='img-fluid' alt='QuickBites' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/ShoeGallery.png" className='img-fluid' alt='ShoeGallery' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>10</span>
                                                    <h2>ShoeGallery</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard'>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>11</span>
                                                    <h2>Taqiza Web</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                                <img src="/images/projects/Taqiza-Web.png" className='img-fluid' alt='Taqiza-Web' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/The-Arabian.png" className='img-fluid' alt='The-Arabian' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>12</span>
                                                    <h2>The Arabian</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard'>
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>13</span>
                                                    <h2>TheAstro</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                                <img src="/images/projects/TheAstro.png" className='img-fluid' alt='TheAstro' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="dim">
                                        <Link to="/">
                                            <div className='projectCard projectCard-even'>
                                                <img src="/images/projects/Yuval.png" className='img-fluid' alt='Yuval' />
                                                <div className='d-flex align-items-start'>
                                                    <span className='projectCard_count'>13</span>
                                                    <h2>Yuval</h2>
                                                </div>
                                                <p>Unleashing the Flavor Revolution: Feast your eyes on the UX symphony of QuickBites- A QSR App...</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* Work Experience section  */}
                <section className='workedExp py-100' id="experiece">
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
                                        <p>I've crafted delightful digital journeys. From sketch to screen, I've transformed ideas into user-friendly designs.</p>
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
            {/* Footer  */}
                <footer className='footer' id="contact">
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
            </main>
            </>
        }
        </>
    )
}

export default HomePage;