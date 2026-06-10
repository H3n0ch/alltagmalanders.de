import { articles } from "@/lib/articles";

const BASE_URL = "https://alltagmalanders.de";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = articles
    .map(
      (a) => `
    <item>
      <title>${escape(a.title)}</title>
      <link>${BASE_URL}/${a.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/${a.slug}</guid>
      <description>${escape(a.excerpt)}</description>
      <pubDate>${new Date(a.isoDate).toUTCString()}</pubDate>
      <category>${escape(a.category)}</category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alltag mal anders</title>
    <link>${BASE_URL}</link>
    <description>Tiny Houses, Van Life, Minimalismus und clevere Investments – alternatives Wohnen ehrlich erklärt.</description>
    <language>de</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date(articles[0].isoDate).toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
