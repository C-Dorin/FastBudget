import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_DATA = 'UPDATE Categories SET icon_name = ? WHERE id_category = ?';

export async function POST({ request }) {
	const { icon_name, id_category } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [icon_name, id_category]);

	return json(result);
}
