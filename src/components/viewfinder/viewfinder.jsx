import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./viewfinder.scss";
import Webcam from "react-webcam";
import filter from "./img/VIEWFINDER.png";

class Viewfinder extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        let image = new Image();
        image.src = imageSrc;
        let cameraBox = document.getElementById("cameraBox");
        document.getElementById("photoCollector").replaceChild(image,cameraBox);
    };

    render() {
        const videoConstraints = {
            width: 580,
            height: 450,
            facingMode: "user"
        };

        const filterStyle = {
            backgroundImage: `url(${filter})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            height: `455px`,
            width: `580px`,
            position: `absolute`,
            top: `200px`

        };

        return (
            <div id="photoCollector">
                <div id="cameraBox">
                <Webcam
                    audio={false}
                    height={450}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={580}
                    videoConstraints={videoConstraints}
                    mirror={true}
                />
                <div  style={filterStyle}/>
                <button onClick={this.capture}>Capture photo</button>
                </div>
            </div>
        );
    }
}


export default Viewfinder;