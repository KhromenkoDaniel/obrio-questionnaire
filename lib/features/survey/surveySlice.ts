import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Response = {
  id: number;
  name: string;
  reference: string | null;
};

type SurveyState = {
  responses: Response[];
  dynamicValues: Record<string, string>;
};

const initialState: SurveyState = {
  responses: [],
  dynamicValues: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveResponse: (state, action: PayloadAction<Response>) => {
      const { id, name, reference } = action.payload;

      const existingIndex = state.responses.findIndex((res) => res.id === id);
      if (existingIndex > -1) {
        state.responses[existingIndex] = { id, name, reference };
      } else {
        state.responses.push({ id, name, reference });
      }

      if (name === 'Male' || name === 'Female') {
        state.dynamicValues['Gender'] = name;
      }
    },
    clearSurvey: () => initialState,
  },
});

export const { saveResponse, clearSurvey } = surveySlice.actions;

export default surveySlice.reducer;
