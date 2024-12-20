
import HomeSlider from "@/widgets/homeSlider/home-slider";
import { collections } from "@/shared/data/collections";
import { slides } from "@/shared/data/slider";
import { getMainPageSettingsData } from "@/entities/site-settings";
import styles from "./page.module.css";
import HomeCategories from "@/widgets/home-categories";

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
    <div className={`${styles.root}`}>
      <HomeSlider items={slides}></HomeSlider>
      <h2 className={styles.title}>Промышленный портал</h2>
      <p>
        На платформе Invest Market вы найдете широкий ассортимент услуг и
        товаров в области промышленности от сотен надежных поставщиков.
      </p>
      <ul>
        <li>Ежедневное обновление информации</li>
        <li>Удобная система фильтров</li>
        <li>Справочная информация</li>
        <li>Разнообразные калькуляторы и онлайн-инструменты</li>
      </ul>
      <p>Электонная почта для связи: <strong>forum@investsteel.ru</strong>, пишите - добавим ваше предприятие в нашу базу.</p>
      <h2 className={styles.title}>Категории</h2>
      <HomeCategories items={collections}/>
    </div>
  );
}
