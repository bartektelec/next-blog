import Card from '../Card';
import styles from './style.module.css';
const Article = ({ title, slug, date, content, coverImage }) => {
  return (
    <div className={styles.container}>
      <h1 className='py-8'>Posts</h1>
      <div className={styles.grid}>
        <Card
          key={slug}
          title={title}
          content={content}
          slug={slug}
          date={date}
          image={coverImage}
          full
        />
      </div>
    </div>
  );
};

export default Article;
