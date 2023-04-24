document.addEventListener("DOMContentLoaded", () => {
    const guessed = document.querySelector("input");
    const randomNumber = Math.floor(Math.random() * 100);
    const createdElement = document.createElement("div");
    guessed.parentElement.append(createdElement);
    guessed.addEventListener("input", (event) => {
      if (!(event.target.value < 100 && event.target.value >= 0)) {
        createdElement.innerHTML = `Введите число от 1 до 100`;
      } else {
        if (event.target.value < randomNumber) {
          createdElement.innerHTML = `Введите число побольше`;
        } else if (event.target.value > randomNumber) {
          createdElement.innerHTML = `Введите число поменьше`;
        } else if (event.target.value == randomNumber) {
          createdElement.innerHTML = `Вы угадали!`;
        }
      }
    });
  });
  
  // Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
  
  // Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.
  