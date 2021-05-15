import { SidebarTypes } from "~types";
import Link from "next/link";

export default function Sidebar(props: SidebarTypes): JSX.Element {
  return (
    <aside>
      <div>
        <div className="sidebar-item">
          <h3 className="title_">Principais publicações</h3>
          {props.postFeatured.map((e) => {
            return (
              <div className="featured-post" key={e.frontmatter.title}>
                <img src={`/images/${e.frontmatter.image}`} alt="" />
                <div>
                  <h3 className="title">{e.frontmatter.title}</h3>
                  <Link href={e.slug}>
                    <a>Ler mais</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="title_">Curta nossa página</h3>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiariodeumcrohnista%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </aside>
  );
}
