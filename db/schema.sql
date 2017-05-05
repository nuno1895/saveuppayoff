CREATE DATABASE saveup_db;
USE saveup_db;

CREATE TABLE users
(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE budgets
(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	user_id INTEGER NOT NULL,
	month VARCHAR(30),
  the_date DATE,
  budget INTEGER,
  takeHome INTEGER,
  frequency INTEGER,
  foodBudget INTEGER,
  groceries INTEGER,
  eatingOut INTEGER,
  clothingBudget INTEGER,
  clothingAdult INTEGER,
  clothingKids INTEGER,
  dryCleaning INTEGER,
  utilitiesBudget INTEGER,
  electricity INTEGER,
  mobilePhone INTEGER,
  gas INTEGER,
  trash INTEGER,
  water INTEGER,
  internet INTEGER,
  cable INTEGER,
  housingBudget INTEGER,
  mortgageRent INTEGER,
  secondMortgage INTEGER,
  taxes INTEGER,
  repairsMaint INTEGER,
  dues INTEGER,
  savingsBudget INTEGER,
  emergency INTEGER,
  retirement INTEGER,
  college INTEGER,
  medicalBudget INTEGER,
  medications INTEGER,
  doctorBills INTEGER,
  hospitalBills INTEGER,
  otherMedical INTEGER,
  otherMedical2 INTEGER,
  otherMeidcal3 INTEGER,
  insuranceBudget INTEGER,
  lifeInsurance INTEGER,
  healthInsurance INTEGER,
  autoInsurance INTEGER,
  homeRentalInsurance INTEGER,
  disabilityInsurance INTEGER,
  longTermInsurance INTEGER,
  transportationBudget INTEGER,
  carGas INTEGER,
  carRepairs INTEGER,
  bus INTEGER,
  train INTEGER,
  newCarFund INTEGER,
  otherTransportation INTEGER,
  personalBudget INTEGER,
  educationTuition INTEGER,
  childCare INTEGER,
  hairCareCosmetics INTEGER,
  bookSupplies INTEGER,
  childSupport INTEGER,
  alimony INTEGER,
  pocketMoney INTEGER,
  subscriptions INTEGER,
  babySupplies INTEGER,
  petSupplies INTEGER,
  otherPersonal INTEGER,
  otherPersonal2 INTEGER,
  otherPersonal3 INTEGER,
  entertainmentBudget INTEGER,
  entertainment INTEGER,
  vacation INTEGER,
  debtBudget INTEGER,
  carPayment1 INTEGER,
  carPayment2 INTEGER,
  creditCard1 INTEGER,
  creditCard2 INTEGER,
  creditCard3 INTEGER,
  creditCard4 INTEGER,
  creditCard5 INTEGER,
  creditCard6 INTEGER,
  studentLoan1 INTEGER,
  studentLoan2 INTEGER,
  studentLoan3 INTEGER,
  studentLoan4 INTEGER,
  debt1 INTEGER,
  debt2 INTEGER,
  debt3 INTEGER,
  debt4 INTEGER,
	FOREIGN KEY (user_id) REFERENCES users(id)
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