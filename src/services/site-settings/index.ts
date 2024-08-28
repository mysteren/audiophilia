import { ApiClientInstance } from "@/shared/lib/api/api-client";
import {
  HeaderSettingsData,
  LinkItemData,
  MainPageSettingsAllData,
  MainPageSettingsData,
  SettingsRecord,
} from "./types";

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

export async function getMainPageSettingsData() {
  const result: MainPageSettingsAllData = {
    mainPage: {
      metaTitle: "",
      metaDescription: "",
    },
  };
  const settings = await ApiClientInstance.getSettings<
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
