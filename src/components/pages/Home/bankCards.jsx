import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';

import creditCard from '../../../Img/Creditcard.jpg'
import visaCard from '../../../Img/visa.jpg'
import masterCard from '../../../Img/master card.jpg'
const BankCards = (props) => {
    return (
        <CardGroup className="mt-3">
            <Card>
                <CardImg top width="100%" style={{
                    height: "300px"
                }} src={masterCard} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Debit Card</CardTitle>
                    <CardSubtitle>Also for Internet Shopping</CardSubtitle>
                    <CardText>Carry our Debit card forget about change...</CardText>
                    <Button color="secondary">More Info...</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" style={{
                    height: "300px",
                    width: "100%"
                }} src={visaCard} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Visa Card</CardTitle>
                    <CardSubtitle>All in One Card</CardSubtitle>
                    <CardText>Ease Your life with our Visa Card...</CardText>
                    <Button color="secondary">More Info...</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" style={{
                    height: "300px"
                }} src={creditCard} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Credit Card</CardTitle>
                    <CardSubtitle>Make it Happen</CardSubtitle>
                    <CardText>With our Credit Card don't let your dersires to hold you</CardText>
                    <Button color="secondary">More Info...</Button>
                </CardBody>
            </Card>
        </CardGroup>
    );
};

export default BankCards;