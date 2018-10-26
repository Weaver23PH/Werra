import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./App.scss";
import Intro from '../intro/Intro';
import MainBody from '../MainBody/MainBody';
import Rotate from '../rotate/Rotate';
import {HashRouter, Switch, Route} from 'react-router-dom';


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
                {this.state.route === "intro" && <Intro onFinished={() => this.setState({route: "mainBody"})}/>}
                {this.state.route === "mainBody" && <HashRouter>
                    <Switch>
                        <Route exact path="/" component={MainBody}/>
                        <Route  path="/Rotate" component={Rotate}/>
                    </Switch>
                </HashRouter>
                }
            </React.Fragment>

        )
    }
}

export default App;