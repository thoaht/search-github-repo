import classNames from 'classnames';
import { FC } from 'react';
import styles from './PageTitle.module.scss';

interface PageTitleProps {
  text: string;
  className?: string;
}

const PageTitle: FC<PageTitleProps> = ({ text, className }) => {
  return <h2 className={classNames(styles.title, className ?? '')}>{text}</h2>;
};

export default PageTitle;
