// Layouts
import { getCategoryTree } from "@/services/category";
import { getHeaderSettingsData } from "@/services/site-settings";
import WrapperHeader from "./components/wrapper-header/wrapper-header";

// export const dynamic = 'auto'
export const revalidate = 10;

export default async function Header() {
  const [categories, settingsData] = await Promise.all([
    getCategoryTree(),
    getHeaderSettingsData(),
  ]);
  // const { headMenu2 } = settingsData;

  return (
    <WrapperHeader
      headerMenu2={settingsData.headMenu2}
      categories={categories}
    ></WrapperHeader>
  );
}
