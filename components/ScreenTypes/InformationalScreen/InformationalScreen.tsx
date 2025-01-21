import Link from 'next/link';
import React from 'react';

import styles from '@/styles/components/ScreenType.module.scss';
import { InformationalScreenProps } from '@/types/questionnaire';

function InformationalScreen({
  question,
  referenceID,
}: InformationalScreenProps) {
  return (
    <>
      <h1 className={styles.title}>{question.question}</h1>
      <p className={styles.subtitle}>{question.subtitle}</p>
      {referenceID && (
        <Link href={referenceID} className={styles.button}>
          Next
        </Link>
      )}
    </>
  );
}

export default InformationalScreen;
