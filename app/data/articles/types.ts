export interface Section {
  type: 'text' | 'heading' | 'list' | 'highlight' | 'table';
  content?: string;
  items?: string[];
  rows?: { col1: string; col2: string; col3: string }[];
}

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