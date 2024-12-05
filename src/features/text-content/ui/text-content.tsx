import { jsonContentToHTML } from "@/shared/lib/text/json-content";
import { JSONContent } from "@/shared/types/text";
import '@/shared/styles/site/text.css'

type Props = {
  content: JSONContent | string;
};

export function TextContent({ content }: Props) {
  if (content instanceof Object) {
    const htmlContent = jsonContentToHTML(content);
    return (
      <div className="text" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  }

  return (
    <div className="text" dangerouslySetInnerHTML={{ __html: content }}></div>
  );
}