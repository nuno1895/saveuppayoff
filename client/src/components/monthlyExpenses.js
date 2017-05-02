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
            currentExpenseId : '',
            spent : ''
        };
        this.handleDollarChange = this.handleDollarChange.bind(this);
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

    handleChange = (event) => {
        this.setState({currentExpenseId: event.target.value});

    }

    handleDollarChange = (event) => {
        this.setState({spent: event.target.value});
        console.log('dollar');
    }
    handleAddExpense = (event) => {
        this.setState({currentExpenseId: 'none'});
                console.log('add')

    }

    render() {
        return (
            <div>
                <div>
                
                    <h1> What are your Expenses This Month?? </h1>
                    <br />
                    <select value={this.state.currentExpenseId || "none"} onChange={this.handleChange}>
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
                    <Input onChange={this.handleDollarChange}/>
                    <br />
                    <br />
                    <h5>Buttons Need Routes and onClick functions</h5>
                    <Button className="submitExp" /*onClick={}*/>Submit</Button>
                    <Button className="addExp" onClick={this.handleAddExpense} onClick={this.handleDollarChange} >Add Another Expense</Button>
                        
                        {/*<Button className="backBtn" onClick={() => this.setState({section: 'pay'})}>Back</Button>
                                            <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'food', nextSection: 'clothing'})} disabled={!this.state.food.groceries, !this.state.food.eatingOut}>Next</Button>*/}
                </div>
                <p>{this.spent}</p>
            </div>
        );
    }
}

export default MonthlyExpenses;