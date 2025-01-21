import { configureStore } from '@reduxjs/toolkit';

import surveyReducer from '@/lib/features/survey/surveySlice';
import themeReducer from '@/lib/features/theme/themeSlice';

type PreloadedState = {
  survey: ReturnType<typeof surveyReducer>;
};

const loadState = (): PreloadedState | undefined => {
  try {
    const serializedState = localStorage.getItem('surveyState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

const saveState = (state: PreloadedState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('surveyState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    theme: themeReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({ survey: store.getState().survey });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const makeStore = () => store;
