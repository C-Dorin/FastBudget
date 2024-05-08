import { ConnectionDB } from '$lib/DataBase/mySQL';

export async function load() {
	let mysqlconnection = await ConnectionDB();

	let backupBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 1')
		.then(function ([rows, fields]) {
			return rows;
		});

	let monthlyBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 2')
		.then(function ([rows, fields]) {
			return rows;
		});

	let investmentBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 1')
		.then(function ([rows, fields]) {
			return rows;
		});

	return { backup: backupBalance, monthly: monthlyBalance, investment: investmentBalance };
}
