import Seo from "~components/seo";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA;
const isProduction = process.env.NODE_ENV === "production";

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
        isProduction={isProduction}
        GA_TRACKING_ID={GA_TRACKING_ID}
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
