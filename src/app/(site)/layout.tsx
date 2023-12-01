import Header from "@/components/layouts/header/header";
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </>
  )
}