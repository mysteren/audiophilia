import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/features/breadcrumbs";
import { ApiResponseError } from "@/shared/api/http/errors";
import PageModals from "@/widgets/page-modals/page-modals";

import { getCategory } from "@/entities/category";
import TopNav from "@/features/top-nav";
import { Pagination } from "@/widgets/pagination/pagination";
import styles from "./page.module.css";
import Gallery from "@/widgets/gallery";
import { GetFileUrl } from "@/shared/lib/utils/url";

const page = "";
const limit = 48;

type ImageElement = { src: string; alt?: string; showAsMain?: boolean };

async function fetchData(
  slug: string,
  searchParams: Record<string, string>,
  page: string,
  limit: number
) {
  try {
    const result = await getCategory(slug, searchParams, page, String(limit));
    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    }
  }
}

type Props = {
  searchParams: Promise<Record<string, string>>;
};

export const generateMetadata = async () => {
  return {
    title: "Галерея студии Ahara audio",
    description: "Галерея  студии Ahara audio, фотографии и примеры работ",
    alternates: {
      canonical: `/page/audio-gallery`,
    },
  };
};

export default async function Page(props: Props) {
  const title = "Галерея";
  const searchParams = await props.searchParams;

  const data = await fetchData("portfolio", searchParams, page, limit);

  const {
    products,
    category,
    parents,
    childrens,
    searchParams: savedSearchParams,
  } = data;

  const images: ImageElement[] = products.reduce((acc, item) => {
    const { title, files } = item;
    return [
      ...acc,
      ...files.images.map((image, index) => {
        return {
          alt: `${title} №${index}`,
          showAsMain: index === 0,
          src: GetFileUrl(image),
        };
      }),
    ];
  }, [] as ImageElement[]);

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
          <Gallery images={images} />
          <Pagination itemsCount={products.length} limit={limit} />
        </section>
      </div>
      <PageModals />
    </>
  );
}
