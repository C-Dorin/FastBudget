import { ConnectionDB } from '$lib/Database/mySQL';

export async function load() {
	let mysqlconnection = await ConnectionDB();

	// ===== Forms ===== //
	let icon_accountNames = await mysqlconnection
		.query('SELECT account_name AS name, icon_name AS icon FROM Accounts')
		.then(function ([rows]) {
			return rows;
		});

	let icon_categoryIncomeNames = await mysqlconnection
		.query(
			'SELECT category_name AS name, icon_name AS icon FROM Categories WHERE category_type = "Income"'
		)
		.then(function ([rows]) {
			return rows;
		});

	let icon_categoryExpenseNames = await mysqlconnection
		.query(
			'SELECT category_name AS name, icon_name AS icon FROM Categories WHERE category_type = "Expense"'
		)
		.then(function ([rows]) {
			return rows;
		});

	return {
		accountOptions: icon_accountNames,
		categoryIncomeOptions: icon_categoryIncomeNames,
		categoryExpenseOptions: icon_categoryExpenseNames
	};
}
