import classNames from 'classnames';
import { FC } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  onEnter?: () => void;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  className,
  placeholder,
  onEnter,
}) => {
  const handleOnKeydown = (key: string): void => {
    // todo
    if (key === 'Enter' && onEnter) {
      onEnter();
    }
  };
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder ?? ''}
      onChange={(e) => onChange(e.target.value)}
      className={classNames(styles.input, className ?? '')}
      onKeyDown={(e) => handleOnKeydown(e.key)}
    />
  );
};

export default Input;
