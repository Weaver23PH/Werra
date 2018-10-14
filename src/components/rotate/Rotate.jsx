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

class Rotate extends React.Component {
    handleClick = (event) => {
        alert("hiyathere");
    }


    render() {
        return (
            <div className={styles.rotate}>

                <div
                    style={{
                        width: 500,
                        height: 500
                    }}
                >
                    <Cube size={500} index="front">
                        <img src={front} alt="front" onClick={(event) => this.handleClick(event)}/>
                        <img src={left} alt="right"/>
                        <img src={back} alt="back"/>
                        <img src={right} alt="left"/>
                        <img src={top} alt="top"/>
                        <img src={bottom} alt="bottom"/>
                    </Cube>
                </div>
            </div>
    );
    }
    }

    export default Rotate;