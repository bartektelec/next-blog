import styles from './style.module.css';

export default function Avatar({ name, picture }) {
    return (
      <div className={styles.container}>
        <img src={picture} className={styles.image} alt={name} />
      </div>
    )
  }
  