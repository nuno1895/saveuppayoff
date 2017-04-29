// import React, { Component } from 'react';
// import Advice from './Advice';

// A+: Not over any % 
// A-: 2-4% 
// B+: 5-7% 
// B-:8-10% 
// C+: 11-15% 
// C-: 16-20% 
// D: 21-25% 
// D-: 26-30% 
// F: Over 31%

function grader(percent) {
	if (percent < 2) {
		return (
			"A+"
		);
	} else if (percent >= 2 && percent <= 4) {
		return (
			"A-"
		);
	} else if (percent >= 5 && percent <= 7) {
		return (
			"B+"
		);
	} else if (percent >= 8 && percent <= 10) {
		return (
			"B-"
		);
	} else if (percent >= 11 && percent <= 15) {
		return (
			"C+"
		);
	} else if (percent >= 16 && percent <= 20) {
		return (
			"C-"
		);
	} else if (percent >= 21 && percent <= 25) {
		return (
			"D"
		);
	} else if (percent >= 26 && percent <= 30) {
		return (
			"D-"
		);
	} else if (percent > 30) {
		return (
			"F"
		);
	}
}

export default grader;

// class Grader extends Component {
// 	render() {
// 		let advice = this.props.adviceOne;
// 		let adviceRandom = Math.floor((Math.random() * 8)); 
// 		let percent = this.props.budgetPercent;
// 		console.log(advice);
// 		if (percent < 2) {
// 			return (
// 				"A+";
// 			);
// 		} else if (percent >= 2 && percent <= 4) {
// 			return (
// 				"A-";
// 			);
// 		} else if (percent >= 5 && percent <= 7) {
// 			return (
// 				"B+";
// 			);
// 		} else if (percent >= 8 && percent <= 10) {
// 			return (
// 				"B-";
// 			);
// 		} else if (percent >= 11 && percent <= 15) {
// 			return (
// 				"C+";
// 			);
// 		} else if (percent >= 16 && percent <= 20) {
// 			return (
// 				"C-";
// 			);
// 		} else if (percent >= 21 && percent <= 25) {
// 			return (
// 				"D";
// 			);
// 		} else if (percent >= 26 && percent <= 30) {
// 			return (
// 				"D-";
// 			);
// 		} else if (percent > 30) {
// 			return (
// 				"F";
// 			);
// 		}
// 	}
// }

// export default Grader;