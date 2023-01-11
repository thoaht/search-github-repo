import classNames from 'classnames';
import { FC } from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  tagName: string;
  className?: string;
}

const Tag: FC<TagProps> = ({ tagName, className }) => {
  return (
    <span className={classNames(styles.tag, className ?? '')}>{tagName}</span>
  );
};

export default Tag;
