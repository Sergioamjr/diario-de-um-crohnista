const axios = require("axios");
const fs = require("fs");

const BASE_URL = "https://diariodeumcrohnista.com.br/wp-json/wp/v2/posts";
const DIST = "src/wp";

function cleanPath() {
  fs.rmdirSync(DIST, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.mkdirSync(DIST, { recursive: true }, (err) => {
    if (err) throw err;
  });
  console.log(`${DIST} has been deleted and created.`);
}

async function getAllPosts() {
  try {
    console.log("Getting posts 🚀");
    const posts = await axios.get(BASE_URL);
    console.log("Done, total: ", posts.data.length);
    return posts.data;
  } catch (err) {
    console.error("getAllPosts", err);
  }
}

const template = ({ title, content, slug, date, excerpt }) => `---
title: ${title.rendered}
slug: ${slug}
date: ${date}
excerpt: ${excerpt.rendered}
---
${content.rendered}
`;

function writePost(post) {
  try {
    const path = `${DIST}/${post.slug}`;
    fs.mkdirSync(path, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFileSync(`${path}/index.mdx`, template(post), (err) => {
      if (err) throw err;
    });
    console.log(`Page ${post.slug} successfully created.`);
  } catch (err) {
    console.error("writePost", err);
  }
}

(async () => {
  cleanPath();
  const posts = await getAllPosts();
  for (const post of posts) {
    writePost(post);
  }
  console.log(`Done. ${posts.length} posts was created.`);
})();
