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
        this.state = { winWidth: 200, winHeight: 200 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    drawImageContextAndPins(context, image, pins, winWidth, winHeight) {
        const hRatio = winWidth / image.naturalWidth;
        const vRatio = winHeight / image.naturalHeight  ;
        var ratio  = Math.min(hRatio, vRatio);
        context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth * ratio, image.naturalHeight * ratio);
        context.fillStyle = pinRect.style;
        pins.map( pin => {
            return context.fillRect(pin.xcoord, pin.ycoord, pinRect.width, pinRect.height);
        })
    }

    componentDidMount() {
        const canvas = this.mapRef.current;
        const img = this.imageRef.current;
        const ctx = canvas.getContext("2d");
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        img.onload = () => (this.drawImageContextAndPins(ctx, img, pins, window.innerWidth, window.innerHeight));
    }
      
    render() {
        const {winWidth, winHeight} = this.state;
        return (
            <div>
                <canvas ref={this.mapRef} width={winWidth} height={winHeight} />
                <img
                    ref={this.imageRef} 
                    src={mapImage}
                    alt=''
                    hidden={true}
                />
            </div>
        );
    };

    updateWindowDimensions() {
        const img = this.imageRef.current;
        const ctx = this.mapRef.current.getContext("2d");
        this.setState({ winWidth: window.innerWidth, winHeight: window.innerHeight },
            () => (this.drawImageContextAndPins(ctx, img, pins, window.innerWidth, window.innerHeight)));
    }
}
