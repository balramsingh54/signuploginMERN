import React from 'react';
import "../styles/Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div className='Prefooter1'>
                <Row className='Prefooter2'>
                    <Col className='hvr'>
                        <h6>Hassle-free replacement</h6>
                        <p>10-day easy replacement policy on mi.com</p>
                    </Col>
                    <Col className='hvr'>
                        <h6>100% secure payments</h6>
                        <p>We support Cards, Wallets, EMI and COD</p>
                    </Col>
                    <Col className='hvr'>
                        <h6>Vast service network</h6>
                        <p>1000 Mi service-centers across 600 cities</p>
                    </Col>
                </Row>
                <Row className='Prefooter3'>
                    <Col>
                        <h6>LET'S STAY IN TOUCH</h6>
                        <p>Get updates on sales specials and more</p>
                    </Col>
                    <Col>
                        <input type="text" placeholder='Enter Email Address' />
                        <p>Thanks. You're on our email list for special offers.
                        </p>
                    </Col>
                    <Col>
                        <h6>FOLLOW MI</h6>
                        <p>We want to hear from you!
                        </p>
                    </Col>
                    <Col>
                        <h6>Vast service network</h6>
                    </Col>
                </Row>
                

        </div>
    )
}

export default Footer