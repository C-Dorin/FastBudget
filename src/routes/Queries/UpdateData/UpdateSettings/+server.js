import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA = 'UPDATE Settings SET nr_option = ? WHERE id_setting = ?';

export async function POST({ request }) {
	const { nr_option, id_setting } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [nr_option, id_setting]);

	return json(result);
}
