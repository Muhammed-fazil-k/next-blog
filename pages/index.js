import Link from "next/link";
import Head from "next/head";
import { getPosts } from "@/lib/posts";

export async function getStaticProps() {
  console.log('[HomePage]:getStaticProps');
  const posts = await getPosts()
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log('[HomePage]:render');
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={`posts/${post.slug}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
