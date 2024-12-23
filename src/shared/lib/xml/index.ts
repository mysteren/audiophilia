export function cleanXML(xmlString: string) {
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