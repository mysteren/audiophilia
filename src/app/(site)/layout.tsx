import Footer from "@/components/layouts/footer/footer";
import Header from "@/components/layouts/header/header";
import styles from "./layout.module.css";

// обновлять кеш каждые 30 секунд
export const revalidate = 10;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={`${styles.main} container`}>{children}</main>
      <Footer />
    </>
  );
}
