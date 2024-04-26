export function translateUnit(unit: string) {
  switch (unit) {
    case "m":
      return "м.";
    case "sht":
      return "шт.";
    case "kg":
      return "кг.";
      case "m2":
      return "м².";
    default:
      return unit;
  }
}
 