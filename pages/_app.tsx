import Seo from "~components/seo";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps, router }: AppProps) {
  const url = `https://www.diariodeumcrohnista.com.br${router.asPath}`;
  const title = pageProps?.frontmatter?.title;
  const description = pageProps?.frontmatter?.excerpt;
  const publishedAt = pageProps?.frontmatter?.date;
  const thumbnail = pageProps?.frontmatter?.image;

  return (
    <>
      <Seo
        publishedAt={publishedAt}
        url={url}
        title={title}
        description={description}
        thumbnail={thumbnail}
      />

      <Component {...pageProps} />
    </>
  );
}
