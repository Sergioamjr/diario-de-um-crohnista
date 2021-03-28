import { FixMeLater, SinglePost } from "./../types/index";
import { format } from "date-fns";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src", "wp");

export function getPostBySlug(slug: string): SinglePost {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require("fs");
  const fullPath = join(postsDirectory, `${slug}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  const { slug: pageSlug, title, image, excerpt } = data;
  const date = data.date;
  return {
    slug: pageSlug,
    content,
    frontmatter: {
      title,
      image: image ?? null,
      excerpt: excerpt ?? null,
      date,
    },
  };
}

export function getAllPosts(): FixMeLater[] {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs = require("fs");
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map(getPostBySlug);
  return posts;
}
