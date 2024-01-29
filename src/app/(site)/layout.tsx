// Styles
import styles from './layout.module.css';

// Components layouts
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      <main className={`${styles.main} container`}>{children}</main>
      <Footer/>
    </>
  )
}