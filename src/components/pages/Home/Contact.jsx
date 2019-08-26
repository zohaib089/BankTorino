import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Location from './location';
export default class Contact extends React.Component {
    render() {
        return (
            <>
                <Row className="mt-3">
                    <Col className="sm-6 ml-2">
                        <h1 className="text-center">Contact Us</h1>
                        <Form className="mt-5">
                            <FormGroup>
                                <Label for="exampleEmail">First Name</Label>
                                <Input type="text" name="name" id="exampleEmail" placeholder="First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Surname</Label>
                                <Input type="text" name="surname" id="examplePassword" placeholder="Surname" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button style={{
                                marginLeft: "180px"
                            }}>Submit</Button>
                        </Form>
                    </Col>
                    <Col className="sm-6 mr-1">
                        <h1 className="text-center">Location</h1>
                        <Location />
                    </Col>
                </Row>


            </>
        );
    }
}