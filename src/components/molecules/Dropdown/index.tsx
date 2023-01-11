import classNames from 'classnames';
import { CaretIcon, CheckIcon } from 'components/atoms/Icon';
import { FC, useMemo, useRef, useState } from 'react';
import { useOutsideClick } from 'utils/hooks';
import styles from './Dropdown.module.scss';

interface MenuItemType {
  label: string;
  value: string;
}

interface DropdownProps {
  items: MenuItemType[];
  currentValue: string;
  onChangeValue: (itemValue: string) => void;
  className?: string;
  placeholder?: string;
  title: string;
}
const Dropdown: FC<DropdownProps> = ({
  items,
  onChangeValue,
  className,
  currentValue,
  placeholder = 'please choose',
  title,
}) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentItem = useMemo(() => {
    return items.find((i) => i.value === currentValue);
  }, [currentValue, items]);
  useOutsideClick(dropdownRef, () => {
    if (show) setShow(false);
  });
  return (
    <div
      className={classNames(styles.dropdown, className ?? '')}
      ref={dropdownRef}
    >
      <div className={styles.value} onClick={() => setShow(!show)}>
        {currentItem?.label ?? placeholder}
        <div className={styles.caret}>
          <CaretIcon width={12} height={12} />
        </div>
      </div>
      <div
        className={styles.menuWrapper}
        style={{ display: show ? 'block' : 'none' }}
      >
        <div className={styles.items}>
          <div className={styles.title}>{title}</div>
          {items.map((item, index) => (
            <div
              className={styles.item}
              onClick={() => {
                onChangeValue(item.value);
                setShow(false);
              }}
              key={`item-${index}`}
            >
              <span className={styles.check}>
                {item.value === currentValue && (
                  <CheckIcon width={12} height={12} />
                )}
              </span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
