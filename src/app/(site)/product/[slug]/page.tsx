import { notFound } from "next/navigation";

import { getProduct } from "@/entities/product";
import { Breadcrumbs } from "@/features/breadcrumbs";
import TextContent from "@/features/text-content";
import { ApiResponseError } from "@/shared/api/http/errors";
import { GetFileUrl } from "@/shared/lib/utils/url";
import PageModals from "@/widgets/page-modals/page-modals";

import TopNav from "@/features/top-nav";
import styles from "./page.module.css";
import Gallery from "@/widgets/gallery";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function fetchData(slug: string) {
  try {
    const result = await getProduct(slug);
    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    }
  }
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;

  const { product } = await fetchData(slug);
  const { metaTitle: title, metaDescription: description } = product;
  return {
    title,
    description,
    alternates: {
      canonical: `/product/${slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const data = await fetchData(slug);
  const { categories, product } = data;
  const { title, text } = product;

  const { files, images } = product.files;

  const imagesSrcs = images.map((item) => {
    return { src: GetFileUrl(item), showAsMain: true };
  });

  return (
    <>
      <div className={styles.top}>
        <TopNav />
        <Breadcrumbs
          items={[
            { title: "Главная", href: "/" },
            ...categories.reverse().map(({ title, slug }) => {
              return { title, href: `/category/${slug}` };
            }),
            { title: title },
          ]}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {!!text && (
            <div id="info">
              <TextContent
                content={text}
                gallery={<Gallery images={imagesSrcs} />}
              />
            </div>
          )}
          {!!files.length && (
            <div className="text">
              <h2>Файлы</h2>
              {files.map((file, index) => {
                return (
                  <p key={`text-file-link-${index}`}>
                    {file.keys.split(",").includes("servicemanual") && (
                      <span>сервис мануал: &nbsp;</span>
                    )}
                    <span>
                      <a
                        target="_blank"
                        href={GetFileUrl(file)}
                      >{`${file.name}.${file.ext}`}</a>
                    </span>
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <PageModals />
    </>
  );
}
