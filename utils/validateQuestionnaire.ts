import { z } from 'zod';

import questionnaireData from '@/configs/questionnaire.json';
import { Questionnaire } from '@/types/questionnaire';

const answerSchema = z.object({
  id: z.number(),
  name: z.string(),
  reference: z.string().nullable(),
});

const questionSchema = z.object({
  id: z.string(),
  screenType: z.enum([
    'singleChoice',
    'multiChoice',
    'textInput',
    'dateInput',
    'info',
  ]),
  question: z.string(),
  subtitle: z.string().optional(),
  answers: z.array(answerSchema).optional(),
  theme: z.string().optional(),
  nextScreenId: z.string().optional(),
});

const questionnaireSchema = z.object({
  id: z.string(),
  title: z.string(),
  questions: z.array(questionSchema),
});

export const validateQuestionnaire = (): Questionnaire => {
  try {
    return questionnaireSchema.parse(questionnaireData);
  } catch (error) {
    throw new Error(`Invalid questionnaire data: ${(error as Error).message}`);
  }
};
