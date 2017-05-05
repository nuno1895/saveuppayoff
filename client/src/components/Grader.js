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
	if (formSection === "savings") {
		if (percent < 0) {
			return (
				"F"
			);
		} else if (percent >= 1 && percent <= 2) {
			return (
				"D-"
			);
		} else if (percent >= 3 && percent <= 4) {
			return (
				"D"
			);
		} else if (percent >= 5 && percent <= 6) {
			return (
				"C-"
			);
		} else if (percent >= 7 && percent <= 8) {
			return (
				"C+"
			);
		} else if (percent >= 9 && percent <= 10) {
			return (
				"B-"
			);
		} else if (percent >= 11 && percent <= 12) {
			return (
				"B+"
			);
		} else if (percent >= 13 && percent <= 14) {
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
		} else {
			return (
				"F"
			);
		}
	}
}

export default grader;