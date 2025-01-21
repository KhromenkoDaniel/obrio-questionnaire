'use client';

import { useRouter } from 'next/navigation';

import { selectIsGradientTheme } from '@/lib/features/theme/themeSlice';
import { useAppSelector } from '@/lib/hooks';
import ArrowLeft from '@/public/ArrowLeft';
import styles from '@/styles/components/Header.module.scss';

function ReturnBtn() {
  const router = useRouter();
  const isGradientTheme = useAppSelector(selectIsGradientTheme);

  return (
    <button
      className={styles.backButton}
      aria-label="Go to the previous question"
      onClick={() => router.back()}
    >
      <ArrowLeft color={isGradientTheme ? '#1A1A1A' : 'white'} />
    </button>
  );
}

export default ReturnBtn;
