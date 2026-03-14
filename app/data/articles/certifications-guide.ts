import { Article } from './types';

export const certificationsGuide: Article = {
  slug: 'certifications-guide',
  title: 'Essential Certifications for Egyptian Exporters',
  description:
    'GlobalGAP, HACCP, ISO 22000, BRC - which certificates you need and how to get them.',
  category: 'Certifications',
  categoryColor: 'green',
  emoji: '✅',
  date: 'January 2025',
  readTime: '7 min read',
  content: [
    {
      type: 'highlight',
      content:
        'Having the right certifications is crucial for accessing the UK market. This guide explains which certifications Egyptian agricultural exporters need and how to obtain them.',
    },
    {
      type: 'heading',
      content: '1. GlobalGAP (Must Have)',
    },
    {
      type: 'text',
      content:
        'GlobalGAP is the most widely recognized standard for Good Agricultural Practices. Almost all UK supermarkets require it.',
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
      content:
        'Hazard Analysis and Critical Control Points - focuses on food safety during processing and packing.',
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
      content:
        "British Retail Consortium standard - preferred by major UK retailers like Tesco, Sainsbury's, and M&S.",
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
};