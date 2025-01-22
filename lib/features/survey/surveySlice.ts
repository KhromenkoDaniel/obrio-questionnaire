import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Response = {
  questionId: string;
  id: number;
  name: string;
  reference: string | null;
};

type SurveyState = {
  responses: Response[];
};

const initialState: SurveyState = {
  responses: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveResponse: (state, action: PayloadAction<Response>) => {
      const { questionId, id, name, reference } = action.payload;

      const existingIndex = state.responses.findIndex(
        (res) => res.questionId === questionId,
      );

      if (existingIndex > -1) {
        state.responses[existingIndex] = { questionId, id, name, reference };
      } else {
        state.responses.push({ questionId, id, name, reference });
      }
    },
    clearSurvey: (state) => {
      state.responses = [];
    },
  },
});

export const { saveResponse, clearSurvey } = surveySlice.actions;

export default surveySlice.reducer;
