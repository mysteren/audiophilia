import { getArticlesRSS } from "@/entities/article/model";
import { UploadsImageLoader } from "@/shared/lib/image-loader";
import { getRSSUrlSetResponse } from "@/shared/lib/rss";
import {
  jsonContentToHTML,
  textContentParse
} from "@/shared/lib/text/json-content";
import { GetFileUrl } from "@/shared/lib/utils/url";

export async function GET(request: Request) {
  const items = await getArticlesRSS(1, 128);

  return getRSSUrlSetResponse(
    items.map(({ title, shortText, author, publish, text, slug, files }) => {
      const image = files?.images[0]
        ? UploadsImageLoader({ src: GetFileUrl(files?.images[0]), width: 1080 })
        : undefined;

      const content = textContentParse(text);

      return {
        title,
        description: shortText,
        author: author.pubname,
        date: new Date(publish),
        text: content instanceof Object ? jsonContentToHTML(content, { clearBase64Images: true }) : content,

        uri: "blog/article/" + slug,
        image,
      };
    }),
    "blog"
  );
}
