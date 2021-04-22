import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo">Diário de um Crohnista</a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/publicacoes">
                <a>Publicações</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
