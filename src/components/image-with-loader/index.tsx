import { useState } from "react";
import Image, { ImageProps } from "next/image";
import ContentLoader from "react-content-loader";

type ImageWithLoaderType = ImageProps & { uniqueKey?: string };

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={240}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="240" />
  </ContentLoader>
);

export function ImageWithLoader({
  uniqueKey,
  ...props
}: ImageWithLoaderType): JSX.Element {
  const [imageLoaded, setImageLoaded] = useState(false);
  const onImageLoader = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 0);
  };

  return (
    <figure className="post-card--image">
      <MyLoader
        style={{
          zIndex: "1",
          position: "relative",
          opacity: imageLoaded ? 0 : 1,
          transition: "opacity .4s ease",
        }}
        uniqueKey={uniqueKey.split(" ").join().toLowerCase().replace(/,/g, "")}
      />
      <Image onLoad={onImageLoader} {...props} />
    </figure>
  );
}
