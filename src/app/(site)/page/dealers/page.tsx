type Props = {};

export function metadata() {
  const title = "Дилерам";
  const description = "Информация для дилеров от компании rodds.ru";
  const canonical = "/page/dealers";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default function DealersPage() {
  return (
    <>
      <h1>Дилерам</h1>
      <p>@TODO</p>
    </>
  );
}
