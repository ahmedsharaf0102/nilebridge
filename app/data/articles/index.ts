import { Article } from './types';
import { exportGuideEgypt } from './export-guide-egypt';
import { ukImportRegulations } from './uk-import-regulations';
import { certificationsGuide } from './certifications-guide';
import { marketOverview2025 } from './market-overview-2025';
import { shippingLogistics } from './shipping-logistics';
import { topProductsUk } from './top-products-uk';

// ✅ عشان تضيف مقالة جديدة:
// 1. أنشئ ملف جديد في المجلد ده
// 2. ضيف import هنا فوق
// 3. ضيفها في الـ array تحت
// خلاص! 🎉

export const articles: Article[] = [
  exportGuideEgypt,
  ukImportRegulations,
  certificationsGuide,
  marketOverview2025,
  shippingLogistics,
  topProductsUk,
];

export type { Article, Section } from './types';