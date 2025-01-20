'use client';

import { useRouter } from 'next/navigation';

import QuestionRenderer from '@/components/QuestionRenderer';
import { selectResponses } from '@/lib/features/survey/surveySelectors';
import { saveResponse } from '@/lib/features/survey/surveySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Params } from '@/types/questionnaire';
import { validateQuestionnaire } from '@/utils/validateQuestionnaire';

const questionnaire = validateQuestionnaire();

export default function QuestionPage({ params }: { params: Params }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const responses = useAppSelector(selectResponses);

  const question = questionnaire.questions.find(
    (q) => q.id === params.questionId,
  );

  if (!question) {
    console.warn(`Question not found for ID: ${params.questionId}`);
    router.replace('/q1');
    return null;
  }

  const handleNext = (answer: {
    id: number;
    name: string;
    reference: string | null;
  }) => {
    dispatch(saveResponse(answer));

    if (question.screenType === 'info') {
      const lastResponse = responses.at(-1);
      if (lastResponse?.reference) {
        router.push(`/${lastResponse.reference}`);
      } else {
        console.warn('No valid reference found for navigation.');
      }
    } else if (question.nextScreenId) {
      router.push(`/${question.nextScreenId}`);
    } else if (answer.reference) {
      router.push(`/${answer.reference}`);
    } else {
      console.warn('No valid reference or nextScreenId found.');
    }
  };

  return <QuestionRenderer question={question} onNextQuestion={handleNext} />;
}
