import React, { useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import './navbar.css'
import { Sling as Hamburger } from 'hamburger-react'
import Pdf from '../Documents/swresume.pdf'


function Navbar() {
    const [winScroll, setwinScroll] = useState(window.scrollY)
    const [windowHeight, setwindowedHeight] = useState(window.innerHeight - 54)
    const [windowWidth, setwindowedWidth] = useState(window.innerWidth)
    const [isOpen, setOpen] = useState(false)
    let render = ''

    function getNavBar() {
      if (windowWidth < 780 && winScroll >= windowHeight) {
        if (isOpen) {
          render = getStickyDropDownMenu()
          return render
        }
        else {
          render = getMobileStickyBar()
          return render
        }
      }
      if (windowWidth < 780 && winScroll < windowHeight) {
        if (isOpen) {
          render = getBottomDropDownMenu()
          return render
        }
        else {
          render = getMobileBottomBar()
          return render
        }
      }
      if (winScroll >= windowHeight) {
        render = getStickyBar()
        return render
        //bar.classList.remove('bottomBar')
        //bar.classList.add('stickyBar')
      }
      if (winScroll < windowHeight) {
        render = getBottomBar()
        return render
        //bar.classList.remove('stickyBar')
        //bar.classList.add('bottomBar')
      }
    }

    const handleWidth = () => {
      setwindowedWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener('resize', handleWidth)
    
      return () => {
      window.removeEventListener('resize', handleWidth)
      }
    }, [windowWidth])

    const handleScrollY = () => {
      setwinScroll(window.scrollY)
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScrollY)

      return () => {
        window.removeEventListener('scroll', handleScrollY)
      }
    }, [winScroll])

    
    const handleResize = () => {
      setwindowedHeight(window.innerHeight - 54);
    }
    useEffect(() => {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [windowHeight])

    function cancelMenu() {
      setOpen(false)
    }

    function onResumeClick() {
        window.open(Pdf);
    }

    function getBottomBar() {
      return (
        <div>
          <ul className='bottomBar' id='Bar'>
              <li><Link activeClass="active" to="Home" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Home</Link></li>
              <li><Link to="About" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>About</Link></li>
              <li><Link to="Skills" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Skills</Link></li>
              <li><Link to="Projects" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Projects</Link></li>
              <li><Link to="Education" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Education</Link></li>
              <li><Link to="Experience" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Experience</Link></li>
              <li><Link to="Contact" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Contact</Link></li>
              <button className='btn' onClick={onResumeClick}>Resume</button>
          </ul>
        </div>
      )
    }

    function getStickyBar() {
      return (
        <div>
          <ul className='stickyBar' id='Bar'>
            <li><Link activeClass="active" to="Home" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Home</Link></li>
            <li><Link to="About" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>About</Link></li>
            <li><Link to="Skills" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Skills</Link></li>
            <li><Link to="Projects" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Projects</Link></li>
            <li><Link to="Education" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Education</Link></li>
            <li><Link to="Experience" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Experience</Link></li>
            <li><Link to="Contact" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Contact</Link></li>
            <button className='btn' onClick={onResumeClick}>Resume</button>
          </ul>
        </div>
      )
    }

    function getMobileStickyBar() {
      return (
        <div className="mobileStickyBar">
          <button className='btn' style={{float:"right"}} onClick={onResumeClick}>Resume</button>
          <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" duration={0.5} color="white"/>
        </div>
      )
    }

    
    function getMobileBottomBar() {
      return (
        <div className="mobileBottomBar">
          <button className='btn' style={{float:"right"}} onClick={onResumeClick}>Resume</button>
          <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" duration={0.5} color="white"/>
        </div>
      )
    }

    function getStickyDropDownMenu() {
      return (
        <div className="hamburgerStickyDropDownMenu">
          <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" duration={0.5} color="white"/>
            <li><Link onClick={cancelMenu} activeClass="active" to="Home" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Home</Link></li>
            <li><Link to="About" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>About</Link></li>
            <li><Link onClick={cancelMenu} to="Skills" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Skills</Link></li>
            <li><Link onClick={cancelMenu} to="Projects" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Projects</Link></li>
            <li><Link onClick={cancelMenu} to="Education" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Education</Link></li>
            <li><Link onClick={cancelMenu} to="Experience" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Experience</Link></li>
            <li><Link onClick={cancelMenu} to="Contact" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Contact</Link></li>
        </div>
      )
    }

    function getBottomDropDownMenu() {
      return (
        <div className="hamburgerBottomDropDownMenu">
          <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" duration={0.5} color="white"/>
            <li><Link onClick={cancelMenu} activeClass="active" to="Home" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Home</Link></li>
            <li><Link to="About" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>About</Link></li>
            <li><Link onClick={cancelMenu} to="Skills" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Skills</Link></li>
            <li><Link onClick={cancelMenu} to="Projects" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0} ignoreCancelEvents={true}>Projects</Link></li>
            <li><Link onClick={cancelMenu} to="Education" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Education</Link></li>
            <li><Link onClick={cancelMenu} to="Experience" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Experience</Link></li>
            <li><Link onClick={cancelMenu} to="Contact" spy={true} hashSpy={true} smooth={true} offset={-25} duration={250} delay={0}ignoreCancelEvents={true}>Contact</Link></li>
        </div>
      )
    }


  return (
    <div>
      { getNavBar() }
    </div>
  )
}


export default Navbar;