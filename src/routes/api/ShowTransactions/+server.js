// @ts-nocheck
import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL';
import { transactions } from '$lib/Components/globalFunctions.js';
import { get } from 'svelte/store';
import { formatDayTran } from '$lib/Components/globalFunctions';

export async function POST({ request }) {
	let connect = await ConnectionDB();
	const { updatedMonth, selectedDateName } = await request.json();
	console.log('Received data:', { updatedMonth, selectedDateName });

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

	const month = getMonthNumber(updatedMonth.split(' ')[0]);
	const year = updatedMonth.split(' ')[1];

	// DATE
	let sortByDate = 'DESC';
	if (
		selectedDateName ===
		'<p class="date-display px-2">31</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">01</p>'
	) {
		sortByDate = 'DESC';
	} else {
		sortByDate = 'ASC';
	}

	// Final Query
	const sortedQuery =
		'SELECT Categories.category_type AS type_tran, Transactions.amount, Categories.category_name AS category, Transactions.tran_date, Transactions.id_tran FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(Transactions.tran_date) = ? AND YEAR(Transactions.tran_date) = ? ORDER BY Transactions.tran_date ' +
		sortByDate +
		', Transactions.id_tran ' +
		sortByDate;
	const [sortedTransactions] = await connect.query(sortedQuery, [month, year]);

	const grouped_results = [];
	sortedTransactions.forEach((row) => {
		const tran_date = formatDayTran(row.tran_date);
		const existing_result = grouped_results.find(([date]) => date === tran_date);

		if (existing_result) {
			existing_result[1].push(row);
		} else {
			grouped_results.push([tran_date, [row]]);
		}
	});

	transactions.set(grouped_results);

	return json({ grouped_results });
}
