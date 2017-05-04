import React, { Component } from 'react';
import grader from './Grader';
import Advice from './Advice';
import AdviceView from './AdviceView';
import './Results.css';
// import Calculations from './Calculations';

class Results extends Component {
  calculationFunc(formSection, formSectionData, budget, gradeCallBack) {
    if (formSection === 'food') {
      // Food: 5-15%
      let totalFoodExpense = parseInt(formSectionData.groceries) + parseInt(formSectionData.eatingOut);
      let percentOfBudget = (totalFoodExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 15;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let foodAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade === "A+") {
          foodAdvice = Advice.food[1];
      } else {
          foodAdvice = Advice.food[2];
      }

      return (
        <div className="container">
          <h2>Food Grade</h2>
          <p>Your total food expense: {totalFoodExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your food expense is {percentOfBudget}% of your budget</p>
          <p>Generally food expenditure should be between 5% - 15%</p>
          <p>Your current grade is {grade}</p>
          
          <ul>
            {foodAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </ul> 
          
        </div>
      );
    }
    else if (formSection === 'clothing') {
      // Clothing: 2-7% 
      let totalClothingExpense = parseInt(formSectionData.clothingAdult) + parseInt(formSectionData.clothingKids) + parseInt(formSectionData.dryCleaning);
      let percentOfBudget = (totalClothingExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 7;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let clothingAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          clothingAdvice = Advice.clothing[1];
      } else {
          clothingAdvice = Advice.clothing[2];
      }

      return (
        <div className="container">
          <h2>Clothing Grade</h2>
          <p>Your total clothing expense: {totalClothingExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your clothing expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {clothingAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
           </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'utilities') {
      // Utilities: 5-10% 
      let totalUtilityExpense = parseInt(formSectionData.electricity) + parseInt(formSectionData.mobilePhone) + parseInt(formSectionData.gas) + parseInt(formSectionData.trash) + parseInt(formSectionData.water) + parseInt(formSectionData.internet) + parseInt(formSectionData.cable);
      let percentOfBudget = (totalUtilityExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 10;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let utilitiesAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          utilitiesAdvice = Advice.utilities[1];
      } else {
          utilitiesAdvice = Advice.utilities[2];
      }

      return (
        <div className="container">
          <h2>Utilities Grade</h2>
          <p>Your total utility expense: {totalUtilityExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your utility expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {utilitiesAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'housing') {
      // Housing: 25-35% 
      let totalHousingExpense = parseInt(formSectionData.mortgageRent) + parseInt(formSectionData.secondMortgage) + parseInt(formSectionData.taxes) + parseInt(formSectionData.repairsMaint) + parseInt(formSectionData.dues);
      let percentOfBudget = (totalHousingExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 35;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let housingAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          housingAdvice = Advice.housing[1];
      } else {
          housingAdvice = Advice.housing[2];
      }

      return (
        <div className="container">
          <h2>Housing Grade</h2>
          <p>Your total housing expense: {totalHousingExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your housing expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {housingAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
           </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'savings') {
      // Savings: 10-15% 
      let totalSavingsExpense = parseInt(formSectionData.emergency) + parseInt(formSectionData.retirement) + parseInt(formSectionData.college);
      let percentOfBudget = (totalSavingsExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 15;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let savingsAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          savingsAdvice = Advice.savings[1];
      } else {
          savingsAdvice = Advice.savings[2];
      }

      return (
        <div className="container">
          <h2>Savings Grade</h2>
          <p>Your total savings expense: {totalSavingsExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your savings expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {savingsAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'medical') {
      // Medical: 5-10% 
      let totalMedicalExpense = parseInt(formSectionData.medications) + parseInt(formSectionData.doctorBills) + parseInt(formSectionData.hospitalBills) + parseInt(formSectionData.otherMedical) + parseInt(formSectionData.otherMedical2) + parseInt(formSectionData.otherMedical3);
      let percentOfBudget = (totalMedicalExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 10;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let medicalAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          medicalAdvice = Advice.medical[1];
      } else {
          medicalAdvice = Advice.medical[2];
      }

      return (
        <div className="container">
          <h2>Medical Grade</h2>
          <p>Your total medical expense: {totalMedicalExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your medical expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {medicalAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'insurance') {
      // Insurance: 10-25% 
      let totalInsuranceExpense = parseInt(formSectionData.lifeInsurance) + parseInt(formSectionData.healthInsurance) + parseInt(formSectionData.autoInsurance) + parseInt(formSectionData.homeRentalInsurance) + parseInt(formSectionData.disabilityInsurance) + parseInt(formSectionData.longTermInsurance);
      let percentOfBudget = (totalInsuranceExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 25;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let insuranceAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          insuranceAdvice = Advice.insurance[1];
      } else {
          insuranceAdvice = Advice.insurance[2];
      }

      return (
        <div className="container">
          <h2>Insurance Grade</h2>
          <p>Your total insurance expense: {totalInsuranceExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your insurance expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {insuranceAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'transportation') {
      // Transportation: 10-15%
      let totalTransportationExpense = parseInt(formSectionData.carGas) + parseInt(formSectionData.carRepairs) + parseInt(formSectionData.bus) + parseInt(formSectionData.train) + parseInt(formSectionData.newCarFund) + parseInt(formSectionData.otherTransportation);
      let percentOfBudget = (totalTransportationExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 15;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let transportationAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          transportationAdvice = Advice.transportation[1];
      } else {
          transportationAdvice = Advice.transportation[2];
      }

      return (
        <div className="container">
          <h2>Transportation Grade</h2>
          <p>Your total transportation expense: {totalTransportationExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your transportation expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {transportationAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'personal') {
      // Personal 5-7%
      let totalPersonalExpense = parseInt(formSectionData.educationTuition) + parseInt(formSectionData.childCare) + parseInt(formSectionData.hairCareCosmetics) + parseInt(formSectionData.bookSupplies) + parseInt(formSectionData.alimony) + parseInt(formSectionData.pocketMoney) + parseInt(formSectionData.subscriptions) + parseInt(formSectionData.babySupplies) + parseInt(formSectionData.petSupplies);
      let percentOfBudget = (totalPersonalExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 7;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let personalAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          personalAdvice = Advice.personal[1];
      } else {
          personalAdvice = Advice.personal[2];
      }

      return (
        <div className="container">
          <h2>Personal Grade</h2>
          <p>Your total personal expense: {totalPersonalExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your personal expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {personalAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'entertainment') {
      // Recreation: 2-3% 
      let totalEntertainmentExpense = parseInt(formSectionData.entertainment) + parseInt(formSectionData.vacation);
      let percentOfBudget = (totalEntertainmentExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 3;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let entertainmentAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      if (grade == "A+") {
          entertainmentAdvice = Advice.entertainment[1];
      } else {
          entertainmentAdvice = Advice.entertainment[2];
      }

      return (
        <div className="container">
          <h2>Entertainment Grade</h2>
          <p>Your total Entertainment expense: {totalEntertainmentExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Entertainment expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {entertainmentAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'debt') {
      // Debts: 0% 
      let debtExpense = parseInt(formSectionData.carPayment1) + parseInt(formSectionData.carPayment2) + parseInt(formSectionData.creditCard1) + parseInt(formSectionData.creditCard2) + parseInt(formSectionData.creditCard3) + parseInt(formSectionData.creditCard4) + parseInt(formSectionData.creditCard5) + parseInt(formSectionData.creditCard6) + parseInt(formSectionData.studentLoan1) + parseInt(formSectionData.studentLoan2) + parseInt(formSectionData.studentLoan3) + parseInt(formSectionData.studentLoan4) + parseInt(formSectionData.debt1) + parseInt(formSectionData.debt2) + parseInt(formSectionData.debt3) + parseInt(formSectionData.debt4);
      let percentOfBudget = (debtExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 0;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let debtAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }
      
      if (grade == "A+") {
          debtAdvice = Advice.debt[1];
      } else {
          debtAdvice = Advice.debt[2];
      }
      return (
        <div className="container">
          <h2>Debt Grade</h2>
          <p>Your total Debt expense: {debtExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Debt expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {debtAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'budgetResults') {
      return (<div><p>hello</p></div>);
    }
  }

  render() {
    console.log(this.props.formSectionTitle);
    console.log(this.props.formSectionData);
    console.log(this.props.budget);
    return (
      <div>
        <h1>Results</h1>
        <h2>Advice goes here</h2>
        {this.calculationFunc(this.props.formSectionTitle, this.props.formSectionData, this.props.budget, this.props.gradeCallBack)}
      </div>
    );
  }
}

export default Results;