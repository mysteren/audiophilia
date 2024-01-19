// Next Module
import Image from "next/image";

// Styles
import styles from "./card.module.css";

// Image
import Heart from "@/images/svg/heart.svg";
import Compare from "@/images/svg/sravni.svg";
import TestImageCard from "@/images/card/testCard.png";

// Libs
import { ToProduct } from "@/lib/utils/route-url";
import { GetFileUrl } from "@/lib/utils/url";
import { PrintPrice } from "@/lib/utils/price";

// Types
import { TypesProduct } from "@/types/product";


// Ui
import ButtonPrimary from "@/components/ui/button-primary";

type Car = {
  car: TypesProduct;
};

export default function Card(props: Car) {
  const { car } = props;
  const image = car.files.images?.[0];

  console.log(image);

  return (
    <div>
      <div className={styles.blockCarInStock}>
        <h3 className={styles.title}>{car.title}</h3>
        <div className={styles.groupBtn}>
          <Image src={Heart} width={16} height={16} alt="favorite" />
          <Image src={Compare} width={16} height={16} alt="favorite" />
        </div>
        <div className={styles.blockImageCard}>
        <Image
          src={GetFileUrl(image)}
          alt={car.title}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.imageCard}
        />
        </div>
        <div className={styles.blockPrice}>
          <p className={styles.price}>От {PrintPrice(car.price)} ₽</p>
          {/* <p className={styles.credit}>
            Кредит <b>от {car.credit} ₽/мес.</b>
          </p> */}
        </div>
        {/* <div className={styles.characteristics}>
          <div className={styles.characteristicsBlockInfo}>
            <i className={styles.iconMotor}></i>
            <p className={styles.characterText}>115 л.с.</p>
          </div>
          <div className={styles.characteristicsBlockInfo}>
            <i className={styles.iconTank}></i>
            <p className={styles.characterText}>5.3 л/км</p>
          </div>
          <div className={styles.characteristicsBlockInfo}>
            <i className={styles.iconSpeed}></i>
            <p className={styles.characterText}>189 км/ч</p>
          </div>
        </div> */}
        <div className={styles.blockBtn}>
          <a className={`${styles.btn} ${styles.btnMore}`} href={ToProduct(car.slug)}>Подробнее</a>
          <button className={`${styles.btn} ${styles.btnCart}`}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
