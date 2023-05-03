document.addEventListener("DOMContentLoaded", () => {
  let texts = ["text1", "text2", "text3"];
  const textArea = document.querySelector("textarea");
  const text = document.querySelector("#text");
  const create = document.querySelector("#create");
  const notes = document.querySelector("#notes");
  const modal = document.querySelector("#modal");

  let activeNodeItem = null;
  create.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      textArea.value.length > 0 &&
      textArea.value !== " "
    ) {
      const li = document.createElement("li");
      texts.push(textArea.value);
      notes.appendChild(li);
      li.textContent = `запись ${notes.children.length}`;
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    }
  });
  notes.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      for (let i = 0; i < texts.length; i++) {
        const element = notes.children[i].textContent;
        const text = texts[i];
        if (element === event.target.textContent) {
          textArea.value = text;
          notes.children[i].style.backgroundColor = "lightgreen";
          activeNodeItem = i;
        } else {
          notes.children[i].style.backgroundColor = "inherit";
        }
      }
    }
  });
  text.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && activeNodeItem !== null) {
      texts[activeNodeItem] = textArea.value;
      modal.children[0].textContent = "Ваша запись обновлена!";
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    } else if (
      event.target.tagName === "BUTTON" &&
      textArea.value.length > 0 &&
      textArea.value !== " "
    ) {
      const li = document.createElement("li");
      texts.push(textArea.value);
      notes.appendChild(li);
      li.textContent = `запись ${notes.children.length}`;
      modal.children[0].textContent = "Ваша запись добавлена!";
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.display = "none";
      }, 2000);
    }
  });
});
