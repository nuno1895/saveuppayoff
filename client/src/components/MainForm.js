import React, { Component } from 'react';
import API from './API';
import './stylesheets/MainForm.css';
import Input from './Input';
import Results from './Results';
import {
  Button
} from 'reactstrap';

class MainForm extends Component {
  constructor() {
    super();
    // Creating a giant state object to hold all of our form data
    this.state = {
      isLoggedIn: false,
      pay: {
        month: 'January',
        takeHome: '',
        frequency: ''
      },
      food: {
        groceries: '',
        eatingOut: ''
      },
      clothing: {
        clothingAdult: '',
        clothingKids: '',
        dryCleaning: ''
      },
      utilities: {
        electricity: '',
        mobilePhone: '',
        gas: '',
        trash: '',
        water: '',
        internet: '',
        cable: ''
      },
      housing: {
        mortgageRent: '',
        secondMortgage: '',
        taxes: '',
        repairsMaint: '',
        dues: '',
      },
      savings: {
        emergency: '',
        retirement: '',
        college: ''
      },
      medical: {
        medications: '',
        doctorBills: '',
        hospitalBills: '',
        otherMedical: '',
        otherMedical2: '',
        otherMedical3: ''
      },
      insurance: {
        lifeInsurance: '',
        healthInsurance: '',
        autoInsurance: '',
        homeRentalInsurance: '',
        disabilityInsurance: '',
        longTermInsurance: ''
      },
      transportation: {
        carGas: '',
        carRepairs: '',
        bus: '',
        train: '',
        newCarFund: '',
        otherTransportation: ''
      },
      personal: {
        educationTuition: '',
        childCare: '',
        hairCareCosmetics: '',
        bookSupplies: '',
        childSupport: '',
        alimony: '',
        pocketMoney: '',
        subscriptions: '',
        babySupplies: '',
        petSupplies: '',
        otherPersonal: '',
        otherPersonal2: '',
        otherPersonal3: ''
      },
      entertainment: {
        entertainment: '',
        vacation: ''
      },
      debt: {
        carPayment1: '',
        carPayment2: '',
        creditCard1: '',
        creditCard2: '',
        creditCard3: '',
        creditCard4: '',
        creditCard5: '',
        creditCard6: '',
        studentLoan1: '',
        studentLoan2: '',
        studentLoan3: '',
        studentLoan4: '',
        debt1: '',
        debt2: '',
        debt3: '',
        debt4: ''
      },
      section: 'pay',
      prevSection: '',
      nextSection: '',
      budget: 0,
      sectionGrades: {
        food: '',
        clothing: '',
        utilities: '',
        housing: '',
        savings: '',
        medical: '',
        insurance: '',
        transportation: '',
        personal: '',
        entertainment: '',
        debt: ''
      },
      finalGrade: '',
      sectionBudgets: {
        foodBudget: '',
        clothingBudget: '',
        utilitiesBudget: '',
        housingBudget: '',
        savingsBudget: '',
        medicalBudget: '',
        insuranceBudget: '',
        transportationBudget: '',
        personalBudget: '',
        entertainmentBudget: '',
        debtBudget: ''
      }
    };
    // binding our methods which get passed as callbacks
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSectionGrade = this.handleSectionGrade.bind(this);
    this.handleSectionBudget = this.handleSectionBudget.bind(this);
    // this.getSalary = this.getSalary.bind(this);
  }

  // this function handles any input changes and updates the state
  handleInputChange(event, type, field) {
    // console.log("THIS", event.target.value);
    const newState = Object.assign({}, this.state);
    newState[type][field] = event.target.value;
    this.setState(newState);
  }

  handleSectionGrade(section, grade) {
    // this.setState({sectionGrades.section: grade});
    this.state.sectionGrades[section] = grade;
    // console.log(this.state.sectionGrades);
  }

  handleSectionBudget(section, budget) {
    // this.setState({sectionGrades.section: grade});
    this.state.sectionBudgets[section] = budget;
    // console.log(this.state.sectionBudgets);
  }
  
  // getSalary() {
  //   console.log('Your salary is' + this.state.pay.frequency * this.state.pay.takeHome);
  //   this.setState({ budget: this.state.pay.takeHome * this.state.pay.frequency});
  // }

