// Utility functions for the application

export const formatCountryName = (country: string): string => {
  return country.charAt(0).toUpperCase() + country.slice(1);
};

export const getCountryRegion = (country: string): 'asia' | 'oceania' => {
  const asiaCountries = [
    'Kina', 'Japan', 'Malaysia', 'Sør-Korea', 'Laos', 'Thailand',
    'Vietnam', 'Myanmar', 'Singapore', 'India', 'Filippinene', 'Russland'
  ];
  return asiaCountries.includes(country) ? 'asia' : 'oceania';
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
