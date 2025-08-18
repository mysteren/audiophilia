import { JSONContent } from "@/shared/types/text";
import { changeResize, getSrcSet } from "../image-loader";

type ConvertOptions = {
  cols?: string;
  clearBase64Images?: boolean;
};

function isBase64Image(src: string) {
  return src.startsWith("data:image/") && src.includes("base64,");
}

export function jsonContentToRss(data: JSONContent) {
  let plainText = "";

  // Recursively extract text from the Tiptap JSON structure
  function extractContent(node: JSONContent) {
    if (node.type === "text" && node.text) {
      plainText += node.text + " "; // Add a space between text nodes
    }

    // Recursively extract content for child nodes (if any)
    if (node.content) {
      node.content.forEach((childNode) => extractContent(childNode));
    }
  }

  // Start the extraction process from the root of the document
  (data.content ?? []).forEach((node) => extractContent(node));

  return plainText.trim(); // Return the plain text, trimmed of extra spaces
}

/**
 * @deprecated
 */
export function textContentParse(data: string): JSONContent | string {
  try {
    return JSON.parse(data) as JSONContent;
  } catch (_) {
    return data;
  }
}

export function jsonContentToHTML(
  jsonContent: JSONContent,
  options: ConvertOptions = {}
) {
  if (!jsonContent) return "";

  const { type, content, attrs, marks, text } = jsonContent;

  let html = "";

  switch (type) {
    case "doc":
      html += content
        ? content.map((child) => jsonContentToHTML(child, options)).join("")
        : "";
      break;

    case "paragraph":
      if (attrs?.class) {
        const className = `class="${attrs.class}"`;
        if ((attrs.class as string).includes("tcol2")) {
          options.cols = "col2";
        } else if ((attrs.class as string).includes("tcol3")) {
          options.cols = "col3";
        }
        html += `<p ${className} >`;
      } else {
        html += `<p>`;
      }

      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</p>`;
      break;

    case "bulletList":
      html += `<ul>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</ul>`;
      break;

    case "orderedList":
      html += `<ol>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</ol>`;
      break;

    case "listItem":
      html += `<li>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</li>`;
      break;

    case "table":
      html += `<div class="table"><table>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</table></div>`;
      break;

    case "tableRow":
      html += `<tr>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</tr>`;
      break;

    case "tableCell":
    case "tableHeader":
      const cellTag = type === "tableHeader" ? "th" : "td";
      const colspan = attrs?.colspan ? ` colspan="${attrs.colspan}"` : "";
      const rowspan = attrs?.rowspan ? ` rowspan="${attrs.rowspan}"` : "";
      html += `<${cellTag}${colspan}${rowspan}>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</${cellTag}>`;
      break;

    case "image":
      const src = attrs?.src ?? "";
      const alt = attrs?.alt ?? "";
      const title = attrs?.title ?? "";

      if (isBase64Image(src)) {
        if (!options?.clearBase64Images) {
          html += `<img  src="${src}" alt="${alt}" title="${title}" decoding="async" />`;
        }
      } else {
        const srcset = getSrcSet(src);
        let sizes;
        if (options.cols === "col2") {
          sizes = "(max-width: 768px) 85vw, (max-width: 992px) 384px, 640px";
        } else if (options.cols === "col3") {
          sizes = "(max-width: 768px) 85vw, (max-width: 992px) 750px, 384px";
        } else {
          sizes = "(max-width: 768px) 85vw, (max-width: 992px) 750px, 828px";
        }

        html += `<img  alt="${alt}" decoding="async" loading="lazy" title="${title}" sizes="${sizes}" srcset="${srcset}"  src="${changeResize(
          src,
          384
        )}"/>`;
      }
      break;

    case "text":
      if (marks) {
        marks.forEach((mark) => {
          switch (mark.type) {
            case "bold":
              html += `<strong>`;
              break;
            case "italic":
              html += `<em>`;
              break;
            case "highlight":
              html += `<mark>`;
              break;
            case "link":
              html += `<a href="${mark.attrs?.href}">`;
              break;
            // Add more cases for other marks if needed
          }
        });
      }

      html += text || "";

      if (marks) {
        marks.reverse().forEach((mark) => {
          switch (mark.type) {
            case "bold":
              html += `</strong>`;
              break;
            case "italic":
              html += `</em>`;
              break;
            case "highlight":
              html += `</mark>`;
              break;
            case "link":
              html += `</a>`;
              break;
          }
        });
      }
      break;

    case "heading":
      const level = attrs?.level || 1;
      html += `<h${level}>`;
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</h${level}>`;
      break;

    // Add more cases for other node types as needed

    default:
      if (content) {
        html += content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      break;
  }

  return html;
}