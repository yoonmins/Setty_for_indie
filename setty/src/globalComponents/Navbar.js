import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './globalCSSStyling.css';

const NavBar = () =>{
    const SettyLogo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty_logo.png";
    return(
        <Navbar bg="light" data-bs-theme="light" className='navbar'>
            <Container className='navbar-items'>
                <img src={SettyLogo} alt="Setty logo" className="setty-nav-logo"/>
                <Navbar.Brand href="/">
                    <h1 className="navbar-items-text">
                        Setty
                    </h1>
                </Navbar.Brand>
                <Nav.Link href="/ui_design" className="navbar-items-text">
                    <h1 className="navbar-items-text">
                        UI Flow & Design
                    </h1>
                </Nav.Link>
                <Nav.Link href="/visitor" className="navbar-items-text">
                    <h1 className="navbar-items-text">
                        방명록 작성
                    </h1>
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;