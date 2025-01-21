'use client';

import { useRouter } from 'next/navigation';

import ArrowLeft from '@/public/ArrowLeft';
import styles from '@/styles/components/Header.module.scss';

type HeaderProps = {
  isGradientTheme: boolean;
};

function ReturnBtn({ isGradientTheme }: HeaderProps) {
  const router = useRouter();

  return (
    <button
      className={styles.backButton}
      aria-label="Go to the previous question"
      onClick={() => router.back()}
    >
      <ArrowLeft color={isGradientTheme ? 'white' : '#1A1A1A'} />
    </button>
  );
}

export default ReturnBtn;
