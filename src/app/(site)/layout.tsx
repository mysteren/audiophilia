import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import styles from "./layout.module.css";
import { getCategoryTree } from "@/entities/category";
import { getHeaderSettingsData } from "@/entities/site-settings";

// обновлять кеш каждые 10 секунд
export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, settingsData] = await Promise.all([
    getCategoryTree(),
    getHeaderSettingsData(),
  ]);

  return (
    <div className={styles.wrap}>
      <Header headerMenu2={settingsData.headMenu2} categories={categories} />
      <main className={`${styles.main} container`}>{children}</main>
      <Footer />
    </div>
  );
}
