export type FixMeLater = unknown;

export type Component = JSX.Element;

type Frontmatter = {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

export type SinglePost = {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
};

export type InitialProps = {
  params: {
    slug: string;
  };
};

export type PostPreview = Pick<SinglePost, "slug"> &
  Pick<Frontmatter, "excerpt" | "image" | "title">;

export type AllPosts = {
  posts: PostPreview[];
};
