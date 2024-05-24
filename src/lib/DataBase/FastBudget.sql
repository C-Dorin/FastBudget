use FastBudget;

-- Deleting All Foreigns Key --
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_1;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_2;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_3;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_4;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_1;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_2;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_3;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_4;
ALTER TABLE Budgets DROP FOREIGN KEY budgets_ibfk_1;

-- Create Tables --
DROP TABLE IF EXISTS Currencies;
CREATE TABLE Currencies (
	id_currency INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	symbol VARCHAR(7) NOT NULL,
	country VARCHAR(7) NOT NULL
);

DROP TABLE IF EXISTS Accounts;
CREATE TABLE Accounts (
	id_account INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name_account VARCHAR(20) NOT NULL,
	id_currency INT NOT NULL,
	initial_amount DECIMAL(15, 2) NOT NULL,
	amount DECIMAL(20,2) NOT NULL,
	note VARCHAR(100)
);

DROP TABLE IF EXISTS Categories;
CREATE TABLE Categories (
	id_category INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	category_type ENUM('income', 'expense', 'transfer') NOT NULL,
	name_category VARCHAR(50) NOT NULL,
	name_icon VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS Transactions;
CREATE TABLE Transactions (
	id_tran INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_category INT NOT NULL,
	id_account_consignee INT,
	amount DECIMAL(20,2) NOT NULL,
	id_currency INT NOT NULL,
	date_tran DATETIME NOT NULL,
	note VARCHAR(100),
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_category) REFERENCES Categories (id_category),
	FOREIGN KEY (id_account_consignee) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_currency) REFERENCES Currencies (id_currency)
);

DROP TABLE IF EXISTS Scheduled_Transactions;
CREATE TABLE Scheduled_Transactions (
	id_sched_tran INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_category INT NOT NULL,
	id_account_consignee INT,
	amount DECIMAL(20,2) NOT NULL,
	id_currency INT NOT NULL,
	date_tran DATETIME NOT NULL,
	note VARCHAR(100),
	iterations_per_time INT NOT NULL,
	time ENUM('weekly', 'monthly') NOT NULL,
	iterations VARCHAR(8) NOT NULL,
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_category) REFERENCES Categories (id_category),
	FOREIGN KEY (id_account_consignee) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_currency) REFERENCES Currencies (id_currency)
);

DROP TABLE IF EXISTS Budgets;
CREATE TABLE Budgets (
	id_budget INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name_budget VARCHAR(20) NOT NULL,
	id_account INT NOT NULL,
	id_category INT,
	amount DECIMAL(20,2) NOT NULL,
	duration DATETIME NOT NULL,
	note VARCHAR(100),
	FOREIGN KEY (id_category) REFERENCES Categories (id_category)
);

DROP TABLE IF EXISTS Debts;
CREATE TABLE Debts (
	id_debt INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	amount DECIMAL(20,2) NOT NULL,
	date_start DATETIME NOT NULL,
	date_finish DATETIME NOT NULL,
	person VARCHAR(50) NOT NULL,
	note VARCHAR(100)
);

DROP TABLE IF EXISTS Settings;
CREATE TABLE Settings (
	id_setting INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name_setting VARCHAR(40) NOT NULL,
	nr_option INT NOT NULL
);
