import { configureStore } from '@reduxjs/toolkit';

import surveyReducer from '@/lib/features/survey/surveySlice';
import themeReducer from '@/lib/features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const makeStore = () => store;
