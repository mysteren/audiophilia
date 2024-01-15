import Image from "next/image";
import { TypesCarInStock } from "@/types/carInStock";
import styles from "./card.module.css";

// Image
import Heart from "@/images/svg/heart.svg";
import Compare from "@/images/svg/sravni.svg";
import TestImageCard from "@/images/card/testCard.png";

type Car = {
  car: TypesCarInStock;
};

export default function Card(props: Car) {
  const { car } = props;

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
          src={TestImageCard}
          width="0"
          height="0"
          sizes="100vw"
          alt={car.title}
        />
        </div>
        <div className={styles.blockPrice}>
          <p className={styles.price}>От {car.price} ₽</p>
          <p className={styles.credit}>
            Кредит <b>от {car.credit} ₽/мес.</b>
          </p>
        </div>
        <div className={styles.characteristics}>
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
        </div>
        <a className={styles.btnMore} href="">Подробнее</a>
      </div>
    </div>
  );
}
