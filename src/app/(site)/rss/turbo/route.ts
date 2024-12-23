import { getArticlesRSS } from "@/entities/article/model";
import { BASE_URL } from "@/shared/config";
import { UploadsImageLoader } from "@/shared/lib/image-loader";
import { getTurboRSSUrlSetResponse } from "@/shared/lib/rss/turbo";
import {
  jsonContentToHTML,
  textContentParse,
} from "@/shared/lib/text/json-content";
import { GetFileUrl } from "@/shared/lib/utils/url";

export async function GET(request: Request) {
  const items = await getArticlesRSS(1, 128);

  const data = [
    ...items.map(({ title, author, publish, text, slug, files }) => {
      const image = files?.images[0]
        ? UploadsImageLoader({ src: GetFileUrl(files?.images[0]), width: 640 })
        : undefined;

      const content = textContentParse(text);

      return {
        title,
        content: content instanceof Object ? jsonContentToHTML(content, { clearBase64Images: true }) : text,
        author: author.pubname,
        date: new Date(publish),
        url: `${BASE_URL}/journal/article/${slug}`,
        image_url: image,
        breadcrumbs: [
          { link: `${BASE_URL}`, text: "Главная" },
          { link: `${BASE_URL}/journal`, text: "Статьи" },
        ],
        menu: [
          { link: `${BASE_URL}`, text: "Главная" },
          { link: `${BASE_URL}/journal`, text: "Журнал" },
          { link: `${BASE_URL}/page/contacts`, text: "Контакты" },
        ],
      };
    }),
    // [].map(({ title, text, slug }) => {
    //   return {
    //     title,
    //     content: text,
    //     url: `${BASE_URL}/page/${slug}`,
    //     date: new Date(),
    //     breadcrumbs: [
    //       { link: `${BASE_URL}`, text: "Главная" },
    //     ],
    //     menu: [
    //       { link: `${BASE_URL}`, text: "Главная" },
    //       { link: `${BASE_URL}/page/contacts`, text: "Контакты" },
    //     ],
    //   };
    // }),
  ];

  return getTurboRSSUrlSetResponse(data);
}
