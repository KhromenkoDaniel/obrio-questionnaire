export const loadStateFromLocalStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') {
    console.warn('localStorage is not available on the server.');
    return null;
  }

  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return null;
    return JSON.parse(serializedState) as T;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return null;
  }
};
