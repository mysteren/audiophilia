import Link from "next/link";
import styles from "./second.module.css";
import clsx from "clsx";
import ThemeSwitcher from "@/features/theme-switcher";
import { VkIcon } from "@/shared/ui/icons/vk/vk";
import { DzenIcon } from "@/shared/ui/icons/dzen/dzen";
import { TgIcon } from "@/shared/ui/icons/tg/tg";

export default function Second() {
  return (
    <div className={clsx(styles.root, "container")}>
      <div className={styles.col}>
        <div className={styles.soclist}>
          {/* <a
            className={styles.soclink}
            target="_blank"
            href="https://t.me/"
          >
            Telegram
          </a>
          <a
            className={styles.soclink}
            target="_blank"
            href="https://vk.com/"
          >
            VKontakte
          </a>
          <a
            className={styles.soclink}
            target="_blank"
            href="https://dzen.ru/"
          >
            Дзен
          </a> */}
        </div>
        <ThemeSwitcher />
        {/* <br /> */}
        <Link href="https://rosdesk.ru/">Powered by RosDesk</Link>
      </div>
      <div className={styles.col}>
        <Link href="/page/confidential">Политика конфидециальности</Link>
        <div className={styles.text}>
          Данный интернет-сайт носит исключительно информационный характер и ни
          при каких условиях не является публичной офертой, определяемой
          положениями Статьи 437 Гражданского кодекса РФ.
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.socCols}>
          <span>@ahara_audio:</span>
          <a
            className={styles.icon}
            href="https://t.me/aharaaudio"
            target="_blank"
            aria-label="Телеграмм канал"
            rel="nofollow noopener"
            data-group-track-type="link"
          >
            <span style={{ height: "1.6rem", width: "1.6rem" }}>
              <TgIcon />
            </span>
          </a>
          <a
            className={styles.icon}
            href="https://vk.com/aharaaudio"
            target="_blank"
            aria-label="ВКонтакте"
            rel="nofollow noopener"
            data-group-track-type="link"
          >
            <span style={{ height: "1.6rem", width: "1.6rem" }}>
              <VkIcon />
            </span>
          </a>
          <a
            className={styles.icon}
            href="https://dzen.ru/audiophilia"
            target="_blank"
            aria-label="ВКонтакте"
            rel="nofollow noopener"
            data-group-track-type="link"
          >
            <span style={{ height: "1.6rem", width: "1.6rem" }}>
              <DzenIcon />
            </span>
          </a>
        </div>

        <div className={styles.copyright}>
          <span>© Audiophilia 2018 - {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}
