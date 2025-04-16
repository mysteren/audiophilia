import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import styles from "./layout.module.css";
import TopContacts from "@/features/top-contacts";

// обновлять кеш каждые 60 секунд
export const revalidate = 60;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const contacts = await TopContacts()

  return (
    <div className={styles.wrap}>
      <Header contacts={contacts} />
      <main className={`${styles.main} container`}>{children}</main>
      <Footer />
    </div>
  );
}
