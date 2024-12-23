import OrgIcon from '@/shared/ui/icons/org';
import styles from './add-company.module.css';

export default function AddCompany() {
  return (
    <div className={styles.block}>
        <OrgIcon className={styles.label} />
        <span className={styles.text}>Напишите нам на электронную почту: forum@investsteel.ru. Мы с радостью добавим вашу компанию в базу!</span>
    </div>
  )
}
