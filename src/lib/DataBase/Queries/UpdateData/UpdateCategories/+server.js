import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA =
	'UPDATE Categories SET category_type = ?, category_name = ?, icon_name = ? WHERE id_category = ?';

export async function POST({ request }) {
	const { category_type, category_name, icon_name, id_category } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [
		category_type,
		category_name,
		icon_name,
		id_category
	]);

	return json(result);
}
