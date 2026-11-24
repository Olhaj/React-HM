import styles from "./styles.module.css";

function CityCard({ city }) {
  return (
    <div className={styles.city_card}>
      <img src={city.imageUrl} alt={`Вид города ${city.name}`} />

      <h2>{city.name}</h2>
      <p>{city.description}</p>

      <h3>Интересные факты:</h3>
      <ul className={styles.city_list}>
        {city.facts.map((fact, index) => (
          <li key={`${city.name}-${index}`}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
