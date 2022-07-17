import React from "react";

class Box extends React.Component {
  render() {
    const isWater = this.props.icon !== "local_drink"
    const stepsCheck = this.props.icon === "direction_walk"
    console.log(this);
    return (
      <div className="box col-sm-3 col-6">
        <span style={{fontSize: 100, color: this.props.color}} className="material-symbols-outlined">
        {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>
        {isWater &&
          <input
            id={this.props.rangeId}
            type='range'
            name={this.props.rangeName}
            min={this.props.minRange}
            max={this.props.maxRange}
            value={this.props.value}
            step="1"
            onChange={this.props.getRange}>
          </input>
        }
        {stepsCheck &&
          <input
            id={this.props.rangeId}
            type='range'
            name={this.props.rangeName}
            min={this.props.minRange}
            max={this.props.maxRange}
            value={this.props.value}
            step="1000"
            onChange={this.props.getRange}>
          </input>
        }
      </div>
    );
  }
}

export default Box;