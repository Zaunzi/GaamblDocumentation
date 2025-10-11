<script lang="ts">
	import { 
		Bot, 
		Clock,
		CheckCircle,
		Info
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Monitoring - Gaambl Lotto Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Bot class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Monitoring & Bot Operations</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			How to monitor games and operate finalization bots for Gaambl Lotto
		</p>
	</div>

	<!-- Monitoring Overview -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Monitoring Overview</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				The Gaambl platform uses a two-phase completion system where anyone can trigger the finalization of games that are ready.
			</p>
			
			<div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
				<div class="flex items-start">
					<Info class="text-blue-500 mr-3 mt-0.5" size="20" />
					<div>
						<h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Two-Phase System</h4>
						<ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
							<li>• <strong>Phase 1:</strong> Randomness request (lightweight transaction)</li>
							<li>• <strong>Phase 2:</strong> Finalization (heavy computation, separate transaction)</li>
							<li>• <strong>Benefit:</strong> Prevents gas failures and allows proper gas estimation</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Finalization Process -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Finalization Process</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Games that are ready for completion can be finalized by anyone. This ensures games complete even without dedicated infrastructure.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-2">
						<CheckCircle class="text-green-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Detection Methods</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Monitor RandomnessReceived events</li>
						<li>• Check isGameReadyForCompletion(gameId) function</li>
						<li>• Verify 2-block delay has passed</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-2">
						<Clock class="text-yellow-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Finalization Requirements</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Game must be in READY_FOR_COMPLETION state</li>
						<li>• Must wait 2 blocks after randomness for MEV protection</li>
						<li>• Caller pays gas costs (no special rewards)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Bot Operations -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Bot Operations</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Community bot operators provide essential infrastructure services for platform reliability.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Finalization Bots</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Monitor RandomnessReceived events</li>
						<li>• Wait 2 blocks for MEV protection</li>
						<li>• Call finalizeGameCompletion(gameId) when ready</li>
						<li>• Handle expired game completion</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Expired Game Bots</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Monitor active games for expiration</li>
						<li>• Call completeExpiredGame(gameId) after expiration</li>
						<li>• Handle single-player refunds automatically</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Key Functions -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Key Functions</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Finalization</h4>
					<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
						function finalizeGameCompletion(uint256 gameId) external
					</code>
					<p class="text-xs text-surface-500 dark:text-surface-500 mt-1">
						Finalize games that are ready for completion (READY_FOR_COMPLETION state)
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Expired Games</h4>
					<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
						function completeExpiredGame(uint256 gameId) external
					</code>
					<p class="text-xs text-surface-500 dark:text-surface-500 mt-1">
						Complete games that have expired (anyone can call)
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">State Checking</h4>
					<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
						function isGameReadyForCompletion(uint256 gameId) external view returns (bool)
					</code>
					<p class="text-xs text-surface-500 dark:text-surface-500 mt-1">
						Check if a game is ready for finalization
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Community Service -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Community Service</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Bot operation is a community service that benefits all platform users.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">No Special Access</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Finalization functions are public - anyone can operate bots and ensure games complete.
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">No Rewards</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Bot operators pay gas costs but receive no special rewards - it's a community service.
					</p>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Decentralized Reliability</h4>
					<p class="text-sm text-surface-600 dark:text-surface-400">
						Multiple bot operators ensure games complete even if some bots fail.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/lotto/prize-distribution" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Prize Distribution
		</a>
		<a href="/raffle/overview" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Gaambl Raffle →
		</a>
	</div>
</div>
