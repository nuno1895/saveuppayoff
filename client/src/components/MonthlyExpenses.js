import React, { Component } from 'react';
import Input from './Input';
import './stylesheets/MonthlyExpenses.css';

import {
  Button
} from 'reactstrap';

class MonthlyExpenses extends React.Component {
 
   constructor(props) {
        super(props);

        this.state = { 
            expenses : [],
            currentExpenseId : '',
            spent : '',
            newExp : []
        };
        this.handleNewExpenses = this.handleNewExpenses.bind(this);
        this.handleInputCangeExp = this.handleInputCangeExp.bind(this);
        this.handleInputCangeSpent = this.handleInputCangeSpent.bind(this);
    } 
//     handleFormRefresh = (params) => {
//   this.setState({ params }, this.componentDidMount)
// } 


    componentDidMount(){
        return fetch("/expenses").then(res => res.json()).then(expenses => {
            this.setState({
                expenses
            });
        });
    }

    // handleChange = (event) => {
    //     event.preventDefault();

    //     this.setState({currentExpenseId: event.target.value});

    // }

    handleNewExpenses = (event) => {
        // this.setState({currentExpenseId: event.target.value});
        // event.preventDefault();

        let newExp = this.state.newExp;
        newExp.push(this.state.currentExpenseId, this.state.spent);
        let currentExpenseId = '';
        let spent = '';

        this.setState({
            currentExpenseId : 'none',
            spent,
            newExp
        })
    }

    handleInputCangeExp = (evt) => {
        evt.preventDefault();

        this.setState({
            currentExpenseId : evt.target.value,
        })
    }
    handleInputCangeSpent = (evt) => {
        evt.preventDefault();

        this.setState({
            spent : evt.target.value,
        })
    }

    // handleDollarChange = (event) => {
    //     this.setState({spent: event.target.value});
    //     console.log('dollar');
    // }
    // handleAddExpense = (event) => {
    //     this.setState({currentExpenseId: 'none'});
    //             console.log('add')

    // }

    render() {
        return (
            <div className="pageCont">
            <div className="cardContainer">
                <div>
                    <div className="cardTop">
                    <h1> What are your Expenses This Month?? </h1>
                    </div>
                    <div className="expenseContainer">
                    <br />
                    <select value={this.state.currentExpenseId || "none"}
                        onChange={this.handleInputCangeExp} value={this.state.currentExpenseId}>
                            <option disabled value="none">Select an Option</option>
                                {this.state.expenses.map((expense, index) => (
                            <option key={index} key={expense.id} value={expense.id} {...expense}>
                               {" "}{expense.expense}
                            </option>
                       ))}
                     </select>

                    <br />
                    <br />
                    <label>Amount Spent:</label>
                    <Input onChange={this.handleInputCangeSpent} value={this.state.spent}/>
                    <br />
                    <br />
                    <h5>Buttons Need Routes and onClick functions</h5>
                    <Button className="btn submitExp" /*onClick={}*/>Submit</Button>
                    <Button className="btn addExp" onClick={this.handleNewExpenses} >Add Another Expense</Button>
                        
                        {/*<Button className="backBtn" onClick={() => this.setState({section: 'pay'})}>Back</Button>
                                            <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'food', nextSection: 'clothing'})} disabled={!this.state.food.groceries, !this.state.food.eatingOut}>Next</Button>*/}
                    </div>
                </div>

            </div>

                <p>{this.state.spent}</p>
                <p>{this.state.currentExpenseId}</p>

                <p>{this.state.newExp}</p>
                {this.state.newExp.map((currentExpense, index) => (
                    <p key={index} key={currentExpense.currentExpenseId} value={currentExpense.currentExpenseId} {...currentExpense}>
                    {" "} {currentExpense.currentExpenseId} {currentExpense.spent}</p>))}
                
            </div>
        );
    }
}

export default MonthlyExpenses;