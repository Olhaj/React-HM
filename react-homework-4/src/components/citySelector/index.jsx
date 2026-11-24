import styles from "./styles.module.css";

function CitySelector({ onCitySelect }) {
  const citiesData = [
    {
      name: "Токио",
      description:
        "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl:
        "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },
    {
      name: "Киото",
      description:
        "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
      imageUrl:
        "https://cdn.getyourguide.com/image/format=avif%2Cfit=cover%2Cgravity=auto%2Cquality=60%2Cwidth=960%2Cheight=540/dam/iStock-1429585390-HEADER%20DESKTOP.jpg",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },
    {
      name: "Осака",
      description:
        "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
      imageUrl:
        "https://guidenation.club/wp-content/uploads/2025/06/osaka-slacker-city3-768x1024.webp",
      facts: [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии.",
      ],
    },
    {
      name: "Хоккайдо",
      description:
        "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
      imageUrl:
        "https://www.russiadiscovery.ru/storage/images/resized/content_gallery_images/49910/img_6aad1f29e9c26_1920.jpg",
      facts: [
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
      ],
    },
    {
      name: "Нагоя",
      description:
        "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl: "https://vja-travel.useleadr.com/uploads/Nagoya3.jpg",
      facts: [
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
      ],
    },
  ];

  function handleChange(event) {
    // event.target.value — название, выбранное в выпадающем списке
    const selectedName = event.target.value;

    // Находим в массиве полный объект выбранного города
    const selectedCity = citiesData.find((city) => city.name === selectedName);

    // Передаём найденный объект родительскому компоненту App
    onCitySelect(selectedCity);
  }

  return (
    <label className={styles.choice_city}>
      Выбери город:
      <select className={styles.city} defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Выбери город
        </option>

        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CitySelector;
