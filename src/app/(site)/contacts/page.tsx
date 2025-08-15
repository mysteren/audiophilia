
import { Breadcrumbs } from "@/features/breadcrumbs";
import { BASE_URL } from "@/shared/config";
import { NextPage } from "next";
// import Link from "next/link";

interface Props {}

export const generateMetadata = async () => {
  // const { metaTitle, metaDescription } = await FetchData<CategoryTreeData>(`/category/slug/${params.slug}`);

  return {
    title: "Aharax.ru контакты",
    description: "контакты",
    alternates: {
      canonical: `${BASE_URL}/contacts`,
    },
  };
};

const ContactsPage: NextPage<Props> = ({}) => {
  const breadcrumbs = [{ title: "Главная", href: "/" }, { title: "Контакты" }];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <h1>Контакты</h1>
      <section itemScope itemType="http://schema.org/Organization">
        <article>
          <p>
            <span className="b" itemProp="telephone">
              Телефон:
            </span>{" "}
            <a href="tel:+79670872666"> +7 (967) 087-26-66</a>
          </p>
          <p>
            <span className="b" itemProp="email">
              Email:
            </span>{" "}
            <a href="mailto:audiophilia.ru@yandex.ru"> audiophilia.ru@yandex.ru</a>
          </p>
          <p
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <span className="b">Адрес</span>:{" "}
            <span itemProp="addressRegion ">Московская область </span>{" "}
            <span itemProp="addressLocality">г. Бронницы</span>
          </p>
        </article>
        <article>
          <br />
          <h2 itemProp="name">@ahara_audio</h2>

          <p>
            <span className="b">Telegram</span>:{" "}
            <a
              href="https://t.me/aharaaudio"
              target="_blank"
              aria-label="Телеграмм канал"
              rel="nofollow noopener"
              data-group-track-type="link"
            >
              https://t.me/aharaaudio
            </a>
          </p>
          <p>
            <span className="b">ВКонтакте</span>:{" "}
            <a
              href="https://vk.com/aharaaudio"
              target="_blank"
              aria-label="ВКонтакте"
              rel="nofollow noopener"
              data-group-track-type="link"
            >
              https://vk.com/aharaaudio
            </a>
          </p>
          <p>
            <span className="b">Дзен</span>:{" "}
            <a
              href="https://dzen.ru/audiophilia?share_to=link"
              target="_blank"
              aria-label="Дзен"
              rel="nofollow noopener"
              data-group-track-type="link"
            >
              https://dzen.ru/audiophilia
            </a>
          </p>
        </article>
      </section>
    </>
  );
};

export default ContactsPage;
