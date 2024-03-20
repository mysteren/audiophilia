type Props = {};

export function metadata() {
    const title = "Поиск";
    const description = "Поиск товаров";
    const canonical = "/search";
    return {
      title,
      description,
      alternates: {
        canonical,
      },
    };
  }

export default function FavoritePage() {
  return (
    <>
      <h1>Поиск</h1>
      <p>@TODO</p>
    </>
  );
}
