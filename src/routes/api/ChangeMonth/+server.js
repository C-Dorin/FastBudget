// @ts-nocheck
import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL';
import { income, expense } from '$lib/Components/globalFunctions.js';
import { get } from 'svelte/store';

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

	// income
	let monthlyExpense = await connect.query(
		'SELECT SUM(amount) as totalExpense FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Expense"',
		[month, year]
	);

	const totalIncome = monthlyIncome[0][0].totalIncome || 0;
	const totalExpense = monthlyExpense[0][0].totalExpense || 0;

	income.set(totalIncome);
	expense.set(totalExpense);

	return json({ totalIncome, totalExpense });
}
