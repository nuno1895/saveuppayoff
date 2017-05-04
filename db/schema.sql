CREATE DATABASE saveup_db;
USE saveup_db;

CREATE TABLE users
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE month
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    month INTEGER NOT NULL,
    the_date DATE
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
    FOREIGN KEY (month_id) REFERENCES month(id)
);

CREATE TABLE expenses
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    type_id INTEGER NOT NULL,
    expenditure INTEGER DEFAULT 0,
    the_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (type_id) REFERENCES types(id)
);

CREATE TABLE take_home
(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    month_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (month_id) REFERENCES month(id)
);