type Props = {};

export function metadata() {
    const title = "Корзина";
    const description = "RJhpbyf";
    const canonical = "/page/cart";
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
      <h1>Корзина</h1>
      <p>@TODO</p>
    </>
  );
}
