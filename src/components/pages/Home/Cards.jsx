import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Intro = (props) => {
    return (
        // <div style={{ "backgroundColor": "green" }}>
        <Card style={{
            backgroundColor: "#DDDDDD",
            height: "300px",
            textAlign: "center",


        }} >

            <CardBody>
                <CardTitle style={{
                    fontSize: "36px",
                    fontStyle: "bold",

                }} className="mt-2">Who We Are</CardTitle>
                <CardSubtitle style={{
                    fontSize: "4rem"
                }}>BankTorino</CardSubtitle>
                <CardText style={{
                    fontSize: "1.5rem"
                }} className="mt-1">We are here to Secure Your <strong>Future</strong> We Think you as our Family.Please Join Hands</CardText>

            </CardBody>
        </Card>
        // </div>
    );
};

export default Intro;