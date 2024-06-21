import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const INSERT_DATA =
	'INSERT INTO Accounts(id_superAccount, account_name, id_currency, initial_amount, amount, note) VALUES (?, ?, ?, ?, ?, ?)';

export async function POST({ request }) {
	const { id_superAccount, account_name, id_currency, initial_amount, amount, note } =
		await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(INSERT_DATA, [
		id_superAccount,
		account_name,
		id_currency,
		initial_amount,
		amount,
		note
	]);

	return json(result);
}
