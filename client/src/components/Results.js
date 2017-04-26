import React, { Component } from 'react';
import Grader from './Grader';
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
			let percentOfBudget = (totalFoodExpense * 100)/parseInt(budget);
			// for (var i = 0; i < formSectionData.length; i++) {
			// 	totalFoodExpense += formSectionData[i];
			// 	console.log("HERE: " + totalFoodExpense);
			// };

			return (
				<div>
					<h2>Food Grade</h2>
					<p>Your total food expense: {totalFoodExpense}</p>
					<p>Your budget: {budget}</p>
					<p>Your food expense is {percentOfBudget}% of your budget</p>
					<Grader budgetPercent={percentOfBudget} />
				</div>
			);
		} 
		else if (formSection === 'clothing') {
      return "stuff";
    }
    else if (formSection === 'utilities') {
      return "stuff";
    }
    else if (formSection === 'housing') {
      return "stuff";
    }
    else if (formSection === 'savings') {
      return "stuff";
    }
    else if (formSection === 'medical') {
      return "stuff";
    }
    else if (formSection === 'insurance') {
      return "stuff";
    }
    else if (formSection === 'transportation') {
      return "stuff";
    }
    else if (formSection === 'personal') {
      return "stuff";
    }
    else if (formSection === 'miscellaneous') {
      return "stuff";
    }
    else if (formSection === 'entertainment') {
      return "stuff";
    }
    else if (formSection === 'carDebt') {
      return "stuff";
    }
    else if (formSection === 'creditCardDebt') {
      return "stuff";
    }
    else if (formSection === 'studentDebt') {
      return "stuff";
    }
    else if (formSection === 'miscellaneousDebt') {
      return "stuff";
    }
    else if (formSection === 'sectionResults') {
      return "stuff";
    }
    else if (formSection === 'budgetResults') {
      return "stuff";
    }
	}

  render() {
  	console.log(this.props.formSectionTitle);
  	console.log(this.props.formSectionData);
  	console.log(this.props.budget);
    return (
	    <div>
	      <h1>Results</h1>
	      {this.calculationFunc(this.props.formSectionTitle, this.props.formSectionData, this.props.budget)}
	    </div>
    );
  }
}

export default Results;