import { getAllPosts } from '../lib/api';
import Main from '../components/Main/';

export default function Index({ allPosts }) {
  return (
    <>
      <Main posts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
