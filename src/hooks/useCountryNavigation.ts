import { useCallback } from 'react';

export const useCountryNavigation = () => {
  const handleCountryClick = useCallback((country: string) => {
    console.log(`Navigating to ${country}`);
    // Future: Add actual navigation logic here
    // Could integrate with React Router or state management
  }, []);

  return { handleCountryClick };
};
