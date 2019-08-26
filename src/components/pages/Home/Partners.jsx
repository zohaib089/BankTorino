import React, { Component } from 'react'
import { Row, Col, Container, Toast, ToastBody } from 'reactstrap'
import Reply from '../../../Img/Reply.jpg'
import Fiat from '../../../Img/fiat.png'
import hays from '../../../Img/hays.jpg'
import LeGru from '../../../Img/leGru.png'
import Nutella from '../../../Img/nutella.png'
import Piemonte from '../../../Img/piemonte.jpg'

export class Partners extends Component {
    render() {
        return (
            <div className="mt-5">
                <h1 className="text-center">Our Partners</h1>
                <Container>

                    <Row>
                        <Col><div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastBody>
                                    <img src={Reply} alt="reply" style={{
                                        width: "186px",
                                        height: "60px"
                                    }} />
                                </ToastBody>
                            </Toast>
                        </div></Col>
                        <Col><div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastBody>
                                    <img src={Piemonte} alt="reply" style={{
                                        width: "186px",
                                        height: "60px"
                                    }} />
                                </ToastBody>
                            </Toast>
                        </div></Col>
                        <Col><div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastBody>
                                    <img src={Nutella} alt="reply" style={{
                                        width: "186px",
                                        height: "60px"
                                    }} />
                                </ToastBody>
                            </Toast>
                        </div></Col>
                    </Row>
                    <Row>
                        <Col><div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastBody>
                                    <img src={Fiat} alt="reply" style={{
                                        width: "186px",
                                        height: "60px"
                                    }} />
                                </ToastBody>
                            </Toast>
                        </div></Col>
                        <Col><div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastBody>
                                    <img src={LeGru} alt="reply" style={{
                                        width: "186px",
                                        height: "60px"
                                    }} />
                                </ToastBody>
                            </Toast>
                        </div></Col>
                        <Col><div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastBody>
                                    <img src={hays} alt="reply" style={{
                                        width: "186px",
                                        height: "60px"
                                    }} />
                                </ToastBody>
                            </Toast>
                        </div></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Partners
