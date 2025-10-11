<script lang="ts">
	import { 
		Users, 
		Coins,
		Clock,
		Info
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Joining Raffles - Gaambl Raffle Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Users class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Joining Raffles</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			How to participate in existing Gaambl Raffle games
		</p>
	</div>

	<!-- Joining Process -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Joining Process</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Players can join active raffles by paying the entry fee in the specified token.
			</p>
			
			<div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
				<div class="flex items-start">
					<Info class="text-blue-500 mr-3 mt-0.5" size="20" />
					<div>
						<h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Requirements</h4>
						<ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
							<li>• Raffle must be in ACTIVE state</li>
							<li>• Raffle must not be expired or full</li>
							<li>• Pay exact entry fee in specified token</li>
							<li>• Cannot join the same raffle twice</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Function Signature -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Function Signature</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
				<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
					function joinRaffle(uint256 raffleId) external payable
				</code>
			</div>
		</div>
	</section>

	<!-- Payment Requirements -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Payment Requirements</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<div class="flex items-center mb-3">
						<Coins class="text-primary-500 mr-2" size="20" />
						<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">ETH Raffles</h3>
					</div>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li>• Send exact entry fee as msg.value</li>
						<li>• No token approval needed</li>
						<li>• Payment handled automatically</li>
					</ul>
				</div>
				<div>
					<div class="flex items-center mb-3">
						<Coins class="text-secondary-500 mr-2" size="20" />
						<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">ERC-20 Raffles</h3>
					</div>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li>• Approve token transfer first</li>
						<li>• Send msg.value = 0</li>
						<li>• Token transfer handled by contract</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Raffle Completion -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Raffle Completion</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="flex items-center mb-4">
				<Clock class="text-warning-500 mr-3" size="24" />
				<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">When Raffles Complete</h3>
			</div>
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Raffles automatically trigger completion in two scenarios:
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Max Players Reached</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						When the last player joins and reaches the maximum player limit, the raffle immediately requests randomness and begins the completion process.
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Manual Completion</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Anyone can call completeExpiredRaffle(raffleId) after the raffle duration expires to trigger completion for raffles with 2+ players.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/raffle/creating-raffles" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Creating Raffles
		</a>
		<a href="/raffle/nft-integration" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			NFT Integration →
		</a>
	</div>
</div>
