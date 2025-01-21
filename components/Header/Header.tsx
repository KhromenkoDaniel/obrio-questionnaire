import Image from 'next/image';

import ReturnBtn from '@/components/Header/ReturnBtn';
import styles from '@/styles/components/Header.module.scss';

type HeaderProps = {
  isGradientTheme: boolean;
};

function Header({ isGradientTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <ReturnBtn isGradientTheme={isGradientTheme} />
        <div className={styles.logo}>
          <Image
            src={isGradientTheme ? '/logo_white.png' : '/logo_black.png'}
            alt="logo"
            width={24}
            height={24}
            priority
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
