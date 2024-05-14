import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL';

let query =
	'INSERT INTO Transactions(id_account, amount_type, category, img, amount, currency, date_tran, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

export async function POST({ request }) {
	const { id_account, amount_type, category, img, amount, currency, date_tran, note } =
		await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(query, [
		id_account,
		amount_type,
		category,
		img,
		amount,
		currency,
		date_tran,
		note
	]);

	return json(result);
}
