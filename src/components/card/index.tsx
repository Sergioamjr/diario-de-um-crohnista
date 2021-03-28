type CardProps = {
  title: string;
  excerpt: string;
  image?: string;
};

const defaultImage =
  "https://ciclovivo.com.br/wp-content/uploads/2018/01/iStock-821895334.jpg";

export default function Card({
  title,
  excerpt,
  image,
}: CardProps): JSX.Element {
  const thumbnail = image ? `images/${image}` : defaultImage;

  return (
    <div className="post-card">
      <a href="/da">
        <figure>
          <img
            className={`post-card--image ${
              image ? "" : "post-card--with-filter"
            }`}
            alt=""
            src={thumbnail}
          />
        </figure>
      </a>
      <h2 className="post-card--title">{title}</h2>
      <div
        className="post-card--excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <a className="post-card--link" href="/das">
        Continuar lendo
      </a>
    </div>
  );
}
