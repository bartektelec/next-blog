import BookIcon from '../Icons/Book';
import cn from 'classnames';
import Link from 'next/link';

import styles from './style.module.css';

const Card = ({ image, date, title, excerpt, slug, content, full }) => {
  if (!content) {
    return (
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.container}>
            <div
              className={styles.head}
              style={{ backgroundImage: `url(${image})` }}
            >
              <p className='sr-only'>picture of {title}</p>
            </div>
            <div className={styles.body}>
              <p className={styles.date}>{date}</p>
              <h2 className={styles.title}>{title}</h2>

              <p className={styles.short}>{excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.headBig}
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className='sr-only'>picture of {title}</p>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyLong}>
            <p className={styles.date}>{date}</p>
            <h2 className={styles.titleBig}>{title}</h2>

            <p
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
