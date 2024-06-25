import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA =
	'UPDATE Scheduled_Transactions SET id_account = ?, id_category = ?, id_account_consignee = ?, amount = ?, tran_date = ?, id_person = ?, note = ?, iterations_per_time = ?, time = ?, iterations = ? WHERE id_sched_tran = ?';

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
		iterations,
		id_sched_tran
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
		iterations_per_time,
		time,
		iterations,
		id_sched_tran
	]);

	return json(result);
}
