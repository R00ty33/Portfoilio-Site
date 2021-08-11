import React, { useState, useEffect} from 'react';
import './about.css';
import { Link } from 'react-scroll';
import portrait from '../Pictures/icon2.png'


function About() {
    const [windowWidth, setwindowedWidth] = useState(window.innerWidth)

    const handleWidth = () => {
        setwindowedWidth(window.innerWidth);
      }
      useEffect(() => {
        window.addEventListener('resize', handleWidth)
      
        return () => {
        window.removeEventListener('resize', handleWidth)
        }
      }, [windowWidth])
    
    function getRender() {
        if (windowWidth < 780) {
            return getInLine()
        }
        else {
            return getFlex()
        }
    }

    function getFlex() {
        return (
            <>
            <div id="About" className="about"> 
                <h1 style={{textAlign: "center", display: "inline-block", marginTop: "50px"}}>About Me</h1>
                <div style={{marginBottom: "50px"}}></div>
                <div className="gridInLine">
                    <div className="container" style={{marginRight: "20px", marginLeft: "20px"}}>
                        <img style={{textAlign: "center", marginBottom: "40px"}} src={portrait}></img>
                        <h5 style={{marginLeft: "50px", marginRight: "50px"}}>
                            <span>To whom it may concern,</span><br></br><br></br>
                            Hello, my name is Nicholas Rudolph. I am a an incoming graduate student at the University of South Florida majoring in Cybersecurity. I graduate in May 2022 and am currently seeking a Software Engineering entry-level or internship position.
                            I am looking to obtain a position to gain experience and knowledge so that I can become a better software developer. I enjoy facing challenges and solving complex problems.
                            <br></br><br></br>
                            If you are interested, you can view my <Link to="Projects" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}><span className="about-span">projects</span></Link> below 
                            or contact me by <Link to="Contact" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}><span className="about-span">email</span></Link>.
                        </h5>
                    </div>
                </div>
            </div>
            </>
        )
    }

    function getInLine() {
        return (
            <>
            <div id="About" className="about"> 
                <h1 style={{textAlign: "center", display: "inline-block", marginTop: "50px"}}>About Me</h1>
                <div style={{marginBottom: "50px"}}className="about-hr"></div>
                <div className="gridInLine">
                    <div className="container" style={{marginRight: "20px", marginLeft: "20px"}}>
                        <img style={{textAlign: "center"}} src={portrait}></img>
                        <h6 style={{marginLeft: "20px", marginRight: "20px", marginTop: "20px", textAlign: "left"}}>
                            <span>To whom it may concern,</span><br></br><br></br>
                            Hello, my name is Nicholas Rudolph. I am a an incoming graduate student at the University of South Florida majoring in Cybersecurity. I graduate in May 2022 and am currently seeking a Software Engineering entry-level or internship position.
                            I am looking to obtain a position to gain experience and knowledge so that I can become a better software developer. I enjoy facing challenges and solving complex problems.
                            <br></br><br></br>
                            If you are interested, you can view my <Link to="Projects" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}><span className="about-span">projects</span></Link> below 
                            or contact me by <Link to="Contact" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}><span className="about-span">email</span></Link>.
                        </h6>
                    </div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
            { getRender() }
        </>
    )
}
export default About