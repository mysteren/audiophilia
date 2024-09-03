"use client";
import SellerInfo from "@/features/seller-info";
import { ToProduct } from "@/shared/lib/utils/route-url";
import { ProductAd } from "@/shared/types/product";
import Button from "@/shared/ui/button/button";
import Link from "next/link";
import styles from "./card-ad-row.module.css";

type Props = {
  product: ProductAd;
};

export default function CardAdRow({ product }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title} title={product.title}>
            {product.title}
          </h3>
          <pre className={styles.text}>{product.shortText}</pre>
        </div>

        <div className={styles.col2}>
          <SellerInfo seller={product.seller} />
          {/* <div className={styles.sinfo}>
            <span></span>
            <span className={styles.title}>{product.seller.title}</span>

            {product.seller?.addition?.site && (
              <>
                <span className={styles.label}>сайт: </span>
                <span className={styles.val}>
                  <a href={product.seller.addition.site}>
                    {getHostname(product.seller.addition.site)}
                  </a>
                </span>
              </>
            )}
            {product.seller?.addition?.phones?.length && (
              <>
                <span className={styles.label}>Телефон: </span>
                <a className={styles.val}>
                  {ruPhoneTransformer(product.seller.addition.phones[0])}
                </a>
              </>
            )}

            {product.seller?.addition?.emails?.length && (
              <>
                <span className={styles.label}>Email: </span>
                <a
                  className={styles.val}
                  href={`mailto:${product.seller.addition.emails[0]}`}
                >
                  {product.seller.addition.emails[0]}
                </a>
              </>
            )}
          </div> */}

          <Link className={styles.toDetail} href={ToProduct(product.slug)}>
            <Button>Подробнее</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
