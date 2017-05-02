import React, { Component } from 'react';
import Input from './Input';
import {
  Button
} from 'reactstrap';

class MonthlyExpenses extends React.Component {
 
   constructor(props) {
        super(props);

        this.state = { 
            expenses : [],
            currentExpenseId : ''
        };
    }

    componentDidMount(){
        return fetch("/expenses").then(res => res.json()).then(expenses => {
            this.setState({
                expenses
            });
        });
    }

    handleChange = (event) => {
        this.setState({currentExpenseId: event.target.value});
    }

    render() {
        return (
            <div>
            
                <h1> What are your Expenses This Month?? </h1>
                <br />
                <select value={this.state.currentExpenseId} onChange={this.handleChange}>
                    {this.state.expenses.map((expense, index) => <option key={index} key={expense.id} value={expense.id} {...expense} > {expense.expense}</option>)}
                </select>
                <br />
                <br />
                <label>Amount Spent:</label>
                <Input/>
                <br />
                <br />
                <h5>Buttons Need Routes and onClick functions</h5>
                <Button className="submit" /*onClick={}*/>Submit</Button>
                <Button /*onClick={}*/>Add Another Expense</Button>

            </div>
        );
    }
}
//     constructor(props) {
//         super(props);

//         this.state = { 
//             expenses : '',
//             currentExpense : ''
//         };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
//   componentDidMount(){
//       return fetch("/expenses").then(res => res.json()).then(expenses => {
//           this.setState({
//               expenses
//           });
//       });
//   }
//   // this function handles any input changes and updates the state
//     handleInputChange = (event) => {
//         this.setState({currentExpense: event.target.value});
//     }


//  render() {
//     return (
//       <div className="monthlyExp">
//       <h1> What are your Expenses This Month?? </h1>
//         <br />
//         <label>Current Month:</label>
//         {<select onChange={(event) => this.handleInputChange(event, 'expense') } value={this.state.expense}>
//           <option value="groceries">Groceries</option> 
//           <option value="eatingOut">Eating Out</option>
//           <option value="clothingAdult">Clothing--Adult</option>
//           <option value="clothingKids">Clothing--Kids</option>
//           <option value="dryCleaning">Dry Cleaning</option>
//           <option value="electricity">Electricity</option>
//           <option value="mobilePhone">Mobile Phone</option>
//           <option value="gas">Gas</option>
//           <option value="trash">Trash</option>
//           <option value="water">Water</option>
//           <option value="internet">Internet</option>
//           <option value="cable">Cable</option>
//           <option value="mortgageRent">Mortgage Rent</option>
//           <option value="secondMortgage">Second Mortgage</option>
//           <option value="taxes">Taxes</option>
//           <option value="repairsMaint">Repairs & Maintenance</option>
//           <option value="dues">Dues</option>
//           <option value="emergency">Emergency</option>
//           <option value="retirement">Retirement</option>
//           <option value="college">College</option>
//           <option value="medications">Medications</option>
//           <option value="doctorBills">Doctor Bills</option>
//           <option value="hospitalBills">Hospital Bills</option>
//           <option value="otherMedical">other Medical</option>
//           <option value="otherMedical2">other Medical2</option>
//           <option value="otherMedical3">otherMedical3</option>
//           <option value="lifeInsurance">Life Insurance</option>
//           <option value="healthInsurance">Health Insurance</option>
//           <option value="autoInsurance">Auto Insurance</option>
//           <option value="homeRentalInsurance">Home Rental Insurance</option>
//           <option value="disabilityInsurance">Disability Insurance</option>
//           <option value="longTermInsurance">Long Term Insurance</option>
//           <option value="carGas">Car Gas</option>
//           <option value="carRepairs">Car Repairs</option>
//           <option value="bus">Bus</option>
//           <option value="train">Train</option>
//           <option value="newCarFund">New Car Fund</option>
//           <option value="otherTransportation">Other Transportation</option>
//           <option value="educationTuition">Education Tuition</option>
//           <option value="childCare">Child Care</option>
//           <option value="hairCareCosmetics">Hair Care & Cosmetics</option>
//           <option value="bookSupplies">Book Supplies</option>
//           <option value="childSupport">Child Support</option>
//           <option value="alimony">Alimony</option>
//           <option value="pocketMoney">Pocket Money</option>
//           <option value="subscriptions">Subscriptions</option>
//           <option value="babySupplies">Baby Supplies</option>
//           <option value="petSupplies">Pet Supplies</option>
//           <option value="miscellaneous">Miscellaneous</option>
//           <option value="otherPersonal">Other Personal</option>
//           <option value="otherPersonal2">Other Personal2</option>
//           <option value="otherPersonal3">Other Personal3</option>
//           <option value="entertainment">Entertainment</option>
//           <option value="vacation">Vacation</option>
//           <option value="carPayment1">Car Payment1</option>
//           <option value="carPayment2">Car Payment2</option>
//           <option value="creditCard1">Credit Card1</option>
//           <option value="creditCard2">Credit Card2</option>
//           <option value="creditCard3">Credit Card3</option>
//           <option value="creditCard4">Credit Card4</option>
//           <option value="creditCard5">Credit Card5</option>
//           <option value="creditCard6">Credit Card6</option>
//           <option value="studentLoan1">Student Loan1</option>
//           <option value="studentLoan2">Student Loan2</option>
//           <option value="studentLoan3">Student Loan3</option>
//           <option value="studentLoan4">Student Loan4</option>
//           <option value="debt1">Debt1</option>
//           <option value="debt2">Debt2</option>
//           <option value="debt3">Debt3</option>
//           <option value="debt4">Debt4</option>
//           </select>}
//           <select value={this.state.currentExpense} onChange={this.handleChange}>
//               {this.state.expenses.map((expense, index) => <option key={index} key={expense.id} value={expense.id} {...expense} > {expense.expense}</option>)}
//           </select>




//       </div>
//     );
//   }
// }


export default MonthlyExpenses;