import { useState } from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const ThemeToggler = () => {
  const [isLight, toggleLight] = useState(false);
  const handleToggler = () => {
    const theme = isLight ? 'dark' : 'light';
    toggleLight(!isLight);
    [
      'secondary',
      'text-primary',
      'text-secondary',
      'primary',
      'accent',
      'accent-link',
      'gradient-from',
      'gradient-to',
      'link',
    ].forEach(property => {
      document
        .querySelector(':root')
        .style.setProperty(
          `--current-${property}`,
          `var(--theme-${theme}-${property})`
        );
    });
  };

  return (
    <div
      onClick={handleToggler}
      className='flex items-center justify-between opacity-75 hover:opacity-100 cursor-pointer py-8'
    >
      <p className='text-sm font-bold'>Dark mode</p>
      <div className={cn(styles.togglerBox)}>
        <div className={`${styles.dot} ${isLight && styles.dotActive}`}></div>
      </div>
    </div>
  );
};

export default ThemeToggler;
