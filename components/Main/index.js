import Card from "../Card/";
import styles from "./style.module.css";
const Main = () => {
  return (
    <div className="w-8/12 mx-auto">
      <h1 className="py-8">Posts</h1>
      <div className={styles.grid}>
        <Card
          title="TypeScript builder pattern"
          excerpt="Complex class entities may get difficult to produce using only constructor arguments, providing more options for customization makes the constructor cluttered and difficult to read..."
          slug="123"
          date="Oct 13, 2020"
          image="/assets/builder.jpg"
          full
        />
        <Card
          title="TypeScript builder pattern"
          excerpt="Complex class entities may get difficult to produce using only constructor arguments, providing more options for customization makes the constructor cluttered and difficult to read..."
          slug="123"
          date="Oct 13, 2020"
          image="/assets/builder.jpg"
          full
        />
        <Card
          title="TypeScript builder pattern"
          excerpt="Complex class entities may get difficult to produce using only constructor arguments, providing more options for customization makes the constructor cluttered and difficult to read..."
          slug="123"
          date="Oct 13, 2020"
          image="/assets/builder.jpg"
          full
        />
        <Card
          title="TypeScript builder pattern"
          excerpt="Complex class entities may get difficult to produce using only constructor arguments, providing more options for customization makes the constructor cluttered and difficult to read..."
          slug="123"
          date="Oct 13, 2020"
          image="/assets/builder.jpg"
          full
        />
        <Card
          title="TypeScript builder pattern"
          excerpt="Complex class entities may get difficult to produce using only constructor arguments, providing more options for customization makes the constructor cluttered and difficult to read..."
          slug="123"
          date="Oct 13, 2020"
          image="/assets/builder.jpg"
          full
        />
      </div>
    </div>
  );
};

export default Main;
