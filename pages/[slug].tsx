import remark from "remark";
import html from "remark-html";
import { FixMeLater, InitialProps, SinglePost } from "../src/types";
import { getAllPosts, getPostBySlug } from "../src/utils";
import Header from "../src/components/header";

export default function Slug(props: SinglePost): JSX.Element {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="body_">
          <h1 className="title">{props.frontmatter.title}</h1>
          <span className="date">Publicado em 10 de setembro de 2021</span>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({
  params,
}: InitialProps): Promise<FixMeLater> {
  const post = getPostBySlug(`/${params.slug}`);
  console.log("post", post);
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
