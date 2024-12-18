type Props = {};

export function metadata() {
    const title = "Поиск по промышленному порталу -  Invest Market";
    const description = "Ищите надежные решения в промышленности? Используйте поиск по порталу Invest Market качественных товаров и услуг в сфере производства и строительства. Найдите идеальных поставщиков и партнеров для вашего бизнеса!";
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
