import remark from "remark";
import html from "remark-html";
import { FixMeLater, InitialProps, SinglePost } from "../src/types";
import { getAllPosts, getPostBySlug } from "../src/utils";
import { format } from "date-fns";
import AboutMe from "../src/components/about-me";
import Template from "~components/template";

export default function Slug(props: SinglePost): JSX.Element {
  return (
    <Template>
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

export async function getStaticProps({
  params,
}: InitialProps): Promise<FixMeLater> {
  const post = getPostBySlug(`/${params.slug}`);
  const markdown = await remark()
    .use(html)
    .process(post.content || "");
  const content = markdown.toString();
  return {
    props: { ...post, content },
  };
}

export async function getStaticPaths(): Promise<FixMeLater> {
  const posts = getAllPosts();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
