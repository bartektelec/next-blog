import BookIcon from '../Icons/Book';

import styles from './style.module.css';

const Card = ({ image, date, title, excerpt, slug, full }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.body}>
        <p className={styles.date}>October 20, 2020</p>
        <h2 className={styles.title}>TypeScript Builder pattern</h2>
        <p className={styles.text}>
          Complex class entities may get difficult to produce using only
          constructor arguments, providing more options for customization makes
          the constructor cluttered and difficult to read...
        </p>
      </div>
      <button className={styles.btn}>
        <BookIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default Card;
