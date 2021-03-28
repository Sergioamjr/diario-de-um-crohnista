/* eslint-disable react/prop-types */
import "../styles/globals.scss";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
