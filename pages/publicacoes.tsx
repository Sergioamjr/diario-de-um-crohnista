import { Component, FixMeLater, AllPosts, SinglePost } from "../src/types";
import { getAllPosts } from "../src/utils";
import Card from "../src/components/card";
import Template from "~components/template";

export default function Home(props: AllPosts): Component {
  return (
    <Template podcasts={props.podcasts} postFeatured={props.postFeatured}>
      <h3 className="title_">Todas publicações</h3>
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
  const postFeatured = posts.filter((p) => p.frontmatter.featured);
  const podcasts = posts
    .filter((post: SinglePost) => {
      return post.frontmatter.categories.includes("Podcast");
    })
    .sort((a: SinglePost, b: SinglePost) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });

  return {
    props: {
      podcasts,
      postFeatured,
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
