import { ConnectionDB } from '$lib/Database/mySQL';
import { monthValue } from './localFunctions';

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
		.query('SELECT * FROM Transactions WHERE date_tran LIKE "2024-05%"')
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
		'SELECT SUM(amount) as totalIncome FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? AND amount_type = "income"',
		[month, year]
	);

	let monthlyExpense = await mysqlconnection.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? AND amount_type = "expense"',
		[month, year]
	);

	console.log(monthlyIncome[0]);
	console.log(month);

	return {
		backup: backupBalance,
		monthly: monthlyBalance,
		investment: investmentBalance,
		income: monthlyIncome[0],
		expense: monthlyExpense[0]
	};
}
