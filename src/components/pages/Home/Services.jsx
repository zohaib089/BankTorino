import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import HomeBanking from '../../../Img/homeBanking.jpg';
import mobileBanking from '../../../Img/MobileBanking.jpg';
import privateBanking from '../../../Img/privateBanking.jpg';
import remitance from '../../../Img/Remitances.jpg'
const Services = (props) => {
    return (
        <React.Fragment>
            <Row className="mt-5" >
                <Col sm="6">
                    <Card body style={{
                        height: "350px", backgroundImage: `url(${remitance})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <CardTitle className="mt-5" style={{
                            fontSize: "42px",
                            fontWeight: "bold",

                        }}>Remitances</CardTitle>
                        <CardText style={{
                            fontSize: "28px",
                            fontWeight: "400",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white"
                        }}>With BankTorino you should not be worried about Remitances.</CardText>
                        <Button style={{ marginTop: "20px" }} size="sm" color="primary">More Info</Button>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card body style={{
                        height: "350px", backgroundImage: `url(${privateBanking})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <CardTitle className="mt-5" style={{
                            fontSize: "42px",
                            fontWeight: "bold",
                            color: "white"
                        }}>Private Banking</CardTitle>
                        <CardText style={{
                            fontSize: "28px",
                            fontWeight: "400",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white"
                        }}>Private Banking let you invest your Money Like you want.</CardText>
                        <Button style={{ marginTop: "20px" }} size="sm" color="primary">More Info</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col sm="6">
                    <Card body style={{
                        height: "350px", backgroundImage: `url(${mobileBanking})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <CardTitle className="mt-5" style={{
                            fontSize: "42px",
                            fontWeight: "bold",
                        }}>Mobile Banking</CardTitle>
                        <CardText style={{
                            fontSize: "28px",
                            fontWeight: "400",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white"
                        }}>Leave Old way of Banking Use our Mobile Banking.</CardText>
                        <Button style={{ marginTop: "20px" }} size="sm" color="primary">More Info</Button>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card body style={{
                        height: "350px", backgroundImage: `url(${HomeBanking})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <CardTitle className="mt-5" style={{
                            fontSize: "42px",
                            fontWeight: "bold",
                            color: "white"
                        }}>Home Banking</CardTitle>
                        <CardText style={{
                            fontSize: "28px",
                            fontWeight: "400",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white"
                        }}>Without BankTorino Mobile Banking was never that Easy.</CardText>
                        <Button size="sm" color="primary" style={{ marginTop: "20px" }}>More Info</Button>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default Services;