  handleButtonClick = () => {
    this.setState({section: 'food', budget: this.state.pay.takeHome*this.state.pay.frequency});
    
    API.getData()
      .then(data => console.log(data));

    // API.postForm(this.state)
    //   .then(response => console.log(response));
  }

  renderPay() {
    
    if('isLoggedIn'){

    return (
      <div className="cardContainer">
      <div className="cardTop">
      <h1> Your Pay </h1>
      </div>
      <div className="debtContainer">
        <br />
        <label>Current Month:</label>
        <br />
        <select onChange={(event) => this.handleInputChange(event, 'pay', 'month') } value={this.state.pay.month}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <br />
        <br />
        <label>Weekly Take Home:</label>
        <br />
        <Input onChange={(event) => this.handleInputChange(event, 'pay', 'takeHome') } value={this.state.pay.takeHome} />
        <br />
        <br />
        <label>How Often do you get payed every Month:</label>
        <br />
        <Input onChange={(event) => this.handleInputChange(event, 'pay', 'frequency') } value={this.state.pay.frequency} />
        <br />
        <br />
        <Button onClick={this.handleButtonClick} disabled={!this.state.pay.month, !this.state.pay.takeHome, !this.state.pay.frequency}>Next</Button>
      </div>
      </div>
    );
  } return(<p>not logged in</p>)
  }

