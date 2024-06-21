import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA =
	'UPDATE Budgets SET id_account = ?, id_category = ?, amount = ?, payback = ?, duration = ?, note = ? WHERE id_budget = ?';

export async function POST({ request }) {
	const { id_account, id_category, amount, payback, duration, note, id_budget } =
		await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [
		id_account,
		id_category,
		amount,
		payback,
		duration,
		note,
		id_budget
	]);

	return json(result);
}
