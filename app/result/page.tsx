'use client';

import Link from 'next/link';

import { clearSurvey } from '@/lib/features/survey/surveySlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import styles from '@/styles/pages/Result.module.scss';

export default function ResultPage() {
  const dispatch = useAppDispatch();
  const responses = useAppSelector((state) => state.survey.responses);

  const handleRestart = () => {
    dispatch(clearSurvey());
  };

  if (responses.length === 0) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>No responses found</h1>
        <p className={styles.subtitle}>Please complete the survey first.</p>
        <Link href={'/'} className={styles.button} onClick={handleRestart}>
          Restart
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Survey Results</h1>
      <ul className={styles.list}>
        {responses.map((response) => (
          <li key={response.id} className={styles.item}>
            <strong>Answer:</strong> {response.name} <br />
          </li>
        ))}
      </ul>
      <Link href={'/'} className={styles.button} onClick={handleRestart}>
        Restart
      </Link>
    </div>
  );
}
