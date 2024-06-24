import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_DATA = 'DELETE FROM Budgets WHERE id_budget = ?';

export async function POST({ request }) {
	const { id_budget } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [id_budget]);

	return json(result);
}
