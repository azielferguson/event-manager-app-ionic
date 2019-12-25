import React from 'react';

export class InteractiveMap extends React.Component {
    constructor(props){
        super(props);
        this.mapRef = React.createRef();
        this.imageRef = React.createRef();
    }
    
    componentDidMount() {
        const canvas = this.mapRef.current;
        const img = this.imageRef.current;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    }
      
    render() {

        return (
            <div>
                <canvas ref={this.mapRef} width={640} height={425} />
                <img ref={this.imageRef} src={'../../public/netherlands_map.jpg'} className='hidden' />
            </div>
        );
    };
}
