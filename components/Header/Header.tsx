import Image from 'next/image';

import ArrowLeft from '@/public/ArrowLeft';
import styles from '@/styles/components/Header.module.scss';

type HeaderProps = {
  isGradientTheme: boolean;
};

function Header({ isGradientTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <button
        className={styles.backButton}
        aria-label="Go to the previous question"
      >
        <ArrowLeft color={isGradientTheme ? 'white' : '#1A1A1A'} />
      </button>
      <div className={styles.logo}>
        <Image
          src={isGradientTheme ? '/logo_white.png' : '/logo_black.png'}
          alt="logo"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
}

export default Header;
