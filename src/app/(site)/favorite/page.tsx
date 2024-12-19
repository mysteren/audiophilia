type Props = {};

export function metadata() {
    const title = "Избранное";
    const description = "Ваши избранные товары";
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
      <h1>Избранное</h1>
      <p>Раздел находится в разработке</p>
    </>
  );
}
