import LogoImg from '@/components/Header/LogoImg';
import ReturnBtn from '@/components/Header/ReturnBtn';
import styles from '@/styles/components/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <ReturnBtn />
        <LogoImg />
      </div>
    </header>
  );
}

export default Header;
