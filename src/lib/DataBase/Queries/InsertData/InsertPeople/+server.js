import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA = 'INSERT INTO People(person_name) VALUES (?)';

export async function POST({ request }) {
	const { person_name } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [person_name]);

	return json(result);
}
