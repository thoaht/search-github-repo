import Header from 'components/organisms/Header';
import { FC, ReactElement } from 'react';
import styles from './BaseTemplate.module.scss';

interface BaseTemplateProps {
  children: ReactElement | JSX.Element | ReactElement[] | JSX.Element[];
}

const BaseTemplate: FC<BaseTemplateProps> = ({ children }) => {
  return (
    <div className={styles.baseTemplate}>
      <Header />
      {children}
    </div>
  );
};

export default BaseTemplate;
