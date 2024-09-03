import styles from "./property-row.module.css";

type Props = {
  name: string;
  value: string;
  unit?: string;
};

export function PropertyRowElement({ name, value, unit }: Props) {
  return (
    <div className={styles.row}>
      <dt className={styles.col}>{name}</dt>
      <dd className={styles.col2}>{value} {unit}</dd>
    </div>
  );
}
