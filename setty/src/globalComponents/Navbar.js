import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import './globalCSSStyling.css';

const NavBar = () =>{
    const settyLogo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty_logo.png";
    return(
        <Navbar className="bg-body-tertiary setty-link-main">
            <Container>
                <Nav.Link as={Link} to="/ui_design"> 
                    <h1 className="navbar-items-text">
                        UI Flow & Design
                    </h1>
                </Nav.Link>
                <Navbar.Brand as={Link} to="/">
                    <img src={settyLogo} alt="setty logo img" className="setty-nav-logo d-inline-block align-top"/>{' '}
                    {/* <div className="navbar-items-text">home</div> */}
                </Navbar.Brand>
                <Nav.Link as={Link} to="/">
                    <h1 className="navbar-items-text" >
                        Project Setty
                    </h1>
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;