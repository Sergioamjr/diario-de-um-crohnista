import Footer from "~components/footer";
import Header from "~components/header";
import Sidebar from "~components/sidebar";
import { TypesWithChildren } from "~types";

type TemplateProps = {
  withSidebar?: boolean;
};

export default function Template({
  children,
  withSidebar = true,
}: TypesWithChildren<TemplateProps>): JSX.Element {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid">
          <div className="sm-row-8">{children}</div>
          <div className="sm-row-4">{withSidebar && <Sidebar />}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
