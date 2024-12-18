import { ApiClientInstance } from "@/shared/api";
import {
  HeaderSettingsData,
  LinkItemData,
  MainPageSettingsAllData,
  MainPageSettingsData,
  SettingsRecord,
} from "./types";
import { toSearchString } from "@/shared/lib/utils/url";

function getSettings<T>(keys: string[]) {
  const url = `/settings/public?${toSearchString({ keys: keys.join(",") })}`;
  return ApiClientInstance.get<T>(url);
}

export async function getHeaderSettingsData() {
  const result: HeaderSettingsData = {
    headMenu2: [],
  };
  const settings = await getSettings<
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

export async function getMainPageSettingsData() {
  const result: MainPageSettingsAllData = {
    mainPage: {
      metaTitle: "Промышленный портал - Invest Market",
      metaDescription: "На нашей платформе вы найдете большой ассортимент товаров и услуг в области промышленности от сотни поставщиков. Присоединяйтесь!",
    },
  };
  const settings = await getSettings<
    SettingsRecord<unknown>[]
  >(["mainPage"]);
  settings.forEach((item) => {
    if (item.key === "mainPage") {
      result.mainPage = item.value as MainPageSettingsData;
      return;
    }
  });
  return result;
}
