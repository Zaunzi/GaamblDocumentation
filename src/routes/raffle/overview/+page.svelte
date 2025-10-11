<script lang="ts">
	import { 
		Ticket, 
		Users, 
		Clock, 
		TrendingUp, 
		Shield, 
		Image, 
		ExternalLink 
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Gaambl Raafl Overview - Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Ticket class="text-secondary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Gaambl Raafl</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			NFT-based lottery where players compete to win valuable NFTs for a fraction of their market value
		</p>
	</div>

	<!-- What is Gaambl Raafl -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">What is Gaambl Raafl?</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Gaambl Raafl is an NFT-based lottery where players compete to win a specific NFT (ERC-721 or ERC-1155) 
				for a fraction of its market value. NFT owners can monetize their assets while players get chances to 
				win valuable NFTs at low entry costs.
			</p>
			
			<div class="grid md:grid-cols-2 gap-6 mt-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">For NFT Owners</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<TrendingUp class="text-success-500 mr-2" size="16" />
							Often earn 110-150% of floor price
						</li>
						<li class="flex items-center">
							<Clock class="text-primary-500 mr-2" size="16" />
							Quick liquidity conversion
						</li>
						<li class="flex items-center">
							<Shield class="text-secondary-500 mr-2" size="16" />
							Only 2% platform fee vs 5-10% marketplace fees
						</li>
						<li class="flex items-center">
							<Users class="text-warning-500 mr-2" size="16" />
							Guaranteed sale when raffle fills
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">For Players</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<Image class="text-success-500 mr-2" size="16" />
							Affordable access to expensive NFTs
						</li>
						<li class="flex items-center">
							<Users class="text-primary-500 mr-2" size="16" />
							Better odds with smaller player pools
						</li>
						<li class="flex items-center">
							<Shield class="text-secondary-500 mr-2" size="16" />
							Instant, provably fair results
						</li>
						<li class="flex items-center">
							<TrendingUp class="text-warning-500 mr-2" size="16" />
							No bidding wars - fixed entry fee
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Supported NFT Types -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Supported NFT Types</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<div class="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
						<span class="text-primary-600 dark:text-primary-400 font-bold text-lg">721</span>
					</div>
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">ERC-721</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-3">
					Standard NFTs - one unique token per raffle
				</p>
				<p class="text-sm text-surface-600 dark:text-surface-400">
					Examples: Bored Apes, CryptoPunks, Art Blocks
				</p>
			</div>

			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<div class="bg-secondary-100 dark:bg-secondary-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
						<span class="text-secondary-600 dark:text-secondary-400 font-bold text-lg">1155</span>
					</div>
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">ERC-1155</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-3">
					Semi-fungible tokens - one unit per raffle
				</p>
				<p class="text-sm text-surface-600 dark:text-surface-400">
					Examples: Gaming items, collectible cards, utility tokens
				</p>
			</div>
		</div>
	</section>

	<!-- Raffle Parameters -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Raffle Parameters</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Basic Settings</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Minimum Players:</strong> 2 (creator doesn't auto-join)</li>
						<li><strong>Maximum Players:</strong> 100</li>
						<li><strong>Duration:</strong> 24 hours to 30 days</li>
						<li><strong>Creation Fee:</strong> 0.001 ETH</li>
						<li><strong>Platform Fee:</strong> 2% (configurable by admin)</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Pricing Strategy Guide</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Conservative:</strong> 5-8% of floor price, 20-30 max players</li>
						<li><strong>Moderate:</strong> 8-12% of floor price, 15-25 max players</li>
						<li><strong>Aggressive:</strong> 12-15% of floor price, 10-20 max players</li>
						<li><strong>Premium:</strong> 15%+ of floor price, 5-15 max players</li>
					</ul>
				</div>
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
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Raffle Creation</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							NFT owners approve their NFT and create a raffle with their desired parameters. The NFT is automatically transferred to the contract.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function createRaffle(RaffleConfig memory config) external payable returns (uint256 raffleId)
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
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Joining Raffles</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							Players research NFT value and join raffles by paying the entry fee. Popular raffles fill up quickly.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function joinRaffle(uint256 raffleId) external payable
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
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Raffle Completion</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-3">
							When max players are reached or raffle expires, randomness determines the winner. NFT is automatically transferred to winner.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function finalizeRaffleCompletion(uint256 raffleId) external
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
							Winner receives NFT automatically. Creator must claim their ETH/token payout from entry fees.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
							<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
								function claimPrize(uint256 raffleId) external
							</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Example -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Example: Bored Ape Raffle</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-700 dark:text-surface-300 mb-4">
				Example: 100 ETH Bored Ape NFT raffle with 20 players
			</p>
			
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Raffle Setup</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>NFT Value:</strong> 100 ETH floor price</li>
						<li><strong>Entry Fee:</strong> 0.4 ETH per player</li>
						<li><strong>Max Players:</strong> 20</li>
						<li><strong>Duration:</strong> 48 hours</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Results</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Total Pool:</strong> 8 ETH</li>
						<li><strong>Platform Fee (2%):</strong> 0.16 ETH</li>
						<li><strong>Creator Receives:</strong> 7.84 ETH</li>
						<li><strong>Winner Receives:</strong> Bored Ape NFT</li>
						<li><strong>Creator Profit:</strong> +17.6% vs floor price</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Raffle States -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Raffle States</h2>
		<div class="space-y-4">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">ACTIVE</h3>
				<p class="text-surface-700 dark:text-surface-300">Raffle is accepting new players, NFT locked in contract</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">WAITING_RANDOMNESS</h3>
				<p class="text-surface-700 dark:text-surface-300">Raffle reached completion trigger, randomness requested</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">READY_FOR_COMPLETION</h3>
				<p class="text-surface-700 dark:text-surface-300">Randomness received, waiting for finalization with 2-block delay</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">COMPLETED</h3>
				<p class="text-surface-700 dark:text-surface-300">Winner selected, NFT transferred, prizes claimable</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">CANCELLED</h3>
				<p class="text-surface-700 dark:text-surface-300">Raffle cancelled, NFT returned to creator</p>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">REFUNDED</h3>
				<p class="text-surface-700 dark:text-surface-300">Single participant refunded, NFT returned to creator</p>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Back to Overview
		</a>
		<a href="/raffle/raffle-states" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Raffle States →
		</a>
	</div>
</div>
