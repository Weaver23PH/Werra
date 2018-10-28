import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Rotate.scss";
import Cube from "react-3d-cube";
import Viewfinder from "../viewfinder/viewfinder.jsx";
import back from "./img/werra_back.JPG";
import front1 from "./img/Box_6.JPG";
import right1 from "./img/werra_open_cap_right_side_flat.JPG";
import left1 from "./img/werra_open_cap_left_side_flat.JPG";
import top1 from "./img/werra_open_cap_top_side.JPG";
import bottom1 from "./img/werra_open_cap_bottom_side.JPG";
import front2 from "./img/werra_front_sunshade.JPG";
import right2 from "./img/werra_left_sunshade.JPG";
import left2 from "./img/werra_right_sunshade.JPG";
import top2 from "./img/werra_top_sunshade.JPG";
import bottom2 from "./img/werra_bottom_sunshade.JPG";
import {Link} from "react-router-dom";


class Rotate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sunshade: false,
            noSunshade: true,
            showPopupHistory: false,
            showPopupViewfinder: false
        }
    }

    changeLooks = (event) => {
        if (event.shiftKey)
            this.setState({
                sunshade: !this.state.sunshade,
                noSunshade: !this.state.noSunshade
            });

    };

    togglePopupHistory = (event) => {

        this.setState({
            showPopupHistory: !this.state.showPopupHistory
        });

    };
    togglePopupViewfinder = (event) => {

        this.setState({
            showPopupViewfinder: !this.state.showPopupViewfinder
        });

    };


    render() {
        return (
            <div className={styles.rotate}>

                <div
                    style={{
                        width: 600,
                        height: 600,
                        position: "absolute",
                        top: `20%`,
                        userSelect: `none`

                    }}
                >
                    {this.state.noSunshade && <Cube size={600} index="front">
                        <img src={front1} alt="front" onClick={(event) => this.togglePopupHistory(event)}/>
                        <img src={left1} alt="right"/>
                        <img src={back} alt="back" onClick={(event) => this.togglePopupViewfinder(event)}/>
                        <img src={right1} alt="left"/>
                        <img src={top1} alt="top" onClick={(event) => this.changeLooks(event)}/>
                        <Link to='/' className={styles.close}> <img src={bottom1} alt="bottom"/></Link>

                    </Cube>}
                    {this.state.sunshade && <Cube size={600} index="front">
                        <img src={front2} alt="front" onClick={(event) => this.togglePopupHistory(event)}/>
                        <img src={right2} alt="right"/>
                        <img src={back} alt="back" onClick={(event) => this.togglePopupViewfinder(event)}/>
                        <img src={left2} alt="left"/>
                        <img src={top2} alt="top" onClick={(event) => this.changeLooks(event)}/>
                        <Link to='/' className={styles.close}> <img src={bottom2} alt="bottom"/></Link>

                    </Cube>}
                </div>
                {this.state.showPopupHistory ?
                    <PopupHistory
                        text='Close'
                        closePopup={this.togglePopupHistory.bind(this)}
                    />
                    : null
                }
                {this.state.showPopupViewfinder ?
                    <PopupViewfinder
                        text='Close'
                        closePopup={this.togglePopupViewfinder.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

class PopupHistory extends React.Component {
    render() {
        return (
            <div className={styles.popupHistory}>
                <div className={styles.popup_innerHistory}>
                    <h1>Zeiss Jena Werra</h1>
                    <p>
                    Historically, the <em>Werra</em> is interesting, in that it's one of the very few cameras to bear the Carl
                    Zeiss name. According to the Leitz museum, the Werra project was created in the early 1950's to
                    provide employment for Carl Zeiss technicians who were finding their way back home after having been
                    commandeered to Russia. The camera was a totally new concept, and was designed and constructed in
                    the Carl Zeiss Jena factory in the town of Eisfeld, besides which flows the river <em>Werra</em>. The
                    observation has often been made that the <em>Werra</em> is a brainchild of a group of designers and
                    engineers, ingenious and futuristic for it's time, but not a particularly enjoyable camera to use,
                    but I don't subscribe to that point of view. I appreciate the spare, no-frills appearance, the solid
                    feel and the smooth operation of it's components, all a product of engineering excellence.
                    The top of the camera is devoid of controls other than the shutter release, and film counter and
                    rewind handle are positioned on the base of the camera, along with the body release for film
                    loading. The black central disc performs this function with an intermediate position that disengages
                    the film drive sprockets for rewinding. Ingenious. The film counter on this model is a poor feature,
                    being almost illegible without a good strong light and, (in my case), reading glasses. Flash
                        synchronisation and self-timer are visible on the base behind the lens.</p>
                    <button onClick={this.props.closePopup}>{this.props.text}</button>
                </div>
            </div>
        );
    }
}

class PopupViewfinder extends React.Component {
    render() {
        return (
            <div className={styles.popupViewfinder}>

                    <Viewfinder/>
                    <button id={styles.ViewfinderButton} onClick={this.props.closePopup}>{this.props.text}</button>

            </div>
        );
    }
}

export default Rotate;