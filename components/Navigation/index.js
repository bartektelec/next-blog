import { useState, useCallback } from 'react';
import Link from 'next/link';
import MenuIcon from '../Icons/Menu';
import ThemeToggler from '../ThemeToggler/index.js';
import styles from './style.module.css';
import cn from 'classnames';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const triggerHamburger = useCallback(() => {
    setOpen(!isOpen);
  });
  return (
    <>
      <div className={`${styles.nav} ${isOpen && styles.opened}`}>
        <div className={styles.navlist}>
          <ThemeToggler />
          <Link href='/'>
            <a className={styles.link}>#home</a>
          </Link>
          <Link href='/tag/project'>
            <a className={styles.link}>#projects</a>
          </Link>
          <Link href='/tag/typescript'>
            <a className={styles.link}>#typescript</a>
          </Link>
          <Link href='/tag/patterns'>
            <a className={styles.link}>#patterns</a>
          </Link>
          <Link href='/tag/tools'>
            <a className={styles.link}>#tools</a>
          </Link>
          <Link href='/contact'>
            <a className={styles.link}>#contact</a>
          </Link>
        </div>
      </div>
      <button onClick={triggerHamburger} className={styles.btn}>
        <MenuIcon className={styles.icon} />
      </button>
    </>
  );
};

export default Navigation;
