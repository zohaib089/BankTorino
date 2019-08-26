

import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import marker from '../../../Img/marker1.png'


export default class Location extends Component {

    state = {
        viewport: {
            width: "49vw",
            height: 350,
            latitude: 45.0671003,
            longitude: 7.6799151,
            zoom: 15
        }
    };

    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken='pk.eyJ1Ijoiem9oYWliMDgiLCJhIjoiY2pxbWljYTNiMjJ5MTN5cXNtZWFpb3o2ciJ9.ysDvs8Rn7nGi60KkTR-z6w'
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}

            >
                <Marker latitude={45.0671003} longitude={7.6799151} offsetLeft={-20} offsetTop={-10}>
                    <div>
                        <img src={marker} alt="marker" style={{
                            width: "35px",
                            height: "35px"
                        }} />
                    </div>

                </Marker>
            </ReactMapGL>
        );
    }
}