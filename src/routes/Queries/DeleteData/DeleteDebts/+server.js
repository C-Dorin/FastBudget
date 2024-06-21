import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_DATA = 'DELETE FROM Debts WHERE id_debt = ?';

export async function POST({ request }) {
	const { id_debt } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [id_debt]);

	return json(result);
}
