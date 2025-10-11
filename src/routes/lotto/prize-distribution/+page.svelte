<script lang="ts">
	import { 
		Trophy, 
		Percent,
		Shuffle,
		Info
	} from '@lucide/svelte';
	import PrizeCalculator from '$lib/components/PrizeCalculator.svelte';
</script>

<svelte:head>
	<title>Prize Distribution - Gaambl Lotto Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Trophy class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Prize Distribution</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			How winners are selected and prizes are distributed in Gaambl Lotto games
		</p>
	</div>

	<!-- Winner Selection -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Winner Selection Process</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Winners are selected using a provably fair process with Fisher-Yates shuffle and exponential decay curve distribution.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-2">
						<Shuffle class="text-primary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Fisher-Yates Shuffle</h4>
					</div>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						All players are shuffled using the entropy random number to ensure fair, unpredictable winner selection.
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-2">
						<Percent class="text-secondary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Winner Count Calculation</h4>
					</div>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Number of winners is calculated based on the risk mode percentage of total players.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Prize Calculation -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Prize Calculation Formula</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Prize distribution uses an exponential decay curve that favors early winners with larger prizes. The formula ensures provably fair distribution while creating exciting winner-takes-most scenarios.
			</p>
			
			<div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 mb-6">
				<div class="flex items-start">
					<Info class="text-blue-500 mr-3 mt-0.5" size="20" />
					<div>
						<h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Prize Pool Breakdown</h4>
						<ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
							<li>• Total pool = sum of all entry fees</li>
							<li>• Platform fee = 2% of total pool</li>
							<li>• Prize pool = total pool - platform fee</li>
							<li>• Winners get 98% of the total pool</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="bg-surface-100 dark:bg-surface-800 rounded-lg p-4">
				<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-3">Mathematical Formula</h4>
				<div class="space-y-3 text-sm font-mono text-surface-700 dark:text-surface-300">
					<div>
						<span class="text-surface-600 dark:text-surface-400">// Calculate position for each winner</span><br>
						<span class="text-primary-500">position</span> = (i × 1,000,000) ÷ winnersCount
					</div>
					<div>
						<span class="text-surface-600 dark:text-surface-400">// Calculate decay factor</span><br>
						<span class="text-primary-500">decayFactor</span> = (curveFactor × position) ÷ 1,000,000
					</div>
					<div>
						<span class="text-surface-600 dark:text-surface-400">// Calculate weight using exponential curve</span><br>
						<span class="text-primary-500">weight</span> = ((1,000,000 - decayFactor)²) ÷ 1,000,000
					</div>
					<div>
						<span class="text-surface-600 dark:text-surface-400">// Distribute prizes proportionally</span><br>
						<span class="text-primary-500">prize</span> = (prizePool × weight) ÷ totalWeight
					</div>
				</div>
				<div class="mt-4 text-xs text-surface-600 dark:text-surface-400">
					<p><strong>Where:</strong></p>
					<ul class="space-y-1 mt-1">
						<li>• <code>i</code> = winner position (0, 1, 2, ...)</li>
						<li>• <code>curveFactor</code> = risk mode multiplier (300,000 to 1,000,000)</li>
						<li>• <code>winnersCount</code> = number of winners based on risk mode</li>
						<li>• <code>prizePool</code> = total pool minus 2% platform fee</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Calculator -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Interactive Prize Calculator</h2>
		<div class="mb-6">
			<p class="text-lg text-surface-600 dark:text-surface-400">
				Use the calculator below to see exact prize distributions for any game configuration. This uses the same formula as the smart contract, so you'll get accurate results for any scenario.
			</p>
		</div>
		
		<PrizeCalculator />
	</section>


	<!-- Claiming Prizes -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Claiming Prizes</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Winners must manually claim their prizes after the game is completed.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Claim Function</h4>
					<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
						function claimPrize(uint256 gameId) external
					</code>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Claim Process</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Prizes are reserved in contract until claimed</li>
						<li>• Winners must call claimPrize() to receive their winnings</li>
						<li>• Prizes are transferred in the same token as the entry fee</li>
						<li>• Gas-optimized O(1) prize tracking and removal</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/lotto/joining-games" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Joining Games
		</a>
		<a href="/lotto/monitoring" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Monitoring →
		</a>
	</div>
</div>
