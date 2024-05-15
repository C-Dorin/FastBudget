// @ts-nocheck
import { ConnectionDB } from '$lib/Database/mySQL';
import { monthValue, formatDayTran } from './localFunctions';

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

	// ===== Monthly Summary ===== //
	// income
	let monthlyIncome = await mysqlconnection.query(
		'SELECT SUM(amount) as totalIncome FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? AND amount_type = "income"',
		[month, year]
	);

	// expense
	let monthlyExpense = await mysqlconnection.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? AND amount_type = "expense"',
		[month, year]
	);

	// ===== Transactions ===== //
	// transactions
	const [dateDescendingTran] = await mysqlconnection.query(
		'SELECT * FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? ORDER BY date_tran DESC, id_tran DESC',
		[month, year]
	);

	const grouped_results = new Map();
	dateDescendingTran.forEach((row) => {
		const date_tran = formatDayTran(row.date_tran);
		const existing_result = grouped_results.get(date_tran) || [];
		if (!existing_result.some((existing_entry) => existing_entry.id_tran === row.id_tran)) {
			existing_result.push(row);
		}
		grouped_results.set(date_tran, existing_result);
	});

	return {
		income: monthlyIncome[0],
		expense: monthlyExpense[0],
		transactions: grouped_results
	};
}
