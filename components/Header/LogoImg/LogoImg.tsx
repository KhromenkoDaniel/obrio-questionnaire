'use client';

import Image from 'next/image';

import { selectIsGradientTheme } from '@/lib/features/theme/themeSlice';
import { useAppSelector } from '@/lib/hooks';
import styles from '@/styles/components/Header.module.scss';

function LogoImg() {
  const isGradientTheme = useAppSelector(selectIsGradientTheme);

  return (
    <div className={styles.logo}>
      <Image
        src={isGradientTheme ? '/logo_black.png' : '/logo_white.png'}
        alt="logo"
        width={24}
        height={24}
        priority
      />
    </div>
  );
}

export default LogoImg;
