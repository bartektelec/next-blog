import Container from '../components/container';
import Header from '../components/Header/';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { TITLE } from '../lib/constants';
import Navigation from '../components/Navigation/';
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
