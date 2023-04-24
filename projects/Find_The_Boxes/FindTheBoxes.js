document.addEventListener("DOMContentLoaded", () => {
  const tableBoxes = document.querySelectorAll("td");
  const body = document.querySelector("body");
  const timer = document.createElement("div");
  let seconds = 60;
  timer.innerText = `Осталось времени для решения: ${seconds}`;
  let opened = 0;
  body.append(timer);

  function randomBox() {
    return Math.floor(Math.random() * 100);
  }
  for (let i = 0; i < 10; i++) {
    tableBoxes[randomBox()].value = "selected";
  }
  tableBoxes.forEach((box) => {
    box.addEventListener("click", (event) => {
      if (event.target.value === "selected") {
        if (
          event.target.className !== "selected" &&
          timer.className !== "started"
        ) {
          const intervalId = setInterval(() => {
            if (seconds !== 0 && opened < 10) {
              timer.innerText = `Осталось времени для решения: ${seconds--}`;
            } else {
              clearInterval(intervalId);
              if (opened === 10) {
                timer.innerText = `Ты выиграл`;
              } else {
                timer.innerText = `Ты проиграл`;
              }
            }
          }, 1000);
        }
        if (timer.innerText !== "Ты проиграл") {
          if (event.target.className !== "selected") {
            opened++;
          }
          event.target.classList.add("selected");
          timer.classList.add("started");
        }
      }
      console.log(opened);
    });
  });
});
