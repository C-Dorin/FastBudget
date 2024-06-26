// @ts-nocheck
import { ConnectionDB } from '$lib/Database/mySQL';

export async function load() {
	let mysqlconnection = await ConnectionDB();

	return {};
}
