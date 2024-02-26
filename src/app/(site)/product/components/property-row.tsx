import styles from "./property-row.module.css";

type Props = {
  name: string;
  key: string;
  value: string;
  unit?: string;
};

export function PropertyRowElement({ name, value, unit }: Props) {
  return (
    <tr>
      <td className={styles.td}>{name}</td>
      <td>
        {value} {unit}
      </td>
    </tr>
  );
}
