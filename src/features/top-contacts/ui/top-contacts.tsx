// 'use server'

import EmailIcon from "@/shared/ui/icons/email";
import PhoneIcon from "@/shared/ui/icons/phone";
import styles from "./top-contacts.module.css";
import { getContacts } from "@/entities/site-settings";
import { ruPhoneTransformer } from "@/shared/lib/utils/phone";

// function fetchData =

export default async function TopContacts() {
  const { email, phone } = await getContacts();

  return (
    <div
      className={styles.root}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <PhoneIcon className={styles.icon} />
      <a className={styles.info} href={`tel:${phone}`} itemProp="telephone">
        {ruPhoneTransformer(phone)}
      </a>

      <EmailIcon className={styles.icon} />
      <a className={styles.info} href={`mailto:${email}`} itemProp="email">
        {email}
      </a>
    </div>
  );
}
