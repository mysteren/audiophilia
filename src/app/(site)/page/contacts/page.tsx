import { Breadcrumbs } from "@/features/breadcrumbs";
import styles from "./page.module.css";
import ContentBlock from "@/shared/ui/content-block";

type Props = {};

export function metadata() {
  const title = "Контакты";
  const description = "Контакты компании rodds.ru";
  const canonical = "/page/contacts";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default function ContactsPage() {
  return (
    <>
      <div className={styles.top}>
        <Breadcrumbs
          items={[{ title: "Главная", href: "/" }, { title: "Контакты" }]}
        />
      </div>
      <h1 className={styles.title}>Контакты</h1>

      <ContentBlock>
        <div className={styles.col2}>
          <div>
            <h2 className={styles.first}>Офис</h2>
            <img src="https://investsteel.ru/assets/image/moscow.jpg" />

            <h3>Адрес</h3>

            <p>127473 Москва, Краснопролетарская, улица, 30, стр. 1</p>
            <h3>
              <strong>Время работы</strong>
            </h3>
            <ul>
              <li>
                Понедельник: <strong>07:00 - 19:00</strong>
              </li>
              <li>
                Вторник: <strong>07:00 - 19:00</strong>
              </li>
              <li>
                Среда: <strong>07:00 - 19:00</strong>
              </li>
              <li>
                Четверг: <strong>07:00 - 19:00</strong>
              </li>
              <li>
                Пятница: <strong>07:00 - 19:00</strong>
              </li>
              <li>
                Суббота: <strong>07:00 - 19:00</strong>
              </li>
              <li>
                Воскресение: <strong>07:00 - 19:00</strong>
              </li>
            </ul>
            <h3>Контактные данные</h3>

            <p>
              <strong>Отдел продаж</strong>
            </p>
            <p>info@investsteel.ru</p>
            <p>
              <strong>Отдел закупок</strong>
            </p>
            <p>zakup@investsteel.ru</p>
            <p>
              <strong>Общие вопросы</strong>
            </p>
            <p>mail@investsteel.ru</p>
            <p>
              <strong>Отдел кадров</strong>
            </p>
            <p>hr@investsteel.ru</p>
            <p>
              <strong>Бухгалтерия</strong>
            </p>
            <p>buh@investsteel.ru</p>
          </div>
          <div>
            <h2 className={styles.first}>Производство</h2>
            <img src="https://investsteel.ru/assets/image/electrostal.jpg" />
            <h3>Адрес</h3>
            <p>144000 Элекстросталь, улица Красная 25А</p>
            <h3>Время работы</h3>
            <ul>
              <li>
                Понедельник:<strong>07:00 - 19:00</strong>
              </li>
              <li>
                Вторник:<strong>07:00 - 19:00</strong>
              </li>
              <li>
                Среда:<strong>07:00 - 19:00</strong>
              </li>
              <li>
                Четверг:<strong>07:00 - 19:00</strong>
              </li>
              <li>
                Пятница:<strong>07:00 - 19:00</strong>
              </li>
              <li>
                Суббота:<strong>07:00 - 19:00</strong>
              </li>
              <li>
                Воскресение:<strong>07:00 - 19:00</strong>
              </li>
            </ul>
            <h3>Контактные данные</h3>
            <p>+7(495)188-80-44</p>
            <p>info@investsteel.ru</p>
          </div>
        </div>

        <h2>Группа компаний</h2>
        <p>
          <strong>ООО Инвест Сталь</strong>
        </p>
        <ul>
          <li>ИНН - 5031145894</li>
          <li>КПП - 503101001</li>
          <li>ОГРН - 1225000055477</li>
        </ul>
        <p>
          <strong>ООО Профит Трейдинг Групп</strong>
        </p>
        <ul>
          <li>ИНН - 7713472665</li>
          <li>КПП - 503101001</li>
          <li>ОГРН - 1197746723570</li>
        </ul>
        <p>
          <strong>ООО Айронклип</strong>
        </p>
        <ul>
          <li>ИНН - 5031144900</li>
          <li>КПП - 503101001</li>
          <li>ОГРН - 1225000024039</li>
        </ul>
      </ContentBlock>
    </>
  );
}
