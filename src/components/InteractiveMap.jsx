import React from 'react';
import mapImage from '../assets/images/netherlands_map.jpg'

const pinRect = {
    style: 'green',
    width: 5,
    height: 5
}

const pins = [
    {xcoord: 25, ycoord: 30},
    {xcoord: 50, ycoord: 30},
    {xcoord: 75, ycoord: 30},
    {xcoord: 50, ycoord: 60},
]

export class InteractiveMap extends React.Component {
    constructor(props){
        super(props);
        this.mapRef = React.createRef();
        this.imageRef = React.createRef();
    }
    
    drawImageContextAndPins(context, image, pins) {
        context.drawImage(image, 0, 0)
        context.fillStyle = pinRect.style;
        pins.map( pin => {
            return context.fillRect(pin.xcoord, pin.ycoord, pinRect.width, pinRect.height);
        })
    }

    componentDidMount() {
        const canvas = this.mapRef.current;
        const img = this.imageRef.current;
        const ctx = canvas.getContext("2d");
        img.onload = () => (this.drawImageContextAndPins(ctx, img, pins));
    }
      
    render() {

        return (
            <div>
                <canvas ref={this.mapRef} width={640} height={425} />
                <img
                    ref={this.imageRef} 
                    src={mapImage}
                    alt=''
                    hidden={true}
                />
            </div>
        );
    };
}
