import Collections from "@/components/widgets/collections/collections";
import HomeSlider from "@/components/widgets/homeSlider/home-slider";
import { QuickProductSelection } from "@/components/widgets/quick-product-selection/quick-product-selection";
import { CarsBrands } from "@/data/cars";
import { collections } from "@/data/collections";
import { slides } from "@/data/slider";
import { getMainPageSettingsData } from "@/services/site-settings";
import styles from "./page.module.css";

export async function generateMetadata() {
  const { mainPage } = await getMainPageSettingsData();
  const { metaTitle: title, metaDescription: description } = mainPage;

  return {
    title,
    description,
    alternates: {
      canonical: `/`,
    },
  };
}

export default async function page() {
  return (
    <div className={`${styles.containerHome}`}>
      <HomeSlider items={slides}></HomeSlider>
      <h2 className={styles.productTitle}>Автомобили в наличии с ПТС</h2>
      <QuickProductSelection items={CarsBrands} />
      <h2 className={styles.productTitle}>Наши подборки</h2>
      <Collections items={collections} />
    </div>
  );
}
