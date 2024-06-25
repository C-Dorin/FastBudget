import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA =
	'INSERT INTO Scheduled_Transactions(id_account, id_category, id_account_consignee, amount, tran_date, id_person, note, iterations_per_time, time, iterations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

export async function POST({ request }) {
	const {
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		iterations_per_time,
		time,
		iterations
	} = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		iterations_per_time,
		time,
		iterations
	]);

	return json(result);
}
