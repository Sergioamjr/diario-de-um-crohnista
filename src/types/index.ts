export type FixMeLater = unknown;

export type Component = JSX.Element;

export type SinglePost = {
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    image?: string;
  };
  slug: string;
  content: string;
};

export type InitialProps = {
  params: {
    slug: string;
  };
};

type Post = {
  slug: string;
  title: string;
};

export type AllPosts = {
  posts: Post[];
};
