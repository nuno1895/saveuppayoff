import React, { Component } from 'react';
import Advice from './Advice';

// A+: Not over any % 
// A-: 2-4% 
// B+: 5-7% 
// B-:8-10% 
// C+: 11-15% 
// C-: 16-20% 
// D: 21-25% 
// D-: 26-30% 
// F: Over 31%

function grader(percent, formSection) {
	console.log(formSection);
	console.log(percent);
	if (formSection === "savings") {
		if (percent <= 0) {
			return (
				"F"
			);
		} else if (percent > 0 && percent < 3) {
			return (
				"D-"
			);
		} else if (percent >= 3 && percent < 5) {
			return (
				"D"
			);
		} else if (percent >= 5 && percent < 7) {
			return (
				"C-"
			);
		} else if (percent >= 7 && percent < 9) {
			return (
				"C+"
			);
		} else if (percent >= 9 && percent < 11) {
			return (
				"B-"
			);
		} else if (percent >= 11 && percent < 13) {
			return (
				"B+"
			);
		} else if (percent >= 13 && percent < 15) {
			return (
				"A-"
			);
		} else {
			return (
				"A+"
			);
		}
	} else {
		if (percent < 2) {
			return (
				"A+"
			);
		} else if (percent >= 2 && percent < 5) {
			return (
				"A-"
			);
		} else if (percent >= 5 && percent < 8) {
			return (
				"B+"
			);
		} else if (percent >= 8 && percent < 11) {
			return (
				"B-"
			);
		} else if (percent >= 11 && percent < 15) {
			return (
				"C+"
			);
		} else if (percent >= 15 && percent < 21) {
			return (
				"C-"
			);
		} else if (percent >= 21 && percent < 26) {
			return (
				"D"
			);
		} else if (percent >= 26 && percent < 30) {
			return (
				"D-"
			);
		} else {
			return (
				"F"
			);
		}
	}
}

export default grader;