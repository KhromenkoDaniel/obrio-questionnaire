'use client';

import { useRouter } from 'next/navigation';

import InformationalScreen from '@/components/ScreenTypes/InformationalScreen';
import SingleChoiceQuestion from '@/components/ScreenTypes/SingleChoiceQuestion';
import { selectResponses } from '@/lib/features/survey/surveySelectors';
import { saveResponse } from '@/lib/features/survey/surveySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from '@/styles/pages/Question.module.scss';
import { Answer, Params } from '@/types/questionnaire';
import { validateQuestionnaire } from '@/utils/validateQuestionnaire';

export default function QuestionPage({ params }: { params: Params }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const responses = useAppSelector(selectResponses);
  const questionnaire = validateQuestionnaire();

  const question = questionnaire.questions.find(
    (q) => q.id === params.questionId,
  );

  if (!question) {
    console.warn(`Question not found for ID: ${params.questionId}`);
    router.replace('/q1');
    return null;
  }

  const handleSingleChoiceResponse = (answer: Answer) => {
    dispatch(saveResponse(answer));
  };
  const lastResponse = responses.at(-1);

  const renderScreen = () => {
    switch (question.screenType) {
      case 'singleChoice':
        return (
          <SingleChoiceQuestion
            question={question}
            onNextQuestion={handleSingleChoiceResponse}
          />
        );
      case 'info':
        return (
          <InformationalScreen
            question={question}
            referenceID={lastResponse?.reference}
          />
        );
      default:
        console.warn('Invalid screenType');
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{renderScreen()}</div>
    </div>
  );
}
