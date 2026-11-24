import styles from "./styles.module.css";
import { useState } from "react";
import CityCard from "../components/cityCard/index";
import CitySelector from "../components/citySelector/index";

function Home() {
  // selectedCity хранит выбранный город.
  // null означает, что пользователь ещё ничего не выбрал.
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <main className={styles.info_city}>
      <h1>Информация о городах</h1>

      {/* Передаём функцию изменения состояния в компонент выбора */}
      <CitySelector onCitySelect={setSelectedCity} />

      {/* Карточка появляется после выбора города */}
      {selectedCity ? (
        <CityCard city={selectedCity} />
      ) : (
        <p>Выбери город, чтобы увидеть его карточку.</p>
      )}
    </main>
  );
}

export default Home;
