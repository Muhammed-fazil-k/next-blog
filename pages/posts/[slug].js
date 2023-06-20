import { getPost, getSlugs } from "@/lib/posts";

export async function getStaticPaths(){
  console.log('[slug]:getStaticPaths');
  const slugs = await getSlugs()
  return {
    paths:slugs.map(slug=>{
      return {
        params:{
          slug
        }
      }
    }),
    fallback:false
  }
}

export async function getStaticProps({params:{slug}}) {
  // relative to server
  console.log('[slug]:getStaticProps');
  const post = await getPost(slug);
  return {
    props: {
      post: post,
    },
  };
}

export default function PostPage({ post }) {
  console.log('[slug]:renders');
  return (
    <>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{__html:post.body}}/>
      </main>
    </>
  );
}
