// Styles
import styles from './button-collection.module.css';

export default function ButtonCollection(props: any) {

    const { clickLeft, clickRight } = props;

  return (
    <>
    <button onClick={clickLeft} className={styles.btnLeft}><i className={styles.btnLeftIcon}></i></button>
    <button onClick={clickRight} className={styles.btnRight}><i className={styles.btnRightIcon}></i></button>
    </>
  )
}
