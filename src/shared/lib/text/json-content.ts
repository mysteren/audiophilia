import { JSONContent } from "@/shared/types/text";

type ConvertOptions = {
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

  let html = "";

  switch (jsonContent.type) {
    case "doc":
      html += jsonContent.content
        ? jsonContent.content
            .map((child) => jsonContentToHTML(child, options))
            .join("")
        : "";
      break;

    case "paragraph":
      html += `<p>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</p>`;
      break;

    case "bulletList":
      html += `<ul>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</ul>`;
      break;

    case "orderedList":
      html += `<ol>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</ol>`;
      break;

    case "listItem":
      html += `<li>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</li>`;
      break;

    case "table":
      html += `<table>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</table>`;
      break;

    case "tableRow":
      html += `<tr>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</tr>`;
      break;

    case "tableCell":
    case "tableHeader":
      const cellTag = jsonContent.type === "tableHeader" ? "th" : "td";
      const colspan = jsonContent.attrs?.colspan
        ? ` colspan="${jsonContent.attrs.colspan}"`
        : "";
      const rowspan = jsonContent.attrs?.rowspan
        ? ` rowspan="${jsonContent.attrs.rowspan}"`
        : "";
      html += `<${cellTag}${colspan}${rowspan}>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</${cellTag}>`;
      break;

    case "image":
      const src = jsonContent.attrs?.src || "";
      if (!(options?.clearBase64Images && isBase64Image(src))) {
        const alt = jsonContent.attrs?.alt || "";
        const title = jsonContent.attrs?.title
          ? ` title="${jsonContent.attrs.title}"`
          : "";
        html += `<img src="${src}" alt="${alt}"${title} />`;
      }

      break;

    case "text":
      if (jsonContent.marks) {
        jsonContent.marks.forEach((mark) => {
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

      html += jsonContent.text || "";

      if (jsonContent.marks) {
        jsonContent.marks.reverse().forEach((mark) => {
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
      const level = jsonContent.attrs?.level || 1;
      html += `<h${level}>`;
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      html += `</h${level}>`;
      break;

    // Add more cases for other node types as needed

    default:
      if (jsonContent.content) {
        html += jsonContent.content
          .map((child) => jsonContentToHTML(child, options))
          .join("");
      }
      break;
  }

  return html;
}