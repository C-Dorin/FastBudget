import mysql from 'mysql2/promise';

/** @type {Promise<mysql.Connection> | null} */
let mysqlconnection = null;

export function ConnectionDB() {
	if (!mysqlconnection) {
		mysqlconnection = mysql.createConnection({
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'FastBudget'
		});
	}

	return mysqlconnection;
}
