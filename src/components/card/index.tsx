import Link from "next/link";
import Image from "next/image";
import { PostPreview } from "./../../types";

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
          <figure className="post-card--image" style={{ position: "relative" }}>
            <Image
              quality={100}
              className={`${image ? "" : "post-card--with-filter"}`}
              alt=""
              layout="fill"
              src={thumbnail}
            />
          </figure>
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
