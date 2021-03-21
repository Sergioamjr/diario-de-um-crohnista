import Link from "next/link";
import { Component, FixMeLater } from "../src/types";
import { getAllPosts } from "../src/utils";

export default function Home(props): Component {
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
      das: 2,
      posts: posts.map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title,
      })),
    },
  };
}
