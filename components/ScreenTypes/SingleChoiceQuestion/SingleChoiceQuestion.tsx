'use client';

import Link from 'next/link';

import { saveResponse } from '@/lib/features/survey/surveySlice';
import { useAppDispatch } from '@/lib/hooks';
import styles from '@/styles/components/ScreenType.module.scss';
import { Response, SingleChoiceQuestionProps } from '@/types/questionnaire';

function SingleChoiceQuestion({ question }: SingleChoiceQuestionProps) {
  const dispatch = useAppDispatch();
  const handleSingleChoiceResponse = (answer: Response) => {
    dispatch(saveResponse(answer));
  };

  return (
    <>
      <h1 className={styles.title}>{question.question}</h1>
      {question.answers?.map((answer) => (
        <Link
          href={`${question.nextScreenId || answer.reference}`}
          key={answer.id}
          className={styles.button}
          onClick={() => handleSingleChoiceResponse(answer)}
        >
          <span>{answer.name}</span>
        </Link>
      ))}
    </>
  );
}

export default SingleChoiceQuestion;
