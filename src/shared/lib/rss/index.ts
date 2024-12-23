import { BASE_URL } from "@/shared/config";
import { cleanXML } from "../xml";

export type RSSItemDto = {
  uri: string;
  date: Date;
  title: string;
  description: string;
  image?: string;
  text: string;
  author: string;
};

function filterText(html: string) {
  const regex = /<.*?>|<\s*\/?>/gi;

  const text = html.replace(regex, "");

  return text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll(">", "&gt;")
    .replaceAll("<", "&lt;");
}

function getItem(item: RSSItemDto) {
  const { date, uri, title, description, text, image, author } = item;
  const mediaThumbnail = image ? `<media:thumbnail url="${image}"/>` : "";

  const lang = "ru";

  const cleanText = filterText(text);

  return `<item> 
    <title>${title}</title>
    <description>${description}</description>
    <link>${BASE_URL}/${uri}</link>
    <author>${author}</author> 
    <language>${lang}</language>
    <media:group>
      ${mediaThumbnail}
    </media:group>
    <pubDate>${date.toUTCString()}</pubDate>
      <yandex:full-text>
        ${cleanText}
      </yandex:full-text> 
  </item>`;
}

export function getRSSUrlSetResponse(items: RSSItemDto[], linkUri: string) {
  const data = `<?xml version="1.0" encoding="UTF-8"?>
   <rss 
    xmlns:yandex="http://news.yandex.ru"
    xmlns:media="http://search.yahoo.com/mrss/"
    version="2.0">
    <channel>
      <link>${BASE_URL}/${linkUri}</link>
      ${items.map((item) => getItem(item)).join("\n")}
    </channel>
  </rss>`;

  return new Response(cleanXML(data), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

