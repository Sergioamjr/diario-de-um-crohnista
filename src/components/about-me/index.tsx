export default function AboutMe(): JSX.Element {
  return (
    <div className="about-me">
      <img
        alt="Foto do autor, Sérgio Júnior, sorrindo, com uma barba curta e camisa preta."
        src="/me.jpeg"
      />
      <div>
        <h2>Sobre mim</h2>
        <p className="text">
          Meu nome é Sérgio Junior, eu tenho 29 anos e sou portador da Doença de
          Crohn desde 2014, uma Doença Inflamatória Intestinal (DII), autoimune,
          sem cura e com causa desconhecida. Mesmo com a doença, pude conquistar
          muitas coisas e hoje ter uma vida normal.
        </p>

        <p className="text">
          Criei o blog Diário de um Crohnista em 2016 pra ser mais uma fonte de
          informação, ajudar os outros portadores, divulgar as DII’s para
          sociedade e mostrar que é possível viver bem com uma DII.
        </p>

        <p className="text">
          Caso queira tirar alguma dúvida ou falar diretamente comigo, sinta-se
          a vontade de me mandar uma mensagem no whatsapp.
        </p>
        <p className="text">
          Caso queira tirar alguma dúvida ou falar diretamente comigo, sinta-se
          a vontade{" "}
          <a rel="noreferrer" target="_blank" href="http://wa.me/5511973836084">
            em me mandar uma mensagem no whatsapp
          </a>
          ,{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/sergioamjr_/"
          >
            me seguir no Instagram
          </a>{" "}
          ou me mandando um para sergioamjr91@gmail.com.
        </p>
      </div>
    </div>
  );
}
