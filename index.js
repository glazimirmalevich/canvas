document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".list");
  const dates = new Date();
  let year = dates.getFullYear();
  let month = dates.getMonth() + 1;
  let day = dates.getDate();
  const newDate = new Date(year, month, 0);
  class FullDate {
    #dateWork;
    constructor(date) {
      this.date = date;
    }
    getDate = () => {
        return this.date.getDate();
    }
    getMonth = () => {
        return this.date.getMonth() + 1;
    }
    getYear = () => {
        return this.date.getFullYear();
    }
    getFullMonth = () => {
      switch (this.getMonth()) {
        case 1:
          return "Январь";
        case 2:
          return "Февраль";
        case 3:
          return "Март";
        case 4:
          return "Апрель";
        case 5:
          return "Май";
        case 6:
          return "Июнь";
        case 7:
          return "Июль";
        case 8:
          return "Август";
        case 9:
          return "Сентябрь";
        case 10:
          return "Октябрь";
        case 11:
          return "Ноябрь";
        case 12:
          return "Декабрь";
      }
    };
    getFullDaysOfMonth = () => {
        return this.#dateWork
    }
  }
    
  const currentDate = new FullDate(new Date());
  const anotherDate = new FullDate(new Date(currentDate.getYear(), currentDate.getMonth(), 0));
  console.log(anotherDate.getDate());
  list.append(`${currentDate.getFullMonth()} - ${currentDate.getYear()} `);
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
