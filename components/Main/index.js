import Card from '../Card/';
import styles from './style.module.css';
const Main = ({ posts }) => {
  return (
    <div className='w-8/12 mx-auto'>
      <h1 className='py-8'>Posts</h1>
      <div className={styles.grid}>
        {posts.map(({ title, slug, date, excerpt, coverImage }) => (
          <Card
            title={title}
            excerpt={excerpt}
            slug={slug}
            date={date}
            image={coverImage}
            full
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
