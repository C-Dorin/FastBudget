import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_DATA = 'DELETE FROM Transactions WHERE id_tran = ?';

export async function POST({ request }) {
	const { id_tran } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [id_tran]);

	return json(result);
}
