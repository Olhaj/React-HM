import styles from "./styles.module.css";
import { useState } from "react";

function Rating() {
  // Храним выбранный рейтинг; сначала выбрано значение 0
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    "https://www.realclipart.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",

    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",

    "https://www.realclipart.com/png/small/67-676995_5-star-rating-png.png",
  ];

  return (
    <div className={styles.rating}>
      <h1 className={styles.rating_title}>Мой рейтинг</h1>
      {/* ratingList[ratingValue]:
       ratingList — массив адресов изображений.
       ratingValue — число из состояния, сейчас это 0.*/}
      <img src={ratingList[ratingValue]} alt="Текущий рейтинг" />
      <div className={styles.rating_btn}>
        <button className={styles.btn} onClick={() => setRatingValue(0)}>
          Плохо
        </button>
        <button className={styles.btn} onClick={() => setRatingValue(1)}>
          Приемлево
        </button>
        <button className={styles.btn} onClick={() => setRatingValue(2)}>
          Хорошо
        </button>
        <button className={styles.btn} onClick={() => setRatingValue(3)}>
          Отлично
        </button>
      </div>
    </div>
  );
}

export default Rating;
