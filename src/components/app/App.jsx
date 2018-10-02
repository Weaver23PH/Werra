import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./App.scss";
import Calculator from '../calculator/Calculator';

class App extends React.Component{
    render(){
        return (<React.Fragment>
            <Calculator />
        </React.Fragment>)
    }
}

export default App;