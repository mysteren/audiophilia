import { Breadcrumbs } from "@/features/breadcrumbs";
import TextContent from "@/features/text-content";
import TopNav from "@/features/top-nav";
import { ApiResponseError } from "@/shared/api";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import "@/shared/styles/site/text.css";
import { getPage } from "@/entities/page";
import { PageDto } from "@/entities/page/type";
import PageChild from "@/features/page-child";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function fetchData(slug: string) {
  try {
    const result = await getPage(slug);
    return result;
  } catch (e) {
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    } else {
      throw e;
    }
  }
  return undefined as unknown as PageDto;
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const data = await fetchData(slug);
  const { metaTitle: title, metaDescription: description } = data.page;
  return {
    title,
    description,
    alternates: {
      canonical: `/page/${slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const { page, parents, childrens } = await fetchData(slug);

  const { title, text } = page;

  const content = text;

  let breadcrumbsItems = [
    { title: "Главная", href: "/" },
    ...parents.reverse().map(({ title, slug }, index) => {
      if (index === parents.length - 1) return { title };

      return { title, href: `/page/${slug}` };
    }),
  ];

  const hasChildrens = !!childrens.length;

  return (
    <>
      <div className={styles.top}>
        <TopNav />
        <Breadcrumbs items={breadcrumbsItems} />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.cont}>
        <div>
          <TextContent content={content} />
          {hasChildrens && (
            <div className={styles.childrensList}>
              {childrens.map((item) => (
                <PageChild page={item} key={item.slug} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
