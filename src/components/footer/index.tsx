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
                <a href="/">Publicações</a>
              </li>
              <li>
                <a href="/">Sobre mim</a>
              </li>
            </ul>
          </div>
          <div className="sm-row-4">
            <h3 className="title_">Minhas redes sociais</h3>
            <ul className="add-margin-left">
              <li>
                <a href="/">Facebook do blog</a>
              </li>
              <li>
                <a href="/">Instagram pessoal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
