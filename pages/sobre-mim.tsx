import { Component, SidebarTypes } from "../src/types";
import Template from "~components/template";
import AboutMe from "~components/about-me";
import { getAllPosts } from "~utils";
import { GetStaticProps } from "next";

export default function AboutMePage(props: SidebarTypes): Component {
  return (
    <Template postFeatured={props.postFeatured}>
      <AboutMe />
    </Template>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  const postFeatured = posts.filter((p) => p.frontmatter.featured);

  return {
    props: {
      postFeatured,
    },
  };
};
