import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Intro.scss";

let images = [];

function importAll(r) {
    r.keys().forEach(key => images.push(r(key)));
}

importAll(require.context('./img/', true, /\.JPG$/));

class TextTyper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: this.props.reversed ? this.props.text.length : 1
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state) => ({
                characters: this.props.reversed ? state.characters - 1 : state.characters + 1,
            }))
        }, 500)
    }

    shouldComponentUpdate() {
        return this.props.reversed
            ? this.state.characters > 0
            : this.state.characters < this.props.text.length
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <h1>{this.props.text.slice(0, this.state.characters)}</h1>;
    }
}


class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0

        }
    }

    componentDidUnmount() {
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
            border: `1px solid red`

        };
        return (
            <div>
                <TextTyper text="Carl Zeiss Jena - WERRA"/>
                <div id={styles.intro}>
                    <div id="boxShow" style={boxShowStyle}> </div>
                </div>
            </div>
        )
    }
}

export default Intro;