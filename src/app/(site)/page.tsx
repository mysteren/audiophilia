// import { collections } from "@/shared/data/collections";
import { getMainPageSettingsData } from "@/entities/site-settings";
import styles from "./page.module.css";
// import HomeCategories from "@/widgets/home-categories";
import Subnavigation from "@/features/subnavigation";
import Image from "next/image";
import TopNav from "@/features/top-nav";
Image

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
      <h1>Мастерская аудиотехники</h1>
      <div>
        <p>
          Добро пожаловать в нашу мастерскую по изготовлению и реставрации
          корпусов Акустических систем, реставрации и ремонту hi-fi
          аудиотехники.
        </p>
        <p>
          Свою работу мы начали в 2018 году с конструкторов корпусов
          акустических систем для самостоятельной сборки, которые мы
          изготавливаем на ЧПУ станке. <b>Fostex</b>, <b>wavecor</b>, <b>visaton</b>, <b>sonido</b>,
          <b>акустика Крылова</b> - уже типовые проекты, которые мы делаем постоянно,
          как в сборе и с финишной отделкой, так и в виде набора для
          самостоятельной сборки.
        </p>
        <p>
          Сегодня помимо корпусов для акустики мы занимаемся реставрацией и
          ремонтом аудиотехники, производством плинтов.
        </p>
        <TopNav />
        {/* <Subnavigation /> */}
      </div>
      <div>
        <h2>Галлерея</h2>
        <br />
        <div
          className="grid"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/images/main/ahara_audio-preview5.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/images/main/ahara_audio-preview.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/images/main/ahara_audio-preview2.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/images/main/ahara_audio-preview3.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/images/main/ahara_audio-preview4.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/images/main/ahara_audio-preview1.jpg"
            itemProp="contentUrl"
          ></Image>
        </div>
      </div>
      <div>
        <h2>Заказ услуг</h2>
        <p>
          Мы предлагаем широкий спектр услуг для всех любителей качественного
          звука и старых аудиосистем. При реставрации учитываются индивидуальные
          пожелания клиента. По своим работам наша студия несёт гарантийные
          обязательства.
        </p>
        <p>
          Заказать наши услуги вы можете на сайте{" "}
          <a className="link" href="https://deskfi.ru/" target="_blank">
            <b>deskfi.ru</b>
          </a>
        </p>
        <h3>Стандартный список работ для усилителей:</h3>
        <ol>
          <li>
            Промывка всех переключателей, переменных резисторов, замена
            полупроводниковых элементов.
          </li>
          <li>Замена всех старых электролитических конденсаторов</li>
          <li>Осуществлены все регулировок согласно сервисному мануалу.</li>
          <li>Все технические параметры приводятся к заводским.</li>
          <li>
            Фанерование шпоном (по желанию для деревянного корпуса) и нанесение
            нового покрытия на корпус.
          </li>
          <li>Нанесение нового покрытия на решетки.</li>
          <li>Очистка лицевой панели.</li>
          <li>Тестовое прослушивание усилителя более 120ч.</li>
        </ol>
        <p></p>
        <p>
          Наша цель - вдохнуть новую жизнь в вашу технику. Позвольте нам
          воссоздать, продемонстрировать и сохранить красоту и наследие
          аудиотехники! Свяжитесь с нами сегодня и превратите вашу
          аудиоаппаратуру в настоящее произведение искусства.
        </p>
      </div>
    </div>
  );
}
