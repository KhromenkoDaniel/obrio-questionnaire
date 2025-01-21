import { RootState } from '@/lib/store';

export const selectResponses = (state: RootState) => state.survey.responses;

export const selectDynamicValues = (state: RootState) =>
  state.survey.dynamicValues;

export const selectResponseByQuestion =
  (questionId: string) => (state: RootState) => {
    return (
      state.survey.responses.find((res) => res.id === Number(questionId)) ||
      null
    );
  };
