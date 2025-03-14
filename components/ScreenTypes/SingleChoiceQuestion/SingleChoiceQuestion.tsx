import Link from 'next/link';

import { selectResponses } from '@/lib/features/survey/surveySelectors';
import { saveResponse } from '@/lib/features/survey/surveySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from '@/styles/components/ScreenType.module.scss';
import { SingleChoiceQuestionProps, Response } from '@/types/questionnaire';
import { replacePlaceholders } from '@/utils/replacePlaceholders';

function SingleChoiceQuestion({ question }: SingleChoiceQuestionProps) {
  const dispatch = useAppDispatch();
  const responses = useAppSelector(selectResponses);

  const isActive = (answerId: number) =>
    responses.some(
      (response) =>
        response.questionId === question.id && response.id === answerId,
    );

  const processedQuestion = replacePlaceholders(
    question.question,
    question.placeholders || {},
    responses,
  );

  const handleSingleChoiceResponse = (answer: Response) => {
    dispatch(
      saveResponse({
        questionId: question.id,
        id: answer.id,
        name: answer.name,
        reference: answer.reference,
      }),
    );
  };

  return (
    <>
      <h1 className={styles.title}>{processedQuestion}</h1>
      <p className={styles.subtitle}>{question.subtitle}</p>
      <div className={styles.answersList}>
        {question.answers?.map((answer) => (
          <Link
            href={`${question.nextScreenId || answer.reference}`}
            key={answer.id}
            className={`${styles.button} ${isActive(answer.id) ? styles.active : ''}`}
            onClick={() => handleSingleChoiceResponse(answer)}
          >
            <span>{answer.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SingleChoiceQuestion;
