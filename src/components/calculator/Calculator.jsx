import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Calculator.scss";

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            fstopVal: "",
            isoVal: "",
            evVal: "",
            timeVal: "",
            evCalc: false,
            fstopCalc: false,
            isoCalc: false,
            timeCalc: false,
        }
    }

    handleFStopChange = (event) => {
        this.setState({
            fstopVal: event.target.value
        })
    };

    handleISOChange = (event) => {
        this.setState({
            isoVal: event.target.value
        })
    };

    handleEVChange = (event) => {
        this.setState({
            evVal: event.target.value
        })
    };

    handleTimeChange = (event) => {
        this.setState({
            timeVal: event.target.value
        })
    };

    calculate = (event) => {
        event.preventDefault();
        let timeValue = parseFloat(this.state.timeVal);
        let fstopValue = parseInt(this.state.fstopVal);
        let evValue = parseFloat(this.state.evVal);
        let isoValue = parseInt(this.state.isoVal);
        console.log(timeValue,fstopValue,isoValue,evValue);

        if (isNaN(evValue)){
            evValue = Math.log2(100 * Math.pow(fstopValue,2)/(isoValue*timeValue));
            this.setState({
                evVal: evValue.toFixed(0),
                evCalc: true
            })
        }else if (isNaN(fstopValue)){
            fstopValue = Math.sqrt(Math.pow(2,evValue)*isoValue*timeValue/100);
            this.setState({
                fstopVal: fstopValue.toFixed(2),
                fstopCalc: true
            })
        }else if (isNaN(isoValue)){
            isoValue =100*Math.pow(fstopValue,2)/timeValue/Math.pow(2,evValue);
            console.log(Math.round(isoValue));
            this.setState({
                isoVal: Math.round(isoValue),
                isoCalc: true
            })
        }else if (isNaN(timeValue)){
            timeValue =100*Math.pow(fstopValue,2)/isoValue/Math.pow(2,evValue);
            console.log(Math.round(isoValue));
            this.setState({
                timeVal: timeValue,
                timeCalc: true
            })}

}

    render() {
        return (
            <div id="calculator">
                {this.state.evCalc && <h2>EV value: {this.state.evVal}</h2>}
                {this.state.timeCalc && <h2>Time value: {this.state.timeVal} seconds</h2>}
                {this.state.fstopCalc && <h2>f/Stop value: {this.state.fstopVal}</h2>}
                {this.state.isoCalc && <h2>`ISO value: ${this.state.isoVal} seconds`</h2>}
                <form>
                    <label>Aperture value (f/stop)</label><input type="number" name="fstop" id="fstop" value={this.state.fstop} onChange={(event)=> this.handleFStopChange(event)}/>
                    <label>ISO</label><input type="number" name="iso" id="isoVal" value={this.state.isoVal} onChange={(event)=> this.handleISOChange(event)}/>
                    <label>EV</label><input type="number" id="evVal" name="evVal" value={this.state.evVal} onChange={(event)=> this.handleEVChange(event)}/>
                    <label>Time (sec)</label><input type="number" id='timeVal' name="timeVal" value={this.state.timeVal} onChange={(event)=> this.handleTimeChange(event)}/>
                    <button onClick={(event)=>this.calculate(event)}>Calculate</button>
                </form>
                <table>
                    <thead>
                    <tr>
                        <th>Lighting condition</th>
                        <th>EV</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Full sunlight, snow</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>Full sunlight</td>
                        <td>14 – 15</td>
                    </tr>
                    <tr>
                        <td>Cloudy</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>Thick clouds</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Sunrise / sunset</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Dusk / dawn</td>
                        <td>5 – 11</td>
                    </tr>
                    <tr>
                        <td>Night, bright street</td>
                        <td>7 – 8</td>
                    </tr>
                    <tr>
                        <td>Inside buildings, artificial light</td>
                        <td>5 – 8</td>
                    </tr>
                    <tr>
                        <td>Night, near lighted buildings</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Night, distant lighted buildings</td>
                        <td>2 – 3</td>
                    </tr>
                    <tr>
                        <td>Night, dark landscape at full moon</td>
                        <td>-2</td>
                    </tr>
                    <tr>
                        <td>Night, dark landscape at half moon</td>
                        <td>-4</td>
                    </tr>
                    <tr>
                        <td>Night, dark landscape at new moon</td>
                        <td>-6 – -8</td>
                    </tr>
                    <tr>
                        <td>Night, stars</td>
                        <td>-3 – -9</td>
                    </tr>
                    <tr>
                        <td>Night, weak celestial bodies, nebulae</td>
                        <td>-10 and below</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Calculator;