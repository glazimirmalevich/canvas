document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".list");
  const buttons = document.querySelector(".btns");
  class FullDate {
    #dateWork;
    constructor(date) {
      this.date = date;
    }
    getDate = () => {
      return this.date.getDate();
    };
    getMonth = () => {
      return this.date.getMonth();
    };
    getYear = () => {
      return this.date.getFullYear();
    };
    getFullMonth = () => {
      switch (this.getMonth()) {
        case 0:
          return "Январь";
        case 1:
          return "Февраль";
        case 2:
          return "Март";
        case 3:
          return "Апрель";
        case 4:
          return "Май";
        case 5:
          return "Июнь";
        case 6:
          return "Июль";
        case 7:
          return "Август";
        case 8:
          return "Сентябрь";
        case 9:
          return "Октябрь";
        case 10:
          return "Ноябрь";
        case 11:
          return "Декабрь";
      }
    };
    getFullDaysOfMonth = () => {
      return this.#dateWork;
    };
    setDate = (item) => {
      this.date.setDate(item);
    };
    setMonth = (item) => {
      this.date.setMonth(item);
    };
    setYear = (item) => {
      this.date.setFullYear(item);
    };
    setDate = (item) => {
      this.date.setDate(item);
    };
  }
  const currentDate = new FullDate(new Date());
  const anotherDate = new FullDate(
    new Date(currentDate.getYear(), currentDate.getMonth() + 1, 0)
  );
  buttons.append(`${anotherDate.getFullMonth()} - ${anotherDate.getYear()} `);
  for (let i = 1; i <= anotherDate.getDate(); i++) {
    if (
      i === currentDate.getDate() &&
      currentDate.getMonth() === anotherDate.getMonth()
    ) {
      list.innerHTML += `<li style="color: green;">${i}</li>`;
    } else {
      list.innerHTML += `<li>${i}</li>`;
    }
  }
  anotherDate.setMonth(anotherDate.getMonth());
  let counter = 0;
  buttons.addEventListener("click", (event) => {
    if (event.target.className === "previous-btn") {
      list.innerHTML = "";
      anotherDate.setDate(anotherDate.getDate());
      console.log(anotherDate.getDate());   
      buttons.lastChild.textContent = `${anotherDate.getFullMonth()} - ${anotherDate.getYear()}`;
      for (let i = 1; i <= anotherDate.getDate(); i++) {
        if (
          i === currentDate.getDate() &&
          currentDate.getMonth() === anotherDate.getMonth() + 1
        ) {
          list.innerHTML += `<li style="color: green;">${i}</li>`;
        } else {
          list.innerHTML += `<li>${i}</li>`;
        }
      }
    }
    if (event.target.className === "next-btn") {
      list.innerHTML = "";
      anotherDate.setMonth(counter);
      anotherDate.setDate(0);
      buttons.lastChild.textContent = `${anotherDate.getFullMonth()} - ${anotherDate.getYear()}`;
      for (let i = 1; i <= anotherDate.getDate(); i++) {
        if (
          i === currentDate.getDate() &&
          currentDate.getMonth() === anotherDate.getMonth() + 1
        ) {
          list.innerHTML += `<li style="color: green;">${i}</li>`;
        } else {
          list.innerHTML += `<li>${i}</li>`;
        }
      }
    }
  });

  //   for (let i = 1; i <= newDate.getDate(); i++) {
  //     const calendarElement = document.createElement("li");
  //     if (i === day && newDate.getMonth() + 1 === month) {
  //       calendarElement.innerText = i;
  //       calendarElement.style.color = "green";
  //     } else {
  //       calendarElement.innerText = i;
  //     }
  //     list.append(calendarElement);
  //   }
});
