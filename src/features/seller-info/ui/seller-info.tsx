import { Seller } from "@/shared/types/seller";
import styles from "./seller-info.module.css";
import { getHostname } from "@/shared/lib/utils/url";
import { ruPhoneTransformer } from "@/shared/lib/utils/phone";
import OrgIcon from "@/shared/ui/icons/org";
import EmailIcon from "@/shared/ui/icons/email";
import PhoneIcon from "@/shared/ui/icons/phone";
import WebIcon from "@/shared/ui/icons/web";
import Link from "next/link";

type Props = { seller: Seller };

export function SellerInfo({ seller }: Props) {
  return (
    <div className={styles.root}>
      <OrgIcon className={styles.label} />
      <Link className={styles.val} href={`/seller/${seller.slug}`}>
        {seller.title}
      </Link>
      {seller?.addition?.site && (
        <>
          <WebIcon className={styles.label} />
          <span className={styles.val}>
            <a href={seller.addition.site}>
              {getHostname(seller.addition.site)}
            </a>
          </span>
        </>
      )}
      {seller?.addition?.phones?.[0] && (
        <>
          <PhoneIcon className={styles.label} />
          <a className={styles.val} href={`tel:${seller.addition.phones[0]}`}>
            {ruPhoneTransformer(seller.addition.phones[0])}
          </a>
        </>
      )}

      {seller?.addition?.emails?.[0] && (
        <>
          <EmailIcon className={styles.label} />
          <a
            className={styles.val}
            href={`mailto:${seller.addition.emails[0]}`}
          >
            {seller.addition.emails[0]}
          </a>
        </>
      )}
    </div>
  );
}
