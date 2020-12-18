import styles from './style.module.css';
import cn from 'classnames';

const BackIcon = ({ className }) => {
  return (
    <svg
      className={cn(styles.iconFillPrimary, className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <g data-name='Layer 2'>
        <g data-name='arrow-ios-back'>
          <rect
            width='24'
            height='24'
            transform='rotate(90 12 12)'
            opacity='0'
          />
          <path d='M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z' />
        </g>
      </g>
    </svg>
  );
};

export default BackIcon;
