import { Article } from './types';

export const exportGuideEgypt: Article = {
  slug: 'export-guide-egypt',
  title: 'How to Export Agricultural Products from Egypt to UK',
  description:
    'Complete step-by-step guide covering documentation, certifications, phytosanitary requirements, and shipping logistics.',
  category: 'For Suppliers',
  categoryColor: 'emerald',
  emoji: '📦',
  date: 'January 2025',
  readTime: '10 min read',
  content: [
    {
      type: 'highlight',
      content:
        "Egypt is one of the world's leading agricultural exporters, with the UK being a key market for Egyptian fresh produce. This guide covers everything you need to know to start or grow your agricultural exports to the United Kingdom.",
    },
    {
      type: 'heading',
      content: '1. Register Your Export Business',
    },
    {
      type: 'text',
      content:
        'Before exporting, you need to register with the following Egyptian authorities:',
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
      content:
        'UK importers typically require the following certifications:',
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
      content:
        'Since Brexit, the UK has its own import regulations separate from the EU:',
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
};