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
      <h1>Контакты</h1>
      <p>@TODO</p>
    </>
  );
}
