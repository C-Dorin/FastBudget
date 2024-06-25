import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const UPDATE_DATA =
	'UPDATE Accounts SET id_superAccount = ?, account_name = ?, id_currency = ?, initial_amount = ?, amount = ?, note = ? WHERE id_accounts = ?';

export async function POST({ request }) {
	const { id_superAccount, account_name, id_currency, initial_amount, amount, note, id_accounts } =
		await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(UPDATE_DATA, [
		id_superAccount,
		account_name,
		id_currency,
		initial_amount,
		amount,
		note,
		id_accounts
	]);

	return json(result);
}
