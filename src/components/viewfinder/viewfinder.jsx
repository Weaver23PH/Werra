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
        let image = mixFilterwithScreenshot(filter, imageSrc);
        base64toBlob(image, "png");
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
            <div>
                <Webcam
                    audio={false}
                    height={450}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={580}
                    videoConstraints={videoConstraints}
                    mirror={true}
                />
                <div style={filterStyle}/>
                <button onClick={this.capture}>Capture photo</button>

            </div>
        );
    }
}

function getBase64FromImageUrl(url) {
    let img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        let dataURL = canvas.toDataURL("image/png");

        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        return dataURL;
    };

    img.src = url;

}

function mixFilterwithScreenshot(overlay, screenshot) {
    let ovrlb64 = getBase64FromImageUrl(overlay);
    let intermediaryBinString = (atob(ovrlb64) + atob(screenshot));
    return btoa(intermediaryBinString);
}

function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    let sliceSize = 1024;
    let byteCharacters = atob(base64Data);
    let bytesLength = byteCharacters.length;
    let slicesCount = Math.ceil(bytesLength / sliceSize);
    let byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        let begin = sliceIndex * sliceSize;
        let end = Math.min(begin + sliceSize, bytesLength);

        let bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {type: contentType});
}

export default Viewfinder;