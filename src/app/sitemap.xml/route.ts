// app/server-sitemap-index.xml/route.ts
import { BASE_URL, HOST, PORT, SITEMAP_LIMIT } from "@/shared/config";
import { getProductsCount } from "@/services/sitemap";

function cleanXML(xmlString: string) {
  // Удаляем пробелы и табуляции перед тегами
  xmlString = xmlString.replace(/[\t ]+\</g, "<");
  // Удаляем пробелы и табуляции между тегами
  xmlString = xmlString.replace(/\>[\t ]+\</g, "><");
  // Удаляем пробелы и табуляции после тегов
  xmlString = xmlString.replace(/\>[\t ]+$/g, ">");
  // Удаляем символы новой строки
  xmlString = xmlString.replace(/\n/g, "");
  return xmlString;
}

function sitemapRow(uri: string) {
  return `<sitemap>
    <loc>${BASE_URL}/${uri}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;
}

function sitemapProductRow(index: number) {
  return `<sitemap>
    <loc>${BASE_URL}/product/sitemap.xml/${index}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;
}

export async function GET(request: Request) {
  // Method to source urls from cms

  const productsCount = await getProductsCount();

  const productsPartsCount = Math.ceil(productsCount / SITEMAP_LIMIT);

  const urls: string[] = ["page", "category"].map(sitemapRow);

  const productsUrls = Array.from(Array(productsPartsCount).keys()).map(
    sitemapProductRow
  );

  const data = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
    ${productsUrls.join("")}
  </sitemapindex>`;

  return new Response(cleanXML(data), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
