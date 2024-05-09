import { ConnectionDB } from '$lib/Database/mySQL';

export async function load() {
	let mysqlconnection = await ConnectionDB();

	// ===== Total Summary ===== //
	// backup
	let backupBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 1')
		.then(function ([rows, fields]) {
			return rows;
		});

	// monthly
	let monthlyBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 2')
		.then(function ([rows, fields]) {
			return rows;
		});

	// investment
	let investmentBalance = await mysqlconnection
		.query('SELECT * FROM Accounts WHERE id_account = 1')
		.then(function ([rows, fields]) {
			return rows;
		});

	return {
		backup: backupBalance,
		monthly: monthlyBalance,
		investment: investmentBalance
	};
}
