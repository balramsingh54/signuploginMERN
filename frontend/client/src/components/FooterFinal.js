import React from 'react';
import "../styles/FooterFinal.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const FooterFinal = () => {
    return (
        <div>
            <MDBFooter bgColor='#252525' className='footerfinal text-center text-lg-start text-muted'>
                <section className='abc'>
                    <MDBContainer className='text-center text-md-start'>
                        <MDBRow className=''>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    SUPPORT
                                </h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>SHOP & LEARN</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>RETAIL STORE</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>CONTACK US</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 Copyright:
                    <a className='text-reset fw-bold' href='#'>
                        Balram Kumar Singh
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default FooterFinal