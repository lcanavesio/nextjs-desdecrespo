const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import { getAllPostsWithSlug } from "../../lib/api";

export default async (req, res) => {
  try {
    const links = [];
    
    //NOTE get all posts
    const allPosts = await getAllPostsWithSlug();

    allPosts.edges.map(({ node }) => {
      links.push({
        url: `/post/${node.slug}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    //NOTE other pages
    const pages = [
      "crespo",
      "provinciales",
      "nacionales",
      "internacionales",
      "policiales",
      "rurales",
      "otros",
      "deportes",
      "salud",
    ];

    pages.map((url) => {
      links.push({
        url: `/categoria/${url}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://desdecrespo.com.ar`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
