import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA =
	'INSERT INTO Transactions(id_account, id_category, id_account_consignee, amount, tran_date, id_person, note) VALUES (?, ?, ?, ?, ?, ?, ?)';

export async function POST({ request }) {
	const { id_account, id_category, id_account_consignee, amount, tran_date, id_person, note } =
		await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note
	]);

	return json(result);
}
