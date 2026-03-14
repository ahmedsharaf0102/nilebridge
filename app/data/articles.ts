export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  emoji: string;
  date: string;
  readTime: string;
  content: Section[];
}

export interface Section {
  type: 'text' | 'heading' | 'list' | 'highlight' | 'table';
  content?: string;
  items?: string[];
  rows?: { col1: string; col2: string; col3: string }[];
}

export const articles: Article[] = [
  {
    slug: 'export-guide-egypt',
    title: 'How to Export Agricultural Products from Egypt to UK',
    description: 'Complete step-by-step guide covering documentation, certifications, phytosanitary requirements, and shipping logistics.',
    category: 'For Suppliers',
    categoryColor: 'emerald',
    emoji: '📦',
    date: 'January 2025',
    readTime: '10 min read',
    content: [
      {
        type: 'highlight',
        content: 'Egypt is one of the world\'s leading agricultural exporters, with the UK being a key market for Egyptian fresh produce. This guide covers everything you need to know to start or grow your agricultural exports to the United Kingdom.',
      },
      {
        type: 'heading',
        content: '1. Register Your Export Business',
      },
      {
        type: 'text',
        content: 'Before exporting, you need to register with the following Egyptian authorities:',
      },
      {
        type: 'list',
        items: [
          'General Organization for Export & Import Control (GOEIC) - Mandatory for all exporters',
          'Agricultural Export Council (AEC) - For agricultural products specifically',
          'Chamber of Commerce - General business registration',
          'Commercial Registry - Your business must be officially registered',
        ],
      },
      {
        type: 'heading',
        content: '2. Obtain Required Certifications',
      },
      {
        type: 'text',
        content: 'UK importers typically require the following certifications:',
      },
      {
        type: 'list',
        items: [
          'GlobalGAP - Good Agricultural Practices (Required by most UK supermarkets)',
          'HACCP - Hazard Analysis Critical Control Points (Food safety standard)',
          'Phytosanitary Certificate - Issued by Egyptian Ministry of Agriculture',
          'BRC (Optional but Recommended) - British Retail Consortium standard',
        ],
      },
      {
        type: 'heading',
        content: '3. UK Import Requirements (Post-Brexit)',
      },
      {
        type: 'text',
        content: 'Since Brexit, the UK has its own import regulations separate from the EU:',
      },
      {
        type: 'list',
        items: [
          'Pre-notification via IPAFFS (Import of Products, Animals, Food and Feed System)',
          'Phytosanitary certificate from country of origin',
          'Products may be subject to physical checks at UK Border Control Posts',
          'Maximum Residue Levels (MRLs) compliance for pesticides',
          'Labelling must comply with UK Food Information Regulations',
        ],
      },
      {
        type: 'heading',
        content: '4. Key Products & Seasons',
      },
      {
        type: 'table',
        rows: [
          { col1: '🍊 Oranges & Citrus', col2: 'Nov - May', col3: 'Very High' },
          { col1: '🥔 Potatoes', col2: 'Year-round', col3: 'High' },
          { col1: '🍓 Strawberries', col2: 'Dec - Apr', col3: 'High' },
          { col1: '🍇 Grapes', col2: 'May - Sep', col3: 'High' },
          { col1: '🌿 Fresh Herbs', col2: 'Year-round', col3: 'Growing' },
          { col1: '🧅 Spring Onions', col2: 'Year-round', col3: 'Medium' },
        ],
      },
    ],
  },
  {
    slug: 'uk-import-regulations',
    title: 'UK Import Regulations for Fresh Produce',
    description: 'Understanding UK food safety standards, customs procedures, and compliance requirements for agricultural imports.',
    category: 'For Importers',
    categoryColor: 'cyan',
    emoji: '🇬🇧',
    date: 'January 2025',
    readTime: '8 min read',
    content: [
      {
        type: 'highlight',
        content: 'Importing fresh produce into the UK requires compliance with specific regulations. This guide helps UK importers understand the requirements for bringing Egyptian agricultural products into the country.',
      },
      {
        type: 'heading',
        content: '1. Border Control Requirements',
      },
      {
        type: 'text',
        content: 'Since January 2024, the UK has implemented full border controls on plant and animal products:',
      },
      {
        type: 'list',
        items: [
          'All fresh produce requires a Phytosanitary Certificate from the country of origin',
          'Pre-notification must be submitted through IPAFFS before goods arrive',
          'High-risk products are subject to documentary, identity, and physical checks',
          'Border Target Operating Model (BTOM) applies to all plant products',
        ],
      },
      {
        type: 'heading',
        content: '2. Food Safety Standards',
      },
      {
        type: 'list',
        items: [
          'UK Maximum Residue Levels (MRLs) for pesticides must be met',
          'Products must be free from regulated pests and diseases',
          'Labelling must include country of origin, lot number, and class/grade',
          'Traceability requirements - must be able to trace product back to farm',
        ],
      },
      {
        type: 'heading',
        content: '3. Documentation Required',
      },
      {
        type: 'list',
        items: [
          'Commercial Invoice',
          'Packing List',
          'Bill of Lading / Airway Bill',
          'Phytosanitary Certificate',
          'Certificate of Origin',
          'Customs Declaration (C88/SAD)',
          'Health Certificate (for certain products)',
        ],
      },
      {
        type: 'heading',
        content: '4. Common Inspection Points',
      },
      {
        type: 'table',
        rows: [
          { col1: 'Felixstowe', col2: 'Major port for container shipments', col3: 'Full BCP' },
          { col1: 'Dover', col2: 'Channel crossing point', col3: 'Full BCP' },
          { col1: 'Heathrow', col2: 'Air freight hub', col3: 'Full BCP' },
          { col1: 'London Gateway', col2: 'Deep-sea container port', col3: 'Full BCP' },
        ],
      },
    ],
  },
  {
    slug: 'certifications-guide',
    title: 'Essential Certifications for Egyptian Exporters',
    description: 'GlobalGAP, HACCP, ISO 22000, BRC - which certificates you need and how to get them.',
    category: 'Certifications',
    categoryColor: 'green',
    emoji: '✅',
    date: 'January 2025',
    readTime: '7 min read',
    content: [
      {
        type: 'highlight',
        content: 'Having the right certifications is crucial for accessing the UK market. This guide explains which certifications Egyptian agricultural exporters need and how to obtain them.',
      },
      {
        type: 'heading',
        content: '1. GlobalGAP (Must Have)',
      },
      {
        type: 'text',
        content: 'GlobalGAP is the most widely recognized standard for Good Agricultural Practices. Almost all UK supermarkets require it.',
      },
      {
        type: 'list',
        items: [
          'Cost: $2,000 - $5,000 depending on farm size',
          'Duration: 6-12 months to implement',
          'Validity: Annual renewal required',
          'Covers: Food safety, environment, worker welfare, traceability',
          'How to get: Contact a GlobalGAP approved certification body in Egypt',
        ],
      },
      {
        type: 'heading',
        content: '2. HACCP (Must Have)',
      },
      {
        type: 'text',
        content: 'Hazard Analysis and Critical Control Points - focuses on food safety during processing and packing.',
      },
      {
        type: 'list',
        items: [
          'Cost: $1,500 - $3,000',
          'Duration: 3-6 months to implement',
          'Required for: All packing houses and processing facilities',
          'Covers: 7 principles of food safety management',
        ],
      },
      {
        type: 'heading',
        content: '3. BRC Global Standard (Recommended)',
      },
      {
        type: 'text',
        content: 'British Retail Consortium standard - preferred by major UK retailers like Tesco, Sainsbury\'s, and M&S.',
      },
      {
        type: 'list',
        items: [
          'Cost: $3,000 - $8,000',
          'Duration: 6-12 months to implement',
          'Grades: AA, A, B, C (aim for A or above)',
          'Major advantage: Opens doors to UK supermarket supply chains',
        ],
      },
      {
        type: 'heading',
        content: '4. Certification Comparison',
      },
      {
        type: 'table',
        rows: [
          { col1: 'GlobalGAP', col2: '$2,000-5,000', col3: 'Essential' },
          { col1: 'HACCP', col2: '$1,500-3,000', col3: 'Essential' },
          { col1: 'BRC', col2: '$3,000-8,000', col3: 'Recommended' },
          { col1: 'ISO 22000', col2: '$2,000-4,000', col3: 'Optional' },
          { col1: 'Organic', col2: '$1,000-3,000', col3: 'Premium Market' },
        ],
      },
    ],
  },
  {
    slug: 'market-overview-2025',
    title: 'Egyptian Agricultural Exports: Market Overview 2025',
    description: 'Key statistics, trending products, pricing data, and market opportunities for Egyptian exporters.',
    category: 'Market Intel',
    categoryColor: 'orange',
    emoji: '📊',
    date: 'January 2025',
    readTime: '12 min read',
    content: [
      {
        type: 'highlight',
        content: 'Egypt exported over $3.5 billion in agricultural products in 2024, making it one of Africa\'s top agricultural exporters. The UK market represents a significant opportunity for Egyptian producers.',
      },
      {
        type: 'heading',
        content: '1. Egypt\'s Top Agricultural Exports',
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
        content: 'The UK imports approximately £45 billion in food and drink annually. Fresh fruit and vegetables account for a significant portion:',
      },
      {
        type: 'list',
        items: [
          'UK imports £10+ billion in fresh produce annually',
          'Post-Brexit, UK is diversifying supply sources beyond EU',
          'Egypt\'s competitive advantage: counter-seasonal supply',
          'Growing demand for herbs, organic produce, and specialty items',
          'UK-Egypt trade deal discussions ongoing - potential tariff benefits',
        ],
      },
      {
        type: 'heading',
        content: '3. Competitive Advantages of Egyptian Products',
      },
      {
        type: 'list',
        items: [
          'Counter-seasonal: Egypt supplies when European production is low',
          'Competitive pricing: Lower production costs than European suppliers',
          'Proximity: Shorter shipping times than South American competitors',
          'Quality: Egyptian citrus and grapes are renowned globally',
          'Year-round supply: Egypt\'s climate allows extended growing seasons',
        ],
      },
      {
        type: 'heading',
        content: '4. Key Trade Routes',
      },
      {
        type: 'table',
        rows: [
          { col1: 'Alexandria → Felixstowe', col2: '10-14 days', col3: 'Sea (Container)' },
          { col1: 'Cairo → Heathrow', col2: '5-6 hours', col3: 'Air Freight' },
          { col1: 'Damietta → London Gateway', col2: '12-15 days', col3: 'Sea (Container)' },
          { col1: 'Alexandria → Dover', col2: '8-12 days', col3: 'Sea (RoRo)' },
        ],
      },
    ],
  },
  {
    slug: 'shipping-logistics',
    title: 'Shipping & Logistics: Egypt to UK Complete Guide',
    description: 'Shipping routes, cold chain logistics, transit times, and cost-effective transportation options.',
    category: 'Logistics',
    categoryColor: 'blue',
    emoji: '🚢',
    date: 'January 2025',
    readTime: '9 min read',
    content: [
      {
        type: 'highlight',
        content: 'Efficient logistics is the backbone of successful agricultural trade. This guide covers shipping options, cold chain management, and cost considerations for Egypt-UK trade.',
      },
      {
        type: 'heading',
        content: '1. Shipping Options',
      },
      {
        type: 'text',
        content: 'There are three main ways to ship agricultural products from Egypt to the UK:',
      },
      {
        type: 'list',
        items: [
          'Sea Freight (Reefer Containers): Most cost-effective for large volumes. 10-15 days transit.',
          'Air Freight: Best for high-value, perishable items. 5-6 hours transit. Higher cost.',
          'Road + Sea (Multimodal): Truck to Mediterranean port, then ferry. Good for time-sensitive cargo.',
        ],
      },
      {
        type: 'heading',
        content: '2. Cold Chain Requirements',
      },
      {
        type: 'list',
        items: [
          'Citrus: 4-8°C with 85-90% humidity',
          'Grapes: -0.5 to 0°C with 90-95% humidity',
          'Strawberries: 0-1°C with 90-95% humidity',
          'Herbs: 0-2°C with 95% humidity',
          'Potatoes: 7-10°C with 90-95% humidity',
        ],
      },
      {
        type: 'heading',
        content: '3. Cost Comparison',
      },
      {
        type: 'table',
        rows: [
          { col1: 'Sea (40ft Reefer)', col2: '$3,000-5,000', col3: '10-15 days' },
          { col1: 'Air (per kg)', col2: '$1.5-3.0/kg', col3: '5-6 hours' },
          { col1: 'Road + Sea', col2: '$4,000-6,000', col3: '7-10 days' },
        ],
      },
      {
        type: 'heading',
        content: '4. Major Egyptian Ports',
      },
      {
        type: 'list',
        items: [
          'Alexandria Port - Largest and most commonly used for agricultural exports',
          'Damietta Port - Growing hub, less congested than Alexandria',
          'Port Said - Strategic location at Suez Canal entrance',
          'Sokhna Port - Red Sea port, alternative routing option',
        ],
      },
    ],
  },
  {
    slug: 'top-products-uk',
    title: 'Top Egyptian Products in Demand in UK Market',
    description: 'Which Egyptian agricultural products are most demanded in the UK and their seasonal availability.',
    category: 'Products',
    categoryColor: 'purple',
    emoji: '🍊',
    date: 'January 2025',
    readTime: '8 min read',
    content: [
      {
        type: 'highlight',
        content: 'Understanding which products are in highest demand helps exporters focus their efforts. Here are the top Egyptian agricultural products sought by UK buyers.',
      },
      {
        type: 'heading',
        content: '1. Citrus Fruits (Highest Demand)',
      },
      {
        type: 'text',
        content: 'Egypt is the world\'s largest exporter of oranges. UK demand peaks from November to May when European supply is limited.',
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
        content: '3. Seasonal Availability Chart',
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
  },
];