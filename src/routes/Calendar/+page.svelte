<script>
	import { formatNumber } from '../Overview/localFunctions';
	let total = 700 - 500;
	let colorTotal = '';

	switch (true) {
		case total === 0:
			colorTotal = 'text-white';
			break;
		case total > 0:
			colorTotal = 'green_TC';
			break;
		case total < 0:
			colorTotal = 'red_TC';
			break;
	}
</script>

<div class="p-2">
	<div class="p-2">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<!-- Month -->
			<div class="flex text-2xl justify-between">
				<button class="flex items-center">
					<span class="material-symbols-outlined"> arrow_back_ios </span>
				</button>
				<p class="pb-2 border-b border-LT" style="width: 40%;">May 2024</p>
				<button class="flex items-center">
					<span class="material-symbols-outlined"> arrow_forward_ios </span>
				</button>
			</div>

			<!-- Values -->
			<div class="flex justify-between px-6 pt-6">
				<div>
					<p class="font-semibold">Income</p>
					<p class="green_TC">{formatNumber(700)} $</p>
				</div>
				<div>
					<p class="font-semibold">Expenses</p>
					<p class="red_TC">{formatNumber(500)} $</p>
				</div>
				<div>
					<p class="font-semibold">Total</p>
					<p class={colorTotal}>{formatNumber(total)} $</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Calendar -->
	<div class="p-2">
		<div class=" flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG">
			<!-- Week -->
			<div class="grid grid-cols-7">
				<div class="p-2">
					<p class="text-2xl font-bold">Mon</p>
				</div>
				<div class="p-2">
					<p class="text-2xl font-bold">Tue</p>
				</div>
				<div class="p-2">
					<p class="text-2xl font-bold">Wed</p>
				</div>
				<div class="p-2">
					<p class="text-2xl font-bold">Thu</p>
				</div>
				<div class="p-2">
					<p class="text-2xl font-bold">Fri</p>
				</div>
				<div class="p-2">
					<p class="text-2xl font-bold">Sat</p>
				</div>
				<div class="p-2">
					<p class="text-2xl font-bold">Sun</p>
				</div>
			</div>

			<!-- Days of the Weeks -->
			<div class="grid grid-cols-7 border-[0.5px] border-sky-800">
				<!-- Monday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full bg-green-600"></div>
						<button class="px-1">01</button>
						<div class="px-2 h-4 rounded-full bg-red-600"></div>
					</div>
					<div class="flex flex-col content-between space-y-0.5">
						<div class="">4 Transactions</div>
						<div class="text-green-600 text-center">300 $</div>
					</div>
				</div>
				<!-- Tuesday -->
				<div class="h-28 border-[0.5px] border-sky-800">
					<div class="flex justify-between items-center p-1">
						<div class="px-2 h-4 rounded-full bg-green-600"></div>
						<button class="px-1">02</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Wednesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">03</button>
						<div class="px-2 h-4 rounded-full bg-red-600"></div>
					</div>
				</div>
				<!-- Thursday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">04</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Friday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">05</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Saturday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">06</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Sunday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">07</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Second Week -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">08</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Tuesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">09</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Wednesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">10</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Thursday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">11</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Friday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">12</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Saturday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">13</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Sunday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">14</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Third Week -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">15</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Tuesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">16</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Wednesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">17</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Thursday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">18</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Friday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">19</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Saturday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">20</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Sunday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">21</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Fourth Week -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">22</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Tuesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">23</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Wednesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">24</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Thursday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">25</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Friday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">26</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Saturday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">27</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Sunday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">28</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Fivth Week -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">29</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Tuesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">30</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Wednesday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1">31</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Thursday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1 text-gray-400">01</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Friday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1 text-gray-400">02</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Saturday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1 text-gray-400">03</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
				<!-- Sunday -->
				<div class="h-28 border-[0.5px] border-sky-800 p-1">
					<div class="flex justify-between items-center">
						<div class="px-2 h-4 rounded-full"></div>
						<button class="px-1 text-gray-400">04</button>
						<div class="px-2 h-4 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
