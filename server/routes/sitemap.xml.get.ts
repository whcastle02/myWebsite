import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
  const configured = useRuntimeConfig(event).public.siteUrl;
  const origin = configured || getRequestURL(event).origin;
  const posts = await serverQueryContent(event, "/journal")
    .where({ status: "published" })
    .only(["_path"])
    .find();
  const paths = [
    "/",
    "/work",
    "/work/marang-digital",
    "/journal",
    "/about",
    "/contact",
    "/privacy",
    ...posts.map((post) => post._path),
  ];
  const escape = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    paths
      .map(
        (path) =>
          "<url><loc>" + escape(new URL(path!, origin).href) + "</loc></url>",
      )
      .join("") +
    "</urlset>"
  );
});
