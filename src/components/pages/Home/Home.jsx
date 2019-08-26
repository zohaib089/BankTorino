import React, { Component } from 'react'
import Jumbotron1 from './Jumbotron.jsx';
import Intro from './Cards.jsx';
import finance from '../../../Img/finane.jpg';
import { Button } from 'reactstrap'
import BankCards from './bankCards.jsx';
import Carousel1 from './Carousel.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Partners from './Partners.jsx';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <NavbarLayOut /> */}
                <Jumbotron1 />
                <div className="row">
                    <div className="col-md-6">
                        <Intro />
                    </div>
                    <hr />
                    <div className="col-md-6" style={{
                        backgroundImage: `url(${finance})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <Button outline size="lg" className=" mt-2 mr-3" style={{
                            position: "relative",
                            left: "290px",
                            top: "125px"
                        }} color="secondary">Finance</Button>
                    </div>
                </div>
                <Carousel1 />
                <BankCards />
                <Services />
                <Contact />
                <Partners />
            </div >

        )
    }
}
