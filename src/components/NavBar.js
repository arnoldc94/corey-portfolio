import { useEffect, useState } from "react";
import {Navbar, Container, Nav } from "react-bootstrap"
import github from  '../assets/img/github.svg'
import linkedin from  '../assets/img/linkedin.svg'
import facebook from  '../assets/img/facebook.svg'
import resume from  '../assets/img/resume.pdf'
import { FaFileDownload } from 'react-icons/fa';


export const NavBar = () => {

 
    // set which link is being used
    const [activeLink, setActiveLink] = useState('home');
    // detect when user scrolls
    const [scrolled, setScrolled] = useState(false);
    // set change when user scrolls
    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
        // fired on mount
        // will only run once
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <Navbar  expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span             className="navbar-toggler-icon"></span>
             </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href={resume} className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('resume')} download>Resume <i style={{color:"#fff"}}><FaFileDownload/></i></Nav.Link>  
                </Nav>
                < span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/arnoldc94" ><img src={github} alt=""/></a>
                        <a href="https://www.linkedin.com/in/corey-arnold-744391207/" ><img src={linkedin} alt=""/></a>
                        <a href="https://m.facebook.com/corey.arnold.3194" ><img src={facebook} alt=""/></a>
                    </div>
                    <Nav.Link href = "#contact" className="button" onClick={() => onUpdateActiveLink('contact')}><span>Let's Connect!</span></Nav.Link>
                </span>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
    
}

