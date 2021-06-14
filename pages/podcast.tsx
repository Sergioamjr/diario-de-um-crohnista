import { Component, AllPosts, SinglePost } from "~types";
import { getAllPosts } from "~utils";
import Card from "~components/card";
import Template from "~components/template";
import { GetStaticProps } from "next";

export default function Podcast(props: AllPosts): Component {
  return (
    <Template postFeatured={props.postFeatured} podcasts={[]}>
      <h3 className="title_">Últimos episódios</h3>
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  const postFeatured = posts.filter((p) => p.frontmatter.featured);

  return {
    props: {
      postFeatured,
      posts: posts
        .sort((a: SinglePost, b: SinglePost) => {
          return (
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
          );
        })
        .filter((post: SinglePost) => {
          return post.frontmatter.categories.includes("Podcast");
        })
        .map((post: SinglePost) => ({
          slug: `/${post.slug}`,
          title: post.frontmatter.title,
          excerpt: post.frontmatter.excerpt,
          image: post.frontmatter.image,
        })),
    },
  };
};
