import { Component, AllPosts, SinglePost } from "~types";
import { getAllPosts } from "~utils";
import Card from "~components/card";
import Template from "~components/template";
import { GetStaticProps } from "next";
import Link from "next/link";

export default function Home(props: AllPosts): Component {
  return (
    <Template postFeatured={props.postFeatured} podcasts={props.podcasts}>
      <h3 className="title_">Últimas publicações</h3>
      <ul className="grid">
        {props.posts.map(({ slug, title, image, excerpt }) => (
          <li key={slug} className="xs-row-6">
            <Card title={title} slug={slug} excerpt={excerpt} image={image} />
          </li>
        ))}
      </ul>
      <div style={{ textAlign: "center" }}>
        <Link href="/publicacoes">
          <a className="load-more-posts">Mais Publicações</a>
        </Link>
      </div>
    </Template>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
      postFeatured,
      podcasts,
      posts: posts
        .sort((a: SinglePost, b: SinglePost) => {
          return (
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
          );
        })
        .map((post: SinglePost) => ({
          slug: `/${post.slug}`,
          title: post.frontmatter.title,
          excerpt: post.frontmatter.excerpt,
          image: post.frontmatter.image,
        }))
        .filter((_post, index) => {
          return index < 6;
        }),
    },
  };
};
