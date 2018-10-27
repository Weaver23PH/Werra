import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Intro.scss";

let images = [];
const icons = [];

function importAll(r, array) {
    r.keys().forEach(key => array.push(r(key)));
}

importAll(require.context('./img/', true, /\.JPG$/), images);
importAll(require.context('./icons/', true, /\.JPG$/), icons);


const scenes = [
    [null, null, null, null, null],
    [null, null, 0, null, null],
    [null, 1, 0, null, null],
    [null, 1, 0, 2, null],
    [3, 1, 0, 2, null],
    [3, 1, 0, 2, 5],
    [3, 1, 0, 2, 5],
    [3, 1, 6, 2, 5]
];

class Iconiser extends React.Component {
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
            if (this.state.counter < images.length - 1) {
                this.setState(prevState => ({
                    counter: prevState.counter + 1
                }));
            }
            console.log(this.state.counter);
        }, 1500);

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

                { scenes[this.state.counter % scenes.length].map(iconIdx => {
                    if (iconIdx === null ) {
                        return <div style={ { ...boxShowStyle, visibility: "hidden" } } />;
                    } else {
                        return <div style={ { ...boxShowStyle, backgroundImage: `url(${icons[iconIdx]})`} } />;
                    }

                })}

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
            marginTop: `5vh`,
            padding: `5px`

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