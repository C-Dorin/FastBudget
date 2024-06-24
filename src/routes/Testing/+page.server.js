// @ts-nocheck
import { ConnectionDB } from '$lib/Database/mySQL';
import { monthValue } from '$lib/Components/globalFunctions';
import { writable } from 'svelte/store';

export async function load() {
	let mysqlconnection = await ConnectionDB();
	let month;
	let year;

	monthValue.subscribe((value) => {
		const currentMonth = new Date(value).getMonth() + 1;
		const currentYear = new Date(value).getFullYear();
		month = currentMonth;
		year = currentYear;
	})();

	// ===== Monthly Summary ===== //
	// income
	let monthlyIncome = await mysqlconnection.query(
		'SELECT SUM(amount) as totalIncome FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Income"',
		[month, year]
	);

	// expense
	let monthlyExpense = await mysqlconnection.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Expense"',
		[month, year]
	);

	return {
		income: monthlyIncome[0],
		expense: monthlyExpense[0]
	};
}
