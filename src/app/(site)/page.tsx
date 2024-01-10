import HomeSlider from '@/components/widgets/homeSlider/homeSlider';
import styles from './page.module.css';

export default function page() {
  return (
    <div className={`${styles.containerSlider} container`}>
      <HomeSlider></HomeSlider>
      <h2>qwerty</h2>
    </div>
  )
}
