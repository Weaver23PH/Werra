import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./MainBody.scss";
import Calculator from '../calculator/Calculator';
import Gallery from '../gallery/gallery';
import bckSrc from "./img/Box_6.JPG";
import {Link} from 'react-router-dom'
import Rotate from "../rotate/Rotate";

class MainBody extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopupCalc: false,
            showPopupGallery: false,
            showPopupRotate: false
        };
    }

    togglePopupCalc() {
        this.setState({
            showPopupCalc: !this.state.showPopupCalc
        });
    }

    togglePopupGallery() {
        this.setState({
            showPopupGallery: !this.state.showPopupGallery
        });
    }


    render() {

        return (
            <div id={styles.MainBody}>

                <div className={styles.imgContainer}>
                    <img src={bckSrc} alt="Werra"/>
                    <div className={styles.popButtonCalc + ' ' + styles.popButton + ' ' + styles.tooltip}
                         onClick={this.togglePopupCalc.bind(this)}>
                        <span className={styles.tooltiptext}>EV Calculator</span>
                    </div>
                    <div className={styles.popButtonGallery + ' ' + styles.popButton + ' ' + styles.tooltip}
                         onClick={this.togglePopupGallery.bind(this)}>
                        <span className={styles.tooltiptext}>Photo Gallery</span>
                    </div>
                    <div className={styles.popButtonRotate + ' ' + styles.popButton + ' ' + styles.tooltip}>
                        <Link to='/Rotate' className={styles.tooltiptext}>3D View</Link>

                    </div>
                </div>
                {this.state.showPopupCalc ?
                    <PopupCalc
                        text='Close'
                        closePopup={this.togglePopupCalc.bind(this)}
                    />
                    : null
                }
                {this.state.showPopupGallery ?
                    <PopupGallery
                        text='Close'
                        closePopup={this.togglePopupGallery.bind(this)}
                    />
                    : null
                }

            </div>
        );
    }
}

class PopupCalc extends React.Component {
    render() {
        return (
            <div className={styles.popupCalc}>
                <div className={styles.popup_innerCalc}>
                    <Calculator/>
                    <button id={styles.calcButton}onClick={this.props.closePopup}>{this.props.text}</button>
                </div>
            </div>
        );
    }
}

class PopupGallery extends React.Component {
    render() {
        return (
            <div className={styles.popupGallery}>
                <div className={styles.popup_innerGallery}>
                    <Gallery/>
                    <button id={styles.galleryButton} onClick={this.props.closePopup}>{this.props.text}</button>
                </div>
            </div>
        );
    }
}


export default MainBody;