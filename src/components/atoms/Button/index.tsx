import classNames from 'classnames';
import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled = false,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className ?? '')}
      disabled={disabled}
    >
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <span className={styles.btnText}>{text}</span>
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
