/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");

const url = "http://diariodeumcrohnista.com.br";
const postsDirectory = path.join(process.cwd(), "src", "wp");

const template = (content) => {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${content.join("")} 
</urlset>`;
};

const createSitemapFile = (content) => {
  fs.writeFileSync("sitemap.xml", template(content));
};

const addSiteMapItem = ({ slug, modifiedAt }) => {
  return `
<url>
  <loc>${url}/${slug}</loc>
  <lastmod>${modifiedAt}</lastmod>
</url>
`;
};

function getAllPosts() {
  const posts = fs.readdirSync(postsDirectory);
  const now = new Date().toISOString();
  const pages = [
    { slug: "", modifiedAt: now },
    { slug: "sobre-mim", modifiedAt: now },
    { slug: "podcast", modifiedAt: now },
  ];

  for (const post of posts) {
    pages.push({
      post,
      modifiedAt: fs.statSync(`${postsDirectory}/${post}/index.mdx`).mtime,
    });
  }

  const formated = pages.map(addSiteMapItem);

  createSitemapFile(formated);
}

getAllPosts();
