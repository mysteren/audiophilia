type Props = {};

export function metadata() {
  const title = "Услуги";
  const description = "Услуги компании rodds.ru";
  const canonical = "/page/service";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default function ServicesPage() {
  return (
    <>
      <h1>Услуги</h1>
      <p>@TODO</p>
    </>
  );
}
