import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo">Diário de um Crohnista</a>
        </Link>
      </div>
    </header>
  );
}
