import { Component, FixMeLater, AllPosts, SinglePost } from "../src/types";
import { getAllPosts } from "../src/utils";
import Header from "../src/components/header";
import Card from "../src/components/card";

export default function Home(props: AllPosts): Component {
  return (
    <div>
      <Header />
      <div className="container">
        <ul className="grid">
          {props.posts.map(({ slug, title, image, excerpt }) => (
            <li key={slug} className="xs-row-6 sm-row-4">
              <Card title={title} slug={slug} excerpt={excerpt} image={image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<FixMeLater> {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts
        .sort((a: SinglePost, b: SinglePost) => {
          return (
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
          );
        })
        .map((post: SinglePost) => ({
          slug: post.slug,
          title: post.frontmatter.title,
          excerpt: post.frontmatter.excerpt,
          image: post.frontmatter.image,
        })),
    },
  };
}
