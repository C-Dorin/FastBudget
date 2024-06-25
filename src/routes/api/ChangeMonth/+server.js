import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL';

export async function POST({ request }) {
	let connect = await ConnectionDB();
	let month;
	let year;
	const monthValue = await request.json();

	monthValue.subscribe((value) => {
		const currentMonth = new Date(value).getMonth() + 1;
		const currentYear = new Date(value).getFullYear();
		month = currentMonth;
		year = currentYear;
	});

	// income
	let monthlyIncome = await connect.query(
		'SELECT SUM(amount) as totalIncome FROM Transactions INNER JOIN Categories ON Transactions.id_category = Categories.id_category WHERE MONTH(tran_date) = ? AND YEAR(tran_date) = ? AND Categories.category_type = "Income"',
		[month, year]
	);

	return json(monthlyIncome);
}
