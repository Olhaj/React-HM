import { useState } from "react";
import Answer from "../answer";

function getRandomNumber() {
  // Возвращает случайное целое число от 1 до 10
  return Math.floor(Math.random() * 10) + 1;
}

function MathQuiz() {
  // Сохраняем два случайных числа и начальный счёт
  const [a, setA] = useState(getRandomNumber);
  const [b, setB] = useState(getRandomNumber);
  const [points, setPoints] = useState(0);

  function updatePoints(isCorrect) {
    // Правильный ответ добавляет 1 балл, неправильный снимает 1
    setPoints((currentPoints) => currentPoints + (isCorrect ? 1 : -1));

    // После каждого ответа создаём новый пример
    setA(getRandomNumber());
    setB(getRandomNumber());
  }

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>
        Сколько будет: {a} + {b}?
      </p>
      <p>Счёт: {points}</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
