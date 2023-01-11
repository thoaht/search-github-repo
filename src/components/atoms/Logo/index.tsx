import { FC } from 'react';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + '/images/logo.svg'}
      className={styles.logo}
      alt="logo"
    />
  );
};

export default Logo;
