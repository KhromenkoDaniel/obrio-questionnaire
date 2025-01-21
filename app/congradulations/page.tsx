'use client';

import { useRouter } from 'next/navigation';

import styles from '@/styles/pages/Congradulation.module.scss';

export default function Congratulations() {
  const router = useRouter();

  const handleRestart = () => {
    localStorage.clear();
    router.push('/q1');
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Congratulations!</h1>
      <p className={styles.message}>
        You’ve successfully completed the questionnaire.
      </p>
      <button onClick={handleRestart} className={styles.button}>
        Restart
      </button>
    </div>
  );
}
