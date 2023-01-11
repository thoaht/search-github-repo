import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.scss';

interface LinkComponentProps {
  href: string;
  text: string;
  className?: string;
}

export const InternalLink: FC<LinkComponentProps> = ({
  href,
  text,
  className,
}) => {
  return (
    <Link to={href} className={classNames(styles.link, className ?? '')}>
      {text}
    </Link>
  );
};

export const ExternalLink: FC<LinkComponentProps> = ({
  href,
  text,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(styles.link, className ?? '')}
    >
      {text}
    </a>
  );
};
