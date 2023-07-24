import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import { GetStaticPaths, GetStaticProps } from "next";
import { SinglePost, SinglePostWithSidebar } from "~types";
import { getAllPosts, getPostBySlug } from "~utils";
import { format } from "date-fns";
import AboutMe from "~components/about-me";
import Template from "~components/template";
import { useEffect } from "react";

import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

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

  let content = post?.content;

  const isHtml = post?.content?.trim().startsWith("<");

  if (!isHtml) {
    const markdown = await unified()
      .use(remarkParse) // Parse markdown content to a syntax tree
      .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
      .use(rehypeStringify) // Serialize HTML syntax tree
      .process(post?.content || "");

    content = String(markdown?.value) ?? "";
  }

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
