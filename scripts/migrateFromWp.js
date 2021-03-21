/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require("axios");
const fs = require("fs");

const BASE_URL =
  "https://diariodeumcrohnista.com.br/wp-json/wp/v2/posts?_embed&per_page=55";
const DIST = "src/wp";
const PUBLIC = "public/images";

function getImageExtension(url) {
  return url.replace(url.substring(0, url.lastIndexOf(".")), "");
}

function cleanPath() {
  fs.rmdirSync(DIST, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.mkdirSync(DIST, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.rmdirSync(PUBLIC, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.mkdirSync(PUBLIC, { recursive: true }, (err) => {
    if (err) throw err;
  });
  console.log(`${PUBLIC} has been deleted and created.`);
  console.log(`${DIST} has been deleted and created.`);
}

async function downloadImage(url, name) {
  const extension = getImageExtension(url);
  return axios({ url, responseType: "stream" })
    .then((response) => {
      return new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(`${PUBLIC}/${name}${extension}`))
          .on("close", resolve)
          .on("finish", resolve)
          .on("error", reject);
      });
    })
    .catch();
}

async function getAllPosts() {
  console.log("Getting all posts 🚀");
  const posts = await axios.get(BASE_URL);
  console.log("Done, number of posts: ", posts.data.length);
  return posts.data;
}

const template = ({ title, content, slug, date, excerpt, thumbnail }) => {
  const extension = thumbnail && getImageExtension(thumbnail);
  return `---
title: ${title.rendered.replace(/:|\[|\]/g, "")}
slug: ${slug}
date: "${date}"
excerpt: ${excerpt.rendered.replace(/:|\[|\]/g, "")} 
${extension ? `image: ${slug}${extension}` : ""}
---
${content.rendered}
  `;
};

async function writePost(post) {
  const thumbnail =
    post?._embedded["wp:featuredmedia"] &&
    post?._embedded["wp:featuredmedia"][0] &&
    post?._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
      ?.source_url;
  const path = `${DIST}/${post.slug}`;
  fs.mkdirSync(path, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFileSync(
    `${path}/index.mdx`,
    template({ ...post, thumbnail }),
    (err) => {
      if (err) throw err;
    }
  );
  if (thumbnail) {
    await downloadImage(thumbnail, post.slug);
  }
  console.log(`Page ${post.slug} successfully created.`);
}

(async () => {
  try {
    cleanPath();
    const posts = await getAllPosts();
    for (const post of posts) {
      await writePost(post);
    }
    console.log(`Done. ${posts.length} posts was created.`);
  } catch (err) {
    console.log("ERROR: ", err);
  }
})();
