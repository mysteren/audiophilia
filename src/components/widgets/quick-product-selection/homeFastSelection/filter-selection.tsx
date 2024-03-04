"use client";
import { useState, ChangeEvent } from "react";
import styles from "./filter-selection.module.css"

export default function FilterSelection() {
  const [value, setValue] = useState<number>(0);
  const [body, setBody] = useState<string>('');
  const [box, setBox] = useState<string>('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(evt.target.value, 10);
    setValue(inputValue);
  };

  const hadleSelectOne = (evt: ChangeEvent<HTMLSelectElement>) => {
    setBody(evt.target.value)
  }

  const hadleSelectTwo = (evt: ChangeEvent<HTMLSelectElement>) => {
    setBox(evt.target.value)
  }

  return (
    <> 
      <h3>Быстрый подбор авто</h3>
      <form className={styles.form} action="">
      <input
        type="range"
        min="0"
        max="5000000"
        step="500000"
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.blockSelection}>
        <select onChange={hadleSelectOne} className={styles.select}>
            <option>Седан</option>
            <option>Хэтчбек</option>
            <option>Универсал</option>
            <option>Купе</option>
            <option>Минивэн</option>
            <option>Внедорожник</option>
            <option>Пикап</option>
            <option>Кроссовер</option>
        </select>
        <select onChange={hadleSelectTwo} className={styles.select}>
            <option>Механика</option>
            <option>Электроредуктор</option>
            <option>Автомат</option>
        </select>
      </div>
      <button className={styles.btn}>Показать</button>
    </form>
    
    </>
  );
}
