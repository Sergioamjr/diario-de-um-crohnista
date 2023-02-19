import remark from "remark";
import { GetStaticPaths, GetStaticProps } from "next";
import html from "remark-html";
import { SinglePost, SinglePostWithSidebar } from "~types";
import { getAllPosts, getPostBySlug } from "~utils";
import { format } from "date-fns";
import AboutMe from "~components/about-me";
import Template from "~components/template";
import { useEffect } from "react";

export default function Slug(props: SinglePostWithSidebar): JSX.Element {
  useEffect(() => {
    const allLinks = document.querySelectorAll(".post-content a");
    allLinks.forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  }, []);
  return (
    <Template postFeatured={props.postFeatured} podcasts={props.podcasts}>
      <div className="body_ fadein-animate">
        <h1 className="title">{props.frontmatter.title}</h1>
        <span className="date">
          Publicado em {format(new Date(props.frontmatter.date), "dd/MM/yyyy")}
        </span>
        <article
          className="post-content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <AboutMe />
      </div>
    </Template>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(`/${params.slug}`);
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

  const markdown = await remark()
    .use(html)
    .process(post.content || "");
  const content = markdown.toString();
  return {
    props: { ...post, content, postFeatured, podcasts },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};
