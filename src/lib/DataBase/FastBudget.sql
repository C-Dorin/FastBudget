USE FastBudget;

-- Deleting All Foreigns Key --
ALTER TABLE Accounts DROP FOREIGN KEY accounts_ibfk_1;
ALTER TABLE Accounts DROP FOREIGN KEY accounts_ibfk_2;
ALTER TABLE Budgets DROP FOREIGN KEY budgets_ibfk_1;
ALTER TABLE Budgets DROP FOREIGN KEY budgets_ibfk_2;
ALTER TABLE Debts DROP FOREIGN KEY debts_ibfk_1;
ALTER TABLE Debts DROP FOREIGN KEY debts_ibfk_2;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_1;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_2;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_3;
ALTER TABLE Transactions DROP FOREIGN KEY transactions_ibfk_4;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_1;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_2;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_3;
ALTER TABLE Scheduled_Transactions DROP FOREIGN KEY scheduled_transactions_ibfk_4;

-- Create Tables --
DROP TABLE IF EXISTS Currencies;
CREATE TABLE Currencies (
	id_currency INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	symbol VARCHAR(7) NOT NULL,
	country VARCHAR(7) NOT NULL
);

DROP TABLE IF EXISTS People;
CREATE TABLE People (
	id_person INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	person_name VARCHAR(40) NOT NULL,
	visibility ENUM('Archived', 'Unarchived') NOT NULL DEFAULT 'Unarchived'
);

DROP TABLE IF EXISTS Categories;
CREATE TABLE Categories (
	id_category INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	category_type ENUM('Income', 'Expense', 'Transfer') NOT NULL,
	category_name VARCHAR(30) NOT NULL,
	icon_name VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS Settings;
CREATE TABLE Settings (
	id_setting INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	setting_name VARCHAR(30) NOT NULL,
	nr_option INT NOT NULL
);

DROP TABLE IF EXISTS Accounts;
CREATE TABLE Accounts (
	id_account INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_superAccount INT,
	account_name VARCHAR(30) NOT NULL,
	icon_name VARCHAR(20) NOT NULL,
	id_currency INT NOT NULL,
	initial_amount DECIMAL(15, 2) NOT NULL,
	amount DECIMAL(15,2) NOT NULL,
	note VARCHAR(150),
	FOREIGN KEY (id_superAccount) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_currency) REFERENCES Currencies (id_currency)
);

DROP TABLE IF EXISTS Budgets;
CREATE TABLE Budgets (
	id_budget INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_category INT NOT NULL,
	amount DECIMAL(15,2) NOT NULL,
	payback DECIMAL(15,2) NOT NULL DEFAULT 0,
	duration ENUM ('Weekly', 'Monthly') NOT NULL,
	note VARCHAR(150),
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_category) REFERENCES Categories (id_category)
);

DROP TABLE IF EXISTS Debts;
CREATE TABLE Debts (
	id_debt INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	amount DECIMAL(15,2) NOT NULL,
	payback DECIMAL(15,2) NOT NULL DEFAULT 0,
	start_date DATE NOT NULL,
	finish_date DATE NOT NULL,
	debt_type ENUM('Debt', 'Loan') NOT NULL,
	visibility ENUM('Archived', 'Unarchived') NOT NULL DEFAULT 'Unarchived',
	id_person INT NOT NULL,
	note VARCHAR(150),
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_person) REFERENCES People (id_person)
);

DROP TABLE IF EXISTS Transactions;
CREATE TABLE Transactions (
	id_tran INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_category INT NOT NULL,
	id_account_consignee INT,
	amount DECIMAL(15,2) NOT NULL,
	tran_date DATETIME NOT NULL,
	id_person INT,
	note VARCHAR(150),
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_category) REFERENCES Categories (id_category),
	FOREIGN KEY (id_account_consignee) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_person) REFERENCES People (id_person)
);

DROP TABLE IF EXISTS Scheduled_Transactions;
CREATE TABLE Scheduled_Transactions (
	id_sched_tran INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_category INT NOT NULL,
	id_account_consignee INT,
	amount DECIMAL(15,2) NOT NULL,
	tran_date DATETIME NOT NULL,
	id_person INT,
	note VARCHAR(150),
	iterations_per_time INT NOT NULL,
	time ENUM('Days','Weeks', 'Months', 'Years') NOT NULL,
	iterations INT NOT NULL,
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_category) REFERENCES Categories (id_category),
	FOREIGN KEY (id_account_consignee) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_person) REFERENCES People (id_person)
);
