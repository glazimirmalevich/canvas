document.addEventListener("DOMContentLoaded", () => {
  const timer = document.querySelector("#timer");
  const text = document.querySelector("#text");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  const parent = document.querySelector("#parent");
  const objectList = {
    1: {text: "Сегодня лучше просидеть дома",
        isGood: false},
    2: {text:"Ваш труд будет вознагражден",
        isGood: true},
    3: {text: "Вам сегодня повезёт",
        isGood: true},
    4: {text: "Остерегайтесь неприятностей",
        isGood: false},
    5: {text: "Хорошее настроение подарит удача",
        isGood: true},
    6: {text: "Будьте осторожны на дороге",
        isGood: false},
    7: {text: "Успех придет, если вы будете настойчивы",
        isGood: true},
    8: {text: "Лучше отложить важные дела на другой день",
        isGood: false},
    9: {text: "Не забывайте о здоровье",
        isGood: false},
    10: {text: "Новые возможности откроются вам в ближайшее время",
        isGood: true},
  };
  let intervalId;
  const getRandom = () => {
    return (randomNumber = Math.floor(Math.random() * 10)) + 1;
  };
  parent.addEventListener("click", (event) => {
    if (event.target.id === "start") {
       intervalId = setInterval(() => {
        start.classList.remove("active");
        stop.classList.add("active");
        timer.innerText = `${getRandom()}`;
      }, 100);
    }
    if (event.target.id === "stop") {
        clearInterval(intervalId);
        stop.classList.remove("active");
        if(!objectList[timer.innerText].isGood){
            text.innerText = objectList[timer.innerText].text;
            text.style.color = "red";
            return;
        }
            text.innerText = objectList[timer.innerText].text;
            text.style.color = "green";
    }
  });
});
