import Card from "../Card";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { TITLE } from "../../lib/constants";
import BackIcon from "../Icons/Back";
import styles from "./style.module.css";
const Article = ({ title, slug, date, content, coverImage, tags }) => {
  return (
    <>
      <Head>
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          key="ogtitle"
          content={`${title} - ${TITLE}`}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          key="ogimage"
          content={coverImage}
        />
      </Head>
      <div className={styles.container}>
        <div className="py-8">
          <Link href="/">
            <a className="flex gap-4 items-center text-xl font-semibold opacity-75 hover:opacity-100">
              <BackIcon className="w-6 h-6" />
              Go home
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <Card
            key={slug}
            title={title}
            content={content}
            slug={slug}
            date={date}
            tags={tags}
            image={coverImage}
            full
          />
        </div>
      </div>
    </>
  );
};

export default Article;
