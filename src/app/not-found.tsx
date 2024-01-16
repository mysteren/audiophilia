import Link from "next/link";
import RootLayout from "./(site)/layout";

export default function NotFound() {
  return (
    <RootLayout>
      <div>
        <h2>Страница не найдена</h2>
        <p>Не удалось найти запрашиваемую страницу</p>
        <Link href="/">На Главную</Link>
      </div>
    </RootLayout>
  );
}
