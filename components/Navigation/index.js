import Link from 'next/link';
import ThemeToggler from '../ThemeToggler/index.js';
import styles from './style.module.css';

const Navigation = () => {
  return (
    <div className='w-2/12 flex flex-col text-2xl'>
      <ThemeToggler />
      <Link href='/'>
        <a className={styles.link}>#home</a>
      </Link>
      <Link href='/project/'>
        <a className={styles.link} href='#'>
          #projects
        </a>
      </Link>
      <a className={styles.link} href='#'>
        #typescript
      </a>
      <a className={styles.link} href='#'>
        #patterns
      </a>
      <a className={styles.link} href='#'>
        #tools
      </a>
      <a className={styles.link} href='#'>
        #contact
      </a>
    </div>
  );
};

export default Navigation;
