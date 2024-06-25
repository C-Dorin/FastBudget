import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA =
	'INSERT INTO Budgets(id_account, id_category, amount, payback, duration, note) VALUES (?, ?, ?, ?, ?, ?)';

export async function POST({ request }) {
	const { id_account, id_category, amount, payback, duration, note } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [
		id_account,
		id_category,
		amount,
		payback,
		duration,
		note
	]);

	return json(result);
}
