import classNames from 'classnames';
import Button from 'components/atoms/Button';
import { NextIcon, PrevIcon } from 'components/atoms/Icon';
import { FC, useMemo, useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import {
  MAX_ITEMS,
  DOTS,
  TOTAL_PAGE_NUMBER,
  SIBLING_COUNT,
  MOBILE_WIDTH,
} from 'utils/constants';

interface PaginationProps {
  itemCount: number;
  perPage: number;
  currentPage: number;
  onChangeCurrent: (page: number) => void;
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const Pagination: FC<PaginationProps> = ({
  itemCount,
  perPage,
  currentPage,
  onChangeCurrent,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const paginationRange = useMemo(() => {
    const pageCount = Math.ceil(Math.min(itemCount, MAX_ITEMS) / perPage);
    if (pageCount <= TOTAL_PAGE_NUMBER) {
      return range(1, pageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1);
    const rightSiblingIndex = Math.min(currentPage + SIBLING_COUNT, pageCount);
    const shouldShowLeftDots = leftSiblingIndex > 3;
    const shouldShowRightDots = rightSiblingIndex < pageCount - 3;

    const firstIdx = 1;
    const secondIdx = 2;
    const lastIdx = pageCount;
    const ndLastIdx = pageCount - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 7);

      return [...leftRange, DOTS, ndLastIdx, lastIdx];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(pageCount - 7 + 1, pageCount);
      return [firstIdx, secondIdx, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        firstIdx,
        secondIdx,
        DOTS,
        ...middleRange,
        DOTS,
        ndLastIdx,
        lastIdx,
      ];
    }
    return [];
  }, [itemCount, perPage, currentPage]);
  return (
    <div className={styles.pagination}>
      <Button
        className={styles.notCurrent}
        text="Previous"
        onClick={() => {
          onChangeCurrent(currentPage - 1);
        }}
        disabled={currentPage === 1}
        leftIcon={<PrevIcon width={12} height={12} />}
      />
      {width > MOBILE_WIDTH &&
        paginationRange.map((page, idx) => {
          return page === DOTS ? (
            <span key={idx}>...</span>
          ) : (
            <Button
              className={classNames(styles.pageBtn, {
                [styles.notCurrent]: page !== currentPage,
              })}
              text={String(page)}
              key={idx}
              onClick={() => {
                onChangeCurrent(page);
              }}
            />
          );
        })}
      <Button
        className={styles.notCurrent}
        text="Next"
        onClick={() => {
          onChangeCurrent(currentPage + 1);
        }}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        rightIcon={<NextIcon width={12} height={12} />}
      />
    </div>
  );
};

export default Pagination;
