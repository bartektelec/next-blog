import { useEffect, useState } from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Main from '../../components/Main';
import { getAllPosts } from '../../lib/api';

export default function MatchingPosts({ posts, tagname }) {
  const router = useRouter();
  if (!router.isFallback && !posts) {
    return <ErrorPage statusCode={404} />;
  }
  return <Main posts={posts} />;
}
export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'tags',
  ]);
  const tagRegex = new RegExp(params.tagname, 'gi');

  const matchedPosts = allPosts.filter(post => post.tags.match(tagRegex));

  console.log(matchedPosts);
  return {
    props: { posts: matchedPosts },
  };
}

export async function getStaticPaths() {
  const tags = getAllPosts(['tags']);

  const getTagsProp = item => item.tags;
  const combineAllTags = (acc, curr) => acc + ', ' + curr;

  const allTags = tags.map(getTagsProp).reduce(combineAllTags).split(/, | /gi);

  const uniqueTags = [...new Set(allTags)];

  return {
    paths: uniqueTags.map(tag => {
      return {
        params: {
          tagname: tag,
        },
      };
    }),
    fallback: false,
  };
}
