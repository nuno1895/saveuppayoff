import React, { Component } from 'react';
import './MainForm.css';
import Input from './Input';
import Results from './Results';

class MainForm extends Component {
  constructor() {
    super();
    // Creating a giant state object to hold all of our form data
    this.state = {
      pay: {
        month: '',
        takeHome: '',
        frequency: ''
      },
       food: {
        groceries: '',
        eatingOut: ''
      },
       clothing: {
         clothingAdult: '',
         clothingKids:'',
         dryCleaning:''
       },
       utilities: {
         electricity: '',
         mobilePhone:'',
         gas:'',
         trash: '',
         water:'',
         internet:'',
         cable:''
       },
       housing: {
         mortgageRent: '',
         secondMortgage:'',
         taxes:'',
         repairsMaint: '',
         dues:'',
       },
       savings: {
         emergency: '',
         retirement:'',
         college:''
       },
       medical: {
         medications:'',
         doctorBills:'',
         hospitalBills:'',
         otherMedical:'',
         otherMedical2:'',
         otherMedical3:''
       },
       insurance: {
         lifeInsurance:'',
         healthInsurance:'',
         autoInsurance:'',
         homeRentalInsurance:'',
         disabilityInsurance:'',
         longTermInsurance:''
       },
       transportation: {
         carGas:'',
         carRepairs:'',
         bus:'',
         train:'',
         newCarFund:'',
         othertransportation:''
       },
        personal: {
         educationTution:'',
         childCare:'',
         hairCareCosmetics:'',
         bookSupplies:'',
         childSupport:'',
         alimony:'',
         pocketMoney:'',
         subscriptions:'',
         babySupplies:'',
         petSupplies:''
       },
         miscellaneous: {
          miscellaneous:'',
          otherPersonal:'',
          otherPersonal1:'',
          otherPersonal2:''
       },
        entertainment: {
         entertainment: '',
         vacation:''
       },
         carDebt: {
          carPayment1:'',
          carPayment2:''
        }, 
         creditCardDebt: {
          creditCard1:'',
          creditCard2:'',
          creditCard3:'',
          creditCard4:'',
          creditCard5:'',
          creditCard6:''
        },
        studentDebt: {
         studentLoan1:'',
         studentLoan2:'',
         studentLoan3:'',
         studentLoan4: ''
        },
        miscellaneousDebt : {
         debt1:'',
         debt2:'',
         debt3:'',
         debt4:''
       },
        section: 'pay'
    };

    // binding our methods which get passed as callbacks
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSalary = this.getSalary.bind(this);
  }

  // this function handles any input changes and updates the state
  handleInputChange(event, type, field) {
    const newState = Object.assign({}, this.state);
    newState[type][field] = event.target.value;
    this.setState(newState);
  }
  
  getSalary() {
    console.log('Your salary is' + this.state.pay.frequency * this.state.pay.takeHome);
  }

  renderPay() {
    return (
      <div className="debtContainer">
      <h1> Your Pay </h1>
        <br />
        <label>Current Month:</label>
        <Input onChange={(event) => this.handleInputChange(event, 'pay', 'month') } value={this.state.pay.month}  />
        <br />
        <br />
        <label>Weekly Take Home:</label>
        <Input onChange={(event) => this.handleInputChange(event, 'pay', 'takeHome') } value={this.state.pay.takeHome}  />
        <br />
        <br />
        <label>How Often do you get payed every Month:</label>
        <Input onChange={(event) => this.handleInputChange(event, 'pay', 'frequency') } value={this.state.pay.frequency}  />
        <br />
        <br />
        <button onClick={() => this.setState({section: 'food'})}>Next</button>
      </div>
    );
  }

