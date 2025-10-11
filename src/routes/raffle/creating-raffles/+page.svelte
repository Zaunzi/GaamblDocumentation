<script lang="ts">
	import { 
		Plus, 
		Image,
		Coins,
		Users,
		Clock,
		Info
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Creating Raffles - Gaambl Raffle Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Plus class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Creating Raffles</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			How to create NFT raffles on the Gaambl platform
		</p>
	</div>

	<!-- Raffle Creation Process -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Raffle Creation Process</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Creating a raffle requires approving your NFT and paying a creation fee. The NFT is automatically transferred to the contract.
			</p>
			
			<div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
				<div class="flex items-start">
					<Info class="text-blue-500 mr-3 mt-0.5" size="20" />
					<div>
						<h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Points</h4>
						<ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
							<li>• Creator does NOT auto-join (unlike lotto games)</li>
							<li>• Must approve NFT transfer first</li>
							<li>• Must pay creation fee (0.001 ETH)</li>
							<li>• NFT collection must be whitelisted</li>
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
					function createRaffle(RaffleConfig memory config) external payable returns (uint256 raffleId)
				</code>
			</div>
		</div>
	</section>

	<!-- Step-by-Step Process -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Step-by-Step Process</h2>
		<div class="space-y-6">
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<div class="bg-primary-100 dark:bg-primary-900 w-8 h-8 rounded-full flex items-center justify-center mr-4">
						<span class="text-primary-600 dark:text-primary-400 font-bold">1</span>
					</div>
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Approve NFT</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-3">
					Approve the raffle contract to transfer your NFT.
				</p>
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
					<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
						nftContract.approve(raffleAddress, tokenId)
					</code>
				</div>
			</div>

			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<div class="bg-secondary-100 dark:bg-secondary-900 w-8 h-8 rounded-full flex items-center justify-center mr-4">
						<span class="text-secondary-600 dark:text-secondary-400 font-bold">2</span>
					</div>
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">Create Raffle</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-3">
					Call createRaffle() with your configuration and creation fee.
				</p>
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
					<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
						createRaffle&#123;value: "0.001 ETH"&#125;(config)
					</code>
				</div>
			</div>

			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<div class="bg-success-100 dark:bg-success-900 w-8 h-8 rounded-full flex items-center justify-center mr-4">
						<span class="text-success-600 dark:text-success-400 font-bold">3</span>
					</div>
					<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100">NFT Transfer</h3>
				</div>
				<p class="text-surface-700 dark:text-surface-300 mb-3">
					Contract automatically transfers NFT from creator and raffle goes live.
				</p>
			</div>
		</div>
	</section>

	<!-- Raffle Configuration -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Raffle Configuration</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="space-y-6">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Image class="text-primary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">NFT Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>nftContract:</strong> NFT contract address</li>
						<li><strong>tokenId:</strong> Specific NFT token ID</li>
						<li><strong>nftType:</strong> 0=ERC721, 1=ERC1155</li>
						<li><strong>Requirements:</strong> NFT collection must be whitelisted</li>
					</ul>
				</div>

				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Coins class="text-secondary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Payment Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>paymentToken:</strong> 0x0 for ETH, token address for ERC20</li>
						<li><strong>entryFee:</strong> Cost to enter raffle</li>
						<li><strong>Requirements:</strong> Payment token must be whitelisted</li>
					</ul>
				</div>

				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Users class="text-warning-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Player Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>maxPlayers:</strong> Maximum number of players (2-100)</li>
						<li><strong>Requirements:</strong> Must be between MIN_PLAYERS and MAX_PLAYERS</li>
						<li><strong>Creator:</strong> Does NOT auto-join (unlike lotto)</li>
					</ul>
				</div>

				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Clock class="text-success-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Timing Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>duration:</strong> Raffle duration in seconds (24 hours to 30 days)</li>
						<li><strong>Requirements:</strong> Must be between MIN_DURATION and MAX_DURATION</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/raffle/raffle-states" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Raffle States
		</a>
		<a href="/raffle/joining-raffles" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Joining Raffles →
		</a>
	</div>
</div>
