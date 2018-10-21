import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Rotate.scss";
import Cube from "react-3d-cube";
import front from "./img/Box_6.JPG";
import right from "./img/werra_open_cap_right_side_flat.JPG";
import back from "./img/werra_back.JPG";
import left from "./img/werra_open_cap_left_side_flat.JPG";
import top from "./img/werra_open_cap_top_side.JPG";
import bottom from "./img/werra_open_cap_bottom_side.JPG";
import {Link} from "react-router-dom";

class Rotate extends React.Component {
    handleClick = (event) => {
        alert("hiyathere");
    }


    render() {
        return (
            <div className={styles.rotate}>

                <div
                    style={{
                        width: 750,
                        height: 750,
                        position: "absolute"
                    }}
                >
                    <Cube size={750} index="front">
                        <img src={front} alt="front" onClick={(event) => this.handleClick(event)}/>
                        <img src={left} alt="right"/>
                        <img src={back} alt="back"/>
                        <img src={right} alt="left"/>
                        <img src={top} alt="top"/>
                        <img src={bottom} alt="bottom"/>
                    </Cube>

                        <Link to='/' className={styles.close}>Close</Link>

                </div>
            </div>
    );
    }
    }

    export default Rotate;