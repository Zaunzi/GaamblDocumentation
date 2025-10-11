<script lang="ts">
	import { 
		RefreshCw, 
		Play, 
		Clock, 
		CheckCircle, 
		XCircle, 
		AlertCircle,
		Image
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Raffle States - Gaambl Raafl Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<RefreshCw class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Raffle States</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			Understanding the lifecycle and state transitions of Gaambl Raafl games
		</p>
	</div>

	<!-- State Overview -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Raffle State Lifecycle</h2>
		<p class="text-lg text-surface-600 dark:text-surface-400 mb-6">
			Raffles progress through several states from creation to completion. Understanding these states helps with monitoring and participation.
		</p>

		<div class="space-y-6">
			<!-- ACTIVE State -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<Play class="text-green-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">ACTIVE</h3>
					<span class="ml-auto px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
						Accepting Players
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Raffle is accepting new players. NFT is locked in contract until completion.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>NFT Status:</strong> Locked in contract, owned by contract until completion</p>
					<p><strong>Player Actions:</strong> Can join by paying entry fee</p>
					<p><strong>Creator Actions:</strong> Cannot cancel or modify once created</p>
				</div>
			</div>

			<!-- WAITING_RANDOMNESS State -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<Clock class="text-yellow-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">WAITING_RANDOMNESS</h3>
					<span class="ml-auto px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
						Requesting Entropy
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Raffle reached completion trigger and randomness has been requested from Pyth Network.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Trigger:</strong> Max players reached OR manual completion with 2+ players</p>
					<p><strong>Duration:</strong> Usually 1-2 blocks, max 10 minutes before retry</p>
					<p><strong>Player Actions:</strong> No actions available, wait for randomness</p>
				</div>
			</div>

			<!-- READY_FOR_COMPLETION State -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<AlertCircle class="text-blue-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">READY_FOR_COMPLETION</h3>
					<span class="ml-auto px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
						Ready to Finalize
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Randomness received, waiting for finalization with 2-block delay for MEV protection.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>Requirement:</strong> Must wait 2 blocks after randomness for MEV protection</p>
					<p><strong>Finalization:</strong> Anyone can call finalizeRaffleCompletion(raffleId)</p>
					<p><strong>Bot Opportunity:</strong> Prime state for automated finalization</p>
				</div>
			</div>

			<!-- COMPLETED State -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<CheckCircle class="text-green-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">COMPLETED</h3>
					<span class="ml-auto px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
						Raffle Finished
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-100 mb-4">
					Winner selected, NFT transferred, and prizes claimable.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>NFT Status:</strong> Automatically transferred to winner during finalization</p>
					<p><strong>Creator Actions:</strong> Must claim prize pool minus platform fee</p>
					<p><strong>Winner Actions:</strong> NFT received automatically, no claim needed</p>
				</div>
			</div>

			<!-- CANCELLED State -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<XCircle class="text-red-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">CANCELLED</h3>
					<span class="ml-auto px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
						Raffle Cancelled
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Raffle cancelled, usually due to zero participants at expiration.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>NFT Status:</strong> Automatically returned to creator</p>
					<p><strong>Refunds:</strong> No refunds needed (no participants)</p>
					<p><strong>Trigger:</strong> Zero participants when raffle expires</p>
				</div>
			</div>

			<!-- REFUNDED State -->
			<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
				<div class="flex items-center mb-4">
					<RefreshCw class="text-orange-500 mr-3" size="24" />
					<h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">REFUNDED</h3>
					<span class="ml-auto px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
						Single Player Refund
					</span>
				</div>
				<p class="text-surface-600 dark:text-surface-400 mb-4">
					Raffle had exactly one participant at expiration and was automatically refunded.
				</p>
				<div class="space-y-2 text-sm text-surface-600 dark:text-surface-400">
					<p><strong>NFT Status:</strong> Automatically returned to creator</p>
					<p><strong>Refunds:</strong> Single participant gets entry fee back via claim system</p>
					<p><strong>Automatic:</strong> Handled during expired raffle completion</p>
				</div>
			</div>
		</div>
	</section>

	<!-- State Transitions -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">State Transitions</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Raffles follow a predictable state transition pattern based on player participation and timing.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Normal Completion Flow</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						ACTIVE → WAITING_RANDOMNESS → READY_FOR_COMPLETION → COMPLETED
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Expired Raffle Flow</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						ACTIVE → (expired) → CANCELLED (0 players) or REFUNDED (1 player) or WAITING_RANDOMNESS → COMPLETED (2+ players)
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/raffle/overview" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Raffle Overview
		</a>
		<a href="/raffle/creating-raffles" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Creating Raffles →
		</a>
	</div>
</div>
