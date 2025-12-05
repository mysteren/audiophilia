import { Breadcrumbs } from "@/features/breadcrumbs";
import TopNav from "@/features/top-nav";
import PageModals from "@/widgets/page-modals/page-modals";
import styles from "./page.module.css";
import ImageCropper from "@/widgets/image-cropper/ui";

type Props = {
  searchParams: Promise<Record<string, string>>;
};

export const generateMetadata = async () => {
  return {
    title: "Обрезка фото онлайн — Кроп по размерам и пропорциям Без сервера",
    description:
      "Быстрое кадрирование изображений онлайн. Вставка из буфера, заданные пропорции и точные размеры. Обработка в браузере без потери качества и загрузки на сервер.. Работает прямо в браузере!",
    alternates: {
      canonical: `/tool/image-cropper`,
    },
  };
};

export default async function Page(props: Props) {
  const title = "Обрезать изображение онлайн — пропорции, размер, позиции";

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
          <div className="text">
            Программа работает с теми форматами изображений, которые
            поддерживает браузер: JPEG, PNG, GIF, WebP, AVIF и SVG.
          </div>
          <ImageCropper />
          <div className="text">
            <p>
              Image Cropper &mdash; это быстрый и безопасный инструмент для
              кадрирования и изменения размера изображений прямо в вашем
              браузере. В отличие от других сервисов, мы&nbsp;
              <strong>не отправляем ваши файлы на сервер</strong>. Вся обработка
              происходит локально на вашем устройстве, что гарантирует 100%
              конфиденциальность и мгновенную скорость работы.
            </p>
            <p>
              <strong>Ключевые возможности:</strong>
            </p>
            <ul>
              <li>
                <p>
                  <strong>Мгновенная загрузка:</strong> Просто перетащите файл
                  или вставьте изображение из буфера обмена (Ctrl+V).
                </p>
              </li>
              <li>
                <p>
                  <strong>Гибкие настройки:</strong> Обрезайте фото по заданным
                  пропорциям (например, 16:9, 19:10, 4:3, 1:1) или указывайте
                  точные размеры в пикселях.
                </p>
              </li>
              <li>
                <p>
                  <strong>Умное позиционирование:</strong> Выбирайте область
                  кадрирования &mdash; центр, верхний край, низ или углы.
                  Приложение само высчитает идеальные координаты.
                </p>
              </li>
              <li>
                <p>
                  <strong>Максимальное качество:</strong> Скачивайте результат в
                  исходном разрешении без сжатия и водяных знаков.
                </p>
              </li>
            </ul>
            <p>
              <strong>Кому это полезно:</strong> Идеально подходит для
              SMM-специалистов (подготовка постов для Instagram, VK, Telegram),
              веб-разработчиков, дизайнеров и всех, кому нужно быстро подогнать
              картинку под определенный формат без установки Photoshop.
            </p>
          </div>
        </section>
      </div>
      <PageModals />
    </>
  );
}
