<script lang="ts">
  import { 
    Trophy, 
    Medal,
    Award,
    Gift,
    Users,
    Coins,
    Calculator,
    RefreshCw
  } from '@lucide/svelte';

  // Risk mode options matching the contract
  const riskModeOptions = [
    { 
      value: 0, 
      label: 'BALANCED',
      description: 'Balanced approach with 25% winners. Good risk/reward ratio.',
      color: '#3b82f6',
      bgColor: '#dbeafe',
      borderColor: '#2563eb',
      textColor: '#1e40af'
    },
    { 
      value: 1, 
      label: 'RISKY',
      description: 'Risky mode with 15% winners. Higher risk, bigger individual prizes.',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      borderColor: '#f59e0b',
      textColor: '#92400e'
    },
    { 
      value: 2, 
      label: 'HIGH RISK',
      description: 'High risk, 10% winners. Massive prizes for the lucky few.',
      color: '#8b5cf6',
      bgColor: '#f3e8ff',
      borderColor: '#9333ea',
      textColor: '#6b21a8'
    },
    { 
      value: 3, 
      label: 'EXTREME',
      description: 'Maximum risk! Only 5% winners take almost everything.',
      color: '#dc2626',
      bgColor: '#fecaca',
      borderColor: '#b91c1c',
      textColor: '#7f1d1d'
    }
  ];

  // Risk mode data for calculations
  const riskModeData = {
    0: { winners: 0.25, curveFactor: 300000 },
    1: { winners: 0.15, curveFactor: 500000 },
    2: { winners: 0.1, curveFactor: 800000 },
    3: { winners: 0.05, curveFactor: 1000000 }
  };

  // Calculator state
  let entryFee = 1.0;
  let maxPlayers = 100;
  let selectedRiskMode = 0;
  let tokenSymbol = 'USDC';

  // Helper functions
  function calculateGameEconomics(entryFee: number, maxPlayers: number, riskMode: number) {
    const totalPot = entryFee * maxPlayers;
    const platformFeeRate = 0.02; // 2%
    const platformFee = totalPot * platformFeeRate;
    const prizePool = totalPot - platformFee;
    
    const riskData = riskModeData[riskMode as keyof typeof riskModeData];
    const winnersCount = Math.max(1, Math.ceil(maxPlayers * riskData.winners));
    const curveFactor = riskData.curveFactor;
    
    return {
      totalPot,
      prizePool,
      platformFee,
      winnersCount,
      curveFactor
    };
  }

  function calculatePrizes(prizePool: number, winnersCount: number, curveFactor: number) {
    if (winnersCount <= 0) return [];
    
    const prizes = [];
    
    // Handle single winner case
    if (winnersCount === 1) {
      prizes.push(prizePool);
      return prizes;
    }
    
    // Calculate weights using the contract's exact algorithm with 1e6 precision
    const curvePrecision = 1000000; // 1e6 from contract
    const weights = [];
    let totalWeight = 0;
    
    for (let i = 0; i < winnersCount; i++) {
      // Contract formula: position = (i * curvePrecision) / winnersCount
      const position = Math.floor((i * curvePrecision) / winnersCount);
      
      // decayFactor = (curveFactor * position) / curvePrecision
      const decayFactor = Math.floor((curveFactor * position) / curvePrecision);
      
      // Calculate weight with bounds checking
      let weight;
      if (decayFactor >= curvePrecision) {
        weight = 1;
      } else {
        const expValue = curvePrecision - decayFactor;
        // Apply exponential curve by squaring
        weight = Math.floor((expValue * expValue) / curvePrecision);
      }
      
      weights.push(weight);
      totalWeight += weight;
    }
    
    // Ensure we have positive total weight
    if (totalWeight === 0) totalWeight = 1;
    
    // Calculate actual prizes and track remainder
    let distributedPrizes = 0;
    for (let i = 0; i < winnersCount; i++) {
      const prizeAmount = (prizePool * weights[i]) / totalWeight;
      prizes.push(prizeAmount);
      distributedPrizes += prizeAmount;
    }
    
    // Handle any remainder by adding it to the first prize
    const remainder = prizePool - distributedPrizes;
    if (remainder > 0 && prizes.length > 0) {
      prizes[0] += remainder;
    }
    
    return prizes;
  }

  // Reactive calculations
  $: economics = calculateGameEconomics(entryFee, maxPlayers, selectedRiskMode);
  $: prizes = calculatePrizes(economics.prizePool, economics.winnersCount, economics.curveFactor);
  $: selectedRiskData = riskModeData[selectedRiskMode as keyof typeof riskModeData];
  $: selectedRiskOption = riskModeOptions.find(opt => opt.value === selectedRiskMode);

  // Preset scenarios
  const presets = [
    { name: 'Small Game', entryFee: 0.1, maxPlayers: 50, riskMode: 0 },
    { name: 'Medium Game', entryFee: 1.0, maxPlayers: 100, riskMode: 1 },
    { name: 'Large Game', entryFee: 10.0, maxPlayers: 200, riskMode: 2 },
    { name: 'Extreme Game', entryFee: 100.0, maxPlayers: 500, riskMode: 3 }
  ];

  function applyPreset(preset: typeof presets[0]) {
    entryFee = preset.entryFee;
    maxPlayers = preset.maxPlayers;
    selectedRiskMode = preset.riskMode;
  }
