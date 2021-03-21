import Link from "next/link";
import { Component, FixMeLater, AllPosts, SinglePost } from "../src/types";
import { getAllPosts } from "../src/utils";

export default function Home(props: AllPosts): Component {
  return (
    <div>
      <p>Olá</p>
      {props.posts.map(({ slug, title }) => (
        <div key={slug}>
          <Link href={`/${slug}`}>
            <a>{title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(): Promise<FixMeLater> {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts.map((post: SinglePost) => ({
        slug: post.slug,
        title: post.frontmatter.title,
      })),
    },
  };
}
