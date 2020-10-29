import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  const postsGitDirectory = fs
    .readdirSync(postsDirectory)
    .filter(filename => filename !== '.git' && filename !== 'assets');
  return postsGitDirectory;
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');

  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const assetsDir = join(process.cwd(), '_posts', 'assets');
  const assetsOutDir = join(process.cwd(), 'public', 'assets');
  const assets = fs.readdirSync(assetsDir);
  assets.forEach(file => {
    console.log('copying');
    fs.copyFileSync(join(assetsDir, file), join(assetsOutDir, file));
  });
  console.log('---------------');
  console.log(assets);
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}