  renderFood() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Food </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Groceries:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'food', 'groceries') } value={this.state.food.groceries} />
          <br />
          <br />
          <label>Eating Out:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'food', 'eatingOut') } value={this.state.food.eatingOut} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'pay'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'food', nextSection: 'clothing'})} disabled={!this.state.food.groceries, !this.state.food.eatingOut}>Next</Button>
      </div>
      </div>
    );
  }

  renderClothing() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Clothing </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Clothes For Adult:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'clothing', 'clothingAdult') } value={this.state.clothing.clothingAdult} />
          <br />
          <br />
          <label>Clothing For Kids:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'clothing', 'clothingKids') } value={this.state.clothing.clothingKids} />
          <br />
          <br />
          <label>Laundry/Dry Clothing:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'clothing', 'dryCleaning') } value={this.state.clothing.dryCleaning} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'food', nextSection: 'clothing'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'clothing', nextSection: 'utilities'})} disabled={!this.state.clothing.clothingAdult, !this.state.clothing.clothingKids, !this.state.clothing.dryCleaning}>Next</Button>
      </div>
      </div>
    );
  }

  renderUtilities() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Utilities </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Electricity:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'electricity') } value={this.state.utilities.electricity} />
          <br />
          <br />
          <label>Mobile Phone:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'mobilePhone') } value={this.state.utilities.mobilePhone} />
          <br />
          <br />
          <label>Gas:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'gas') } value={this.state.utilities.gas} />
          <br />
          <br />
          <label>Trash:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'trash') } value={this.state.utilities.trash} />
          <br />
          <br />
          <label>Water:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'water') } value={this.state.utilities.water} />
          <br />
          <br />
          <label>Internet:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'internet') } value={this.state.utilities.internet} />
          <br />
          <br />
          <label>Cable:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'utilities', 'cable') } value={this.state.utilities.cable} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'clothing', nextSection: 'utilities'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'utilities', nextSection: 'housing'})} disabled={!this.state.utilities.electricity, !this.state.utilities.mobilePhone, !this.state.utilities.gas, !this.state.utilities.trash, !this.state.utilities.water, !this.state.utilities.internet, !this.state.utilities.cable}>Next</Button>
      </div>
      </div>
    );
  }

  renderHousing() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Housing </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Mortgage or Rent:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'mortgageRent') } value={this.state.housing.mortgageRent} />
          <br />
          <br />
          <label>Second Mortgage:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'secondMortgage') } value={this.state.housing.secondMortgage} />
          <br />
          <br />
          <label>Taxes:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'taxes') } value={this.state.housing.taxes} />
          <br />
          <br />
          <label>Repairs & Maintance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'repairsMaint') } value={this.state.housing.repairsMaint} />
          <br />
          <br />
          <label>Housing Dues or Maintance Fees:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'housing', 'dues') } value={this.state.housing.dues} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'utilities', nextSection: 'housing'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'housing', nextSection: 'savings'})} disabled={!this.state.housing.mortgageRent, !this.state.housing.secondMortgage, !this.state.housing.taxes, !this.state.housing.repairsMaint, !this.state.housing.dues}>Next</Button>
      </div>
      </div>
    );
  }

  renderSavings() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1>Savings</h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Emergency Savings:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'savings', 'emergency') } value={this.state.savings.emergency} />
          <br />
          <br />
          <label>Retirement:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'savings', 'retirement') } value={this.state.savings.retirement} />
          <br />
          <br />
          <label>College:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'savings', 'college') } value={this.state.savings.college} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'housing', nextSection: 'savings'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'savings', nextSection: 'medical'})} disabled={!this.state.savings.emergency, !this.state.savings.retirement, !this.state.savings.college}>Next</Button>
      </div>
      </div>
    );
  }

  renderMedical() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Medical </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Medications:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'medications') } value={this.state.medical.medications} />
          <br />
          <br />
          <label>Doctor Bills:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'doctorBills') } value={this.state.medical.doctorBills} />
          <br />
          <br />
          <label>Hospital Bills:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'hospitalBills') } value={this.state.medical.hospitalBills} />
          <br />
          <br />
          <label>Other Medical # 1:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'otherMedical') } value={this.state.medical.otherMedical} />
          <br />
          <br />
          <label>Other Medical # 2:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'otherMedical2') } value={this.state.medical.otherMedical2} />
          <br />
          <br />
          <label>Other Medical # 3:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'medical', 'otherMedical3') } value={this.state.medical.otherMedical3} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'savings', nextSection: 'medical'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'medical', nextSection: 'insurance'})} disabled={!this.state.medical.hospitalBills, !this.state.medical.otherMedical, !this.state.medical.otherMedical2, !this.state.medical.otherMedical3}>Next</Button>
      </div>
      </div>
    );
  }

  renderInsurance() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Insurance </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Life Insurance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'lifeInsurance') } value={this.state.insurance.lifeInsurance} />
          <br />
          <br />
          <label>Health Insurance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'healthInsurance') } value={this.state.insurance.healthInsurance} />
          <br />
          <br />
          <label>Auto Insurance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'autoInsurance') } value={this.state.insurance.autoInsurance} />
          <br />
          <br />
          <label>Home or Rental Insurance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'homeRentalInsurance') } value={this.state.insurance.homeRentalInsurance} />
          <br />
          <br />
          <label>Disability Insurance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'disabilityInsurance') } value={this.state.insurance.disabilityInsurance} />
          <br />
          <br />
          <label>Long Term Insurance:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'insurance', 'longTermInsurance') } value={this.state.insurance.longTermInsurance} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'medical', nextSection: 'insurance'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'insurance', nextSection: 'transportation'})} disabled={!this.state.insurance.lifeInsurance, !this.state.insurance.healthInsurance, !this.state.insurance.autoInsurance, !this.state.insurance.homeRentalInsurance, !this.state.insurance.disabilityInsurance, !this.state.insurance.longTermInsurance}>Next</Button>
      </div>
      </div>
    );
  }

  renderTransportation() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Transportation </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Gas for Car:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'carGas') } value={this.state.transportation.carGas} />
          <br />
          <br />
          <label>Car Repairs:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'carRepairs') } value={this.state.transportation.carRepairs} />
          <br />
          <br />
          <label>Bus:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'bus') } value={this.state.transportation.bus}  />
          <br />
          <br />
          <label>Train:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'train') } value={this.state.transportation.train} />
          <br />
          <br />
          <label>New Car Fund:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'newCarFund') } value={this.state.transportation.newCarFund} />
          <br />
          <br />
          <label>Other Transportation:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'transportation', 'otherTransportation') } value={this.state.transportation.otherTransportation} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'insurance', nextSection: 'transportation'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'transportation', nextSection: 'personal'})} disabled={!this.state.transportation.carGas, !this.state.transportation.carRepairs, !this.state.transportation.bus, !this.state.transportation.train, !this.state.transportation.newCarFund, !this.state.transportation.otherTransportation}>Next</Button>
      </div>
      </div>
    );
  }

  renderPersonal() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Personal </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Tution & Eduction:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'educationTuition') } value={this.state.personal.educationTuition} />
          <br />
          <br />
          <label>Child Care:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'childCare') } value={this.state.personal.childCare} />
          <br />
          <br />
          <label>Hair Care & Cosmetics:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'hairCareCosmetics') } value={this.state.personal.hairCareCosmetics} />
          <br />
          <br />
          <label>Book Supplies:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'bookSupplies') } value={this.state.personal.bookSupplies} />
          <br />
          <br />
          <label>Child Support:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'childSupport') } value={this.state.personal.childSupport} />
          <br />
          <br />
          <label>Alimony:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'alimony') } value={this.state.personal.alimony} />
          <br />
          <br />
          <label>Pocket Money:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'pocketMoney') } value={this.state.personal.pocketMoney} />
          <br />
          <br />
          <label>Subscriptions:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'subscriptions') } value={this.state.personal.subscriptions} />
          <br />
          <br />
          <label>Baby Supplies:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'babySupplies') } value={this.state.personal.babySupplies} />
          <br />
          <br />
          <label>Pet Supplies:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'petSupplies') } value={this.state.personal.petSupplies} />
          <br />
          <br />
          <label>Other Personal Expense:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'otherPersonal') } value={this.state.personal.otherPersonal} />
          <br />
          <br />
          <label>Other Personal Expense #2:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'otherPersonal2') } value={this.state.personal.otherPersonal2} />
          <br />
          <br />
          <label>Other Personal Expense #3:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'personal', 'otherPersonal3') } value={this.state.personal.otherPersonal3} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'transportation', nextSection: 'personal'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'personal', nextSection: 'entertainment'})} disabled={!this.state.personal.educationTuition, !this.state.personal.childCare, !this.state.personal.hairCareCosmetics, !this.state.personal.bookSupplies, !this.state.personal.childSupport, !this.state.personal.alimony, !this.state.personal.pocketMoney, !this.state.personal.subscriptions, !this.state.personal.babySupplies, !this.state.personal.petSupplies, !this.state.personal.otherPersonal, !this.state.personal.otherPersonal2, !this.state.personal.otherPersonal3}>Next</Button>
      </div>
      </div>
    );
  }

  renderEntertainment() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1> Entertainment </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Entertainment:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'entertainment', 'entertainment') } value={this.state.entertainment.entertainment} />
          <br />
          <br />
          <label>Vacation:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'entertainment', 'vacation') } value={this.state.entertainment.vacation} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'miscellaneous', nextSection: 'entertainment'})}>Back</Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'entertainment', nextSection: 'debt'})} disabled={!this.state.entertainment.entertainment, !this.state.entertainment.vacation}>Next</Button>
      </div>
      </div>
    );
  }

  renderDebt() {
    return (
      <div className="cardContainer">
        <div className="cardTop">
        <h1>Debt </h1>
        </div>
        <div className="debtContainer">
          <br />
          <label>Car Payment #1:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'carPayment1') } value={this.state.debt.carPayment1} />
          <br />
          <br />
          <label>Car Payment #2:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'carPayment2') } value={this.state.debt.carPayment2} />
          <br />
          <br />
          <label>Credit Card #1:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'creditCard1') } value={this.state.debt.creditCard1} />
          <br />
          <br />
          <label>Credit Card #2:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'creditCard2') } value={this.state.debt.creditCard2} />
          <br />
          <br />
          <label>Credit Card #3:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'creditCard3') } value={this.state.debt.creditCard3} />
          <br />
          <br />
          <label>Credit Card #4:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'creditCard4') } value={this.state.debt.creditCard4} />
          <br />
          <br />
          <label>Credit Card #5:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'creditCard5') } value={this.state.debt.creditCard5} />
          <br />
          <br />
          <label>Credit Card #6:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'creditCard6') } value={this.state.debt.creditCard6} />
          <br />
          <br />
          <label>Student Loan #1:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'studentLoan1') } value={this.state.debt.studentLoan1} />
          <br />
          <br />
          <label>Student Loan #2:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'studentLoan2') } value={this.state.debt.studentLoan2} />
          <br />
          <br />
          <label>Student Loan #3:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'studentLoan3') } value={this.state.debt.studentLoan3} />
          <br />
          <br />
          <label>Student Loan #4:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'studentLoan4') } value={this.state.debt.studentLoan4} />
          <br />
          <br />
          <label>Miscellaneous Debt #1:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'debt1') } value={this.state.debt.debt1} />
          <br />
          <br />
          <label>Miscellaneous Debt #2:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'debt2') } value={this.state.debt.debt2} />
          <br />
          <br />
          <label>Miscellaneous Debt #3:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'debt3') } value={this.state.debt.debt3} />
          <br />
          <br />
          <label>Miscellaneous Debt #4:</label>
          <br />
          <Input onChange={(event) => this.handleInputChange(event, 'debt', 'debt4') } value={this.state.debt.debt4} />
          <br />
          <br />
          <Button className="backBtn" onClick={() => this.setState({section: 'sectionResults', prevSection: 'entertainment', nextSection: 'debt'})}>Back </Button>
          <Button onClick={() => this.setState({section: 'sectionResults', prevSection: 'debt', nextSection: 'budgetResults'})} disabled={this.state.debt.carPayment1, !this.state.debt.carPayment2, !this.state.debt.CreditCard1, !this.state.debt.creditCard2, !this.state.debt.creditCard3, !this.state.debt.creditCard4, !this.state.debt.creditCard5, !this.state.debt.creditCard6, !this.state.debt.studentLoan1, !this.state.debt.studentLoan2, !this.state.debt.studentLoan3, !this.state.debt.studentLoan4, !this.state.debt.debt1, !this.state.debt.debt2, !this.state.debt.debt3, !this.state.debt.debt4}>Next</Button>
      </div>
      </div>
    );
  }

  testCallback(dataFromChild) {
    console.log("stuff");
  }

  renderSectionResults() {
    let prevFormSection = this.state.prevSection;
    // console.log(prevFormSection);
    let sectionData = this.state[prevFormSection];
    // console.log(sectionData);

    return (
      <div className='sectionResults'>
        {/*<div className="cardTop">
        <h1>Section Result for {this.state.prevSection}</h1>
        </div>
        <div className="debtContainer">
        <br />
        <br />*/}
        <Results formSectionTitle={prevFormSection} formSectionData={sectionData} budget={this.state.budget} gradeCallBack={this.handleSectionGrade} sectionBudgetCallBack={this.handleSectionBudget}/>
        <br />
        <br />
        <Button onClick={() => this.setState({section: this.state.prevSection})}>Back</Button>
        <Button onClick={() => this.setState({section: this.state.nextSection})}>Next</Button>
      </div>
    );
  }

  renderBudgetResults() {
    return (
      <div className="cardContainer">
      <div className='budgetResults'>
        <div className="cardTop">
        <h1>BudgetResults</h1>
        </div>
        <div className="debtContainer">
        <br />
        <br />
        <Results />
        <br />
        <br />
        <Button onClick={() => this.setState({section: this.state.prevSection})}>Back</Button>
        <Button onClick={() => this.resultRedirect()}>Submit Form</Button>
      </div>
      </div> 
      </div>
    );
  }

  resultRedirect() {
    // window.location = '/results';
    API.postForm(this.state)
      .then(response => console.log(response));
  }

  renderForm() {
    if (this.state.section === 'pay') {
      return this.renderPay();
    } 
    else if (this.state.section === 'food') {
      return this.renderFood();
    }
    else if (this.state.section === 'clothing') {
      return this.renderClothing();
    }
    else if (this.state.section === 'utilities') {
      return this.renderUtilities();
    }
    else if (this.state.section === 'housing') {
      return this.renderHousing();
    }
    else if (this.state.section === 'savings') {
      return this.renderSavings();
    }
    else if (this.state.section === 'medical') {
      return this.renderMedical();
    }
    else if (this.state.section === 'insurance') {
      return this.renderInsurance();
    }
    else if (this.state.section === 'transportation') {
      return this.renderTransportation();
    }
    else if (this.state.section === 'personal') {
      return this.renderPersonal();
    }
    else if (this.state.section === 'entertainment') {
      return this.renderEntertainment();
    }
    else if (this.state.section === 'debt') {
      return this.renderDebt();
    }
    else if (this.state.section === 'sectionResults') {
      return this.renderSectionResults();
    }
    else if (this.state.section === 'budgetResults') {
      return this.renderBudgetResults();
    }
    else
      return this.renderPay();
  }

  // renderForm decides what parts of the form to render

  render() {
    // console.log(this.state);

    return (
      <div>
       {this.renderForm()}
      </div>
    );
  }
}

export default MainForm;