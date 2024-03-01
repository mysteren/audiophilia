import Footer from "@/components/layouts/footer/footer";
import Header from "@/components/layouts/header/header";
import styles from "./layout.module.css";

// обновлять кеш каждые 10 секунд
export const revalidate = 10;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={`${styles.main} container`}>{children}</main>
      <Footer />
    </div>
  );
}
