import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import styles from "./page.module.css";

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

      <div>
        <div>
          <img src="https://investsteel.ru/assets/image/electrostal.jpg" />
          <p>
            &nbsp;144000 Элекстросталь,
            <br />
            улица Красная 25А
          </p>
          <p>
            &nbsp;<strong>Время работы</strong>
          </p>
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
          <p>&nbsp;+7(495)188-80-44</p>
          <p>&nbsp;info@investsteel.ru</p>
        </div>
        <div>
          <img src="https://investsteel.ru/assets/image/moscow.jpg" />
          <p>
            &nbsp;127473 Москва, Краснопролетарская,
            <br />
            улица, 30, стр. 1
          </p>
          <p>
            &nbsp;<strong>Время работы</strong>
          </p>
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
          <p>&nbsp;+7(495)188-80-44</p>
          <p>&nbsp;info@investsteel.ru</p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <p>
            &nbsp;<strong>Отдел продаж</strong>
          </p>
          <p>info@investsteel.ru</p>
          <p>
            &nbsp;<strong>Отдел закупок</strong>
          </p>
          <p>zakup@investsteel.ru</p>
          <p>
            &nbsp;<strong>Общие вопросы</strong>
          </p>
          <p>mail@investsteel.ru</p>
          <p>
            &nbsp;<strong>Отдел кадров</strong>
          </p>
          <p>hr@investsteel.ru</p>
          <p>
            &nbsp;<strong>Бухгалтерия</strong>
          </p>
          <p>buh@investsteel.ru</p>
        </div>
        <div>
          <p>
            <strong>Группа компаний</strong>
          </p>
          <ul>
            <li>
              <strong>ООО Инвест Сталь</strong>
            </li>
            <li>ИНН - 5031145894</li>
            <li>КПП - 503101001</li>
            <li>ОГРН - 1225000055477</li>
          </ul>
          <ul>
            <li>
              <strong>ООО Профит Трейдинг Групп</strong>
            </li>
            <li>ИНН - 7713472665</li>
            <li>КПП - 503101001</li>
            <li>ОГРН - 1197746723570</li>
          </ul>
          <ul>
            <li>
              <strong>ООО Айронклип</strong>
            </li>
            <li>ИНН - 5031144900</li>
            <li>КПП - 503101001</li>
            <li>ОГРН - 1225000024039</li>
          </ul>
        </div>
      </div>
    </>
  );
}
