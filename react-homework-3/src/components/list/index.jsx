import { useState } from "react";
import styles from "./styles.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  function removePerson(idToRemove) {
    // Создаём новый список, пропуская человека с выбранным id
    setPeople((currentPeople) =>
      currentPeople.filter((student) => student.id !== idToRemove),
    );
  }

  return (
    <div className={styles.list}>
      <h1 className={styles.list_title}>Список приглашённых</h1>
      <ol>
        {people.map((student) => (
          <li key={student}>
            Имя студента: {student.name} <br /> Возраст: {student.age} <br />
            <button
              className={styles.list_btn}
              onClick={() => removePerson(student.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default List;
