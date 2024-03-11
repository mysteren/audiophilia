import Button from "@/components/ui/button/button";
import styles from "./fast-order.module.css";

type Props = {};

export default function FastOrder(_props: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Отправление заявки</span>
      <div>
        <input type="text" placeholder="имя*" />
      </div>
      <div>
        <input type="email" placeholder="телефон*" />
      </div>
      <div>
        <input type="email" placeholder="email" />
      </div>

      <Button>Продолжить</Button>
      <p>
        * Все поля, отмеченные звездочкой, являются <br /> обязательными для
        заполнения.
      </p>
    </div>
  );
}
