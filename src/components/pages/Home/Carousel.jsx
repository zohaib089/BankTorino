import React, { Component } from 'react';
import customer from '../../../Img/customer.jpg'
import secure from '../../../Img/secure.jpg'
import investor from '../../../Img/investor.jpg'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: `${customer}`,
        altText: 'Our Customers are our Family we shall always welcome Home',
        caption: 'Our Customers Our Family'
    },
    {
        src: `${secure}`,
        altText: 'Bank Security',
        caption: 'We Offer Secure Online Banking '
    },
    {
        src: `${investor}`,
        altText: 'Investor of the Year',
        caption: 'We Are in the Top Investors'
    }
];

class Carousel1 extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style={{ width: "100%" }} />
                    <CarouselCaption className="text-white" captionText={item.caption} captionHeader={item.altText} />

                </CarouselItem>
            );
        });

        return (
            <Carousel
                slide={4}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className="mt-3"
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default Carousel1