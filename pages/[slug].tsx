import remark from "remark";
import { GetStaticPaths, GetStaticProps } from "next";
import html from "remark-html";
import { SinglePostWithSidebar } from "~types";
import { getAllPosts, getPostBySlug } from "~utils";
import { format } from "date-fns";
import AboutMe from "~components/about-me";
import Template from "~components/template";

export default function Slug(props: SinglePostWithSidebar): JSX.Element {
  return (
    <Template postFeatured={props.postFeatured}>
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
  const markdown = await remark()
    .use(html)
    .process(post.content || "");
  const content = markdown.toString();
  return {
    props: { ...post, content, postFeatured },
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
