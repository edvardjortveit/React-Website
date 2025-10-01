export interface Country {
  name: string;
  region: 'asia' | 'oceania';
}

export interface TabItem {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
}

export interface Person {
  name: string;
  quote: string;
}
