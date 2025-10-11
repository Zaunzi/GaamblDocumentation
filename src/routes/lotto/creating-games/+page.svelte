<script lang="ts">
	import { 
		Plus, 
		Settings, 
		Coins,
		Users,
		Clock,
		Target,
		Info
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>Creating Games - Gaambl Lotto Documentation</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<!-- Header -->
	<div class="mb-8">
		<div class="flex items-center mb-4">
			<Plus class="text-primary-500 mr-3" size="32" />
			<h1 class="text-4xl font-bold text-surface-900 dark:text-surface-100">Creating Games</h1>
		</div>
		<p class="text-xl text-surface-600 dark:text-surface-400">
			How to create Gaambl Lotto games and configure game parameters
		</p>
	</div>

	<!-- Game Creation Overview -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Game Creation Process</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-lg text-surface-700 dark:text-surface-300 mb-4">
				Creating a Gaambl Lotto game requires paying a creation fee and configuring game parameters. 
				The creator automatically joins as the first player.
			</p>
			
			<div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-4">
				<div class="flex items-start">
					<Info class="text-blue-500 mr-3 mt-0.5" size="20" />
					<div>
						<h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Points</h4>
						<ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
							<li>• Creator automatically joins as first player</li>
							<li>• Must pay creation fee (0.001 ETH) + entry fee</li>
							<li>• Token must be whitelisted</li>
							<li>• Game starts immediately after creation</li>
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
					function createGame(GameConfig memory config) external payable returns (uint256 gameId)
				</code>
			</div>
		</div>
	</section>

	<!-- Game Configuration -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Game Configuration</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-6">
				The GameConfig struct contains all the parameters needed to create a game.
			</p>
			
			<div class="space-y-6">
				<!-- Token Configuration -->
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Coins class="text-primary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Token Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>token:</strong> Payment token address (0x0 for ETH)</li>
						<li><strong>entryFee:</strong> Cost to join the game (in wei)</li>
						<li><strong>Requirements:</strong> Token must be whitelisted</li>
					</ul>
				</div>

				<!-- Player Configuration -->
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Users class="text-secondary-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Player Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>maxPlayers:</strong> Maximum number of players (10-500)</li>
						<li><strong>Requirements:</strong> Must be between MIN_PLAYERS and MAX_PLAYERS</li>
						<li><strong>Auto-Join:</strong> Creator automatically joins as first player</li>
					</ul>
				</div>

				<!-- Game Timing -->
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Clock class="text-warning-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Timing Settings</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>duration:</strong> Game duration in seconds (24 hours to 30 days)</li>
						<li><strong>Requirements:</strong> Must be between MIN_DURATION and MAX_DURATION</li>
						<li><strong>Auto-Complete:</strong> Game completes when max players reached or expired</li>
					</ul>
				</div>

				<!-- Risk Mode -->
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Target class="text-error-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Risk Mode</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>riskMode:</strong> Risk level (0=Moderate, 1=Aggressive, 2=High Risk, 3=Extreme)</li>
						<li><strong>Moderate:</strong> 25% of players win</li>
						<li><strong>Aggressive:</strong> 15% of players win</li>
						<li><strong>High Risk:</strong> 10% of players win</li>
						<li><strong>Extreme:</strong> 5% of players win</li>
					</ul>
				</div>

				<!-- Game Information -->
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<div class="flex items-center mb-3">
						<Settings class="text-success-500 mr-2" size="20" />
						<h4 class="font-semibold text-surface-900 dark:text-surface-100">Game Information</h4>
					</div>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-2">
						<li><strong>title:</strong> Game title (max 100 bytes)</li>
						<li><strong>description:</strong> Game description (max 500 bytes)</li>
						<li><strong>Requirements:</strong> Both must be non-empty strings</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Payment Requirements -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Payment Requirements</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				When creating a game, you must pay both the creation fee and your entry fee.
			</p>
			
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Creation Fee</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Amount:</strong> 0.001 ETH</li>
						<li><strong>Purpose:</strong> Platform fee for game creation</li>
						<li><strong>Payment:</strong> Always in ETH</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">Entry Fee</h3>
					<ul class="space-y-2 text-surface-700 dark:text-surface-300">
						<li><strong>Amount:</strong> As specified in config.entryFee</li>
						<li><strong>Purpose:</strong> Your participation in the game</li>
						<li><strong>Payment:</strong> In specified token (ETH or ERC-20)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Example -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Example</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				Example of creating a game with ETH payments:
			</p>
			
			<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
				<code class="text-sm font-mono text-surface-800 dark:text-surface-200">
					GameConfig memory config = GameConfig(&#123;<br>
					&nbsp;&nbsp;token: address(0), // ETH<br>
					&nbsp;&nbsp;entryFee: "0.01 ETH", // 0.01 ETH entry fee<br>
					&nbsp;&nbsp;maxPlayers: 50,<br>
					&nbsp;&nbsp;duration: 86400, // 24 hours<br>
					&nbsp;&nbsp;riskMode: RiskMode.MODERATE, // 25% winners<br>
					&nbsp;&nbsp;title: "My First Game",<br>
					&nbsp;&nbsp;description: "A fun game for everyone!"<br>
					&#125;);<br><br>
					// Pay creation fee (0.001 ETH) + entry fee (0.01 ETH)<br>
					uint256 gameId = createGame&#123;value: "0.011 ETH"&#125;(config);
				</code>
			</div>
		</div>
	</section>

	<!-- Validation Rules -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-surface-900 dark:text-surface-100 mb-6">Validation Rules</h2>
		<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6">
			<p class="text-surface-600 dark:text-surface-400 mb-4">
				The contract validates all game parameters before creation.
			</p>
			
			<div class="space-y-4">
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Parameter Validation</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• maxPlayers must be between 10 and 500</li>
						<li>• duration must be between 24 hours and 30 days</li>
						<li>• entryFee must be greater than 0</li>
						<li>• riskMode must be valid (0-3)</li>
						<li>• token must be whitelisted</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">String Validation</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• title must be non-empty and ≤ 100 bytes</li>
						<li>• description must be non-empty and ≤ 500 bytes</li>
					</ul>
				</div>
				
				<div class="bg-surface-100 dark:bg-surface-800 rounded p-4">
					<h4 class="font-semibold text-surface-900 dark:text-surface-100 mb-2">Payment Validation</h4>
					<ul class="text-sm text-surface-600 dark:text-surface-400 space-y-1">
						<li>• Must pay exact creation fee + entry fee</li>
						<li>• For ERC-20 tokens, must approve token transfer</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Navigation -->
	<div class="flex justify-between items-center pt-8 border-t border-surface-200 dark:border-surface-700">
		<a href="/lotto/game-states" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			← Game States
		</a>
		<a href="/lotto/joining-games" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200">
			Joining Games →
		</a>
	</div>
</div>
