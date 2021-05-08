export default function Sidebar(): JSX.Element {
  return (
    <aside>
      <div>
        <h3 className="title_">Curta nossa página</h3>
        {/* <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiariodeumcrohnista%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="500"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe> */}
      </div>
      {false && (
        <div>
          <div>
            <h3 className="title_">Principais publicações</h3>
          </div>
          <div>
            <h3 className="title_">Conheça as DII</h3>
          </div>
        </div>
      )}
    </aside>
  );
}
