import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./App.scss";
import Intro from '../intro/Intro';
import MainBody from '../MainBody/MainBody'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: "intro"
        }
    }

    render() {

        return (

            <React.Fragment>
                {this.state.route === "intro" && <Intro onFinished={() => this.setState({
                    route: "mainBody"
                })
                }/>}
                {this.state.route === "mainBody" && <MainBody/>}
            </React.Fragment>
        )
    }
}

export default App;