  renderFood() {
    return (
      <div className="debtContainer">
        <h1> Food </h1>
          <br />
          <label>Groceries:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'food', 'groceries') } value={this.state.food.groceries}  />
          <br />
          <br />
          <label>Eating Out:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'food', 'eatingOut') } value={this.state.food.eatingOut}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'pay'})}>Back </button>
          <button onClick={() => this.setState({section: 'clothing'})}>Next</button>
      </div>
    );
  }

  renderClothing() {
    return (
      <div className="debtContainer">
        <h1> Clothing </h1>
          <br />
          <label>Clothes For Adult:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'clothing', 'clothingAdult') } value={this.state.clothing.clothingAdult}  />
          <br />
          <br />
          <label>Clothing For Kids:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'clothing', 'clothingKids') } value={this.state.clothing.clothingKids}  />
          <br />
          <br />
          <label>Laundry/Dry Clothing:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'clothing', 'dryCleaning') } value={this.state.clothing.dryCleaning}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'food'})}>Back </button>
          <button onClick={() => this.setState({section: 'utilities'})}>Next</button>
      </div>
    );
  }

  renderUtilities() {
    return (
      <div className="debtContainer">
        <h1> Utilities </h1>
          <br />
          <label>Electricity:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'electricity') } value={this.state.utilities.electricity}  />
          <br />
          <br />
          <label>Mobile Phone:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'mobilePhone') } value={this.state.utilities.mobilePhone}  />
          <br />
          <br />
          <label>Gas:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'gas') } value={this.state.utilities.gas}  />
          <br />
          <br />
          <label>Trash:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'trash') } value={this.state.utilities.trash}  />
          <br />
          <br />
          <label>Water:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'water') } value={this.state.utilities.water}  />
          <br />
          <br />
          <label>Internet:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'internet') } value={this.state.utilities.internet}  />
          <br />
          <br />
          <label>Cable:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'cable') } value={this.state.utilities.cable}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'clothing'})}>Back </button>
          <button onClick={() => this.setState({section: 'housing'})}>Next</button>
      </div>
    );
  }

  renderHousing() {
    return (
      <div className="debtContainer">
        <h1> Housing </h1>
          <br />
          <label>Mortgage or Rent:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'mortgageRent') } value={this.state.housing.mortgageRent}  />
          <br />
          <br />
          <label>Second Mortgage:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'secondMortgage') } value={this.state.housing.secondMortgage}  />
          <br />
          <br />
          <label>Taxes:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'taxes') } value={this.state.housing.taxes}  />
          <br />
          <br />
          <label>Repairs & Maintance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'repairsMaint') } value={this.state.housing.repairsMaint}  />
          <br />
          <br />
          <label>Housing Dues or Maintance Fees:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'dues') } value={this.state.housing.dues}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'utilities'})}>Back </button>
          <button onClick={() => this.setState({section: 'savings'})}>Next</button>
      </div>
    );
  }

  renderSavings() {
    return (
      <div className="debtContainer">
        <h1> Saving </h1>
          <br />
          <label>Emergency Savings:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'savings', 'emergency') } value={this.state.savings.emergency}  />
          <br />
          <br />
          <label>Retirement:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'savings', 'retirement') } value={this.state.savings.retirement}  />
          <br />
          <br />
          <label>College:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'savings', 'college') } value={this.state.savings.college}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'housing'})}>Back </button>
          <button onClick={() => this.setState({section: 'medical'})}>Next</button>
      </div>
    );
  }

  renderMedical() {
    return (
      <div className="debtContainer">
        <h1> Medical </h1>
          <br />
          <label>Medications:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'medications') } value={this.state.medical.medications}  />
          <br />
          <br />
          <label>Doctor Bills:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'doctorBills') } value={this.state.medical.doctorBills}  />
          <br />
          <br />
          <label>Hospital Bills:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'hospitalBills') } value={this.state.medical.hospitalBills}  />
          <br />
          <br />
          <label>Other Medical:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'otherMedical') } value={this.state.medical.otherMedical}  />
          <br />
          <br />
          <label>Other Medical:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'otherMedical2') } value={this.state.medical.otherMedical2}  />
          <br />
          <br />
          <label>Other Medical:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'otherMedical3') } value={this.state.medical.otherMedical3}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'savings'})}>Back </button>
          <button onClick={() => this.setState({section: 'insurance'})}>Next</button>
      </div>
    );
  }

  renderInsurance() {
    return (
      <div className="debtContainer">
        <h1> Insurance </h1>
          <br />
          <label>Life Insurance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'lifeInsurance') } value={this.state.insurance.lifeInsurance}  />
          <br />
          <br />
          <label>Health Insurance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'healthInsurance') } value={this.state.insurance.healthInsurance}  />
          <br />
          <br />
          <label>Auto Insurance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'autoInsurance') } value={this.state.insurance.autoInsurance}  />
          <br />
          <br />
          <label>Home or Rental Insurance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'homeRentalInsurance') } value={this.state.insurance.homeRentalInsurance}  />
          <br />
          <br />
          <label>Disability Insurance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'disabilityInsurance') } value={this.state.insurance.disabilityInsurance}  />
          <br />
          <br />
          <label>Long Term Insurance:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'longTermInsurance') } value={this.state.insurance.longTermInsurance}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'medical'})}>Back </button>
          <button onClick={() => this.setState({section: 'transportation'})}>Next</button>
      </div>
    );
  }

  renderTransportation() {
    return (
      <div className="debtContainer">
        <h1> Transportation </h1>
          <br />
          <label>Gas for Car:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'carGas') } value={this.state.transportation.carGas}  />
          <br />
          <br />
          <label>Car Repairs:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'carRepairs') } value={this.state.transportation.carRepairs}  />
          <br />
          <br />
          <label>Bus:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'bus') } value={this.state.transportation.bus}  />
          <br />
          <br />
          <label>Train:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'train') } value={this.state.transportation.train}  />
          <br />
          <br />
          <label>New Car Fund:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'newCarFund') } value={this.state.transportation.newCarFund}  />
          <br />
          <br />
          <label>Other Transportation:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'othertransportation') } value={this.state.transportation.othertransportation}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'insurance'})}>Back </button>
          <button onClick={() => this.setState({section: 'personal'})}>Next</button>
      </div>
    );
  }

  renderPersonal() {
    return (
      <div className="debtContainer">
        <h1> Personal </h1>
          <br />
          <label>Tution & Eduction:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'educationTution') } value={this.state.personal.educationTution}  />
          <br />
          <br />
          <label>Child Care:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'childCare') } value={this.state.personal.childCare}  />
          <br />
          <br />
          <label>Hair Care & Cosmetics:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'hairCareCosmetics') } value={this.state.personal.hairCareCosmetics}  />
          <br />
          <br />
          <label>Book Supplies:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'bookSupplies') } value={this.state.personal.bookSupplies}  />
          <br />
          <br />
          <label>Child Support:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'childSupport') } value={this.state.personal.childSupport}  />
          <br />
          <br />
          <label>Alimony:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'alimony') } value={this.state.personal.alimony}  />
          <br />
          <br />
          <label>Pocket Money:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'pocketMoney') } value={this.state.personal.pocketMoney}  />
          <br />
          <br />
          <label>Subscriptions:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'subscriptions') } value={this.state.personal.subscriptions}  />
          <br />
          <br />
          <label>Baby Supplies:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'babySupplies') } value={this.state.personal.babySupplies}  />
          <br />
          <br />
          <label>Pet Supplies:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'petSupplies') } value={this.state.personal.petSupplies}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'transportation'})}>Back </button>
          <button onClick={() => this.setState({section: 'miscellaneous'})}>Next</button>
      </div>
    );
  }

  renderMiscellaneous() {
    return (
      <div className="debtContainer">
        <h1> Miscellaneous </h1>
          <br />
          <label>Miscellaneous:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneous', 'miscellaneous') } value={this.state.miscellaneous.miscellaneous}  />
          <br />
          <br />
          <label>Other Personal:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneous', 'otherPersonal') } value={this.state.miscellaneous.otherPersonal}  />
          <br />
          <br />
          <label>Other Personal:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneous', 'otherPersonal1') } value={this.state.miscellaneous.otherPersonal1}  />
          <br />
          <br />
          <label>Other Personal:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneous', 'otherPersonal2') } value={this.state.miscellaneous.otherPersonal2}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'personal'})}>Back </button>
          <button onClick={() => this.setState({section: 'entertainment'})}>Next</button>
      </div>
    );
  }

  renderEntertainment() {
    return (
      <div className="debtContainer">
        <h1> Entertainment </h1>
          <br />
          <label>Entertainment:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'entertainment', 'entertainment') } value={this.state.entertainment.entertainment}  />
          <br />
          <br />
          <label>Vacation:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'entertainment', 'vacation') } value={this.state.entertainment.vacation}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'miscellaneous'})}>Back </button>
          <button onClick={() => this.setState({section: 'carDebt'})}>Next</button>
      </div>
    );
  }

  renderCarDebt() {
    return (
      <div className="debtContainer">
        <h1> Car Debt </h1>
          <br />
          <label>Car Payment #1:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'carDebt', 'carPayment1') } value={this.state.carDebt.carPayment1}  />
          <br />
          <br />
          <label>Car Payment #2:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'carDebt', 'carPayment2') } value={this.state.carDebt.carPayment2}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'entertainment'})}>Back </button>
          <button onClick={() => this.setState({section: 'creditCardDebt'})}>Next</button>
      </div>
    );
  }

  renderCreditCardDebt() {
    return (
      <div className="debtContainer">
        <h1> Credit Card Debt </h1>
          <br />
          <label>Credit Card #1:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'creditCardDebt', 'creditCard1') } value={this.state.creditCardDebt.creditCard1}  />
          <br />
          <br />
          <label>Credit Card #2:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'creditCardDebt', 'creditCard2') } value={this.state.creditCardDebt.creditCard2}  />
          <br />
          <br />
          <label>Credit Card #3:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'creditCardDebt', 'creditCard3') } value={this.state.creditCardDebt.creditCard3}  />
          <br />
          <br />
          <label>Credit Card #4:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'creditCardDebt', 'creditCard4') } value={this.state.creditCardDebt.creditCard4}  />
          <br />
          <br />
          <label>Credit Card #5:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'creditCardDebt', 'creditCard5') } value={this.state.creditCardDebt.creditCard5}  />
          <br />
          <br />
          <label>Credit Card #6:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'creditCardDebt', 'creditCard6') } value={this.state.creditCardDebt.creditCard6}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'carDebt'})}>Back </button>
          <button onClick={() => this.setState({section: 'studentDebt'})}>Next</button>
      </div>
    );
  }

  renderStudentDebt() {
    return (
      <div className="debtContainer">
        <h1> Student Debt </h1>
          <br />
          <label>Student Loan #1:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'studentDebt', 'studentLoan1') } value={this.state.studentDebt.studentLoan1}  />
          <br />
          <br />
          <label>Student Loan #2:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'studentDebt', 'studentLoan2') } value={this.state.studentDebt.studentLoan2}  />
          <br />
          <br />
          <label>Student Loan #3:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'studentDebt', 'studentLoan3') } value={this.state.studentDebt.studentLoan3}  />
          <br />
          <br />
          <label>Student Loan #4:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'studentDebt', 'studentLoan4') } value={this.state.studentDebt.studentLoan4}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'creditCardDebt'})}>Back </button>
          <button onClick={() => this.setState({section: 'miscellaneousDebt'})}>Next</button>
      </div>
    );
  }

  renderMiscellaneousDebt() {
    return (
      <div className="debtContainer">
        <h1> Miscellaneous Debt </h1>
          <br />
          <label>Miscellaneous Debt #1:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneousDebt', 'debt1') } value={this.state.miscellaneousDebt.debt1}  />
          <br />
          <br />
          <label>Miscellaneous Debt #2:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneousDebt', 'debt2') } value={this.state.miscellaneousDebt.debt2}  />
          <br />
          <br />
          <label>Miscellaneous Debt #3:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneousDebt', 'debt3') } value={this.state.miscellaneousDebt.debt3}  />
          <br />
          <br />
          <label>Miscellaneous Debt #4:</label>
          <Input onChange={(event) => this.handleInputChange(event, 'miscellaneousDebt', 'debt4') } value={this.state.miscellaneousDebt.debt4}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: 'studentDebt'})}>Back </button>
          <button onClick= {() => this.resultRedirect()}>Grade My Budget</button>
      </div>
    );
  }

  resultRedirect() {
    window.location = '/results';
  }

  renderForm() {

    if (this.state.section === 'pay') {
      return this.renderPay();
    } 
    else if(this.state.section === 'food'){
      return this.renderFood();
    }
    else if(this.state.section === 'clothing'){
      return this.renderClothing();
    }
    else if(this.state.section === 'utilities'){
      return this.renderUtilities();
    }
    else if(this.state.section === 'housing'){
      return this.renderHousing();
    }
    else if(this.state.section === 'savings'){
      return this.renderSavings();
    }
    else if(this.state.section === 'medical'){
      return this.renderMedical();
    }
    else if(this.state.section === 'insurance'){
      return this.renderInsurance();
    }
    else if(this.state.section === 'transportation'){
      return this.renderTransportation();
    }
    else if(this.state.section === 'personal'){
      return this.renderPersonal();
    }
    else if(this.state.section === 'miscellaneous'){
      return this.renderMiscellaneous();
    }
     else if(this.state.section === 'entertainment'){
      return this.renderEntertainment();
    }
    else if(this.state.section === 'carDebt'){
      return this.renderCarDebt();
    }
    else if(this.state.section === 'creditCardDebt'){
      return this.renderCreditCardDebt();
    }
    else if(this.state.section === 'studentDebt'){
      return this.renderStudentDebt();
    }
    else if(this.state.section === 'miscellaneousDebt'){
      return this.renderMiscellaneousDebt();
    }
    else
      return this.renderPay();
  }

  // renderForm decides what parts of the form to render

  render() {
    console.log(this.state);
    let currentSection = this.state.section;

    return (
      <div>
       {this.renderForm()}
       <Results formData={this.state[currentSection]} />
      </div>
    );
  }
}

export default MainForm;