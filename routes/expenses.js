var express = require('express');
var router = express.Router();

//from old file validator

/* GET users listing. */
router.get('/', function(req, res, next) {

   res.json([{
    id: 'groceries',
    expense: "Groceries"
  }, {
    id: 'eatingOut',
    expense: "Eating Out"
  }, {
    id: 'clothingAdult',
    expense: "Clothing--Adult"
  }, {
    id: 'clothingKids',
    expense: "Clothing--Kids"
  }, {
    id: 'dryCleaning',
    expense: "Dry Cleaning"
  }, {
    id: 'electricity',
    expense: "Electricity"
  }, {
    id: 'mobilePhone',
    expense: "Mobile Phone"
  }, {
    id: 'gas',
    expense: "Gas"
  }, {
    id: 'trash',
    expense: "Trash"
  }, {
    id: 'water',
    expense: "Water"
  }, {
    id: 'internet',
    expense: "Internet"
  }, {
    id: 'cable',
    expense: "Cable"
  }, {
    id: 'mortgageRent',
    expense: "Mortgage/Rent"
  }, {
    id: 'secondMortgage',
    expense: "Second Mortgage"
  }, {
    id: 'taxes',
    expense: "Taxes"
  }, {
    id: 'repairsMaint',
    expense: "Repairs & Maintenance"
  }, {
    id: 'dues',
    expense: "Dues"
  }, {
    id: 'emergency',
    expense: "Emergency"
  }, {
    id: 'college',
    expense: "College"
  }, {
    id: 'medications',
    expense: "Medications"
  }, {
    id: 'doctorBills',
    expense: "Doctor Bills"
  }, {
    id: 'hospitalBills',
    expense: "Hospital Bills"
  }, {
    id: 'otherMedical',
    expense: "Other Medical Bills"
  }, {
    id: 'otherMedical2',
    expense: "Other Medical Bills 2"
  }, {
    id: 'otherMedical3',
    expense: "Other Medical Bills 3"
  }, {
    id: 'lifeInsurance',
    expense: "Life Insurance"
  }, {
    id: 'healthInsurance',
    expense: "Health Insurance"
  }, {
    id: 'autoInsurance',
    expense: "Auto Insurance"
  }, {
    id: 'homeRentalInsurance',
    expense: "Home Rental Insurance"
  }, {
    id: 'disabilityInsurance',
    expense: "Disability Insurance"
  }, {
    id: 'longTermInsurance',
    expense: "Long Term Insurance"
  }, {
    id: 'carGas',
    expense: "Gas for Your Car"
  }, {
    id: 'carRepairs',
    expense: "Car Repairs"
  }, {
    id: 'bus',
    expense: "Bus Fare"
  }, {
    id: 'train',
    expense: "Train Fare"
  }, {
    id: 'newCarFund',
    expense: "New Car Fund"
  }, {
    id: 'otherTransportation',
    expense: "Other Transportation"
  }, {
    id: 'educationTuition',
    expense: "Education Tuition"
  }, {
    id: 'childCare',
    expense: "Child Care"
  }, {
    id: 'hairCareCosmetics',
    expense: "Hair Care Cosmetics"
  }, {
    id: 'bookSupplies',
    expense: "Book Supplies"
  }, {
    id: 'childSupport',
    expense: "Child Support"
  }, {
    id: 'alimony',
    expense: "Alimony"
  }, {
    id: 'pocketMoney',
    expense: "Pocket Money"
  }, {
    id: 'subscriptions',
    expense: "Subscriptions"
  }, {
    id: 'babySupplies',
    expense: "Baby Supplies"
  }, {
    id: 'petSupplies',
    expense: "Pet Supplies"
  }, {
    id: 'miscellaneous',
    expense: "Miscellaneous"
  }, {
    id: 'otherPersonal',
    expense: "Other Personal"
  }, {
    id: 'otherPersonal2',
    expense: "Other Personal"
  }, {
    id: 'otherPersonal3',
    expense: "Other Personal"
  }, {
    id: 'entertainment',
    expense: "Entertainment"
  }, {
    id: 'vacation',
    expense: "Vacation"
  }, {
    id: 'carPayment1',
    expense: "Car Payment"
  }, {
    id: 'carPayment2',
    expense: "Car Payment"
  }, {
    id: 'creditCard1',
    expense: "Credit Card 1"
  }, {
    id: 'creditCard2',
    expense: "Credit Card 2"
  }, {
    id: 'creditCard3',
    expense: "Credit Card 3"
  }, {
    id: 'creditCard4',
    expense: "Credit Card 4"
  },{
    id: 'creditCard5',
    expense: "Credit Card 5"
  }, {
    id: 'creditCard6',
    expense: "Credit Card 6"
  },{
    id: 'studentLoan1',
    expense: "Student Loan 1"
  }, {
    id: 'studentLoan2',
    expense: "Student Loan 2"
  },{
    id: 'studentLoan3',
    expense: "Student Loan 3"
  }, {
    id: 'studentLoan4',
    expense: "Student Loan 4"
  },{
    id: 'debt1',
    expense: "Debt 1"
  }, {
    id: 'debt2',
    expense: "Debt 2"
  },{
    id: 'debt3',
    expense: "Debt 3"
  }, {
    id: 'debt4',
    expense: "Debt 4"
  },

  ]);
});

module.exports = router;



// <option value="debt1">Debt1</option>
// <option value="debt2">Debt2</option>
// <option value="debt3">Debt3</option>
// <option value="debt4">Debt4</option>