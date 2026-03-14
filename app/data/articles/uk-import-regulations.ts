import { Article } from './types';

export const ukImportRegulations: Article = {
  slug: 'uk-import-regulations',
  title: 'UK Import Regulations for Fresh Produce',
  description:
    'Understanding UK food safety standards, customs procedures, and compliance requirements for agricultural imports.',
  category: 'For Importers',
  categoryColor: 'cyan',
  emoji: '🇬🇧',
  date: 'January 2025',
  readTime: '8 min read',
  content: [
    {
      type: 'highlight',
      content:
        'Importing fresh produce into the UK requires compliance with specific regulations. This guide helps UK importers understand the requirements for bringing Egyptian agricultural products into the country.',
    },
    {
      type: 'heading',
      content: '1. Border Control Requirements',
    },
    {
      type: 'text',
      content:
        'Since January 2024, the UK has implemented full border controls on plant and animal products:',
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
        { col1: 'Felixstowe', col2: 'Major port for containers', col3: 'Full BCP' },
        { col1: 'Dover', col2: 'Channel crossing point', col3: 'Full BCP' },
        { col1: 'Heathrow', col2: 'Air freight hub', col3: 'Full BCP' },
        { col1: 'London Gateway', col2: 'Deep-sea container port', col3: 'Full BCP' },
      ],
    },
  ],
};