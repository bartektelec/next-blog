import BookIcon from "../Icons/Book";
import Link from "next/link";

import styles from "./style.module.css";

const Card = ({ image, date, title, excerpt, slug, full }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <div className={styles.container}>
          <div
            className={styles.head}
            style={{ backgroundImage: `url(${image})` }}
          >
            <p className="sr-only">picture of {title}</p>
          </div>
          <div className={styles.body}>
            <p className={styles.date}>October 20, 2020</p>
            <h2 className={styles.title}>TypeScript Builder pattern</h2>
            <p className={styles.text}>
              Complex class entities may get difficult to produce using only
              constructor arguments, providing more options for customization
              makes the constructor cluttered and difficult to read...
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
