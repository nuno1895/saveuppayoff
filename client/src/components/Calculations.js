import React from 'react';
import Grader from './Grader'

{/*
Transportation: 10-15%
Utilities: 5-10%
Medical: 5-10%
Insurance: 10-25%
Recreation: 2-3%
Debts: 0%$
Personal 5-10%

*/}

function totalPay(takeHome, frequency) {
	return takeHome * frequency;
}

function FoodCalculations(props) {
	// Food: 5-15%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);

	let totalFoodExpense = props.food.groceries + props.food.eatingOut;

	let lowerFoodLimit = budget * 0.05;
	let upperFoodLimit = budget * 0.15;

	return (
		
	);
}

// Not sure about this function yet---------------------------------
function SavingsCalculations(props) {
	// Savings: 10-15%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);

	let totalSavings = props.savings.emergency + props.savings.retirement + props.savings.college;



	return (

	);
}
// -----------------------------------------------------------------

function ClothingCalculations(props) {
	// Clothing: 2-7%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);

	let totalClothingExpense = props.clothing.clothingAdult + props.clothing.clothingKiids + props.clothing.dryCleaning;

	let lowerClothingLimit = budget * 0.10;
	let upperClothingLimit = budget * 0.15;

	return (

	);
}

function HousingCalculations(props) {
	// Housing: 25-35%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);

	let totalHousingExpenses = props.housing.mortgageRent + props.housing.secondMortgage + props.housing.taxes + props.housing.repairsMaint + props.housing.dues;


}

function TransportationCalculations(props) {
	// Transportation: 10-15%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}

function UtilitiesCalculations(props) {
	// Utilities: 5-10%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}

function medicalCalculations(props) {
	// Medical: 5-10%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}

function InsuranceCalculations(props) {
	// Insurance: 10-25%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}

function RecreationCalculations(props) {
	// Recreation: 2-3%
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}

function DebtsCalculations(props) {
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}

function PersonalCalculations(props) {
	// 
	let budget = totalPay(props.pay.takeHome, props.pay.frequency);
}