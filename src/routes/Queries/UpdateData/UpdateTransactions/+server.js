import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA =
	'UPDATE Transactions SET id_account = ?, id_category = ?, id_account_consignee = ?, amount = ?, tran_date = ?, id_person = ?, note = ? WHERE id_tran = ?';

export async function POST({ request }) {
	const {
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		id_tran
	} = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		id_tran
	]);

	return json(result);
}
