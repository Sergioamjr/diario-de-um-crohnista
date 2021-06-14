import { Component, SidebarTypes, SinglePost } from "../src/types";
import Template from "~components/template";
import AboutMe from "~components/about-me";
import { getAllPosts } from "~utils";
import { GetStaticProps } from "next";

export default function AboutMePage(props: SidebarTypes): Component {
  return (
    <Template podcasts={props.podcasts} postFeatured={props.postFeatured}>
      <AboutMe />
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
      podcasts,
      postFeatured,
    },
  };
};
