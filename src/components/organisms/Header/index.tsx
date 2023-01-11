import Logo from 'components/atoms/Logo';
import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <Logo />
        <h2>Search Github</h2>
      </div>
    </div>
  );
};

export default Header;
