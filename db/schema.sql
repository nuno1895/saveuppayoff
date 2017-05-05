CREATE DATABASE saveup_db;
USE saveup_db;

CREATE TABLE users
(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE months
(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  month VARCHAR(35) NOT NULL
);

CREATE TABLE budgets
(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	user_id INTEGER NOT NULL,
	month_id INTEGER NOT NULL,
  the_date DATE,
  budget INTEGER NOT NULL,
  takeHome INTEGER NOT NULL,
  frequency INTEGER NOT NULL,
  foodBudget INTEGER NOT NULL,
  groceries INTEGER NOT NULL,
  eatingOut INTEGER NOT NULL,
  clothingBudget INTEGER NOT NULL,
  clothingAdult INTEGER NOT NULL,
  clothingKids INTEGER NOT NULL,
  dryCleaning INTEGER NOT NULL,
  utilitiesBudget INTEGER NOT NULL,
  electricity INTEGER NOT NULL,
  mobilePhone INTEGER NOT NULL,
  gas INTEGER NOT NULL,
  trash INTEGER NOT NULL,
  water INTEGER NOT NULL,
  internet INTEGER NOT NULL,
  cable INTEGER NOT NULL,
  housingBudget INTEGER NOT NULL,
  mortgageRent INTEGER NOT NULL,
  secondMortgage INTEGER NOT NULL,
  taxes INTEGER NOT NULL,
  repairsMaint INTEGER NOT NULL,
  dues INTEGER NOT NULL,
  savingsBudget INTEGER NOT NULL,
  emergency INTEGER NOT NULL,
  retirement INTEGER NOT NULL,
  college INTEGER NOT NULL,
  medicalBudget INTEGER NOT NULL,
  medications INTEGER NOT NULL,
  doctorBills INTEGER NOT NULL,
  hospitalBills INTEGER NOT NULL,
  otherMedical INTEGER NOT NULL,
  otherMedical2 INTEGER NOT NULL,
  otherMeidcal3 INTEGER NOT NULL,
  insuranceBudget INTEGER NOT NULL,
  lifeInsurance INTEGER NOT NULL,
  healthInsurance INTEGER NOT NULL,
  autoInsurance INTEGER NOT NULL,
  homeRentalInsurance INTEGER NOT NULL,
  disabilityInsurance INTEGER NOT NULL,
  longTermInsurance INTEGER NOT NULL,
  transportationBudget INTEGER NOT NULL,
  carGas INTEGER NOT NULL,
  carRepairs INTEGER NOT NULL,
  bus INTEGER NOT NULL,
  train INTEGER NOT NULL,
  newCarFund INTEGER NOT NULL,
  otherTransportation INTEGER NOT NULL,
  personalBudget INTEGER NOT NULL,
  educationTuition INTEGER NOT NULL,
  childCare INTEGER NOT NULL,
  hairCareCosmetics INTEGER NOT NULL,
  bookSupplies INTEGER NOT NULL,
  childSupport INTEGER NOT NULL,
  alimony INTEGER NOT NULL,
  pocketMoney INTEGER NOT NULL,
  subscriptions INTEGER NOT NULL,
  babySupplies INTEGER NOT NULL,
  petSupplies INTEGER NOT NULL,
  otherPersonal INTEGER NOT NULL,
  otherPersonal2 INTEGER NOT NULL,
  otherPersonal3 INTEGER NOT NULL,
  entertainmentBudget INTEGER NOT NULL,
  entertainment INTEGER NOT NULL,
  vacation INTEGER NOT NULL,
  debtBudget INTEGER NOT NULL,
  carPayment1 INTEGER NOT NULL,
  carPayment2 INTEGER NOT NULL,
  creditCard1 INTEGER NOT NULL,
  creditCard2 INTEGER NOT NULL,
  creditCard3 INTEGER NOT NULL,
  creditCard4 INTEGER NOT NULL,
  creditCard5 INTEGER NOT NULL,
  creditCard6 INTEGER NOT NULL,
  studentLoan1 INTEGER NOT NULL,
  studentLoan2 INTEGER NOT NULL,
  studentLoan3 INTEGER NOT NULL,
  studentLoan4 INTEGER NOT NULL,
  debt1 INTEGER NOT NULL,
  debt2 INTEGER NOT NULL,
  debt3 INTEGER NOT NULL,
  debt4 INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (month_id) REFERENCES months(id)
);

CREATE TABLE grades
(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  budget_id INTEGER NOT NULL,
  food VARCHAR(10),
  clothing VARCHAR(10),
  utilities VARCHAR(10),
  housing VARCHAR(10),
  savings VARCHAR(10),
  medical VARCHAR(10),
  insurance VARCHAR(10),
  transportation VARCHAR(10),
  personal VARCHAR(10),
  entertainment VARCHAR(10),
  debt VARCHAR(10),
  finalGrade VARCHAR(10),
  FOREIGN KEY (budget_id) REFERENCES budgets(id)
);

CREATE TABLE expenses
(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  budget_id INTEGER NOT NULL,
  type VARCHAR(35) NOT NULL,
  expenditure INTEGER NOT NULL,
  the_date DATE,
  FOREIGN KEY (budget_id) REFERENCES budgets(id)
);

/*CREATE TABLE take_home
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	month_id INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (month_id) REFERENCES months(id)
);

CREATE TABLE types
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    total INTEGER
);

CREATE TABLE budgets
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    type_id INTEGER NOT NULL,
    month_id INTEGER NOT NULL,
    threshold INTEGER NOT NULL,
    the_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (month_id) REFERENCES months(id)
);*/