import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link } from 'react-router-dom';



function Header() {
    return (
        <div>
        <Navbar className="border-bottom p-3 mt-4  nav" bg="white" expand="lg">
        <Navbar.Brand className="mx-5 logo" style={{color:'green'}}>Camp<span style={{color:'darkgreen'}}>Tech</span></Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="mx-4">
          <Link className="nav-link me-4" to="/">Our Courses</Link>
          <Link className="nav-link me-4" to="/quiz">Quiz</Link>
          <Link className="nav-link me-4" to="/help">Help</Link>    
          </Nav>
        </Navbar.Collapse>
        <div className="links">
        <a href=""><i class="ri-facebook-fill"></i></a>
        <a href=""><i class="ri-linkedin-fill"></i></a>
        <a href=""><i class="ri-twitter-fill"></i></a>
        <a href=""><i class="ri-github-fill"></i></a>
        </div>
    </Navbar>

        </div>
    )
}

export default Header
