import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA =
	'INSERT INTO Debts(id_account, amount, start_date, finish_date, debt_type, id_person, note) VALUES (?, ?, ?, ?, ?, ?, ?)';

export async function POST({ request }) {
	const { id_account, amount, start_date, finish_date, debt_type, id_person, note } =
		await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [
		id_account,
		amount,
		start_date,
		finish_date,
		debt_type,
		id_person,
		note
	]);

	return json(result);
}
