import { jsonContentToHTML } from "@/shared/lib/text/json-content";
import { JSONContent } from "@/shared/types/text";
import "@/shared/styles/site/text.css";

type Props = {
  content: JSONContent | string;
  gallery?: React.ReactElement;
};

export function TextContent({ content, gallery }: Props) {
  if (content instanceof Object) {
    const htmlContent = jsonContentToHTML(content);

    let rawResult: Array<string | { component: React.ReactElement }> = [
      htmlContent,
    ];

    if (gallery) {
      rawResult = rawResult.reduce((acc, item) => {
        if (typeof item === "string") {
          const parts = item.split('<p class="gallery" >gallery</p>');
          if (parts.length === 2) {
            return [...acc, parts[0], { component: gallery }, parts[1]];
          }
        }

        return [...acc, item];
      }, [] as Array<string | { component: React.ReactElement }>);
    }

    return rawResult.map((item, index) => {
      if (typeof item === "string") {
        return (
          <div
            key={`text-${index}`}
            className="text"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        );
      } else {
        return item.component;
      }
    });
  }

  return (
    <div className="text" dangerouslySetInnerHTML={{ __html: content }}></div>
  );
}
