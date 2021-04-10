type SeoTypes = {
  title?: string;
  description?: string;
  url: string;
  thumbnail?: string;
  color?: string;
  author?: string;
  siteName?: string;
  publishedAt?: string;
};

export default function Seo({
  title = "Diário de um Crohnista | Porque encarar a Doença de Crohn e Retocolite é possível",
  description = "Blog sobre DII, Doenças Inflamatórias Intestinais, como a Doença de Crohn e Retocolite, e qualidade de vida, com informações sobre tratamentos, eventos, notícias, alimentação e pensamentos para se levar uma vida mais saudável.",
  url,
  thumbnail = "thumbnail.jpg",
  color = "#42af96",
  author = "@sergioamjr_",
  siteName = "Diário de um Crohnista",
  publishedAt,
}: SeoTypes): JSX.Element {
  return (
    <>
      <meta name="viewport" content="width=device-width" />
      <meta name="theme-color" content={color} />
      <meta name="msapplication-navbutton-color" content={color} />
      <meta name="apple-mobile-web-app-status-bar-style" content={color} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="article:publisher" content={author} />
      <meta property="article:author" content={author} />
      <meta property="article:published_time" content={publishedAt} />
      <meta property="og:image" content={thumbnail} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={siteName} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:creator" content={author} />
    </>
  );
}