</script>

<div class="bg-surface-50 dark:bg-surface-900 rounded-lg p-6 border border-surface-200 dark:border-surface-700">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
      <Calculator size="20" class="text-white" />
    </div>
    <div>
      <h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">Interactive Prize Calculator</h3>
      <p class="text-surface-600 dark:text-surface-400">Calculate exact prize distributions using the smart contract formula</p>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Input Controls -->
    <div class="space-y-6">
      <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Game Parameters</h4>
      
      <!-- Preset Scenarios -->
      <div>
        <div class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-3">Quick Presets</div>
        <div class="grid grid-cols-2 gap-2">
          {#each presets as preset}
            <button
              type="button"
              class="btn btn-sm preset-filled-surface-100-900 border border-surface-200 dark:border-surface-700 hover:border-primary-500 transition-colors"
              onclick={() => applyPreset(preset)}
            >
              {preset.name}
            </button>
          {/each}
        </div>
      </div>

      <!-- Entry Fee -->
      <div>
        <label for="entry-fee" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
          Entry Fee ({tokenSymbol})
        </label>
        <div class="relative">
          <input 
            id="entry-fee"
            type="number" 
            bind:value={entryFee}
            min="0.01"
            step="0.01"
            class="input preset-filled-surface-100-900 border border-surface-200 dark:border-surface-700 focus:border-primary-500 transition-colors pl-10"
            placeholder="1.0"
          />
          <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Coins size="16" class="text-surface-500" />
          </div>
        </div>
      </div>

      <!-- Max Players -->
      <div>
        <label for="max-players" class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
          Max Players: {maxPlayers}
        </label>
        <input 
          id="max-players"
          type="range" 
          bind:value={maxPlayers}
          min="10"
          max="500"
          step="10"
          class="w-full"
        />
        <div class="flex justify-between text-xs text-surface-500 mt-1">
          <span>10</span>
          <span>500</span>
        </div>
      </div>

      <!-- Risk Mode -->
      <div>
        <div class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-3">Risk Mode</div>
        <div class="grid grid-cols-2 gap-2">
          {#each riskModeOptions as option}
            {@const riskData = riskModeData[option.value as keyof typeof riskModeData]}
            {@const isSelected = selectedRiskMode === option.value}
            <button
              type="button"
              class="btn btn-sm font-medium transition-all duration-200"
              style="
                background-color: {isSelected ? option.bgColor : 'transparent'};
                border: 2px solid {isSelected ? option.borderColor : '#e5e7eb'};
                color: {isSelected ? option.textColor : '#6b7280'};
              "
              onclick={() => selectedRiskMode = option.value}
            >
              {option.label}
            </button>
          {/each}
        </div>
        
        {#if selectedRiskOption}
          <div class="text-xs text-surface-600 dark:text-surface-400 mt-3 p-3 bg-surface-100 dark:bg-surface-800 rounded-lg">
            <div class="font-semibold mb-1 text-surface-900 dark:text-surface-100">{selectedRiskOption.label} Mode:</div>
            <div>{selectedRiskOption.description}</div>
          </div>
        {/if}
      </div>

      <!-- Token Selection -->
      <div>
        <div class="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">Token</div>
        <div class="grid grid-cols-4 gap-2">
          {#each ['USDC', 'USDT', 'DAI', 'ETH'] as token}
            <button
              type="button"
              class="btn btn-sm font-medium transition-all duration-200"
              class:preset-filled-primary-500={tokenSymbol === token}
              class:preset-filled-surface-100-900={tokenSymbol !== token}
              onclick={() => tokenSymbol = token}
            >
              {token}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Results -->
    <div class="space-y-6">
      <h4 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Prize Distribution</h4>
      
      <!-- Economics Summary -->
      <div class="bg-surface-100 dark:bg-surface-800 rounded-lg p-4">
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-surface-600 dark:text-surface-400">Total Pool:</span>
            <span class="font-semibold text-surface-900 dark:text-surface-100">
              {economics.totalPot.toFixed(2)} {tokenSymbol}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-surface-600 dark:text-surface-400">Platform Fee (2%):</span>
            <span class="font-semibold text-warning-500">
              {economics.platformFee.toFixed(4)} {tokenSymbol}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-surface-600 dark:text-surface-400">Prize Pool:</span>
            <span class="font-semibold text-success-500">
              {economics.prizePool.toFixed(2)} {tokenSymbol}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-surface-600 dark:text-surface-400">Winners:</span>
            <span class="font-semibold text-primary-500">
              {economics.winnersCount} / {maxPlayers} ({(selectedRiskData.winners * 100).toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>

      <!-- Prize Breakdown -->
      <div class="bg-surface-100 dark:bg-surface-800 rounded-lg p-4">
        <h5 class="font-semibold text-surface-900 dark:text-surface-100 mb-3 flex items-center gap-2">
          <Trophy size="16" class="text-primary-500" />
          Winner Payouts
        </h5>
        
        <div class="space-y-2">
          {#each prizes as prize, index}
            <div class="flex justify-between items-center py-2 border-b border-surface-200 dark:border-surface-700 last:border-b-0">
              <div class="flex items-center gap-2">
                {#if index === 0}
                  <Trophy size="14" class="text-yellow-500" />
                  <span class="text-sm text-surface-600 dark:text-surface-400">1st Place:</span>
                {:else if index === 1}
                  <Medal size="14" class="text-slate-400" />
                  <span class="text-sm text-surface-600 dark:text-surface-400">2nd Place:</span>
                {:else if index === 2}
                  <Award size="14" class="text-orange-600" />
                  <span class="text-sm text-surface-600 dark:text-surface-400">3rd Place:</span>
                {:else}
                  <Gift size="14" class="text-surface-500" />
                  <span class="text-sm text-surface-600 dark:text-surface-400">{index + 1}th Place:</span>
                {/if}
              </div>
              <div class="text-right">
                <div class="font-semibold text-surface-900 dark:text-surface-100">
                  {prize.toFixed(4)} {tokenSymbol}
                </div>
                <div class="text-xs text-surface-500">
                  {((prize / economics.prizePool) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Risk Analysis -->
      <div class="bg-surface-100 dark:bg-surface-800 rounded-lg p-4">
        <h5 class="font-semibold text-surface-900 dark:text-surface-100 mb-3">Risk Analysis</h5>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center p-3 bg-surface-50 dark:bg-surface-900 rounded">
            <div class="text-xs text-surface-600 dark:text-surface-400">Win Rate</div>
            <div class="font-bold text-lg text-surface-900 dark:text-surface-100">
              {(selectedRiskData.winners * 100).toFixed(1)}%
            </div>
          </div>
          <div class="text-center p-3 bg-surface-50 dark:bg-surface-900 rounded">
            <div class="text-xs text-surface-600 dark:text-surface-400">Curve Factor</div>
            <div class="font-bold text-lg text-surface-900 dark:text-surface-100">
              {economics.curveFactor.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
