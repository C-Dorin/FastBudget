import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_DATA = 'UPDATE People SET visibility = ? WHERE id_person = ?';

export async function POST({ request }) {
	const { visibility, id_person } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [visibility, id_person]);

	return json(result);
}
