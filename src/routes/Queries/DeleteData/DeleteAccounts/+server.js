import { json } from '@sveltejs/kit';
import { ConnectionDB } from '$lib/Database/mySQL.js';

const DELETE_TRANSACTIONS =
	'DELETE FROM Transactions WHERE id_account = ? or id_account_consignee = ?;';
const DELETE_SCHEDULED_TRANSACTIONS =
	'DELETE FROM Scheduled_Transactions WHERE id_account = ? or id_account_consignee = ?;';
const DELETE_BUDGETS = 'DELETE FROM Budgets WHERE id_account = ?;';
const DELETE_DEBTS = 'DELETE FROM Debts WHERE id_account = ?;';
const DELETE_ACCOUNTS = 'DELETE FROM Accounts WHERE id_account = ? or id_superAccount = ?;';

const DELETE_DATA =
	DELETE_TRANSACTIONS +
	DELETE_SCHEDULED_TRANSACTIONS +
	DELETE_BUDGETS +
	DELETE_DEBTS +
	DELETE_ACCOUNTS;

export async function POST({ request }) {
	const { id_account } = await request.json();

	let connection = await ConnectionDB();

	let result = await connection.query(DELETE_DATA, [
		id_account,
		id_account,
		id_account,
		id_account,
		id_account,
		id_account,
		id_account,
		id_account
	]);

	return json(result);
}
