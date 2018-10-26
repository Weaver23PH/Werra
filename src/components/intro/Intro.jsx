import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Intro.scss";
import werra_1 from "./icons/werra_1.JPG";
import werra_2 from "./icons/werra_2.JPG";
import werra_3 from "./icons/werra_3.JPG";
import werra_4 from "./icons/werra_4.JPG";
import werra_5 from "./icons/werra_5.JPG";
import werra_6 from "./icons/werra_6.JPG";

let images = [];

function importAll(r) {
    r.keys().forEach(key => images.push(r(key)));
}

importAll(require.context('./img/', true, /\.JPG$/));


class Iconiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            center: werra_1,
            vis: [
                "visible",
                "hidden",
                "hidden",
                "hidden",
                "hidden"
            ]
        }
    }

    componentWillUnmount() {
        clearInterval(this.countInterval);
    }

    componentDidMount() {
        this.countInterval = setInterval(() => {
            if (this.state.counter < images.length - 1) {
                let tempArray = [...this.state.vis];
                tempArray[this.state.counter + 1] = "visible";
                this.setState(prevState => ({
                    counter: prevState.counter + 1,
                    vis: tempArray
                }));
            } else if (this.state.counter === 4) {
                this.setState({
                    center: werra_5
                })
            }
            console.log(this.state.counter);
        }, 2000);

    }


    render() {
        let boxShowStyle = {
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: `100%`,
            // height: `90%`


        };
        return (
            <div id={styles.intro2}>
                <div id="icon_1"
                     style={{...boxShowStyle, ...{backgroundImage: `url(${werra_4})`}, ...{visibility: this.state.vis[3]}}}></div>
                <div id="icon_2"
                     style={{...boxShowStyle, ...{backgroundImage: `url(${werra_2})`}, ...{visibility: this.state.vis[1]}}}></div>
                <div id="icon_3"
                     style={{...boxShowStyle, ...{backgroundImage: `url(${this.state.center})`}, ...{visibility: this.state.vis[0]}}}></div>
                <div id="icon_4"
                     style={{...boxShowStyle, ...{backgroundImage: `url(${werra_3})`}, ...{visibility: this.state.vis[2]}}}></div>
                <div id="icon_5"
                     style={{...boxShowStyle, ...{backgroundImage: `url(${werra_6})`}, ...{visibility: this.state.vis[4]}}}></div>
            </div>
        )
    }
}

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0

        }
    }

    componentWillUnmount() {
        clearInterval(this.countInterval);
    }

    componentDidMount() {
        this.countInterval = setInterval(() => {
            if (this.state.counter < images.length) {
                this.setState(prevState => ({
                    counter: prevState.counter + 1
                }))
            }
        }, 2000);

    }

    componentDidUpdate() {
        if (this.state.counter >= images.length) {
            this.props.onFinished();
        }
    }


    render() {
        let boxShowStyle = {
            backgroundImage: `url(${images[this.state.counter % images.length]})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: `100%`,
            width: `100%`,
            border: `1px solid red`,
            marginTop: `5vh`

        };
        return (
            <div>
                <Iconiser/>
                <div id={styles.intro}>
                    <div id="boxShow2" style={boxShowStyle}></div>
                </div>
            </div>
        )
    }
}

export default Intro;