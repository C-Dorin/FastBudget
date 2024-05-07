use FastBudget;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Accounts;
SET FOREIGN_KEY_CHECKS = 1;
CREATE TABLE Accounts (
	id_account INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name_account VARCHAR(20) NOT NULL,
	currency VARCHAR(30) NOT NULL,
	initial_amount DECIMAL(15,2) NOT NULL,
	amount DECIMAL(20,2) NOT NULL,
	note VARCHAR(100)
);

DROP TABLE IF EXISTS Transactions;
CREATE TABLE Transactions (
	id_tran INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_account_consignee INT,
	category VARCHAR(50),
	img INT NOT NULL,
	amount DECIMAL(20,2) NOT NULL,
	currency VARCHAR(30) NOT NULL,
	date_tran DATETIME NOT NULL,
	note VARCHAR(100),
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_account_consignee) REFERENCES Accounts (id_account)
);

DROP TABLE IF EXISTS Scheduled_Transactions;
CREATE TABLE Scheduled_Transactions (
	id_sched_tran INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_account INT NOT NULL,
	id_account_consignee INT,
	category VARCHAR(50),
	img INT NOT NULL,
	amount DECIMAL(20,2) NOT NULL,
	currency VARCHAR(30) NOT NULL,
	date_sched_tran DATETIME NOT NULL,
	note VARCHAR(100),
	iterations_per_time INT NOT NULL,
	time ENUM('weekly', 'monthly') NOT NULL,
	iterations VARCHAR(8) NOT NULL,
	FOREIGN KEY (id_account) REFERENCES Accounts (id_account),
	FOREIGN KEY (id_account_consignee) REFERENCES Accounts (id_account)
);

DROP TABLE IF EXISTS Budgets;
CREATE TABLE Budgets (
	id_budget INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name_budget VARCHAR(20) NOT NULL,
	id_account INT NOT NULL,
	category VARCHAR(50),
	img INT NOT NULL,
	amount DECIMAL(20,2) NOT NULL,
	duration DATETIME NOT NULL,
	note VARCHAR(100)
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