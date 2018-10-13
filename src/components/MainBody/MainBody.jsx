import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./MainBody.scss";
import Calculator from '../calculator/Calculator';
import bckSrc from "./img/Box_6.JPG";


class MainBody extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopupCalc: false,
            showPopup2: false,
        };
    }

    togglePopupCalc() {
        this.setState({
            showPopupCalc: !this.state.showPopupCalc
        });
    }

    togglePopup2() {
        this.setState({
            showPopup2: !this.state.showPopup2
        });
    }

    render() {

        return (
            <div id={styles.MainBody}>
                <div className={styles.popButtonCalc + ' ' + styles.popButton} onClick={this.togglePopupCalc.bind(this)}> </div>
                <div className={styles.popButtonTwo + ' ' + styles.popButton} onClick={this.togglePopupCalc.bind(this)}> </div>
                <img src={bckSrc} alt="Werra_front"/>

                {this.state.showPopupCalc ?
                    <PopupCalc
                        text='Close'
                        closePopup={this.togglePopupCalc.bind(this)}
                    />
                    : null
                }
                {this.state.showPopup2 ?
                <Popup
                    text='Close'
                    closePopup={this.togglePopup2.bind(this)}
                />
                : null
                }
            </div>
        );
    }
};

class PopupCalc extends React.Component {
    render() {
        return (
            <div className={styles.popupCalc}>
                <div className={styles.popup_innerCalc}>
                    <Calculator/>
                    <button onClick={this.props.closePopup}>{this.props.text}</button>
                </div>
            </div>
        );
    }
}
class Popup extends React.Component {
    render() {
        return (
            <div className={styles.popupCalc}>
                <div className={styles.popup_innerCalc}>
                    <Calculator/>
                    <button onClick={this.props.closePopup}>{this.props.text}</button>
                </div>
            </div>
        );
    }
}


export default MainBody;