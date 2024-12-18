type Props = {};

export function metadata() {
    const title = "Поиск по промышленному порталу -  Invest Market";
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
      <p>Поиск находится в разработке, воспользуйтесь навигационным меню.</p>
    </>
  );
}
