import { ApiClientInstance } from "@/shared/api";
import {
  HeaderSettingsData,
  LinkItemData,
  MainPageSettingsAllData,
  MainPageSettingsData,
  SettingsRecord,
} from "./types";
import { toSearchString } from "@/shared/lib/utils/url";
import { Setting } from "@/shared/types/setting";

function getSettings<T>(keys: string[]) {
  const url = `/settings/public?${toSearchString({ keys: keys.join(",") })}`;
  return ApiClientInstance.get<T>(url);
}

function getSettingsOne<T>(key: string) {
  const url = `/settings/public/one?${toSearchString({ key })}`;
  return ApiClientInstance.get<T>(url);
}

export async function getHeaderSettingsData() {
  const result: HeaderSettingsData = {
    headMenu2: [],
  };
  const settings = await getSettings<SettingsRecord<unknown>[]>(["headMenu2"]);
  settings.forEach((item) => {
    if (item.key === "headMenu2") {
      result.headMenu2 = item.value as LinkItemData[];
      return;
    }
  });
  return result;
}

export async function getHeadMenu2(): Promise<LinkItemData[]> {
  const settings = await getSettingsOne<Setting<LinkItemData[]>>("headMenu2");
  return settings.value;
}

export async function getContacts() {
  const settings = await getSettingsOne<
    Setting<{ phone: string; email: string }>
  >("contacts");
  return settings.value;
}

export async function getMainPageSettingsData() {
  const result: MainPageSettingsAllData = {
    mainPage: {
      metaTitle: "",
      metaDescription: "",
    },
  };
  const settings = await getSettings<SettingsRecord<unknown>[]>(["mainPage"]);
  settings.forEach((item) => {
    if (item.key === "mainPage") {
      result.mainPage = item.value as MainPageSettingsData;
      return;
    }
  });
  return result;
}
