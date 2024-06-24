// @ts-nocheck

//
//
// ===== Accounts ===== //
//
//
export async function addAccount(
	id_superAccount,
	account_name,
	id_currency,
	initial_amount,
	amount,
	note
) {
	const data = JSON.stringify({
		id_superAccount,
		account_name,
		id_currency,
		initial_amount,
		amount,
		note
	});
	await fetch('Queries/InsertData/InsertAccounts', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function updateAccount(
	id_superAccount,
	account_name,
	id_currency,
	initial_amount,
	amount,
	note,
	id_accounts
) {
	const data = JSON.stringify({
		id_superAccount,
		account_name,
		id_currency,
		initial_amount,
		amount,
		note,
		id_accounts
	});
	await fetch('Queries/UpdateData/UpdateAccounts', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deleteAccount(id_account) {
	const data = JSON.stringify({ id_account });
	await fetch('Queries/DeleteData/DeleteAccounts', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== Budgets ===== //
//
//
export async function addBudget(id_account, id_category, amount, payback, duration, note) {
	const data = JSON.stringify({ id_account, id_category, amount, payback, duration, note });
	await fetch('Queries/InsertBudget/InsertBudgets', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function updateBudget(
	id_account,
	id_category,
	amount,
	payback,
	duration,
	note,
	id_budget
) {
	const data = JSON.stringify({
		id_account,
		id_category,
		amount,
		payback,
		duration,
		note,
		id_budget
	});
	await fetch('Queries/UpdateData/UpdateBudgets', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deleteBudget(id_budget) {
	const data = JSON.stringify({ id_budget });
	await fetch('Queries/DeleteData/DeleteBudgets', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== Categories ===== //
//
//
export async function addCategory(category_type, category_name, icon_name) {
	const data = JSON.stringify({ category_type, category_name, icon_name });
	await fetch('Queries/InsertData/InsertCategories', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function updateCategory(category_type, category_name, icon_name, id_category) {
	const data = JSON.stringify({ category_type, category_name, icon_name, id_category });
	await fetch('Queries/UpdateData/UpdateCategories', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deleteCategory(icon_name, id_category) {
	const data = JSON.stringify({ icon_name, id_category });
	await fetch('Queries/DeleteData/DeleteCategories', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== Debts ===== //
//
//
export async function addDebt(
	id_account,
	amount,
	start_date,
	finish_date,
	debt_type,
	id_person,
	note
) {
	const data = JSON.stringify({
		id_account,
		amount,
		start_date,
		finish_date,
		debt_type,
		id_person,
		note
	});
	await fetch('Queries/InsertData/InsertDebts', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function updateDebt(
	id_account,
	amount,
	payback,
	start_date,
	finish_date,
	debt_type,
	visibility,
	id_person,
	note,
	id_debt
) {
	const data = JSON.stringify({
		id_account,
		amount,
		payback,
		start_date,
		finish_date,
		debt_type,
		visibility,
		id_person,
		note,
		id_debt
	});
	await fetch('Queries/UpdateData/UpdateDebts', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deleteDebt(id_debt) {
	const data = JSON.stringify({ id_debt });
	await fetch('Queries/DeleteData/DeleteDebts', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== People ===== //
//
//
export async function addPerson(person_name) {
	const data = JSON.stringify({ person_name });
	await fetch('Queries/InsertData/InsertPeople', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function updatePerson(person_name, id_person) {
	const data = JSON.stringify({ person_name, id_person });
	await fetch('Queries/UpdateData/UpdatePeople', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deletePerson(visibility, id_person) {
	const data = JSON.stringify({ visibility, id_person });
	await fetch('Queries/DeleteData/DeletePeople', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== Transactions ===== //
//
//
export async function addTransaction(
	id_account,
	amount_type,
	category,
	img,
	amount,
	currency,
	date_tran,
	note
) {
	const data = JSON.stringify({
		id_account,
		amount_type,
		category,
		img,
		amount,
		currency,
		date_tran,
		note
	});
	await fetch('../Queries/InsertData/InsertTransactions', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
}

export async function updateTransaction(
	id_account,
	id_category,
	id_account_consignee,
	amount,
	tran_date,
	id_person,
	note,
	id_tran
) {
	const data = JSON.stringify({
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		id_tran
	});
	await fetch('Queries/UpdateData/UpdateTransactions', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deleteTransaction(id_tran) {
	const data = JSON.stringify({ id_tran });
	await fetch('Queries/DeleteData/DeleteTransactions', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== Scheduled Transactions ===== //
//
//
export async function addScheduledTransaction(
	id_account,
	id_category,
	id_account_consignee,
	amount,
	tran_date,
	id_person,
	note,
	iterations_per_time,
	time,
	iterations
) {
	const data = JSON.stringify({
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		iterations_per_time,
		time,
		iterations
	});
	await fetch('Queries/InsertData/InsertScheduledTransactions', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function updateScheduledTransaction(
	id_account,
	id_category,
	id_account_consignee,
	amount,
	tran_date,
	id_person,
	note,
	iterations_per_time,
	time,
	iterations,
	id_sched_tran
) {
	const data = JSON.stringify({
		id_account,
		id_category,
		id_account_consignee,
		amount,
		tran_date,
		id_person,
		note,
		iterations_per_time,
		time,
		iterations,
		id_sched_tran
	});
	await fetch('Queries/UpdateData/UpdateScheduledTransactions', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

export async function deleteScheduledTransaction(id_sched_tran) {
	const data = JSON.stringify({ id_sched_tran });
	await fetch('Queries/DeleteData/DeleteScheduledTransactions', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}

//
//
// ===== Settings ===== //
//
//
export async function updateSetting(nr_option, id_setting) {
	const data = JSON.stringify({ nr_option, id_setting });
	await fetch('Queries/UpdateData/UpdateSettings', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
}
