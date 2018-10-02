import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Calculator.scss";


class Calculator extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div id="calculator">
                <form>
                    <label>Aperture value (f/stop)</label><input name="fstop" id="fstop"></input>
                    <label>ISO</label><select name="iso" id="isoVal"></select>
                    <label>EV</label><input type="number" id="evVal"/>
                    <label>Time (sec)</label><input type="number" id='timeVal'/>
                    <button></button>
                </form>
            </div>
        )
    }
}

export default Calculator;