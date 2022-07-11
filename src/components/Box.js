import React from "react";

class Box extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="box col-sm-3 col-6">
        <span style={{fontSize: 100, color: this.props.color}} className="material-symbols-outlined">
        {this.props.icon}
        </span>
        <p>{this.props.value} {this.props.unit}</p>
      </div>
    );
  }
}

export default Box;