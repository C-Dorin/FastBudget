import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA =
	'INSERT INTO Categories(category_type, category_name, icon_name) VALUES (?, ?, ?)';

export async function POST({ request }) {
	const { category_type, category_name, icon_name } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [category_type, category_name, icon_name]);

	return json(result);
}
