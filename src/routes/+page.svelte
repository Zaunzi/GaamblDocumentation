<script lang="ts">
	import { 
		Dice1, 
		Ticket, 
		Shield, 
		TrendingUp, 
		Users, 
		Code, 
		ExternalLink 
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Gaambl Platform Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Hero Section -->
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-surface-900 dark:text-surface-100 mb-4">
			Gaambl Platform Documentation
		</h1>
		<p class="text-xl text-surface-600 dark:text-surface-400 mb-8">
			Complete guide to the decentralized gaming platform built on Base
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
				Provably Fair Gaming
			</span>
			<span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 rounded-full text-sm">
				Pyth Network Integration
			</span>
			<span class="px-3 py-1 bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 rounded-full text-sm">
				Multi-Token Support
			</span>
		</div>
	</div>

	<!-- Overview Section -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Overview</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6 mb-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Gaambl is a decentralized gaming platform built on Base that offers two distinct lottery-style games: 
				<strong>Gaambl Lotto</strong> and <strong>Gaambl Raffle</strong>. Both games use Pyth Network's Entropy service 
				for provably fair randomness, ensuring transparent and tamper-proof outcomes.
			</p>
			
			<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-3">Platform Features</h3>
			<ul class="space-y-2 text-surface-700 dark:text-surface-300">
				<li class="flex items-center">
					<Shield class="text-success-500 mr-2" size="16" />
					<strong>Provably Fair:</strong> Uses Pyth Network's Entropy for cryptographically secure randomness
				</li>
				<li class="flex items-center">
					<TrendingUp class="text-primary-500 mr-2" size="16" />
					<strong>Multi-Token Support:</strong> Accept ETH and whitelisted ERC-20 tokens
				</li>
				<li class="flex items-center">
					<Users class="text-secondary-500 mr-2" size="16" />
					<strong>Transparent Fees:</strong> Clear, locked-in fee structure for each game
				</li>
				<li class="flex items-center">
					<Code class="text-warning-500 mr-2" size="16" />
					<strong>Emergency Controls:</strong> Built-in safety mechanisms and pause functionality
				</li>
				<li class="flex items-center">
					<TrendingUp class="text-success-500 mr-2" size="16" />
					<strong>Efficient Claims:</strong> Optimized prize claiming system
				</li>
				<li class="flex items-center">
					<Shield class="text-primary-500 mr-2" size="16" />
					<strong>Two-Phase Completion:</strong> Randomness and finalization separated to prevent transaction failures
				</li>
			</ul>
		</div>
	</section>

	<!-- Contract Addresses -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Contract Addresses</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Base Sepolia (Testnet)</h3>
				<div class="space-y-3">
					<div>
						<p class="text-sm text-surface-600 dark:text-surface-400 mb-1">Gaambl Lotto</p>
						<code class="block bg-surface-100 dark:bg-surface-800 p-2 rounded text-sm font-mono break-all">
							0xC8B0d87C551C6De5158Ef96d5e06F76D2A81E541
						</code>
					</div>
					<div>
						<p class="text-sm text-surface-600 dark:text-surface-400 mb-1">Gaambl Raffle</p>
						<code class="block bg-surface-100 dark:bg-surface-800 p-2 rounded text-sm font-mono break-all">
							0xcB5428869b91b27798e2acD51cf7E63527F6F4D6
						</code>
					</div>
				</div>
			</div>
			
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">Base Mainnet</h3>
				<p class="text-surface-600 dark:text-surface-400 italic">Coming Soon</p>
			</div>
		</div>
	</section>

	<!-- Game Types -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Game Types</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Gaambl Lotto -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<Dice1 class="text-primary-500 mr-3" size="24" />
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Gaambl Lotto</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-4">
					Token-based lottery games where multiple players contribute to a prize pool, and winners are selected 
					based on configurable risk modes.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Risk Modes:</strong> Moderate (25%), Aggressive (15%), High Risk (10%), Extreme (5%)</p>
					<p><strong>Players:</strong> 10-500 per game</p>
					<p><strong>Duration:</strong> 24 hours to 30 days</p>
					<p><strong>Platform Fee:</strong> 2%</p>
				</div>
				<a href="/lotto/overview" class="inline-flex items-center mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
					Learn More
					<ExternalLink class="ml-1" size="14" />
				</a>
			</div>

			<!-- Gaambl Raffle -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<Ticket class="text-secondary-500 mr-3" size="24" />
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Gaambl Raffle</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-4">
					NFT-based lottery where players compete to win specific NFTs (ERC-721 or ERC-1155) for a fraction 
					of their market value.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>NFT Types:</strong> ERC-721, ERC-1155</p>
					<p><strong>Players:</strong> 2-100 per raffle</p>
					<p><strong>Duration:</strong> 24 hours to 30 days</p>
					<p><strong>Platform Fee:</strong> 2%</p>
				</div>
				<a href="/raffle/overview" class="inline-flex items-center mt-4 text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200">
					Learn More
					<ExternalLink class="ml-1" size="14" />
				</a>
			</div>
		</div>
	</section>


	<!-- Quick Start -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Quick Start</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="grid md:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-primary-600 dark:text-primary-400 font-bold text-lg">1</span>
					</div>
					<h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Connect Wallet</h3>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Connect your wallet to Base network to start playing
					</p>
				</div>
				<div class="text-center">
					<div class="bg-secondary-100 dark:bg-secondary-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-secondary-600 dark:text-secondary-400 font-bold text-lg">2</span>
					</div>
					<h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Choose Game</h3>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Browse active games or create your own lotto/raffle
					</p>
				</div>
				<div class="text-center">
					<div class="bg-success-100 dark:bg-success-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-success-600 dark:text-success-400 font-bold text-lg">3</span>
					</div>
					<h3 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Play & Win</h3>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Join games and claim prizes when you win
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation Cards -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Documentation Sections</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<a href="/lotto/overview" class="group bg-surface-50 dark:bg-surface-900 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
				<div class="flex items-center mb-3">
					<Dice1 class="text-primary-500 mr-3" size="20" />
					<h3 class="font-semibold text-surface-900 dark:text-surface-100 group-hover:text-primary-600 dark:group-hover:text-primary-400">
						Gaambl Lotto
					</h3>
				</div>
				<p class="text-sm text-surface-600 dark:text-surface-400">
					Complete guide to token-based lottery games
				</p>
			</a>

			<a href="/raffle/overview" class="group bg-surface-50 dark:bg-surface-900 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
				<div class="flex items-center mb-3">
					<Ticket class="text-secondary-500 mr-3" size="20" />
					<h3 class="font-semibold text-surface-900 dark:text-surface-100 group-hover:text-secondary-600 dark:group-hover:text-secondary-400">
						Gaambl Raffle
					</h3>
				</div>
				<p class="text-sm text-surface-600 dark:text-surface-400">
					NFT raffle system and integration guide
				</p>
			</a>

			<a href="/contract-addresses" class="group bg-surface-50 dark:bg-surface-900 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
				<div class="flex items-center mb-3">
					<Shield class="text-error-500 mr-3" size="20" />
					<h3 class="font-semibold text-surface-900 dark:text-surface-100 group-hover:text-error-600 dark:group-hover:text-error-400">
						Deployed Addresses
					</h3>
				</div>
				<p class="text-sm text-surface-600 dark:text-surface-400">
					Contract addresses and verification
				</p>
			</a>
		</div>
	</section>
</div>
