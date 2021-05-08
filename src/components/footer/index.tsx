export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="sm-row-4">
            <h3 className="title_">Sobre o Diário de um Crohnista</h3>
            <p>
              Blog sobre Doenças Inflamatórias Intestinais e qualidade de vida,
              com informações sobre tratamentos, eventos, notícias, alimentação
              e pensamentos para se levar uma vida mais saudável.
            </p>
          </div>

          <div className="sm-row-4">
            <h3 className="title_">Mapa do site</h3>
            <ul className="add-margin-left">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/publicacoes">Publicações</a>
              </li>
              <li>
                <a href="/sobre-mim">Sobre mim</a>
              </li>
            </ul>
          </div>
          <div className="sm-row-4">
            <h3 className="title_">Minhas redes sociais</h3>
            <ul className="add-margin-left">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/diariodeumcrohnista/"
                >
                  Facebook do blog
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/sergioamjr_/"
                >
                  Instagram pessoal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
