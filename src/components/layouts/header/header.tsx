// Layouts
import { getCategoryTree } from "@/services/category";
import { getHeaderSettingsData } from "@/services/site-settings";
import WrapperHeader from "./components/wrapper-header/wrapper-header";

export default async function Header() {
  const [categories, settingsData] = await Promise.all([
    getCategoryTree(),
    getHeaderSettingsData(),
  ]);
  const { headMenu2 } = settingsData;

  return (
    <WrapperHeader
      headerMenu2={headMenu2}
      categories={categories}
    ></WrapperHeader>
  );
}
