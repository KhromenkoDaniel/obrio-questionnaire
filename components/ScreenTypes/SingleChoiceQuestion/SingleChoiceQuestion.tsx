import Link from 'next/link';
import React from 'react';

import styles from '@/styles/components/ScreenType.module.scss';
import { SingleChoiceQuestionProps } from '@/types/questionnaire';

function SingleChoiceQuestion({
  question,
  onNextQuestion,
}: SingleChoiceQuestionProps) {
  return (
    <>
      <h1 className={styles.title}>{question.question}</h1>
      {question.answers?.map((answer) => (
        <Link
          href={`${question.nextScreenId || answer.reference}`}
          key={answer.id}
          className={styles.button}
          onClick={() => onNextQuestion(answer)}
        >
          <span>{answer.name}</span>
        </Link>
      ))}
    </>
  );
}

export default SingleChoiceQuestion;
