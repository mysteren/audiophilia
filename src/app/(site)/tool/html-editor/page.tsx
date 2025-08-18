import { Breadcrumbs } from "@/features/breadcrumbs";
import TopNav from "@/features/top-nav";
import PageModals from "@/widgets/page-modals/page-modals";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import CustomEditor from "@/widgets/custom-editor";

type Props = {
  searchParams: Promise<Record<string, string>>;
};

export const generateMetadata = async () => {
  return {
    title:
      "Онлайн HTML Редактор на TinyMCE с редактором кода, очистка стилей, удаление ссылок",
    description:
      "Бесплатный онлайн HTML-редактор на базе TinyMCE с редактором кода. Очищайте стили, удаляйте ссылки, форматируйте текст. Идеальный инструмент для веб-разработчиков и контент-менеджеров. Работает прямо в браузере!",
    alternates: {
      canonical: `/tool/html-editor`,
    },
  };
};

export default async function Page(props: Props) {
  const title =
    "Онлайн HTML-редактор: Мощный инструмент для работы с кодом и текстом";

  const breadcrumbs = [{ title: "Главная", href: "/" }, { title }];

  return (
    <>
      <div className={styles.top}>
        <TopNav />
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className="text"></div>
          <CustomEditor />
          <div className="text">
            <p>
              Добро пожаловать в универсальный онлайн-редактор HTML на базе{" "}
              <strong>TinyMCE</strong>&nbsp;с интегрированным редактором кода!
              Этот инструмент сочетает удобный визуальный интерфейс с
              продвинутыми функциями для профессионалов. Редактируйте код,
              создавайте контент и оптимизируйте HTML без установки программ
              &mdash; всё в вашем браузере.
            </p>
            <p>
              <strong>Ключевые возможности:</strong>
              <br />
              ✅&nbsp;<strong>Двойной режим редактирования:</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Визуальный редактор (TinyMCE):</strong>&nbsp;Работайте
                  в привычном интерфейсе Word-like.
                </p>
              </li>
              <li>
                <p>
                  <strong>Редактор кода:</strong>&nbsp;Пишите и правьте
                  HTML/CSS/JS с подсветкой синтаксиса.
                </p>
              </li>
            </ul>
            <p>
              ✅&nbsp;<strong>Очистка форматирования:</strong>
              <br />
              Удаляйте лишние стили (<em>font</em>,&nbsp;<em>color</em>,&nbsp;
              <em>margin</em>) одним кликом. Идеально для подготовки текста
              перед вставкой в CMS.
            </p>
            <p>
              ✅&nbsp;<strong>Удаление ссылок:</strong>
              <br />
              Массово убирайте гиперссылки из текста, сохраняя чистый контент.
            </p>
            <p>
              ✅&nbsp;<strong>Дополнительные функции:</strong>
            </p>
            <ul>
              <li>
                <p>Импорт/экспорт файлов (HTML, TXT).</p>
              </li>
              <li>
                <p>Поиск и замена текста.</p>
              </li>
              <li>
                <p>Автосохранение прогресса.</p>
              </li>
              <li>
                <p>Адаптивность под любые устройства.</p>
              </li>
            </ul>
            <p>
              <strong>Для кого этот инструмент?</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Веб-разработчики:</strong>&nbsp;Быстрое исправление
                  кода перед публикацией.
                </p>
              </li>
              <li>
                <p>
                  <strong>Контент-менеджеры:</strong>&nbsp;Очистка текста от
                  лишнего форматирования.
                </p>
              </li>
              <li>
                <p>
                  <strong>Студенты и преподаватели:</strong>&nbsp;Работа с HTML
                  в обучающих проектах.
                </p>
              </li>
              <li>
                <p>
                  <strong>SEO-специалисты:</strong>&nbsp;Оптимизация метатегов и
                  структуры страниц.
                </p>
              </li>
            </ul>
            <p>
              <strong>Как использовать?</strong>
            </p>
            <ol>
              <li>
                <p>Вставьте текст или код в поле редактора.</p>
              </li>
              <li>
                <p>Используйте панель инструментов для форматирования.</p>
              </li>
              <li>
                <p>
                  Нажмите &laquo;Очистить стили&raquo; или &laquo;Удалить
                  ссылки&raquo; для автоматической обработки.
                </p>
              </li>
              <li>
                <p>Скопируйте готовый HTML-код или экспортируйте в файл.</p>
              </li>
            </ol>
            <p>
              <strong>Почему стоит выбрать наш редактор?</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Бесплатно и без регистрации:</strong>&nbsp;Начните
                  работу мгновенно.
                </p>
              </li>
              <li>
                <p>
                  <strong>Безопасность:</strong>&nbsp;Все данные обрабатываются
                  локально в вашем браузере.
                </p>
              </li>
              <li>
                <p>
                  <strong>Производительность:</strong>&nbsp;Работает даже при
                  медленном интернете.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <PageModals />
    </>
  );
}
