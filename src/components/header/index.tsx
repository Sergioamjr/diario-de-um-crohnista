import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(): JSX.Element {
  const route = useRouter();
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
                <a className={route.pathname === "/" ? "actived" : ""}>
                  Início
                </a>
              </Link>
            </li>
            <li>
              <Link href="/publicacoes">
                <a
                  className={route.pathname === "/publicacoes" ? "actived" : ""}
                >
                  Publicações
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sobre-mim">
                <a className={route.pathname === "/sobre-mim" ? "actived" : ""}>
                  Sobre mim
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
