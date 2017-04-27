import React, { Component } from 'react';
import Grader from './Grader';
import './Results.css';
// import Calculations from './Calculations';

// Percentages for grades:

// Food: 5-15% 
// Savings: 10-15% 
// Clothing: 2-7% 
// Housing: 25-35% 
// Transportation: 10-15% 
// Utilities: 5-10% 
// Medical: 5-10% 
// Insurance: 10-25% 
// Recreation: 2-3% 
// Debts: 0% 
// Personal 5-10%

class Results extends Component {
	calculationFunc(formSection, formSectionData, budget) {
		if (formSection === 'food') {
			// Food: 5-15%
			let totalFoodExpense = parseInt(formSectionData.groceries) + parseInt(formSectionData.eatingOut);
			let percentOfBudgetFood = (totalFoodExpense * 100)/parseInt(budget);
			// for (var i = 0; i < formSectionData.length; i++) {
			// 	totalFoodExpense += formSectionData[i];
			// 	console.log("HERE: " + totalFoodExpense);
			// };

			return (
				<div>
					<h2>Your Budget Grade For Food</h2>
					<p>Total food expense: {totalFoodExpense}</p>
					<p>Out of your total budget: {budget}</p>
					<p>Your total food expense is {percentOfBudgetFood}% of your budget</p>
					<Grader budgetPercent={percentOfBudgetFood} />
          {<Grader advice />}
				</div>
			);
		} 
		else if (formSection === 'clothing') {
      let totalClothingExpense = parseInt(formSectionData.clothingAdult) + parseInt(formSectionData.clothingKids) + parseInt(formSectionData.dryCleaning);
      let percentOfBudget = (totalClothingExpense * 100)/parseInt(budget);
      // for (var i = 0; i < formSectionData.length; i++) {
      //  totalClothingExpense += formSectionData[i];
      //  console.log("HERE: " + totalClothingExpense);
      // };

      return (
        <div>
          <h2>Your Budget Grade For Clothing</h2>
          <p>Total clothing expense: {totalClothingExpense}</p>
          <p>Out of your total budget: {budget}</p>
          <p>Your total clothing expense is {percentOfBudget}% of your budget</p>
          <Grader budgetPercent={percentOfBudget} />
        </div>
      );
    }
    else if (formSection === 'utilities') {
    let totalUtilityExpense = parseInt(formSectionData.electricity) + parseInt(formSectionData.mobilePhone) + parseInt(formSectionData.gas) + parseInt(formSectionData.trash) + parseInt(formSectionData.water) + parseInt(formSectionData.internet) + parseInt(formSectionData.cable);
    let percentOfBudget = (totalUtilityExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalUtilityExpense += formSectionData[i];
    //  console.log("HERE: " + totalUtilityExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Utilities</h2>
        <p>Total utility expense: {totalUtilityExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total utility expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'housing') {
    let totalHousingExpense = parseInt(formSectionData.mortgageRent) + parseInt(formSectionData.secondMortgage) + parseInt(formSectionData.taxes) + parseInt(formSectionData.repairsMaint) + parseInt(formSectionData.dues);
    let percentOfBudget = (totalHousingExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalHousingExpense += formSectionData[i];
    //  console.log("HERE: " + totalHousingExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Housing</h2>
        <p>Total housing expense: {totalHousingExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total housing expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'savings') {
    let totalSavingsExpense = parseInt(formSectionData.emergency) + parseInt(formSectionData.retirement) + parseInt(formSectionData.college);
    let percentOfBudget = (totalSavingsExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalSavingsExpense += formSectionData[i];
    //  console.log("HERE: " + totalSavingsExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Savings</h2>
        <p>Total savings expense: {totalSavingsExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total savings expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'medical') {
    let totalMedicalExpense = parseInt(formSectionData.medications) + parseInt(formSectionData.doctorBills) + parseInt(formSectionData.hospitalBills) + parseInt(formSectionData.otherMedical) + parseInt(formSectionData.otherMedical2) + parseInt(formSectionData.otherMedical3);
    let percentOfBudget = (totalMedicalExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalMedicalExpense += formSectionData[i];
    //  console.log("HERE: " + totalMedicalExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Medical</h2>
        <p>Total medical expense: {totalMedicalExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total medical expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'insurance') {
    let totalInsuranceExpense = parseInt(formSectionData.lifeInsurance) + parseInt(formSectionData.healthInsurance) + parseInt(formSectionData.autoInsurance) + parseInt(formSectionData.homeRentalInsurance) + parseInt(formSectionData.disabilityInsurance) + parseInt(formSectionData.longTermInsurance);
    let percentOfBudget = (totalInsuranceExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalInsuranceExpense += formSectionData[i];
    //  console.log("HERE: " + totalInsuranceExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Insurance</h2>
        <p>Total insurance expense: {totalInsuranceExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total insurance expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'transportation') {
    let totalTransportationExpense = parseInt(formSectionData.carGas) + parseInt(formSectionData.carRepairs) + parseInt(formSectionData.bus) + parseInt(formSectionData.train) + parseInt(formSectionData.newCarFund) + parseInt(formSectionData.otherTransportation);
    let percentOfBudget = (totalTransportationExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalTransportationExpense += formSectionData[i];
    //  console.log("HERE: " + totalTransportationExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Transportation</h2>
        <p>Total transportation expense: {totalTransportationExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total transportation expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'personal') {
    let totalPersonalExpense = parseInt(formSectionData.educationTuition) + parseInt(formSectionData.childCare) + parseInt(formSectionData.hairCareCosmetics) + parseInt(formSectionData.bookSupplies) + parseInt(formSectionData.alimony) + parseInt(formSectionData.pocketMoney) + parseInt(formSectionData.subscriptions) + parseInt(formSectionData.babySupplies) + parseInt(formSectionData.petSupplies);
    let percentOfBudget = (totalPersonalExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalPersonalExpense += formSectionData[i];
    //  console.log("HERE: " + totalPersonalExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Personal</h2>
        <p>Total personal expense: {totalPersonalExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total personal expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'miscellaneous') {
    let totalMiscellaneousExpense = parseInt(formSectionData.miscellaneous) + parseInt(formSectionData.otherPersonal) + parseInt(formSectionData.otherPersonal2) + parseInt(formSectionData.otherPersonal3);
    let percentOfBudget = (totalMiscellaneousExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalMiscellaneousExpense += formSectionData[i];
    //  console.log("HERE: " + totalMiscellaneousExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Miscellaneous</h2>
        <p>Total miscellaneous expense: {totalMiscellaneousExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total miscellaneous expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'entertainment') {
    let totalEntertainmentExpense = parseInt(formSectionData.entertainment) + parseInt(formSectionData.vacation);
    let percentOfBudget = (totalEntertainmentExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalEntertainmentExpense += formSectionData[i];
    //  console.log("HERE: " + totalEntertainmentExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Entertainment</h2>
        <p>Total Entertainment expense: {totalEntertainmentExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total Entertainment expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'carDebt') {
    let totalCarDebtExpense = parseInt(formSectionData.carPayment1) + parseInt(formSectionData.carPayment2);
    let percentOfBudget = (totalCarDebtExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalCarDebtExpense += formSectionData[i];
    //  console.log("HERE: " + totalCarDebtExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Car Debt</h2>
        <p>Total Car Debt expense: {totalCarDebtExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total Car Debt expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'creditCardDebt') {
    let totalCreditCardDebtExpense = parseInt(formSectionData.creditCard1) + parseInt(formSectionData.creditCard2) + parseInt(formSectionData.creditCard3)  + parseInt(formSectionData.creditCard4)  + parseInt(formSectionData.creditCard5)  + parseInt(formSectionData.creditCard6)  + parseInt(formSectionData.creditCard6);
    let percentOfBudget = (totalCreditCardDebtExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalCreditCardDebtExpense += formSectionData[i];
    //  console.log("HERE: " + totalCreditCardDebtExpense);
    // };

    return (
      <div>
        <h2>Credit Your Budget Grade For Card Debt</h2>
        <p>Total Credit Card Debt expense: {totalCreditCardDebtExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total Credit Card Debt expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'studentDebt') {
    let totalStudentDebtExpense = parseInt(formSectionData.studentLoan1) + parseInt(formSectionData.studentLoan2) + parseInt(formSectionData.studentLoan3) + parseInt(formSectionData.studentLoan4);
    let percentOfBudget = (totalStudentDebtExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalStudentDebtExpense += formSectionData[i];
    //  console.log("HERE: " + totalStudentDebtExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Student Debt</h2>
        <p>Total Student Debt expense: {totalStudentDebtExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total Student Debt expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'miscellaneousDebt') {
    let totalMiscellaneousDebtExpense = parseInt(formSectionData.debt1) + parseInt(formSectionData.debt2) + parseInt(formSectionData.debt3) + parseInt(formSectionData.debt4);
    let percentOfBudget = (totalMiscellaneousDebtExpense * 100)/parseInt(budget);
    // for (var i = 0; i < formSectionData.length; i++) {
    //  totalMiscellaneousDebtExpense += formSectionData[i];
    //  console.log("HERE: " + totalMiscellaneousDebtExpense);
    // };

    return (
      <div>
        <h2>Your Budget Grade For Miscellaneous Debt</h2>
        <p>Total Miscellaneous Debt expense: {totalMiscellaneousDebtExpense}</p>
        <p>Out of your total budget: {budget}</p>
        <p>Your total Miscellaneous Debt expense is {percentOfBudget}% of your budget</p>
        <Grader budgetPercent={percentOfBudget} />
      </div>
      );
    }
    else if (formSection === 'sectionResults') {
          return "stuff";
    }
    else if (formSection === 'budgetResults') {
      return (
        <div>
        console.log(this.props.totalFoodExpense);
        <p>{this.props.totalFoodExpense}</p>
        </div>
        );
    }
  }

  render() {
    console.log(this.props.formSectionTitle);
    console.log(this.props.formSectionData);
    console.log(this.props.budget);
    return (
      <div>
        <h1>RESULTS</h1>
        <br />
        <br />
        {this.calculationFunc(this.props.formSectionTitle, this.props.formSectionData, this.props.budget)}
      </div>
    );
  }
}

export default Results;