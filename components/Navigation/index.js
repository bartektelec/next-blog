import { useState } from "react";
import Link from "next/link";
import MenuIcon from "../Icons/Menu";
import ThemeToggler from "../ThemeToggler/index.js";
import styles from "./style.module.css";
import cn from "classnames";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const triggerHamburger = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className={`${styles.nav} ${isOpen && styles.opened}`}>
        <div className={styles.navlist}>
          <ThemeToggler />
          <Link href="/">
            <a className={styles.link}>#home</a>
          </Link>
          <Link href="/project/">
            <a className={styles.link} href="#">
              #projects
            </a>
          </Link>
          <a className={styles.link} href="#">
            #typescript
          </a>
          <a className={styles.link} href="#">
            #patterns
          </a>
          <a className={styles.link} href="#">
            #tools
          </a>
          <a className={styles.link} href="#">
            #contact
          </a>
        </div>
      </div>
      <button onClick={triggerHamburger} className={styles.btn}>
        <MenuIcon className={styles.icon} />
      </button>
    </>
  );
};

export default Navigation;
