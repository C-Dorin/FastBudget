// @ts-nocheck
import { ConnectionDB } from '$lib/Database/mySQL';
import { monthValue, formatDayTran } from '$lib/Components/globalFunctions';
import { optionSortBy } from '$lib/Components/globalStore';

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
		'SELECT SUM(amount) as totalIncome FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Income"',
		[month, year]
	);

	// expense
	let monthlyExpense = await mysqlconnection.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Expense"',
		[month, year]
	);

	// ===== Transactions ===== //
	// transactions
	const dateDesc =
		'SELECT Categories.category_type AS type_tran, Transactions.amount, Categories.category_name as category, Transactions.tran_date, Transactions.id_tran FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category ORDER BY tran_date DESC, id_tran DESC';
	const dateAsc =
		'SELECT * FROM Transactions WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? ORDER BY tran_date ASC, id_tran ASC';
	const category =
		"SELECT * FROM Transactions WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND category = 'Salariu' ORDER BY tran_date DESC, id_tran DESC";
	const typeIncome =
		"SELECT * FROM Transactions WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND amount_type = 'income' ORDER BY tran_date DESC, id_tran DESC";
	const typeExpense =
		"SELECT * FROM Transactions WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND amount_type = 'expense' ORDER BY tran_date DESC, id_tran DESC";
	const typeTransfer =
		"SELECT * FROM Transactions WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND amount_type = 'transfer' ORDER BY tran_date DESC, id_tran DESC";

	const tranQuery = [dateDesc, dateAsc, category, typeIncome, typeExpense, typeTransfer];
	const [dateDescendingTran] = await mysqlconnection.query(tranQuery[0], [month, year]);

	const grouped_results = new Map();
	dateDescendingTran.forEach((row) => {
		const tran_date = formatDayTran(row.tran_date);
		const existing_result = grouped_results.get(tran_date) || [];
		if (!existing_result.some((existing_entry) => existing_entry.id_tran === row.id_tran)) {
			existing_result.push(row);
		}
		grouped_results.set(tran_date, existing_result);
	});

	let icon_accountName = await mysqlconnection.query(
		'SELECT account_name, icon_name FROM Accounts'
	);

	return {
		income: monthlyIncome[0],
		expense: monthlyExpense[0],
		transactions: grouped_results
	};
}
