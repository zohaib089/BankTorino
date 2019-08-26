import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import background from '../../../Img/BackGround.jpg';

const Jumbotron1 = (props) => {
    return (
        <div>
            <Jumbotron fluid style={{
                height: "580px", backgroundImage: `url(${background})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Container fluid>
                    <h1 className="display-3 text-right pt-5 mr-3 text-white">BankTorino</h1>
                    <p className="lead text-right pt-2 mr-3 text-white">With BankTorino Your Money is in Safe Hands</p>
                    <Button className="mt-2 mr-3" style={{ float: "right" }} color="primary">Join Hands</Button>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbotron1;