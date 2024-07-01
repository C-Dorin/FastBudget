// @ts-nocheck
import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL';
import { income, expense, transactions } from '$lib/Components/globalFunctions.js';
import { get } from 'svelte/store';
import { formatDayTran } from '$lib/Components/globalFunctions';

export async function POST({ request }) {
	let connect = await ConnectionDB();
	const monthValue = await request.json();

	function getMonthNumber(month) {
		const months = {
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12
		};

		return months[month] || null;
	}

	const month = getMonthNumber(monthValue.updatedMonth.split(' ')[0]);
	const year = monthValue.updatedMonth.split(' ')[1];

	// income
	let monthlyIncome = await connect.query(
		'SELECT SUM(amount) as totalIncome FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Income"',
		[month, year]
	);

	// expense
	let monthlyExpense = await connect.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Expense"',
		[month, year]
	);

	// transactions
	const dateDesc =
		'SELECT Categories.category_type AS type_tran, Transactions.amount, Categories.category_name AS category, Transactions.tran_date, Transactions.id_tran FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(Transactions.tran_date) = ? AND YEAR(Transactions.tran_date) = ? ORDER BY Transactions.tran_date DESC, Transactions.id_tran DESC';
	const [dateDescendingTran] = await connect.query(dateDesc, [month, year]);

	const grouped_results = [];
	dateDescendingTran.forEach((row) => {
		const tran_date = formatDayTran(row.tran_date);
		const existing_result = grouped_results.find(([date]) => date === tran_date);

		if (existing_result) {
			existing_result[1].push(row);
		} else {
			grouped_results.push([tran_date, [row]]);
		}
	});

	const totalIncome = monthlyIncome[0][0].totalIncome || 0;
	const totalExpense = monthlyExpense[0][0].totalExpense || 0;

	income.set(totalIncome);
	expense.set(totalExpense);
	transactions.set(grouped_results);

	return json({ totalIncome, totalExpense, grouped_results });
}
