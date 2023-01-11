import classNames from 'classnames';
import { FC } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  width: number;
  height: number;
}
export const StarIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      aria-label="star"
      role="img"
      viewBox="0 0 16 16"
      version="1.1"
      width={width}
      height={height}
      data-view-component="true"
      className="octicon octicon-star"
    >
      <path
        fillRule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
  );
};

export const LoadingIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={width}
      height={height}
    >
      <g transform="rotate(0 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93dbe9">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  );
};
export const NextIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      className={styles.svgIcon}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M251.069046 983.355077l471.355077-471.355077L251.069046 40.644923A23.809313 23.809313 0 0 1 284.740267 6.973703l488.190687 488.190687a23.809313 23.809313 0 0 1 0 33.67122L284.740267 1017.026297A23.809313 23.809313 0 0 1 251.069046 983.355077z" />
    </svg>
  );
};
export const PrevIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      className={classNames(styles.svgIcon, styles.prevIcon)}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M251.069046 983.355077l471.355077-471.355077L251.069046 40.644923A23.809313 23.809313 0 0 1 284.740267 6.973703l488.190687 488.190687a23.809313 23.809313 0 0 1 0 33.67122L284.740267 1017.026297A23.809313 23.809313 0 0 1 251.069046 983.355077z" />
    </svg>
  );
};

export const CaretIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      className={classNames(styles.svgIcon, styles.caretIcon)}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M251.069046 983.355077l471.355077-471.355077L251.069046 40.644923A23.809313 23.809313 0 0 1 284.740267 6.973703l488.190687 488.190687a23.809313 23.809313 0 0 1 0 33.67122L284.740267 1017.026297A23.809313 23.809313 0 0 1 251.069046 983.355077z" />
    </svg>
  );
};

export const CheckIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      version="1.1"
      data-view-component="true"
      className="octicon octicon-check select-menu-item-icon"
    >
      <path
        fillRule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      ></path>
    </svg>
  );
};
