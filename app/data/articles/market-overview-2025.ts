import { Article } from './types';

export const marketOverview2025: Article = {
  slug: 'market-overview-2025',
  title: 'Egyptian Agricultural Exports: Market Overview 2025',
  description:
    'Key statistics, trending products, pricing data, and market opportunities for Egyptian exporters.',
  category: 'Market Intel',
  categoryColor: 'orange',
  emoji: '📊',
  date: 'January 2025',
  readTime: '12 min read',
  content: [
    {
      type: 'highlight',
      content:
        "Egypt exported over $3.5 billion in agricultural products in 2024, making it one of Africa's top agricultural exporters. The UK market represents a significant opportunity for Egyptian producers.",
    },
    {
      type: 'heading',
      content: "1. Egypt's Top Agricultural Exports",
    },
    {
      type: 'table',
      rows: [
        { col1: 'Citrus Fruits', col2: '$1.2 billion', col3: '#1 Export' },
        { col1: 'Potatoes', col2: '$350 million', col3: '#2 Export' },
        { col1: 'Fresh Vegetables', col2: '$280 million', col3: '#3 Export' },
        { col1: 'Grapes', col2: '$220 million', col3: '#4 Export' },
        { col1: 'Herbs & Spices', col2: '$180 million', col3: '#5 Export' },
      ],
    },
    {
      type: 'heading',
      content: '2. UK Market Opportunity',
    },
    {
      type: 'text',
      content:
        'The UK imports approximately £45 billion in food and drink annually. Fresh fruit and vegetables account for a significant portion:',
    },
    {
      type: 'list',
      items: [
        'UK imports £10+ billion in fresh produce annually',
        'Post-Brexit, UK is diversifying supply sources beyond EU',
        "Egypt's competitive advantage: counter-seasonal supply",
        'Growing demand for herbs, organic produce, and specialty items',
        'UK-Egypt trade deal discussions ongoing - potential tariff benefits',
      ],
    },
    {
      type: 'heading',
      content: '3. Competitive Advantages',
    },
    {
      type: 'list',
      items: [
        'Counter-seasonal: Egypt supplies when European production is low',
        'Competitive pricing: Lower production costs than European suppliers',
        'Proximity: Shorter shipping times than South American competitors',
        'Quality: Egyptian citrus and grapes are renowned globally',
        "Year-round supply: Egypt's climate allows extended growing seasons",
      ],
    },
    {
      type: 'heading',
      content: '4. Key Trade Routes',
    },
    {
      type: 'table',
      rows: [
        { col1: 'Alexandria → Felixstowe', col2: '10-14 days', col3: 'Sea' },
        { col1: 'Cairo → Heathrow', col2: '5-6 hours', col3: 'Air' },
        { col1: 'Damietta → London Gateway', col2: '12-15 days', col3: 'Sea' },
        { col1: 'Alexandria → Dover', col2: '8-12 days', col3: 'Sea' },
      ],
    },
  ],
};