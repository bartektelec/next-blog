import Card from "../Card/";
import styles from "./style.module.css";
const Main = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h1 className="py-8">Posts</h1>
      <div className={styles.grid}>
        {posts.map(({ title, slug, date, excerpt, coverImage }) => (
          <Card
            key={slug}
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
