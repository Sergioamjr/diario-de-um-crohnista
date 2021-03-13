import { format } from "date-fns";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src", "wp");

export function getPostBySlug(slug) {
  const fs = require("fs");
  const fullPath = join(postsDirectory, `${slug}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  const date = format(data.date, "MMMM dd, yyyy");
  const image = join(postsDirectory, `${slug}/${data.image}`);
  console.log("image", image);
  return {
    slug: data.path,
    content,
    frontmatter: { ...data, date, image },
  };
}

export function getAllPosts() {
  const fs = require("fs");
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map(getPostBySlug);
  return posts;
}
