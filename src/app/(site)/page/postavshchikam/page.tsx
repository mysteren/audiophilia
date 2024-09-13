import Image from "next/image";
import styles from "./page.module.css";
import { Breadcrumbs } from "@/features/breadcrumbs";
import clsx from "clsx";

type Props = {};

export function metadata() {
  const title = "Добавить компанию на портал Investsteel";
  const description =
    "Добавьте ваше предприятие на портал Investsteel и станьте исполнителем, чтобы ежедневно получать актуальные заказы на обработку металла";
  const canonical = "/page/postavshchikam";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default function Page() {
  return (
    <>
      <div className={styles.top}>
        <Breadcrumbs
          items={[{ title: "Главная", href: "/" }, { title: "Поставщикам" }]}
        />
      </div>
      <div className={styles.grid}>
        <div className={styles.firstBlock}>
          <h1 className={styles.title}>Как добавить компанию</h1>
          <Image
            alt="Добавление компаний"
            className={styles.imgTitle}
            src={'/images/postavshikam/addcompany.webp'}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.allGrid}>
          <div className={clsx(styles.wow, styles.block)}>
            <div className={styles.wowBlock}>
              <span className={styles.wowNumber}>100 +</span>
              <span className={styles.wowText}>Ритейлеров</span>
            </div>
            <div className={styles.wowBlock}>
              <span className={styles.wowNumber}>150 +</span>
              <span className={styles.wowText}>Производителей </span>
            </div>
            <div className={styles.wowBlock}>
              <span className={styles.wowNumber}>300 +</span>
              <span className={styles.wowText}>Городов </span>
            </div>
          </div>
          <div className={clsx(styles.wowTwo, styles.block)}>
            <div className={styles.wowTwoInfo}>
              <p className={styles.wowText}>
                Мы приглашаем вашу компанию присоединиться к нам!
              </p>
              <p className={styles.wowText}>
                Чтобы разместить информацию о вашей компании на нашем портале,
                пожалуйста, отправьте следующие данные:
              </p>
              <ul className={styles.wowList}>
                <li>Наименование компании;</li>
                <li>ИНН;</li>
                <li>Описание услуги или товара, который вы предлагаете;</li>
                <li>Телефон, email, сайт;</li>
                <li>Город в котором вы предлагаете свои услуги или товар.</li>
              </ul>
              <p className={styles.wowText}>
                Размещение информации о вашей компании на нашем портале
                абсолютно бесплатно!
              </p>
              <span className={styles.wowCallBackText}>
                Для отправки данных используйте следующий адрес электронной
                почты:{" "}
                <a
                  className={styles.mailLink}
                  href="mailto:forum@investsteel.ru"
                >
                  forum@investsteel.ru
                </a>
              </span>
            </div>
          </div>
          <div className={clsx(styles.wowThree, styles.block)}>
            <span className={styles.wowText}>ООО «Инвест Системс»</span>
          </div>
        </div>
      </div>
    </>
  );
}
