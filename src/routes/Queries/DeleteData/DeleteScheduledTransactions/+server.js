import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_DATA = 'DELETE FROM Scheduled_Transactions WHERE id_sched_tran = ?';

export async function POST({ request }) {
	const { id_sched_tran } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [id_sched_tran]);

	return json(result);
}
