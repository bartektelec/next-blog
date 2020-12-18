import { useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const ThemeToggler = () => {
  const [isLight, setLight] = useState(false);
  const handleThemeToggle = useCallback(() => {
    setLight(!isLight);
  });
  const handleThemeApply = useCallback(() => {
    const theme = isLight ? 'dark' : 'light';
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
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      const memoTheme = localStorage.getItem('light-theme');
      const currentTheme = memoTheme ? JSON.parse(memoTheme) : false;
      setLight(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('light-theme', JSON.stringify(isLight));
    }
    handleThemeApply();
  }, [isLight]);

  return (
    <div
      onClick={handleThemeToggle}
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
