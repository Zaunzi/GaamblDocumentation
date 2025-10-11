<script lang="ts">
	import { 
		Wallet, 
		Dice1, 
		Ticket, 
		Trophy, 
		ExternalLink, 
		Check, 
		AlertCircle 
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Getting Started - Gaambl Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">Getting Started</h1>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			Quick start guide to begin playing Gaambl games
		</p>
	</div>

	<!-- Prerequisites -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Prerequisites</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">What You Need</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							Web3 wallet (MetaMask, Coinbase Wallet, etc.)
						</li>
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							Base network configured
						</li>
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							ETH for gas fees
						</li>
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							Tokens for game entry fees
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Supported Networks</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<Check class="text-primary-500 mr-2" size="16" />
							Base Sepolia (Testnet) - Currently Active
						</li>
						<li class="flex items-center">
							<Check class="text-secondary-500 mr-2" size="16" />
							Base Mainnet - Coming Soon
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Step-by-Step Guide -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Step-by-Step Guide</h2>
		<div class="space-y-6">
			<!-- Step 1: Connect Wallet -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-primary-100 dark:bg-primary-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-primary-600 dark:text-primary-400 font-bold">1</span>
					</div>
					<div class="flex-1">
						<div class="flex items-center mb-3">
							<Wallet class="text-primary-500 mr-2" size="20" />
							<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Connect Your Wallet</h3>
						</div>
						<p class="text-surface-700 dark:text-surface-300 mb-4">
							Connect your Web3 wallet to the Gaambl platform and ensure you're on the Base network.
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
							<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Base Network Configuration:</h4>
							<ul class="text-sm text-surface-700 dark:text-surface-300 space-y-1">
								<li><strong>Network Name:</strong> Base Sepolia</li>
								<li><strong>RPC URL:</strong> https://sepolia.base.org</li>
								<li><strong>Chain ID:</strong> 84532</li>
								<li><strong>Currency Symbol:</strong> ETH</li>
								<li><strong>Block Explorer:</strong> https://sepolia.basescan.org</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 2: Get Test Tokens -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-secondary-100 dark:bg-secondary-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-secondary-600 dark:text-secondary-400 font-bold">2</span>
					</div>
					<div class="flex-1">
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-3">Get Test Tokens</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-4">
							Since we're on testnet, you'll need test ETH and tokens to participate in games.
						</p>
						<div class="grid md:grid-cols-2 gap-4">
							<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
								<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Test ETH</h4>
								<p class="text-sm text-surface-700 dark:text-surface-300 mb-2">
									Get test ETH from Base Sepolia faucet:
								</p>
								<a 
									href="https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet" 
									target="_blank" 
									rel="noopener noreferrer"
									class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
								>
									Coinbase Faucet
									<ExternalLink class="ml-1" size="14" />
								</a>
							</div>
							<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
								<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Test Tokens</h4>
								<p class="text-sm text-surface-700 dark:text-surface-300 mb-2">
									Common test tokens for games:
								</p>
								<ul class="text-xs text-surface-600 dark:text-surface-400 space-y-1">
									<li>• USDC (test)</li>
									<li>• DAI (test)</li>
									<li>• GHST (test)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 3: Choose Game Type -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-success-100 dark:bg-success-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-success-600 dark:text-success-400 font-bold">3</span>
					</div>
					<div class="flex-1">
						<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-3">Choose Your Game</h3>
						<p class="text-surface-700 dark:text-surface-300 mb-4">
							Decide whether you want to play Lotto games or Raffle games.
						</p>
						<div class="grid md:grid-cols-2 gap-4">
							<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
								<div class="flex items-center mb-2">
									<Dice1 class="text-primary-500 mr-2" size="20" />
									<h4 class="font-semibold text-surface-900 dark:text-surface-100">Gaambl Lotto</h4>
								</div>
								<p class="text-sm text-surface-700 dark:text-surface-300 mb-2">
									Token-based lottery games with configurable risk modes
								</p>
								<a href="/lotto/overview" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm">
									Learn More →
								</a>
							</div>
							<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
								<div class="flex items-center mb-2">
									<Ticket class="text-secondary-500 mr-2" size="20" />
									<h4 class="font-semibold text-surface-900 dark:text-surface-100">Gaambl Raafl</h4>
								</div>
								<p class="text-sm text-surface-700 dark:text-surface-300 mb-2">
									NFT-based raffles where you can win valuable NFTs
								</p>
								<a href="/raffle/overview" class="text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 text-sm">
									Learn More →
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Step 4: Play and Win -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-start">
					<div class="bg-warning-100 dark:bg-warning-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
						<span class="text-warning-600 dark:text-warning-400 font-bold">4</span>
					</div>
					<div class="flex-1">
						<div class="flex items-center mb-3">
							<Trophy class="text-warning-500 mr-2" size="20" />
							<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Play and Win</h3>
						</div>
						<p class="text-surface-700 dark:text-surface-300 mb-4">
							Join games, wait for completion, and claim your prizes when you win!
						</p>
						<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
							<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Important Notes:</h4>
							<ul class="text-sm text-surface-700 dark:text-surface-300 space-y-1">
								<li>• Games use provably fair randomness from Pyth Network</li>
								<li>• Winners must manually claim their prizes</li>
								<li>• All transactions are transparent and verifiable on-chain</li>
								<li>• Platform fee is only 2% of the total pool</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Tips for Success -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Tips for Success</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">For Players</h3>
				<ul class="space-y-2 text-surface-700 dark:text-surface-300">
					<li class="flex items-start">
						<Check class="text-success-500 mr-2 mt-0.5" size="16" />
						Research NFT floor prices before joining raffles
					</li>
					<li class="flex items-start">
						<Check class="text-success-500 mr-2 mt-0.5" size="16" />
						Join games early to secure your spot
					</li>
					<li class="flex items-start">
						<Check class="text-success-500 mr-2 mt-0.5" size="16" />
						Diversify across multiple games
					</li>
					<li class="flex items-start">
						<Check class="text-success-500 mr-2 mt-0.5" size="16" />
						Monitor game states and completion
					</li>
				</ul>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">For Creators</h3>
				<ul class="space-y-2 text-surface-700 dark:text-surface-300">
					<li class="flex items-start">
						<Check class="text-primary-500 mr-2 mt-0.5" size="16" />
						Set competitive entry fees (5-15% of floor price)
					</li>
					<li class="flex items-start">
						<Check class="text-primary-500 mr-2 mt-0.5" size="16" />
						Choose appropriate duration (24-72 hours)
					</li>
					<li class="flex items-start">
						<Check class="text-primary-500 mr-2 mt-0.5" size="16" />
						Market your games on social media
					</li>
					<li class="flex items-start">
						<Check class="text-primary-500 mr-2 mt-0.5" size="16" />
						Remember to claim your creator payouts
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Common Issues -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Common Issues</h2>
		<div class="space-y-4">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<div class="flex items-start">
					<AlertCircle class="text-warning-500 mr-3 mt-0.5" size="20" />
					<div>
						<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-1">Transaction Failed</h3>
						<p class="text-surface-700 dark:text-surface-300">
							Make sure you have enough ETH for gas fees and the exact entry fee amount. Check that you're on the correct network.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<div class="flex items-start">
					<AlertCircle class="text-warning-500 mr-3 mt-0.5" size="20" />
					<div>
						<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-1">Can't Join Game</h3>
						<p class="text-surface-700 dark:text-surface-300">
							Games may be full, expired, or in a non-active state. Check the game status and try joining a different game.
						</p>
					</div>
				</div>
			</div>
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-4">
				<div class="flex items-start">
					<AlertCircle class="text-warning-500 mr-3 mt-0.5" size="20" />
					<div>
						<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-1">Prize Not Claimed</h3>
						<p class="text-surface-700 dark:text-surface-300">
							Winners must manually claim their prizes using the claimPrize function. Prizes remain in the contract until claimed.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/contract-addresses" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Contract Addresses
		</a>
		<a href="/lotto/overview" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Gaambl Lotto →
		</a>
	</div>
</div>
