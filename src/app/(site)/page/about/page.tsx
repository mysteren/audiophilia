type Props = {};

export function metadata() {
    const title = "О нас";
    const description = "О компании rodds.ru";
    const canonical = "/page/about";
    return {
      title,
      description,
      alternates: {
        canonical,
      },
    };
  }

export default function AboutPage() {
  return (
    <>
      <h1>О Нас</h1>
      <p>@TODO</p>
    </>
  );
}
