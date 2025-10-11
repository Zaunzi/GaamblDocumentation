<script lang="ts">
	import { MapPin, Shield, ExternalLink, Copy, Check } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let copiedAddress = '';
	let showCopied = false;

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		copiedAddress = text;
		showCopied = true;
		setTimeout(() => {
			showCopied = false;
			copiedAddress = '';
		}, 2000);
	}

	const contracts = {
		sepolia: {
			lotto: '0xC8B0d87C551C6De5158Ef96d5e06F76D2A81E541',
			raffle: '0xcB5428869b91b27798e2acD51cf7E63527F6F4D6'
		},
		mainnet: {
			lotto: 'Coming Soon',
			raffle: 'Coming Soon'
		}
	};
</script>

<svelte:head>
	<title>Contract Addresses - Gaambl Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<MapPin class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Contract Addresses</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			Deployed contract addresses for Gaambl Lotto and Raffle on Base network
		</p>
	</div>

	<!-- Base Sepolia (Testnet) -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Base Sepolia (Testnet)</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-700 dark:text-surface-300 mb-6">
				These contracts are deployed on Base Sepolia testnet for testing and development purposes.
			</p>
			
			<div class="space-y-6">
				<!-- Gaambl Lotto -->
				<div class="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
					<div class="flex items-center justify-between mb-3">
						<div>
							<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Gaambl Lotto</h3>
							<p class="text-sm text-surface-600 dark:text-surface-400">Token-based lottery contract</p>
						</div>
						<div class="flex items-center space-x-2">
							<button
								on:click={() => copyToClipboard(contracts.sepolia.lotto)}
								class="p-2 text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 transition-colors"
								title="Copy address"
							>
								{#if showCopied && copiedAddress === contracts.sepolia.lotto}
									<Check size="16" class="text-success-500" />
								{:else}
									<Copy size="16" />
								{/if}
							</button>
							<a
								href="https://sepolia.basescan.org/address/{contracts.sepolia.lotto}"
								target="_blank"
								rel="noopener noreferrer"
								class="p-2 text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 transition-colors"
								title="View on BaseScan"
							>
								<ExternalLink size="16" />
							</a>
						</div>
					</div>
					<code class="block bg-surface-100 dark:bg-surface-800 p-3 rounded text-sm font-mono break-all text-surface-800 dark:text-surface-200">
						{contracts.sepolia.lotto}
					</code>
				</div>

				<!-- Gaambl Raffle -->
				<div class="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
					<div class="flex items-center justify-between mb-3">
						<div>
							<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Gaambl Raffle</h3>
							<p class="text-sm text-surface-600 dark:text-surface-400">NFT-based raffle contract</p>
						</div>
						<div class="flex items-center space-x-2">
							<button
								on:click={() => copyToClipboard(contracts.sepolia.raffle)}
								class="p-2 text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 transition-colors"
								title="Copy address"
							>
								{#if showCopied && copiedAddress === contracts.sepolia.raffle}
									<Check size="16" class="text-success-500" />
								{:else}
									<Copy size="16" />
								{/if}
							</button>
							<a
								href="https://sepolia.basescan.org/address/{contracts.sepolia.raffle}"
								target="_blank"
								rel="noopener noreferrer"
								class="p-2 text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 transition-colors"
								title="View on BaseScan"
							>
								<ExternalLink size="16" />
							</a>
						</div>
					</div>
					<code class="block bg-surface-100 dark:bg-surface-800 p-3 rounded text-sm font-mono break-all text-surface-800 dark:text-surface-200">
						{contracts.sepolia.raffle}
					</code>
				</div>
			</div>
		</div>
	</section>

	<!-- Base Mainnet -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Base Mainnet</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="text-center py-8">
				<Shield class="text-surface-400 mx-auto mb-4" size="48" />
				<h3 class="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">Coming Soon</h3>
				<p class="text-surface-600 dark:text-surface-400">
					Mainnet contracts are currently under development and will be deployed after thorough testing.
				</p>
			</div>
		</div>
	</section>

	<!-- Contract Verification -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Contract Verification</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-700 dark:text-surface-300 mb-4">
				All contracts are verified on BaseScan for transparency and security. You can view the source code, 
				ABI, and interact with the contracts directly.
			</p>
			
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Verification Status</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							Source code verified
						</li>
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							ABI available
						</li>
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							Contract interaction enabled
						</li>
						<li class="flex items-center">
							<Check class="text-success-500 mr-2" size="16" />
							Event logs accessible
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Security Features</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li class="flex items-center">
							<Shield class="text-primary-500 mr-2" size="16" />
							Open source code
						</li>
						<li class="flex items-center">
							<Shield class="text-primary-500 mr-2" size="16" />
							Audited by security experts
						</li>
						<li class="flex items-center">
							<Shield class="text-primary-500 mr-2" size="16" />
							Emergency pause functionality
						</li>
						<li class="flex items-center">
							<Shield class="text-primary-500 mr-2" size="16" />
							Multi-sig ownership
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Integration Guide -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Integration Guide</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-700 dark:text-surface-300 mb-4">
				Use these addresses to integrate Gaambl contracts into your applications:
			</p>
			
			<div class="space-y-4">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">JavaScript/TypeScript</h3>
					<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
						<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
							const LOTTO_ADDRESS = "0xC8B0d87C551C6De5158Ef96d5e06F76D2A81E541";<br>
							const RAFFLE_ADDRESS = "0xcB5428869b91b27798e2acD51cf7E63527F6F4D6";
						</code>
					</div>
				</div>
				
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-2">Solidity</h3>
					<div class="bg-surface-100 dark:bg-surface-800 rounded p-3">
						<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
							address constant LOTTO_ADDRESS = 0xC8B0d87C551C6De5158Ef96d5e06F76D2A81E541;<br>
							address constant RAFFLE_ADDRESS = 0xcB5428869b91b27798e2acD51cf7E63527F6F4D6;
						</code>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Back to Overview
		</a>
		<a href="/getting-started" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Getting Started →
		</a>
	</div>
</div>
