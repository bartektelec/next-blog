import { useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const ThemeToggler = () => {
  const [isDark, setDark] = useState(false);
  const handleThemeToggle = useCallback(() => {
    setDark(!isDark);
  });
  const handleThemeApply = useCallback(() => {
    const theme = isDark ? 'dark' : 'light';
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
      const memoTheme = localStorage.getItem('dark-theme');
      const currentTheme = memoTheme ? JSON.parse(memoTheme) : false;
      setDark(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('dark-theme', JSON.stringify(isDark));
    }
    handleThemeApply();
  }, [isDark]);

  return (
    <div
      onClick={handleThemeToggle}
      className='flex items-center justify-between opacity-75 hover:opacity-100 cursor-pointer py-8'
    >
      <p className='text-sm font-bold'>Dark mode</p>
      <div className={cn(styles.togglerBox)}>
        <div className={`${styles.dot} ${!isDark && styles.dotActive}`}></div>
      </div>
    </div>
  );
};

export default ThemeToggler;
