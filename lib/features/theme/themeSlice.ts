import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  currentTheme: string;
};

const initialState: ThemeState = {
  currentTheme: 'default',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const selectIsGradientTheme = (state: { theme: ThemeState }) =>
  state.theme.currentTheme === 'default';

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
