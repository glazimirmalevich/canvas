document.addEventListener("DOMContentLoaded", () => {
  let field = document.querySelector("#field");
  let message = document.querySelector("#message");
  const allCities = [
    "Анапа",
    "Москва",
    "Астана",
    "Алматы",
    "Новосибирск",
    "Шымкент",
    "Кокшетау",
    "Семей",
    "Уральск",
    "Йошкар-ола",
  ];
  const cities = [];

  //   Человек
    field.addEventListener("keypress", (event) => {
        const element = event.target.value.toLowerCase();
        if (event.key === "Enter") {
            if (!cities.includes(element)) {
                if (!cities[0]) {
                    cities.push(element);
                    message.innerHTML = `${event.target.value} added to a city list and now its next player's turn!`;
                }
                else if (cities[cities.length - 1].slice(-1) === element[0]) {
                    cities.push(element);
                    message.innerHTML = `${event.target.value} added to a city list and now its next player's turn!`;
                } else {
                    message.innerHTML = `${event.target.value} is not starting with last letter of the last word!`;
                }
            } else {
                message.innerHTML = `${event.target.value} is already in the city list!`;
            }
        }
    });

  // Робот
//   field.addEventListener("keypress", (event) => {
//     const element = event.target.value.toLowerCase();
//     if (event.key === "Enter") {
//       if (!cities.includes(element)) {
//         if (!cities[0]) {
//           cities.push(element);
//           message.innerHTML = `${event.target.value} added to a city list and now its next player's turn!`;
//         } else if (cities[cities.length - 1].slice(-1) === element[0]) {
//           cities.push(element);
//           message.innerHTML = `${event.target.value} added to a city list and now its next player's turn!`;
//         } else {
//           message.innerHTML = `${event.target.value} is not starting with last letter of the last word!`;
//         }
//       } else {
//         message.innerHTML = `${event.target.value} is already in the city list!`;
//       }
//     }
//   });
});


// Когда человек будет вбивать в инпут свой город, робот должен будет проверять наличие этого города в своем массиве.

// В таком случае в каждом ходе игрока возможны следующие проблемные ситуации: игрок ввел город, который уже был; игрок ввел город не на ту букву, на которую заканчивается предыдущий город; игрок ввел город, которого нет в списке робота.

// В свой ход робот должен брать один из разрешенных городов так, чтобы этого города еще не было в игре. При этом выбранный город должен начинаться с буквы, на которую закончился предыдущий город.

// 1. Человек пишет город в инпут.
// 2. Идёт запись в массив cities.
// 3. Робот проверяет город у себя в массиве allCities.
// 4. Проверка на игрок ввёл город не на ту букву, которого нет в списке робота.
// 5. Робот пишет город в инпут из своего массива allCities, но должен проверять что его не было в массиве cities.
// 6. Проверка на робот ввёл город не на ту букву. 