// @ts-nocheck
import { ConnectionDB } from '$lib/Database/mySQL';
import { monthValue, formatDayTran } from '../Transactions/localFunctions';
import { optionSortBy } from '$lib/Components/globalStore';
import { transactionStore } from './Object';

export async function load() {
	let mysqlconnection = await ConnectionDB();
	let month;
	let year;
	let option;

	monthValue.subscribe((value) => {
		const currentMonth = new Date(value).getMonth() + 1;
		const currentYear = new Date(value).getFullYear();
		month = currentMonth;
		year = currentYear;
	})();

	optionSortBy.subscribe((value) => {
		option = value;
	})();

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
	const dateDesc =
		'SELECT * FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? ORDER BY date_tran DESC, id_tran DESC';
	const dateAsc =
		'SELECT * FROM Transactions WHERE MONTH(date_tran) = ? AND YEAR(date_tran) = ? ORDER BY date_tran ASC, id_tran ASC';

	const tranQuery = [dateDesc, dateAsc];
	const [dateDescendingTran] = await mysqlconnection.query(tranQuery[option], [month, year]);

	transactionStore.set(dateDescendingTran);

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
