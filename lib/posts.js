import { readFile,readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const { content, data } = matter(source);
  const html = marked.parse(content);

  return {
    title: data.title,
    date: data.date,
    body: html,
  };
}

export async function getPosts(){
  const slugs = await getSlugs()
  const posts = []
  for(let slug of slugs){
    const post = await getPost(slug)
    posts.push({slug,...post})
  }
  return posts
}

export async function getSlugs(){
  const files = await readdir('content/posts')
  return files.filter(f=>f.endsWith('.md')).map((file)=>file.slice(0,-3))
  
}
