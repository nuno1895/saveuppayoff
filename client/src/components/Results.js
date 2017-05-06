import React, { Component } from 'react';
import grader from './Grader';
import Advice from './Advice';
import AdviceView from './AdviceView';
import './stylesheets/Results.css';

class Results extends Component {
  calculationFunc(formSection, formSectionData, budget, gradeCallBack, sectionBudgetCallBack) {
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

      sectionBudgetCallBack('foodBudget', totalFoodExpense);

      if (grade === "A+") {
                foodAdvice = Advice.food[1];
            } else if (grade === "A-") {
                foodAdvice = Advice.food[2].slice(0, 3);
            }
            else if (grade === "B+") {
                foodAdvice = Advice.food[2].slice(0, 6);
            }
            else if (grade === "B-") {
                foodAdvice = Advice.food[2].slice(0, 9);
            }
            else if (grade === "C+") {
                foodAdvice = Advice.food[2].slice(0, 12);       
            }
            else if (grade === "C-") {
                foodAdvice = Advice.food[2].slice(0, 15);       
            }
             else if (grade === "D") {
                foodAdvice = Advice.food[2].slice(0, 18);       
            }
             else if (grade === "D-") {
                foodAdvice = Advice.food[2].slice(0, 21);       
            }
              else {
                foodAdvice = Advice.food[2];
            }

      return (
        <div className="container containerResult">
          <div className="row rowContainer">
          <div className="col-md-6 resultsHeader">
            <h1>Results</h1>
          </div>
          <div className="col-md-6 resultsHeader">
          <h2><strong>Food Grade: {grade}</strong></h2>
          </div>
          </div>
          
          <p>Your total food expense: {totalFoodExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your food expense is {percentOfBudget}% of your budget</p>
          <p>Generally food expenditure should be between 5% - 15%</p>
          
          
          <p className="adviceMapList">
            {foodAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </p> 
          
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

      sectionBudgetCallBack('clothingBudget', totalClothingExpense);

     if (grade === "A+") {
               clothingAdvice = Advice.clothing[1];
           } else if (grade === "A-") {
               clothingAdvice = Advice.clothing[2].slice(0, 2);
           }
           else if (grade === "B+") {
               clothingAdvice = Advice.clothing[2].slice(0, 4);
           }
           else if (grade === "B-") {
               clothingAdvice = Advice.clothing[2].slice(0, 6);
           }
           else if (grade === "C+") {
               clothingAdvice = Advice.clothing[2].slice(0, 8);       
           }
           else if (grade === "C-") {
               clothingAdvice = Advice.clothing[2].slice(0, 12);       
           }
            else if (grade === "D") {
               clothingAdvice = Advice.clothing[2].slice(0, 14);       
           }
            else if (grade === "D-") {
               clothingAdvice = Advice.clothing[2].slice(0, 16);       
           }
             else {
               clothingAdvice = Advice.clothing[2];
           }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Clothing Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total clothing expense: {totalClothingExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your clothing expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {clothingAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
           </p>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'utilities') {
      // Utilities: 5-10% 
      let totalUtilitiesExpense = parseInt(formSectionData.electricity) + parseInt(formSectionData.mobilePhone) + parseInt(formSectionData.gas) + parseInt(formSectionData.trash) + parseInt(formSectionData.water) + parseInt(formSectionData.internet) + parseInt(formSectionData.cable);
      let percentOfBudget = (totalUtilitiesExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 10;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let utilitiesAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      sectionBudgetCallBack('utilitiesBudget', totalUtilitiesExpense);

     if (grade === "A+") {
               utilitiesAdvice = Advice.utilities[1];
           } else if (grade === "A-") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 2);
           }
           else if (grade === "B+") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 4);
           }
           else if (grade === "B-") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 6);
           }
           else if (grade === "C+") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 8);       
           }
           else if (grade === "C-") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 12);       
           }
            else if (grade === "D") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 14);       
           }
            else if (grade === "D-") {
               utilitiesAdvice = Advice.utilities[2].slice(0, 16);       
           }
             else {
               utilitiesAdvice = Advice.utilities[2];
           }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Utilities Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total utility expense: {totalUtilitiesExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your utility expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {utilitiesAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </p>
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

      sectionBudgetCallBack('housingBudget', totalHousingExpense);

     if (grade === "A+") {
               housingAdvice = Advice.housing[1];
           } else if (grade === "A-") {
               housingAdvice = Advice.housing[2].slice(0, 0);
           }
           else if (grade === "B+") {
               housingAdvice = Advice.housing[2].slice(0, 1);
           }
           else if (grade === "B-") {
               housingAdvice = Advice.housing[2].slice(0, 2);
           }
           else if (grade === "C+") {
               housingAdvice = Advice.housing[2].slice(0, 3);       
           }
           else if (grade === "C-") {
               housingAdvice = Advice.housing[2].slice(0, 4);       
           }
            else if (grade === "D") {
               housingAdvice = Advice.housing[2].slice(0, 5);       
           }
            else if (grade === "D-") {
               housingAdvice = Advice.housing[2].slice(0, 5);       
           }
             else {
               housingAdvice = Advice.housing[2];
           }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Housing Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total housing expense: {totalHousingExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your housing expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {housingAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
           </p>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'savings') {
      // Savings: 10-15% 
      let totalSavingsExpense = parseInt(formSectionData.emergency) + parseInt(formSectionData.retirement) + parseInt(formSectionData.college);
      let percentOfBudget = (totalSavingsExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 15;
      let grade = grader(percentOfBudget, formSection);
      let savingsAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }

      sectionBudgetCallBack('savingsBudget', totalSavingsExpense);

     if (grade === "A+") {
               savingsAdvice = Advice.savings[1];
           } else if (grade === "A-") {
               savingsAdvice = Advice.savings[2].slice(0, 1);
           }
           else if (grade === "B+") {
               savingsAdvice = Advice.savings[2].slice(0, 2);
           }
           else if (grade === "B-") {
               savingsAdvice = Advice.savings[2].slice(0, 3);
           }
           else if (grade === "C+") {
               savingsAdvice = Advice.savings[2].slice(0, 4);       
           }
           else if (grade === "C-") {
               savingsAdvice = Advice.savings[2].slice(0, 5);       
           }
            else if (grade === "D") {
               savingsAdvice = Advice.savings[2].slice(0, 6);       
           }
            else if (grade === "D-") {
               savingsAdvice = Advice.savings[2].slice(0, 7);       
           }
             else {
               savingsAdvice = Advice.savings[2];
           }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Savings Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total savings expense: {totalSavingsExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your savings expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {savingsAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </p>
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

      sectionBudgetCallBack('medicalBudget', totalMedicalExpense);

      if (grade === "A+") {
          medicalAdvice = Advice.medical[1];
      } else if (grade === "A-") {
          medicalAdvice = Advice.medical[2].slice(0, 2);
      }
      else if (grade === "B+") {
          medicalAdvice = Advice.medical[2].slice(0, 4);
      }
      else if (grade === "B-") {
          medicalAdvice = Advice.medical[2].slice(0, 6);
      }
      else if (grade === "C+") {
          medicalAdvice = Advice.medical[2].slice(0, 8);       
      }
      else if (grade === "C-") {
          medicalAdvice = Advice.medical[2].slice(0, 10);       
      }
       else if (grade === "D") {
          medicalAdvice = Advice.medical[2].slice(0, 12);       
      }
       else if (grade === "D-") {
          medicalAdvice = Advice.medical[2].slice(0, 14);       
      }
        else {
          medicalAdvice = Advice.medical[2];
      }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Medical Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total medical expense: {totalMedicalExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your medical expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {medicalAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
            />)}
          </p>
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

      sectionBudgetCallBack('insuranceBudget', totalInsuranceExpense);

     if (grade === "A+") {
         insuranceAdvice = Advice.insurance[1];
     } else if (grade === "A-") {
         insuranceAdvice = Advice.insurance[2].slice(0, 1);
     }
     else if (grade === "B+") {
         insuranceAdvice = Advice.insurance[2].slice(0, 2);
     }
     else if (grade === "B-") {
         insuranceAdvice = Advice.insurance[2].slice(0, 3);
     }
     else if (grade === "C+") {
         insuranceAdvice = Advice.insurance[2].slice(0, 5);       
     }
     else if (grade === "C-") {
         insuranceAdvice = Advice.insurance[2].slice(0, 7);       
     }
      else if (grade === "D") {
         insuranceAdvice = Advice.insurance[2].slice(0, 8);       
     }
      else if (grade === "D-") {
         insuranceAdvice = Advice.insurance[2].slice(0, 10);       
     }
       else {
         insuranceAdvice = Advice.insurance[2];
     }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Insurance Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total insurance expense: {totalInsuranceExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your insurance expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {insuranceAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </p>
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

      sectionBudgetCallBack('transportationBudget', totalTransportationExpense);

     if (grade === "A+") {
         transportationAdvice = Advice.transportation[1];
     } else if (grade === "A-") {
         transportationAdvice = Advice.transportation[2].slice(0, 1);
     }
     else if (grade === "B+") {
         transportationAdvice = Advice.transportation[2].slice(0, 2);
     }
     else if (grade === "B-") {
         transportationAdvice = Advice.transportation[2].slice(0, 3);
     }
     else if (grade === "C+") {
         transportationAdvice = Advice.transportation[2].slice(0, 4);       
     }
     else if (grade === "C-") {
         transportationAdvice = Advice.transportation[2].slice(0, 6);       
     }
      else if (grade === "D") {
         transportationAdvice = Advice.transportation[2].slice(0, 7);       
     }
      else if (grade === "D-") {
         transportationAdvice = Advice.transportation[2].slice(0, 8);       
     }
       else {
         transportationAdvice = Advice.transportation[2];
     }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Transportation Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total transportation expense: {totalTransportationExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your transportation expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {transportationAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </p>
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

      sectionBudgetCallBack('personalBudget', totalPersonalExpense);

    if (grade === "A+") {
        personalAdvice = Advice.personal[1];
    } else if (grade === "A-") {
        personalAdvice = Advice.personal[2].slice(0, 0);
    }
    else if (grade === "B+") {
        personalAdvice = Advice.personal[2].slice(0, 1);
    }
    else if (grade === "B-") {
        personalAdvice = Advice.personal[2].slice(0, 2);
    }
    else if (grade === "C+") {
        personalAdvice = Advice.personal[2].slice(0, 3);       
    }
    else if (grade === "C-") {
        personalAdvice = Advice.personal[2].slice(0, 3);       
    }
     else if (grade === "D") {
        personalAdvice = Advice.personal[2].slice(0, 4);       
    }
     else if (grade === "D-") {
        personalAdvice = Advice.personal[2].slice(0, 4);       
    }
      else {
        personalAdvice = Advice.personal[2];
    }

      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Personal Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total personal expense: {totalPersonalExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your personal expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {personalAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </p>
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

      sectionBudgetCallBack('entertainmentBudget', totalEntertainmentExpense);

 
 if (grade === "A+") {
     entertainmentAdvice = Advice.entertainment[1];
 } else if (grade === "A-") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 0);
 }
 else if (grade === "B+") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 1);
 }
 else if (grade === "B-") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 2);
 }
 else if (grade === "C+") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 3);       
 }
 else if (grade === "C-") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 4);       
 }
  else if (grade === "D") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 5);       
 }
  else if (grade === "D-") {
     entertainmentAdvice = Advice.entertainment[2].slice(0, 6);       
 }
   else {
     entertainmentAdvice = Advice.entertainment[2];
 }


      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Entertainment Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total Entertainment expense: {totalEntertainmentExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Entertainment expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {entertainmentAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </p>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
    else if (formSection === 'debt') {
      // Debts: 0% 
      let totalDebtExpense = parseInt(formSectionData.carPayment1) + parseInt(formSectionData.carPayment2) + parseInt(formSectionData.creditCard1) + parseInt(formSectionData.creditCard2) + parseInt(formSectionData.creditCard3) + parseInt(formSectionData.creditCard4) + parseInt(formSectionData.creditCard5) + parseInt(formSectionData.creditCard6) + parseInt(formSectionData.studentLoan1) + parseInt(formSectionData.studentLoan2) + parseInt(formSectionData.studentLoan3) + parseInt(formSectionData.studentLoan4) + parseInt(formSectionData.debt1) + parseInt(formSectionData.debt2) + parseInt(formSectionData.debt3) + parseInt(formSectionData.debt4);
      let percentOfBudget = (totalDebtExpense * 100)/parseInt(budget);
      let suggestedBudgetPercent = 0;
      let percentDifference = percentOfBudget - suggestedBudgetPercent;
      let grade = grader(percentDifference, formSection);
      let debtAdvice;

      if (grade != undefined) {
        gradeCallBack(formSection, grade);
      }
      
      sectionBudgetCallBack('debtBudget', totalDebtExpense);

   if (grade === "A+") {
             debtAdvice = Advice.debt[1];
         } else if (grade === "A-") {
             debtAdvice = Advice.debt[2].slice(0, 3);
         }
         else if (grade === "B+") {
             debtAdvice = Advice.debt[2].slice(0, 6);
         }
         else if (grade === "B-") {
             debtAdvice = Advice.debt[2].slice(0, 9);
         }
         else if (grade === "C+") {
             debtAdvice = Advice.debt[2].slice(0, 12);       
         }
         else if (grade === "C-") {
             debtAdvice = Advice.debt[2].slice(0, 15);       
         }
          else if (grade === "D") {
             debtAdvice = Advice.debt[2].slice(0, 18);       
         }
          else if (grade === "D-") {
             debtAdvice = Advice.debt[2].slice(0, 21);       
         }
           else {
             debtAdvice = Advice.debt[2];
         }
      return (
        <div className="container containerResult">
        <div className="row rowContainer">
        <div className="col-md-6 resultsHeader">
          <h1>Results</h1>
        </div>
        <div className="col-md-6 resultsHeader">
          <h2><strong>Debt Grade: {grade}</strong></h2>
        </div>
        </div>
          <p>Your total Debt expense: {totalDebtExpense}</p>
          <p>Your budget: {budget}</p>
          <p>Your Debt expense is {percentOfBudget}% of your budget</p>
          
          <p className="adviceMapList">
            {debtAdvice.map((advice, ind) => <AdviceView 
              key={ind} 
              advice={advice}
              />)}
          </p>
          {/*<Grader percentDifference={percentDifference} />*/}
        </div>
      );
    }
  }

  finalCalculationFunc(budget, sectionGrades, sectionBudgets) {
    let totalExpenses = sectionBudgets.foodBudget + sectionBudgets.clothingBudget + sectionBudgets.utilitiesBudget + sectionBudgets.housingBudget + sectionBudgets.savingsBudget + sectionBudgets.medicalBudget + sectionBudgets.insuranceBudget + sectionBudgets.transportationBudget + sectionBudgets.personalBudget + sectionBudgets.entertainmentBudget + sectionBudgets.debtBudget;

     //  + sectionBudgets.transportationBudget + sectionBudgets.personlBudget + sectionBudgets.entertainmentBudget + sectionBudgets.debtBudget;
    console.log(totalExpenses);
    console.log(sectionBudgets);
    console.log(sectionGrades);
    return (
      <div>
        <h3>Your Budget: {budget}</h3>
        <h3>Your Expenses: {totalExpenses}</h3>
        <br />
        <div>
          <h4>Food</h4>
          <h5>Grade: {sectionGrades.food}</h5>
          <h5>Total Expenses: {sectionBudgets.foodBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Clothing</h4>
          <h5>Grade: {sectionGrades.clothing}</h5>
          <h5>Total Expenses: {sectionBudgets.clothingBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Utilities</h4>
          <h5>Grade: {sectionGrades.utilities}</h5>
          <h5>Total Expenses: {sectionBudgets.utilitiesBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Housing</h4>
          <h5>Grade: {sectionGrades.housing}</h5>
          <h5>Total Expenses: {sectionBudgets.housingBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Savings</h4>
          <h5>Grade: {sectionGrades.savings}</h5>
          <h5>Total Expenses: {sectionBudgets.savingsBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Medical</h4>
          <h5>Grade: {sectionGrades.medical}</h5>
          <h5>Total Expenses: {sectionBudgets.medicalBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Insurance</h4>
          <h5>Grade: {sectionGrades.insurance}</h5>
          <h5>Total Expenses: {sectionBudgets.insuranceBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Transportation</h4>
          <h5>Grade: {sectionGrades.transportation}</h5>
          <h5>Total Expenses: {sectionBudgets.transportationBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Personal</h4>
          <h5>Grade: {sectionGrades.personal}</h5>
          <h5>Total Expenses: {sectionBudgets.personalBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Entertainment</h4>
          <h5>Grade: {sectionGrades.entertainment}</h5>
          <h5>Total Expenses: {sectionBudgets.entertainmentBudget}</h5>
        </div>
        <br />
        <div>
          <h4>Debt</h4>
          <h5>Grade: {sectionGrades.debt}</h5>
          <h5>Total Expenses: {sectionBudgets.debtBudget}</h5>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.formSectionTitle);
    console.log(this.props.formSectionData);
    console.log(this.props.budget);

    if (this.props.formSectionTitle === 'budgetResults') {
      return (
        <div >
          <h1>Final Results</h1>
          {this.finalCalculationFunc(this.props.budget, this.props.sectionGrades, this.props.sectionBudgets)}
        </div>
      );
    } else {
      return (
        <div>

          <div >
            
            {this.calculationFunc(this.props.formSectionTitle, this.props.formSectionData, this.props.budget, this.props.gradeCallBack, this.props.sectionBudgetCallBack)}
          </div>
        </div>
      );
    }
  }
}

export default Results;