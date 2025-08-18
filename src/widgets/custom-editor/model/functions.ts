export function clearStylesFromHtml(html: string): string {
  // Удаляем все встроенные стили
  let cleanedHtml = html.replace(/ style="[^"]*"/g, ''); // Удаляем атрибут style
  // cleanedHtml = cleanedHtml.replace(/ class="[^"]*"/g, ''); // Удаляем атрибут class

  return cleanedHtml;
}

export function clearClassesFromHtml(html: string): string {
  // Удаляем все встроенные стили
  // let cleanedHtml = html.replace(/ style="[^"]*"/g, ''); // Удаляем атрибут style
  let cleanedHtml = html.replace(/ class="[^"]*"/g, ''); // Удаляем атрибут class

  return cleanedHtml;
}

export function clearHtml(html: string): string {
  // Удаляем все встроенные стили
  let cleanedHtml = html.replace(/ style="[^"]*"/g, ''); // Удаляем атрибут style
  cleanedHtml = cleanedHtml.replace(/ class="[^"]*"/g, ''); // Удаляем атрибут class


  return cleanedHtml;
}

export function removeLinks(htmlText: string): string {
  // Используем регулярное выражение для удаления тегов <a> и их содержимого
  return htmlText.replace(/<a[^>]*>(.*?)<\/a>/gi, '$1');
}