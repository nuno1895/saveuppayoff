import React, { Component } from 'react';
// import Calculations from './Calculations';

class Results extends Component {
  render() {
  	console.log(this.props.formData);
    return (
    <div>
      <h1>Results</h1>
      {/*{this.props.formSectionData.map((value, index) => <h3>{index} {value}</h3>)}*/}
    </div>
    );
  }
}

export default Results;