import { useState } from "react";

function Answer({ a, b, updatePoints }) {
  // answer хранит текст, который вводит пользователь
  const [answer, setAnswer] = useState("");

  function handleSubmit(event) {
    // Не даём форме перезагрузить страницу
    event.preventDefault();

    // Поле ввода хранит текст, поэтому преобразуем его в число
    const isCorrect = Number(answer) === a + b;

    // Сообщаем MathQuiz, правильно ли решена задача
    updatePoints(isCorrect);

    // Очищаем поле после отправки
    setAnswer("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Твой ответ:
        <input
          type="number"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
      </label>

      <button type="submit">Проверить</button>
    </form>
  );
}

export default Answer;
