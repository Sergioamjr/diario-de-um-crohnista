import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(): JSX.Element {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const route = useRouter();
  const routes = [
    { url: "/", label: "Início" },
    { url: "/publicacoes", label: "Publicações" },
    { url: "/podcast", label: "Podcast" },
    { url: "/sobre-mim", label: "Sobre mim" },
  ];

  const toggleMenu = (opened) => {
    setIsMenuOpened(opened);
  };
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo">Diário de um Crohnista</a>
        </Link>
        {isMenuOpened && (
          <nav className="mobile-menu">
            <button
              className="menu-button"
              onClick={() => toggleMenu(false)}
              type="button"
            >
              Fechar
            </button>
            <ul>
              {routes.map(({ url, label }) => (
                <li key={url}>
                  <Link href={url}>
                    <a className={route.pathname === url ? "actived" : ""}>
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <button
          className="menu-button hide-on-desktop"
          onClick={() => toggleMenu(true)}
        >
          Menu
        </button>
        <nav className="hide-on-mobile">
          <ul>
            {routes.map(({ url, label }) => (
              <li key={url}>
                <Link href={url}>
                  <a className={route.pathname === url ? "actived" : ""}>
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
