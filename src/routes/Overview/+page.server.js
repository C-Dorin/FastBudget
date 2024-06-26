import { ConnectionDB } from '$lib/Database/mySQL';
import { monthValue } from '$lib/Components/globalFunctions';

export async function load() {
	let mysqlconnection = await ConnectionDB();
	let month;
	let year;

	const unsubscribe = monthValue.subscribe((value) => {
		const currentMonth = new Date(value).getMonth() + 1;
		const currentYear = new Date(value).getFullYear();
		month = currentMonth;
		year = currentYear;
	});
	unsubscribe();

	// ===== Total Summary ===== //
	// backup
	let backupBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 1')
		.then(function ([rows]) {
			return rows;
		});

	// monthly
	let monthlyBalance = await mysqlconnection
		.query('SELECT * FROM Transactions WHERE tran_date LIKE "2024-05%"')
		.then(function ([rows]) {
			return rows;
		});

	// investment
	let investmentBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 1')
		.then(function ([rows]) {
			return rows;
		});

	// ===== Monthly Summary ===== //
	// income
	let monthlyIncome = await mysqlconnection.query(
		'SELECT SUM(amount) as totalIncome FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "income"',
		[month, year]
	);

	// expense
	let monthlyExpense = await mysqlconnection.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "expense"',
		[month, year]
	);

	// ===== Transactions ===== //
	// transactions
	let lastTransactions = await mysqlconnection
		.query(
			'SELECT Categories.category_type AS type_tran, Transactions.amount, Categories.category_name as category FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category ORDER BY tran_date DESC, id_tran DESC LIMIT 5'
		)
		.then(function ([rows]) {
			return rows;
		});

	// ===== Total Summary Diagram ===== //

	// ===== Accounts ===== //
	// accounts
	let firstAccounts = await mysqlconnection
		.query('SELECT * FROM Accounts ORDER BY id_account LIMIT 7')
		.then(function ([rows]) {
			return rows;
		});

	// ===== Budgets ===== //

	return {
		backup: backupBalance,
		monthly: monthlyBalance,
		investment: investmentBalance,
		income: monthlyIncome[0],
		expense: monthlyExpense[0],
		transactions: lastTransactions,
		accounts: firstAccounts
	};
}
