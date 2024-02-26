export type SettingsRecord<T> = {
  key: string;
  value: T;
};

export type LinkItemData = {
  name: string;
  href: string;
};

export type HeaderSettingsData = {
  headMenu2: LinkItemData[];
};

export type MainPageSettingsData = {
  metaTitle: string;
  metaDescription: string;
};

export type MainPageSettingsAllData = {
  mainPage: MainPageSettingsData;
};
