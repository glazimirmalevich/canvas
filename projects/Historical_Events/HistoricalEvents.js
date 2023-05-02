document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const table = document.querySelector("#table");
  const events = 
    {
      2000: {
        0: {
          month: "01",
          day: "20",
          event: "событие 1",
          description: "описание события 1",
        },
        1: {
          month: "01",
          day: "21",
          event: "событие 2",
          description: "описание события 2",
        },
      },
      2001: {
        0: {
          month: "02",
          day: "10",
          event: "событие 3",
          description: "описание события 3",
        },
        1: {
          month: "02",
          day: "11",
          event: "событие 4",
          description: "описание события 4",
        },
        2: {
          month: "02",
          day: "12",
          event: "событие 5",
          description: "описание события 5",
        },
      },
      2002: {
        0: {
          month: "03",
          day: "01",
          event: "событие 6",
          description: "описание события 6",
        },
        1: {
          month: "04",
          day: "02",
          event: "событие 7",
          description: "описание события 7",
        },
        2: {
          month: "05",
          day: "03",
          event: "событие 8",
          description: "описание события 8",
        },
        3: {
          month: "06",
          day: "04",
          event: "событие 9",
          description: "описание события 9",
        },
      },
    };
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        if(event.target.value == "2000"){
            table.innerHTML = '';
            for(let i = 0; i < Object.keys(events[2000]).length; i++){
                table.innerHTML += `<td>${events[2000][i]["day"]}.${events[2000][i]["month"]}.${Object.keys(events)[0]}</td><td>${events[2000][i]["event"]}</td><td>${events[2000][i]["description"]}</td>`;
            }
        }
        if(event.target.value == "2001"){
            table.innerHTML = '';
            for(let i = 0; i < Object.keys(events[2001]).length; i++){
                table.innerHTML += `<td>${events[2001][i]["day"]}.${events[2001][i]["month"]}.${Object.keys(events)[1]}</td><td>${events[2001][i]["event"]}</td><td>${events[2001][i]["description"]}</td>`;
            }
        }
        if(event.target.value == "2002"){
            table.innerHTML = '';
            for(let i = 0; i < Object.keys(events[2002]).length; i++){
                table.innerHTML += `<td>${events[2002][i]["day"]}.${events[2002][i]["month"]}.${Object.keys(events)[2]}</td><td>${events[2002][i]["event"]}</td><td>${events[2002][i]["description"]}</td>`;
            }
        }
    }
  });
  console.log(Object.keys(events)[0]);
});
