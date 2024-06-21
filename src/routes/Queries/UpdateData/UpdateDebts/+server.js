import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA =
	'UPDATE Debts SET id_account = ?, amount = ?, payback = ?, start_date = ?, finish_date = ?, debt_type = ?, visibility = ?, id_person = ?, note = ? WHERE id_debt = ?';

export async function POST({ request }) {
	const {
		id_account,
		amount,
		payback,
		start_date,
		finish_date,
		debt_type,
		visibility,
		id_person,
		note,
		id_debt
	} = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [
		id_account,
		amount,
		payback,
		start_date,
		finish_date,
		debt_type,
		visibility,
		id_person,
		note,
		id_debt
	]);

	return json(result);
}
