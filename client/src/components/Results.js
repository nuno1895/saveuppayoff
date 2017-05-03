import React, { Component } from 'react';
import grader from './Grader';
import Advice from './Advice';
import AdviceView from './AdviceView';
import './Results.css';
// import Calculations from './Calculations';

class Results extends Component {
  calculationFunc(formSection, formSectionData, budget) {
    if (formSection === 'food') {
      // Food: 5-15%
      let totalFoodExpense = parseInt(formSectionData.groceries) + parseInt(formSectionData.eatingOut);
      let percentOfBudget = (totalFoodExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 15;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let foodAdvice;

      if (grade === "A+") {
          foodAdvice = Advice.food[1];
      } else {
          foodAdvice = Advice.food[2];
      }

      fetch('/Results', { 
        method: 'POST',
        data: {
            total: this.totalFoodExpense
          }
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });

      return (
        <div>
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

      if (grade == "A+") {
          clothingAdvice = Advice.clothing[1];
      } else {
          clothingAdvice = Advice.clothing[2];
      }

      return (
        <div>
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
      if (grade == "A+") {
          utilitiesAdvice = Advice.utilities[1];
      } else {
          utilitiesAdvice = Advice.utilities[2];
      }

      return (
        <div>
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
      if (grade == "A+") {
          housingAdvice = Advice.housing[1];
      } else {
          housingAdvice = Advice.housing[2];
      }

      return (
        <div>
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
      if (grade == "A+") {
          savingsAdvice = Advice.savings[1];
      } else {
          savingsAdvice = Advice.savings[2];
      }

      return (
        <div>
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
      if (grade == "A+") {
          medicalAdvice = Advice.medical[1];
      } else {
          medicalAdvice = Advice.medical[2];
      }


      return (
        <div>
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
      if (grade == "A+") {
          insuranceAdvice = Advice.insurance[1];
      } else {
          insuranceAdvice = Advice.insurance[2];
      }

      return (
        <div>
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
      if (grade == "A+") {
          transportationAdvice = Advice.transportation[1];
      } else {
          transportationAdvice = Advice.transportation[2];
      }

      return (
        <div>
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
      if (grade == "A+") {
          personalAdvice = Advice.personal[1];
      } else {
          personalAdvice = Advice.personal[2];
      }

      return (
        <div>
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
    else if (formSection === 'miscellaneous') {
      // Miscellaneous 2-3%
      let totalMiscellaneousExpense = parseInt(formSectionData.miscellaneous) + parseInt(formSectionData.otherPersonal) + parseInt(formSectionData.otherPersonal2) + parseInt(formSectionData.otherPersonal3);
      let percentOfBudget = (totalMiscellaneousExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 3;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let miscellaneousAdvice;
      if (grade == "A+") {
          miscellaneousAdvice = Advice.personal[1];
      } else {
          miscellaneousAdvice = Advice.personal[2];
      }

      return (
        <div>
          <h2>Miscellaneous Grade</h2>
          <p>Your total miscellaneous expense: {totalMiscellaneousExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your miscellaneous expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {miscellaneousAdvice.map((advice, ind) => <AdviceView 
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
      if (grade == "A+") {
          entertainmentAdvice = Advice.entertainment[1];
      } else {
          entertainmentAdvice = Advice.entertainment[2];
      }

      return (
        <div>
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
    else if (formSection === 'carDebt') {
      // Debts: 0% 
      let totalCarDebtExpense = parseInt(formSectionData.carPayment1) + parseInt(formSectionData.carPayment2);
      let percentOfBudget = (totalCarDebtExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 0;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let carDebtAdvice;
      if (grade == "A+") {
          carDebtAdvice = Advice.debt[1];
      } else {
          carDebtAdvice = Advice.debt[2];
      }

      return (
        <div>
          <h2>Car Debt Grade</h2>
          <p>Your total Car Debt expense: {totalCarDebtExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Car Debt expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {carDebtAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'creditCardDebt') {
      // Debts: 0% 
      let totalCreditCardDebtExpense = parseInt(formSectionData.creditCard1) + parseInt(formSectionData.creditCard2) + parseInt(formSectionData.creditCard3)  + parseInt(formSectionData.creditCard4)  + parseInt(formSectionData.creditCard5)  + parseInt(formSectionData.creditCard6)  + parseInt(formSectionData.creditCard6);
      let percentOfBudget = (totalCreditCardDebtExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 0;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let creditCardDebtAdvice;
      if (grade == "A+") {
          creditCardDebtAdvice = Advice.debt[1];
      } else {
          creditCardDebtAdvice = Advice.debt[2];
      }

      return (
        <div>
          <h2>Credit Card Debt Grade</h2>
          <p>Your total Credit Card Debt expense: {totalCreditCardDebtExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Credit Card Debt expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {creditCardDebtAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'studentDebt') {
      // Debts: 0% 
      let totalStudentDebtExpense = parseInt(formSectionData.studentLoan1) + parseInt(formSectionData.studentLoan2) + parseInt(formSectionData.studentLoan3) + parseInt(formSectionData.studentLoan4);
      let percentOfBudget = (totalStudentDebtExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 0;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let studentDebtAdvice;
      if (grade == "A+") {
          studentDebtAdvice = Advice.debt[1];
      } else {
          studentDebtAdvice = Advice.debt[2];
      }

      return (
        <div>
          <h2>Student Debt Grade</h2>
          <p>Your total Student Debt expense: {totalStudentDebtExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Student Debt expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {studentDebtAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </ul>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'miscellaneousDebt') {
      // Debts: 0% 
      let totalMiscellaneousDebtExpense = parseInt(formSectionData.debt1) + parseInt(formSectionData.debt2) + parseInt(formSectionData.debt3) + parseInt(formSectionData.debt4);
      let percentOfBudget = (totalMiscellaneousDebtExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 0;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let miscellaneousDebtAdvice;
      if (grade == "A+") {
          miscellaneousDebtAdvice = Advice.debt[1];
      } else {
          miscellaneousDebtAdvice = Advice.debt[2];
      }

      return (
        <div>
          <h2>Miscellaneous Debt Grade</h2>
          <p>Your total Miscellaneous Debt expense: {totalMiscellaneousDebtExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Miscellaneous Debt expense is {percentOfBudget}% of your budget</p>
          <p>Your current grade is {grade}</p>
          <ul>
            {miscellaneousDebtAdvice.map((advice, ind) => <AdviceView 
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
        {this.calculationFunc(this.props.formSectionTitle, this.props.formSectionData, this.props.budget)}
      </div>
    );
  }
}

export default Results;