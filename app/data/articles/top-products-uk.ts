import { Article } from './types';

export const topProductsUk: Article = {
  slug: 'top-products-uk',
  title: 'Top Egyptian Products in Demand in UK Market',
  description:
    'Which Egyptian agricultural products are most demanded in the UK and their seasonal availability.',
  category: 'Products',
  categoryColor: 'purple',
  emoji: '🍊',
  date: 'January 2025',
  readTime: '8 min read',
  content: [
    {
      type: 'highlight',
      content:
        'Understanding which products are in highest demand helps exporters focus their efforts. Here are the top Egyptian agricultural products sought by UK buyers.',
    },
    {
      type: 'heading',
      content: '1. Citrus Fruits (Highest Demand)',
    },
    {
      type: 'text',
      content:
        "Egypt is the world's largest exporter of oranges. UK demand peaks from November to May when European supply is limited.",
    },
    {
      type: 'list',
      items: [
        'Navel Oranges: Main variety, Nov-Feb season',
        'Valencia Oranges: Mar-May season, mainly for juice',
        'Mandarins/Clementines: Oct-Jan, growing demand',
        'Lemons: Year-round supply possible',
      ],
    },
    {
      type: 'heading',
      content: '2. Fresh Vegetables',
    },
    {
      type: 'list',
      items: [
        'Potatoes: Year-round, UK is a major market',
        'Spring Onions: High demand, consistent supply',
        'Green Beans: Growing demand, good margins',
        'Sweet Potatoes: Trending product in UK market',
        'Garlic: Competitive alternative to Chinese garlic',
      ],
    },
    {
      type: 'heading',
      content: '3. Herbs & Specialty',
    },
    {
      type: 'list',
      items: [
        'Fresh Mint: Very high demand in UK',
        'Basil: Year-round supply from Egypt',
        'Chamomile: Egypt is world leader',
        'Dill & Parsley: Consistent demand',
        'Pomegranates: Growing premium market',
      ],
    },
    {
      type: 'heading',
      content: '4. Seasonal Availability',
    },
    {
      type: 'table',
      rows: [
        { col1: '🍊 Oranges', col2: 'Nov - May', col3: '★★★★★' },
        { col1: '🍓 Strawberries', col2: 'Dec - Apr', col3: '★★★★☆' },
        { col1: '🍇 Grapes', col2: 'May - Sep', col3: '★★★★☆' },
        { col1: '🥔 Potatoes', col2: 'Year-round', col3: '★★★★★' },
        { col1: '🌿 Herbs', col2: 'Year-round', col3: '★★★★☆' },
        { col1: '🧅 Onions', col2: 'Year-round', col3: '★★★☆☆' },
      ],
    },
  ],
};