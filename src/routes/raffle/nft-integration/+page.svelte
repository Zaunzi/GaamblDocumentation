<script lang="ts">
	import { 
		Image, 
		Shield,
		Info
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>NFT Integration - Gaambl Raffle Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Image class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">NFT Integration</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			Supported NFT types and collection requirements for Gaambl Raffles
		</p>
	</div>

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

	<!-- Collection Requirements -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Collection Requirements</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				NFT collections must be whitelisted before they can be used in raffles.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-2">
						<Shield class="text-primary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Whitelist Requirements</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Verified contract on Base network</li>
						<li>• Minimum trading volume</li>
						<li>• Active community</li>
						<li>• No malicious functions</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-2">
						<Image class="text-secondary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Application Process</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Contact Gaambl team with collection details</li>
						<li>• Provide contract address and verification</li>
						<li>• Demonstrate community activity</li>
						<li>• Undergo security review</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- NFT Transfer Process -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">NFT Transfer Process</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				NFTs are automatically transferred during raffle creation and completion.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">During Creation</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Creator must approve NFT transfer first</li>
						<li>• Contract automatically transfers NFT from creator</li>
						<li>• NFT is locked in contract until raffle completion</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">During Completion</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Winner is selected using entropy randomness</li>
						<li>• NFT is automatically transferred to winner</li>
						<li>• No manual claim required for NFT</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Emergency Recovery</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Admin can recover NFTs after 48-hour timeout</li>
						<li>• Only for permanent Pyth service failures</li>
						<li>• NFT returned to creator, players refunded</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Benefits -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Benefits for NFT Owners</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Monetization</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li>• Often earn 110-150% of floor price</li>
						<li>• Quick liquidity conversion</li>
						<li>• Only 2% platform fee vs 5-10% marketplace fees</li>
						<li>• Guaranteed sale when raffle fills</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Community</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li>• Engage your audience with exciting raffles</li>
						<li>• Let market determine fair value</li>
						<li>• Build community around your NFTs</li>
						<li>• Transparent, provably fair process</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/raffle/joining-raffles" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Joining Raffles
		</a>
		<a href="/" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Back to Overview →
		</a>
	</div>
</div>
