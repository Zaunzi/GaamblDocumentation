// Search functionality for documentation
export interface SearchResult {
  title: string;
  description: string;
  href: string;
  section: string;
  content: string;
}

// Documentation pages data
const docsPages: SearchResult[] = [
  {
    title: 'Overview',
    description: 'Platform overview and introduction',
    href: '/',
    section: 'Introduction',
    content: 'Gaambl is a decentralized gaming platform featuring lottery games and NFT raffles built on blockchain technology.'
  },
  {
    title: 'Getting Started',
    description: 'Quick start guide for new users',
    href: '/getting-started',
    section: 'Introduction',
    content: 'Learn how to connect your wallet, navigate the platform, and start playing games on Gaambl.'
  },
  {
    title: 'Contract Addresses',
    description: 'Deployed smart contract addresses',
    href: '/contract-addresses',
    section: 'Introduction',
    content: 'Find the addresses of deployed Gaambl smart contracts on various networks including Ethereum, Polygon, and Arbitrum.'
  },
  {
    title: 'Lotto Overview',
    description: 'How lottery games work on Gaambl',
    href: '/lotto/overview',
    section: 'Gaambl Lotto',
    content: 'Gaambl Lotto is a decentralized lottery system where players can create and join games with different risk modes and prize distributions.'
  },
  {
    title: 'Game Modes',
    description: 'Risk levels and game modes explained',
    href: '/lotto/game-modes',
    section: 'Gaambl Lotto',
    content: 'Four risk modes: Balanced (25% winners), Risky (15% winners), High Risk (10% winners), and Extreme (5% winners).'
  },
  {
    title: 'Game States',
    description: 'Understanding game state management',
    href: '/lotto/game-states',
    section: 'Gaambl Lotto',
    content: 'Games progress through states: Open, Active, Drawing, Completed. Learn how each state affects gameplay and prize distribution.'
  },
  {
    title: 'Creating Games',
    description: 'Guide to creating lottery games',
    href: '/lotto/creating-games',
    section: 'Gaambl Lotto',
    content: 'Step-by-step guide to creating lottery games including setting entry fees, max players, duration, and risk modes.'
  },
  {
    title: 'Joining Games',
    description: 'How to participate in lottery games',
    href: '/lotto/joining-games',
    section: 'Gaambl Lotto',
    content: 'Learn how to browse, filter, and join lottery games. Understand entry requirements and game mechanics.'
  },
  {
    title: 'Prize Distribution',
    description: 'How winners are selected and prizes distributed',
    href: '/lotto/prize-distribution',
    section: 'Gaambl Lotto',
    content: 'Fisher-Yates shuffle algorithm with exponential decay curve. Interactive calculator for exact prize distributions.'
  },
  {
    title: 'Monitoring',
    description: 'Bot operations and game monitoring',
    href: '/lotto/monitoring',
    section: 'Gaambl Lotto',
    content: 'Automated bots monitor games, trigger drawings, and ensure fair play. Learn about the monitoring system.'
  },
  {
    title: 'Raafl Overview',
    description: 'How NFT raffles work on Gaambl',
    href: '/raffle/overview',
    section: 'Gaambl Raafl',
    content: 'Gaambl Raafl allows users to create NFT raffles where participants buy tickets for a chance to win valuable NFTs.'
  },
  {
    title: 'Raffle States',
    description: 'Understanding raffle state management',
    href: '/raffle/raffle-states',
    section: 'Gaambl Raafl',
    content: 'Raffles progress through states: Open, Active, Drawing, Completed. Each state has specific rules and requirements.'
  },
  {
    title: 'Creating Raffles',
    description: 'Guide to creating NFT raffles',
    href: '/raffle/creating-raffles',
    section: 'Gaambl Raafl',
    content: 'Learn how to create NFT raffles, set ticket prices, choose NFTs, and configure raffle parameters.'
  },
  {
    title: 'Joining Raffles',
    description: 'How to participate in NFT raffles',
    href: '/raffle/joining-raffles',
    section: 'Gaambl Raafl',
    content: 'Browse available raffles, purchase tickets, and understand the raffle participation process.'
  },
  {
    title: 'NFT Integration',
    description: 'Supported NFT collections and standards',
    href: '/raffle/nft-integration',
    section: 'Gaambl Raafl',
    content: 'Gaambl supports ERC-721 and ERC-1155 NFT standards. Learn about supported collections and integration requirements.'
  },
  {
    title: 'Pricing Strategy',
    description: 'Optimal pricing for raffle tickets',
    href: '/raffle/pricing-strategy',
    section: 'Gaambl Raafl',
    content: 'Guidelines for setting ticket prices, understanding market dynamics, and maximizing raffle participation.'
  }
];

export function searchDocs(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return docsPages.filter(page => {
    // Search in title, description, section, and content
    const searchableText = [
      page.title,
      page.description,
      page.section,
      page.content
    ].join(' ').toLowerCase();
    
    return searchableText.includes(searchTerm);
  }).sort((a, b) => {
    // Prioritize exact title matches
    const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
    const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
    
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    
    // Then prioritize description matches
    const aDescMatch = a.description.toLowerCase().includes(searchTerm);
    const bDescMatch = b.description.toLowerCase().includes(searchTerm);
    
    if (aDescMatch && !bDescMatch) return -1;
    if (!aDescMatch && bDescMatch) return 1;
    
    // Finally sort alphabetically
    return a.title.localeCompare(b.title);
  });
}

export function getSearchSuggestions(query: string): string[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const suggestions = new Set<string>();
  
  docsPages.forEach(page => {
    // Add title words that start with the search term
    const titleWords = page.title.toLowerCase().split(' ');
    titleWords.forEach(word => {
      if (word.startsWith(searchTerm) && word.length > searchTerm.length) {
        suggestions.add(word);
      }
    });
    
    // Add section names
    if (page.section.toLowerCase().includes(searchTerm)) {
      suggestions.add(page.section);
    }
  });
  
  return Array.from(suggestions).slice(0, 5);
}
