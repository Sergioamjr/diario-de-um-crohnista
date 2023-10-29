export default function AboutMe(): JSX.Element {
  return (
    <div className="about-me">
      <div>
        <h2>Sobre mim</h2>
        <p className="text">
          Meu nome é Sérgio Junior, eu tenho {new Date().getFullYear() - 1991}{" "}
          anos e sou portador da Doença de Crohn desde 2014, uma Doença
          Inflamatória Intestinal (DII), autoimune, sem cura e com causa
          desconhecida.
        </p>
        <p className="text">
          Trabalho como desenvolvedor de software, moro em Mogi das Cruzes, SP,
          e mesmo com a doença de Crohn, pude me formar na faculdade, fazer
          intercâmbio na Irlanda, viajar para alguns paises.
        </p>
        <p className="text">
          Hoje tenho uma vida normal e a doença não me impede de nada. Gosto de
          andar de bicicleta, ir pra academia, ficar em casa assistindo séries e
          passear com meu pug Bruce.
        </p>

        <div className="grid">
          <div className="xs-row-4">
            <img
              alt="Foto do autor, Sérgio Júnior, sorrindo, com uma barba curta e camisa preta."
              src="/cuzco.jpeg"
            />
          </div>
          <div className="xs-row-4">
            <img
              alt="Foto do autor, Sérgio Júnior, sorrindo, com uma barba curta e camisa preta."
              src="/peru.jpeg"
            />
          </div>

          <div className="xs-row-4">
            <img
              alt="Foto do autor, Sérgio Júnior, sorrindo, com uma barba curta e camisa preta."
              src="/bruce.jpeg"
            />
          </div>
        </div>

        <p className="text">
          Criei o blog Diário de um Crohnista em 2016 pra ser mais uma fonte de
          informação, ajudar os outros portadores, divulgar as DII’s para
          sociedade e mostrar que é possível viver bem com uma DII.
        </p>

        <p className="text">
          Caso queira tirar alguma dúvida ou conversar diretamente comigo,
          sinta-se a vontade{" "}
          <a rel="noreferrer" target="_blank" href="http://wa.me/5511973836084">
            em me mandar uma mensagem no whatsapp
          </a>
          ,{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/sergioamjr_"
          >
            me acompanhar no Instagram
          </a>{" "}
          ou me mandando um email para sergioamjr91@gmail.com.
        </p>
      </div>
    </div>
  );
}
