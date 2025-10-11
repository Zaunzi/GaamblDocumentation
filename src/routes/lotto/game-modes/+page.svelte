<script lang="ts">
	import { 
		Target, 
		Users, 
		Percent,
		Info
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Game Modes - Gaambl Lotto Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Target class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Game Modes</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			Risk levels and win probabilities for Gaambl Lotto games
		</p>
	</div>

	<!-- Risk Modes Overview -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Risk Levels</h2>
		<p class="text-lg text-surface-600 dark:text-surface-400 mb-6">
			Gaambl Lotto offers four risk modes with different win probabilities and prize distributions.
		</p>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Moderate Mode -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6 border border-surface-200 dark:border-surface-700">
				<div class="flex items-center mb-4">
					<Users class="text-green-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">Moderate</h3>
					<span class="ml-auto px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
						25% Winners
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Highest win probability - one in four players wins a prize.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Win Rate:</strong> 25% of players</p>
					<p><strong>Best For:</strong> Steady returns and consistent participation</p>
				</div>
			</div>

			<!-- Aggressive Mode -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6 border border-surface-200 dark:border-surface-700">
				<div class="flex items-center mb-4">
					<Target class="text-primary-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">Aggressive</h3>
					<span class="ml-auto px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
						15% Winners
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Balanced risk and reward - one in seven players wins.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Win Rate:</strong> 15% of players</p>
					<p><strong>Best For:</strong> Balanced risk/reward gameplay</p>
				</div>
			</div>

			<!-- High Risk Mode -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6 border border-surface-200 dark:border-surface-700">
				<div class="flex items-center mb-4">
					<Percent class="text-warning-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">High Risk</h3>
					<span class="ml-auto px-3 py-1 bg-warning-100 dark:bg-warning-900 text-warning-800 dark:text-warning-200 rounded-full text-sm font-medium">
						10% Winners
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Higher payouts for winners - one in ten players wins.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Win Rate:</strong> 10% of players</p>
					<p><strong>Best For:</strong> Higher payout potential</p>
				</div>
			</div>

			<!-- Extreme Mode -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6 border border-surface-200 dark:border-surface-700">
				<div class="flex items-center mb-4">
					<Target class="text-error-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">Extreme</h3>
					<span class="ml-auto px-3 py-1 bg-error-100 dark:bg-error-900 text-error-800 dark:text-error-200 rounded-full text-sm font-medium">
						5% Winners
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Maximum prizes for winners - one in twenty players wins.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Win Rate:</strong> 5% of players</p>
					<p><strong>Best For:</strong> Maximum prize potential</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Prize Distribution -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Prize Distribution</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Prize distribution uses an exponential decay curve, with higher positions receiving larger portions of the prize pool.
			</p>
			
			<div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
				<div class="flex items-start">
					<Info class="text-blue-500 mr-3 mt-0.5" size="20" />
					<div>
						<h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">How It Works</h4>
						<ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
							<li>• Winners are selected using Fisher-Yates shuffle with entropy randomness</li>
							<li>• Prize pool is distributed using an exponential decay curve</li>
							<li>• First place gets the largest share, with decreasing amounts for lower positions</li>
							<li>• Platform fee is 2% of the total pool (configurable by admin)</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Game Parameters -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Game Parameters</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Player Limits</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Minimum Players:</strong> 10 (including creator)</li>
						<li><strong>Maximum Players:</strong> 500</li>
						<li><strong>Creator Auto-Join:</strong> Yes, creator automatically joins as first player</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Game Settings</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Duration:</strong> 24 hours to 30 days</li>
						<li><strong>Creation Fee:</strong> 0.001 ETH</li>
						<li><strong>Platform Fee:</strong> 2% (configurable by admin)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/lotto/overview" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Lotto Overview
		</a>
		<a href="/lotto/game-states" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Game States →
		</a>
	</div>
</div>
