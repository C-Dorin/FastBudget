import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA = 'UPDATE People SET person_name = ? WHERE id_person = ?';

export async function POST({ request }) {
	const { person_name, id_person } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [person_name, id_person]);

	return json(result);
}
