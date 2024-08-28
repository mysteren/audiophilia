import Collections from "@/widgets/collections/collections";
import HomeSlider from "@/widgets/homeSlider/home-slider";
import { collections } from "@/shared/data/collections";
import { slides } from "@/shared/data/slider";
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
      <h2 className={styles.productTitle}>О Компании</h2>
      <p>
        Наше основное направление - производство металлических конструкций
        различной формы и сложности, изготовление закладных деталей, обечаек,
        конусов, труб нестандартных диаметров, фундаментных болтов и оказание
        услуг металлообработки. Каждый заказ мы выполняем в кратчайшие сроки,
        придерживаясь высокого уровня качества.
      </p>
      <p>
        В нашей команде работают опытные специалисты, которые предлагают
        эффективные решения и индивидуальный подход к каждому клиенту, учитывая
        все его требования и пожелания.
      </p>
      <h2 className={styles.productTitle}>Наша продукция</h2>
      <Collections items={collections} />
    </div>
  );
}
