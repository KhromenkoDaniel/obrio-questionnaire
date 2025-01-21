'use client';

import Link from 'next/link';

import { selectResponses } from '@/lib/features/survey/surveySelectors';
import { useAppSelector } from '@/lib/hooks';
import styles from '@/styles/components/ScreenType.module.scss';
import { InformationalScreenProps } from '@/types/questionnaire';

function InformationalScreen({ question }: InformationalScreenProps) {
  const responses = useAppSelector(selectResponses);
  const lastResponse = responses.at(-1);

  const nextHref = lastResponse?.reference || '/q1';

  return (
    <>
      <h1 className={styles.title}>{question.question}</h1>
      <p className={styles.subtitle}>{question.subtitle}</p>
      <Link href={nextHref} className={styles.button}>
        Next
      </Link>
    </>
  );
}

export default InformationalScreen;
