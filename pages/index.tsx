import { Component, FixMeLater, AllPosts, SinglePost } from "~types";
import { getAllPosts } from "~utils";
import Card from "~components/card";
import Template from "~components/template";

export default function Home(props: AllPosts): Component {
  return (
    <Template>
      <h3 className="title_">Últimas publicações</h3>
      <ul className="grid">
        {props.posts.map(({ slug, title, image, excerpt }) => (
          <li key={slug} className="xs-row-6">
            <Card title={title} slug={slug} excerpt={excerpt} image={image} />
          </li>
        ))}
      </ul>
    </Template>
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
        }))
        .filter((_post, index) => {
          return index < 6;
        }),
    },
  };
}
