import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Rotate.scss";
import Cube from "react-3d-cube";
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
            noSunshade: true
        }
    }

    handleClick = (event) => {
        if (event.altKey) {
            alert("hiyathere");
        }
    };
    changeLooks = (event) => {
        if (event.shiftKey)
            this.setState({
                sunshade: !this.state.sunshade,
                noSunshade: !this.state.noSunshade
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
                        top: `30%`
                    }}
                >
                    {this.state.noSunshade && <Cube size={600} index="front">
                        <img src={front1} alt="front" onClick={(event) => this.handleClick(event)}/>
                        <img src={left1} alt="right"/>
                        <Link to='/' className={styles.close}> <img src={back} alt="back"/></Link>
                        <img src={right1} alt="left"/>
                        <img src={top1} alt="top" onClick={(event) => this.changeLooks(event)}/>
                        <img src={bottom1} alt="bottom"/>
                    </Cube>}
                    {this.state.sunshade && <Cube size={600} index="front">
                        <img src={front2} alt="front" onClick={(event) => this.handleClick(event)}/>
                        <img src={right2} alt="right"/>
                        <Link to='/' className={styles.close}> <img src={back} alt="back"/></Link>
                        <img src={left2} alt="left"/>
                        <img src={top2} alt="top" onClick={(event) => this.changeLooks(event)}/>
                        <img src={bottom2} alt="bottom"/>
                    </Cube>}

                    <Link to='/' className={styles.close}>Close</Link>

                </div>
            </div>
        );
    }
}

export default Rotate;