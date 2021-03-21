import remark from "remark";
import html from "remark-html";
import { FixMeLater, InitialProps, SinglePost } from "../src/types";
import { getAllPosts, getPostBySlug } from "../src/utils";

export default function Slug(props: SinglePost): JSX.Element {
  return (
    <div className="container">
      <h1>{props.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
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
