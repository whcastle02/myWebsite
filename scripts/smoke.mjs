import assert from "node:assert/strict";

const base = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";
const pages = [
  ["/", "Ubaidah Nazri", "Building web and"],
  ["/work", "Selected work", "Marang Digital"],
  ["/work/marang-digital", "Marang Digital", "Queries &amp; reporting"],
  ["/journal", "Notes and stories", "Hello, and welcome"],
  ["/journal/first-post", "Hello, and welcome", "What to expect"],
  ["/about", "A little about me", "Junior Software Engineer"],
  ["/contact", "Let’s connect", "mailto:ubaidahnazr@gmail.com"],
];
for (const [path, heading, content] of pages) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(html.includes(heading), path + " missing heading");
  assert.ok(html.includes(content), path + " missing expected content");
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    path + " should have one h1",
  );
  assert.ok(html.includes('rel="canonical"'), path + " missing canonical");
  assert.ok(
    html.includes('property="og:title"'),
    path + " missing share title",
  );
  console.log("PASS " + path);
}
const legacy = await fetch(new URL("/experience", base), {
  redirect: "manual",
});
assert.equal(legacy.status, 301);
assert.equal(legacy.headers.get("location"), "/about#experience");
await legacy.arrayBuffer();
console.log("PASS legacy experience redirect");
for (const path of [
  "/journal/life-post",
  "/journal/unpublished.draft",
  "/a-missing-page",
]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 404, path);
  await response.arrayBuffer();
}
console.log("PASS missing and unpublished pages return 404");
const sitemapResponse = await fetch(new URL("/sitemap.xml", base));
assert.equal(sitemapResponse.status, 200);
assert.match(sitemapResponse.headers.get("content-type"), /xml/);
const sitemap = await sitemapResponse.text();
assert.ok(sitemap.includes("/journal/first-post"));
assert.ok(!sitemap.includes("life-post") && !sitemap.includes("draft"));
console.log("PASS sitemap contains only public routes");
for (const path of [
  "/images/ubaidah-clay.webp",
  "/fonts/nunito-sans-latin.woff2",
  "/og_banner.png",
]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  const asset = await response.arrayBuffer();
  assert.ok(asset.byteLength > 0, path + " is empty");
}
console.log("PASS local portrait, font and social image");
console.log("All smoke checks passed.");
