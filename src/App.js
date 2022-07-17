import React from "react";
import Box from "./components/Box";
import './App.css';
import './styles/global.css';



const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000
class App extends React.Component {
  constructor(){
    super()

    this.state={
      water:1.5,
      heart:120,
      temperature:-10,
      steps:3000
    }
  } 


  onHeartChange = e => {
    this.setState({heart: e.target.value})
    this.calculateWater()
  }
  onTempChange = e => {
    this.setState({temperature: e.target.value})
    this.calculateWater()
  }
  onStepChange = e => {
    this.setState({steps: e.target.value})
    this.calculateWater()
  }

  
  calculateWater = () => {
    let calcWater = 1.5
    if(this.state.temperature > 20){
      calcWater += (this.state.temperature-20)*0.02
      this.setState({water: calcWater.toFixed(2)})
    }
    if(this.state.heart > 120){
      calcWater += (this.state.heart-120)*0.0008
      this.setState({water: calcWater.toFixed(2)})
    }
    if(this.state.steps > 10000){
      calcWater += (this.state.steps-120)*0.00002
      this.setState({water: calcWater.toFixed(2)})
    }
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L"/> 
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" minRange={stepsMin} maxRange={stepsMax} getRange={this.onStepChange}/> 
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" minRange={heartMin} maxRange={heartMax} getRange={this.onHeartChange} rangeId="heartInput" rangeName="heartRange"/> 
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" minRange={tempMin} maxRange={tempMax} getRange={this.onTempChange}/> 
        </div>
      </div>
    );
  }
}

export default App;