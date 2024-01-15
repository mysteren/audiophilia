// Import libs from Next
import Image from 'next/image';

// Styles
import styles from './page.module.css';

// Widgets
import HomeSlider from '@/components/widgets/homeSlider/home-slider';
import HomeFastSelection from '@/components/widgets/homeFastSelection/home-fast-selection';
import Card from '@/components/widgets/card/card';

//Data
import { modelCarListFive, modelCarListFour, modelCarListOne, modelCarListSecond, modelCarListThree } from '@/data/cars';
import { carInStock } from '@/data/carInStock';

// Types
import { TypesModelCar } from '@/types/modelCar';
import { TypesCarInStock } from '@/types/carInStock';

export default function page() {
  return (
    <div className={`${styles.containerSlider} container`}>
      <HomeSlider></HomeSlider>
      <div className={styles.fastBlock}>
        <div className={styles.blockCar}>
          <ul className={styles.listCar}>
            {modelCarListOne.map((car: TypesModelCar) => {
              return <li className={styles.itemCar} key={car.id}><Image className={styles.itemImage} key={car.id} width={38} height={38} src={car.url} alt='1'/><a className={styles.itemLink} href="">{car.title}</a></li>
            })}
          </ul>
          <ul className={styles.listCar}>
            {modelCarListSecond.map((car: TypesModelCar) => {
              return <li className={styles.itemCar} key={car.id}><Image className={styles.itemImage} key={car.id} width={38} height={38} src={car.url} alt='1'/><a className={styles.itemLink} href="">{car.title}</a></li>
            })}
          </ul>
          <ul className={styles.listCar}>
            {modelCarListThree.map((car: TypesModelCar) => {
              return <li className={styles.itemCar} key={car.id}><Image className={styles.itemImage} key={car.id} width={38} height={38} src={car.url} alt='1'/><a className={styles.itemLink} href="">{car.title}</a></li>
            })}
          </ul>
          <ul className={styles.listCar}>
            {modelCarListFour.map((car: TypesModelCar) => {
              return <li className={styles.itemCar} key={car.id}><Image className={styles.itemImage} key={car.id} width={38} height={38} src={car.url} alt='1'/><a className={styles.itemLink} href="">{car.title}</a></li>
            })}
          </ul>
          <ul className={styles.listCar}>
          {modelCarListFive.map((car: TypesModelCar) => {
              return <li className={styles.itemCar} key={car.id}><Image className={styles.itemImage} key={car.id} width={38} height={38} src={car.url} alt='1'/><a className={styles.itemLink} href="">{car.title}</a></li>
            })}
          </ul>
        </div>
        <div>
          <h2 className={styles.carTitle}>Быстрый подбор авто</h2>
          <p>Цена</p>
          <HomeFastSelection/>
        </div>
      </div>
      <div className={styles.inStock}>
        <h2 className={styles.productTitle}>Автомобили в наличии с ПТС</h2>
        <div className={styles.inStockBlockProduct}>
          {carInStock.map((car: TypesCarInStock) => {
            return <Card key={car.id} car={car} />;
          })}
        </div>
      </div>
    </div>
  )
}
