import { ApiClientInstance } from "@/lib/api/api-client";
import { HeaderSettingsData, LinkItemData, SettingsRecord } from "./types";

export async function getHeaderSettingsData() {
  const result: HeaderSettingsData = {
    headMenu2: [],
  };
  const settings = await ApiClientInstance.getSettings<
    SettingsRecord<unknown>[]
  >(["headMenu2"]);
  settings.forEach((item) => {
    if (item.key === "headMenu2") {
      result.headMenu2 = item.value as LinkItemData[];
      return;
    }
  });
  return result;
}
