import Button from "@/components/ui/button/button";
import { InputString } from "@/components/ui/input-string/input-string";
import { ruPhoneTransformer } from "@/lib/utils/phone";
import styles from "./order.module.css";
import { FormStatus, useOrderForm } from "./hooks/form";

type Props = {};

export default function Order(_props: Props) {
  const {
    submit,
    formData,
    changeEmail,
    changeName,
    changePhone,
    status,
    finish,
    orderId,
  } = useOrderForm();

  return (
    <div className={styles.container}>
      {status === FormStatus.completed ? (
        <>
          <span className={styles.title}>Отправлено</span>
          <div>
            <p>Заказ № {orderId}</p>
            <p>Ваша заявка отправлена, в ближайшее время мы свяжемся с вами</p>
          </div>
          <Button onClick={finish}>Завершить</Button>
        </>
      ) : (
        <>
          <span className={styles.title}>Отправление заявки</span>
          <div>
            <InputString
              disabled={status === FormStatus.pending}
              value={formData.name.value}
              status={formData.name.error ? "error" : ""}
              onChange={changeName}
              placeholder="имя*"
            />
            {!!formData.name.error && (
              <p className={styles.error}>{formData.name.error}</p>
            )}
          </div>
          <div>
            <InputString
              disabled={status === FormStatus.pending}
              value={formData.phone.value}
              status={formData.phone.error ? "error" : ""}
              transformer={ruPhoneTransformer}
              onChange={changePhone}
              placeholder="телефон*"
            />
            {!!formData.phone.error && (
              <p className={styles.error}>{formData.phone.error}</p>
            )}
          </div>
          <div>
            <InputString
              disabled={status === FormStatus.pending}
              value={formData.email.value}
              status={formData.email.error ? "error" : ""}
              onChange={changeEmail}
              placeholder="email"
            />
            {!!formData.email.error && (
              <p className={styles.error}>{formData.email.error}</p>
            )}
          </div>

          <Button disabled={status === FormStatus.pending} onClick={submit}>
            {status === FormStatus.pending ? "Отправление ..." : "Отправить"}
          </Button>
          <p>
            * Все поля, отмеченные звездочкой, <br /> являются обязательными для
            заполнения.
          </p>
        </>
      )}
    </div>
  );
}
