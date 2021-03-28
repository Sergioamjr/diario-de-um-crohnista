import Link from "next/link";
import { PostPreview } from "./../../types";
import { ImageWithLoader } from "../image-with-loader";

export default function Card({
  title,
  excerpt,
  image,
  slug,
}: PostPreview): JSX.Element {
  const thumbnail = image ? `/images/${image}` : "/default-thumbnail.jpeg";

  return (
    <div className="post-card">
      <Link href={slug}>
        <a>
          <ImageWithLoader
            quality={100}
            className={`${image ? "" : "post-card--with-filter"}`}
            alt=""
            layout="fill"
            src={thumbnail}
          />
        </a>
      </Link>
      <h2 className="post-card--title">{title}</h2>
      <div
        className="post-card--excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Link href={slug}>
        <a className="post-card--link">Continuar lendo</a>
      </Link>
    </div>
  );
}
