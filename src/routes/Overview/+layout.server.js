import { ConnectionDB } from '$lib/DataBase/mySQL';

export async function load() {
	let mysqlconnection = await ConnectionDB();

	let results = await mysqlconnection.query('select * from accounts').then(function ([
		rows,
		fields
	]) {
		return rows;
	});

	return { data: results };
}
