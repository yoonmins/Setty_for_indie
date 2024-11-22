import React from 'react';
import './globalCSSStyling.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterComponents() {
  return (
    <footer>
      <Container fluid>
          <Row>        
            <Col className='footer-content'>
                <h1 className='footer-copyright-text'>
                    WEB | © 2024 Sungmin Yoon All rights reserved.
                </h1>
            </Col>
            <Col>
                <h1 className='footer-copyright-text'>
                    Design | © 2024 Team Setty All rights reserved.
                </h1>
            </Col>
          </Row>          
      </Container>
    </footer>
  );
}

export default FooterComponents;