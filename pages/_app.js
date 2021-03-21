/* eslint-disable react/prop-types */
import "../styles/globals.css";
import "../styles/post.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
