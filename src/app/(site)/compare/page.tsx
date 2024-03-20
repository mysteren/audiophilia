type Props = {};

export function metadata() {
    const title = "Сравнение";
    const description = "Сравнение товаров";
    const canonical = "/favorite";
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
      <h1>Сравнение</h1>
      <p>@TODO</p>
    </>
  );
}
