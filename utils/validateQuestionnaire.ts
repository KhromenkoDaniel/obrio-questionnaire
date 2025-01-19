import { z } from 'zod';

import questionnaireData from '@/configs/questionnaire.json';
import { Questionnaire } from '@/types/questionnaire';

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
  options: z.array(z.string()).optional(),
  next: z.record(z.string()).optional(),
  theme: z.string().optional(),
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
