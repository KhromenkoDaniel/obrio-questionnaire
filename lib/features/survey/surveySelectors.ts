import { RootState } from '@/lib/store';

export const selectResponses = (state: RootState) => state.survey.responses;
