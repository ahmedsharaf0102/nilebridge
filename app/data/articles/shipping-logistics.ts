import { Article } from './types';

export const shippingLogistics: Article = {
  slug: 'shipping-logistics',
  title: 'Shipping & Logistics: Egypt to UK Complete Guide',
  description:
    'Shipping routes, cold chain logistics, transit times, and cost-effective transportation options.',
  category: 'Logistics',
  categoryColor: 'blue',
  emoji: '🚢',
  date: 'January 2025',
  readTime: '9 min read',
  content: [
    {
      type: 'highlight',
      content:
        'Efficient logistics is the backbone of successful agricultural trade. This guide covers shipping options, cold chain management, and cost considerations for Egypt-UK trade.',
    },
    {
      type: 'heading',
      content: '1. Shipping Options',
    },
    {
      type: 'text',
      content:
        'There are three main ways to ship agricultural products from Egypt to the UK:',
    },
    {
      type: 'list',
      items: [
        'Sea Freight (Reefer Containers): Most cost-effective for large volumes. 10-15 days transit.',
        'Air Freight: Best for high-value, perishable items. 5-6 hours transit. Higher cost.',
        'Road + Sea (Multimodal): Truck to port, then ferry. Good for time-sensitive cargo.',
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
        'Alexandria Port - Largest and most used for agricultural exports',
        'Damietta Port - Growing hub, less congested',
        'Port Said - Strategic location at Suez Canal',
        'Sokhna Port - Red Sea port, alternative routing',
      ],
    },
  ],
};