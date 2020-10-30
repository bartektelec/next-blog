import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { TITLE } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Header from '../../components/Header/';
import Layout from '../../components/layout';
import Navigation from '../../components/Navigation/';
import Main from '../../components/Main/';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Layout>
        <Head>
          <title>{TITLE}</title>
        </Head>
        <Container>
          <Header />
          <div className='flex items-baseline'>
            <Navigation />
            <Main posts={[post]} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
