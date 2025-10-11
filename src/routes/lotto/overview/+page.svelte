<script lang="ts">
	import { 
		Dice1, 
		Users, 
		Clock, 
		TrendingUp, 
		Shield, 
		ExternalLink 
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Gaambl Lotto Overview - Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Dice1 class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Gaambl Lotto</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			Token-based lottery games with configurable risk modes and provably fair randomness
		</p>
	</div>

	<!-- What is Gaambl Lotto -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">What is Gaambl Lotto?</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Gaambl Lotto is a token-based lottery game where multiple players contribute to a prize pool, and winners are selected 
				based on configurable risk modes. The creator automatically joins as the first player, creating aligned incentives 
				for fair and attractive games.
			</p>
			
			<div class="grid md:grid-cols-2 gap-6 mt-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Key Features</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<TrendingUp class="text-primary-500 mr-2" size="16" />
							Configurable risk modes (5% to 25% win rate)
						</li>
						<li class="flex items-center">
							<Users class="text-secondary-500 mr-2" size="16" />
							10-500 players per game
						</li>
						<li class="flex items-center">
							<Clock class="text-success-500 mr-2" size="16" />
							24 hours to 30 days duration
						</li>
						<li class="flex items-center">
							<Shield class="text-warning-500 mr-2" size="16" />
							Provably fair randomness via Pyth Network
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Game Parameters</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Minimum Players:</strong> 10 (including creator)</li>
						<li><strong>Maximum Players:</strong> 500</li>
						<li><strong>Duration:</strong> 24 hours to 30 days</li>
						<li><strong>Creation Fee:</strong> 0.001 ETH</li>
						<li><strong>Platform Fee:</strong> 2% (configurable by admin)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Game Modes -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Game Modes (Risk Levels)</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-3">
					<div class="bg-success-100 dark:bg-success-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
						<span class="text-success-600 dark:text-success-400 font-bold">M</span>
					</div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Moderate</h3>
				</div>
				<p class="text-2xl font-bold text-success-600 dark:text-success-400 mb-2">25%</p>
				<p class="text-sm text-surface-600 dark:text-surface-400">of players win</p>
				<p class="text-xs text-surface-500 dark:text-surface-500 mt-2">Best for steady returns</p>
			</div>

			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-3">
					<div class="bg-primary-100 dark:bg-primary-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
						<span class="text-primary-600 dark:text-primary-400 font-bold">A</span>
					</div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Aggressive</h3>
				</div>
				<p class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">15%</p>
				<p class="text-sm text-surface-600 dark:text-surface-400">of players win</p>
				<p class="text-xs text-surface-500 dark:text-surface-500 mt-2">Balanced risk/reward</p>
			</div>

			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-3">
					<div class="bg-warning-100 dark:bg-warning-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
						<span class="text-warning-600 dark:text-warning-400 font-bold">H</span>
					</div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">High Risk</h3>
				</div>
				<p class="text-2xl font-bold text-warning-600 dark:text-warning-400 mb-2">10%</p>
				<p class="text-sm text-surface-600 dark:text-surface-400">of players win</p>
				<p class="text-xs text-surface-500 dark:text-surface-500 mt-2">Higher payouts</p>
			</div>

			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-3">
					<div class="bg-error-100 dark:bg-error-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">
						<span class="text-error-600 dark:text-error-400 font-bold">E</span>
					</div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Extreme</h3>
				</div>
				<p class="text-2xl font-bold text-error-600 dark:text-error-400 mb-2">5%</p>
				<p class="text-sm text-surface-600 dark:text-surface-400">of players win</p>
				<p class="text-xs text-surface-500 dark:text-surface-500 mt-2">Maximum prizes</p>
			</div>
		</div>
	</section>

	<!-- How It Works -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">How It Works</h2>
		<div class="space-y-6">
			<!-- Step 1 -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-primary-100 dark:bg-primary-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-primary-600 dark:text-primary-400 font-bold">1</span>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Game Creation</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							Creators pay a 0.001 ETH creation fee plus their entry fee to create a game. They automatically join as the first player.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function createGame(GameConfig memory config) external payable returns (uint256 gameId)
							</code>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 2 -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-secondary-100 dark:bg-secondary-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-secondary-600 dark:text-secondary-400 font-bold">2</span>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Joining Games</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							Players can join active games by paying the exact entry fee in the specified token. Games auto-complete when max players are reached.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function joinGame(uint256 gameId) external payable
							</code>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 3 -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-success-100 dark:bg-success-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-success-600 dark:text-success-400 font-bold">3</span>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Game Completion</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							When max players are reached or the game expires, randomness is requested from Pyth Network. After 2 blocks, anyone can finalize the game.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function finalizeGameCompletion(uint256 gameId) external
							</code>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 4 -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-warning-100 dark:bg-warning-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-warning-600 dark:text-warning-400 font-bold">4</span>
					</div>
					<div>
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Prize Distribution</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							Winners are selected using Fisher-Yates shuffle with exponential decay curve. Winners and creators must manually claim their prizes.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function claimPrize(uint256 gameId) external
							</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Prize Distribution Example -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Prize Distribution Example</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-700 dark:text-surface-300 mb-4">
				Example: 100 player Extreme mode game with 1000 USDC total pool
			</p>
			
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Pool Breakdown</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Total Pool:</strong> 1000 USDC</li>
						<li><strong>Platform Fee (2%):</strong> 20 USDC</li>
						<li><strong>Prize Pool:</strong> 980 USDC</li>
						<li><strong>Winners:</strong> 5 players (5%)</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Winner Payouts</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>1st Place:</strong> ~500 USDC (51%)</li>
						<li><strong>2nd Place:</strong> ~250 USDC (25%)</li>
						<li><strong>3rd Place:</strong> ~150 USDC (15%)</li>
						<li><strong>4th Place:</strong> ~50 USDC (6%)</li>
						<li><strong>5th Place:</strong> ~30 USDC (3%)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Game States -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Game States</h2>
		<div class="space-y-4">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">ACTIVE</h3>
				<p class="text-surface-700 dark:text-surface-300">Game is accepting new players</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">WAITING_RANDOMNESS</h3>
				<p class="text-surface-700 dark:text-surface-300">Game reached completion trigger, randomness requested from Pyth</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">READY_FOR_COMPLETION</h3>
				<p class="text-surface-700 dark:text-surface-300">Randomness received, waiting for finalization with 2-block delay</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">COMPLETED</h3>
				<p class="text-surface-700 dark:text-surface-300">Game finalized, prizes distributed and claimable</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">CANCELLED</h3>
				<p class="text-surface-700 dark:text-surface-300">Game cancelled due to emergency or no participants</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">REFUNDED</h3>
				<p class="text-surface-700 dark:text-surface-300">Game had only one participant (creator) at expiration</p>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Back to Overview
		</a>
		<a href="/lotto/game-modes" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Game Modes →
		</a>
	</div>
</div>
