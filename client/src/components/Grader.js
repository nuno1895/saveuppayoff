import React, { Component } from 'react';

{/*

// A+: Not over any % 
// A-: 2-4% 
// B+: 5-7% 
// B-:8-10% 
// C+: 11-15% 
// C-: 16-20% 
// D: 21-25% 
// D-: 26-30% 
// F: Over 31%

*/}

function Grader(percent) {
	if (percent < 2) {
		return (
			<h2>You got an A+</h2>
		);
	} else if (percent >= 2 && percent <= 4) {
		return (
			<h2>You got an A-</h2>
		);
	} else if (percent >= 5 && percent <= 7) {
		return (
			<h2>You got a B+</h2>
		);
	} else if (percent >= 8 && percent <= 10) {
		return (
			<h2>You got a B-</h2>
		);
	} else if (percent >= 11 && percent <= 15) {
		return (
			<h2>You got a C+</h2>
		);
	} else if (percent >= 16 && percent <= 20) {
		return (
			<h2>You got a C-</h2>
		);
	} else if (percent >= 21 && percent <= 25) {
		return (
			<h2>You got a D</h2>
		);
	} else if (percent >= 26 && percent <= 30) {
		return (
			<h2>You got a D-</h2>
		);
	} else if (percent > 30) {
		return (
			<h2>You got a F</h2>
		);
	}
}

// class Grader extends Component {
// 	render() {
// 		let percent = this.props.percentDifference;
		
// 		if (percent < 2) {
// 			return (
// 				<h2>You got an A+</h2>
// 			);
// 		} else if (percent >= 2 && percent <= 4) {
// 			return (
// 				<h2>You got an A-</h2>
// 			);
// 		} else if (percent >= 5 && percent <= 7) {
// 			return (
// 				<h2>You got a B+</h2>
// 			);
// 		} else if (percent >= 8 && percent <= 10) {
// 			return (
// 				<h2>You got a B-</h2>
// 			);
// 		} else if (percent >= 11 && percent <= 15) {
// 			return (
// 				<h2>You got a C+</h2>
// 			);
// 		} else if (percent >= 16 && percent <= 20) {
// 			return (
// 				<h2>You got a C-</h2>
// 			);
// 		} else if (percent >= 21 && percent <= 25) {
// 			return (
// 				<h2>You got a D</h2>
// 			);
// 		} else if (percent >= 26 && percent <= 30) {
// 			return (
// 				<h2>You got a D-</h2>
// 			);
// 		} else if (percent > 30) {
// 			return (
// 				<h2>You got a F</h2>
// 			);
// 		}
// 	}
// }

export default Grader;