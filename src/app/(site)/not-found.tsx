import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <p>Не удалось найти запрашиваемую страницу</p>
      <Link href="/">На Главную</Link>
    </div>
  )
}