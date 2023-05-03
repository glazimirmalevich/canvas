document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector("#field");
  const ul = document.querySelector("ul");
  field.addEventListener("keydown", function inputField(event) {
    if (event.key === "Enter") {
      let li = document.createElement("li");
      li.textContent = this.value;
      ul.appendChild(li);
      event.target.value = '';
    }
  });
  ul.addEventListener("dblclick", function edit(event) {
    const li = event.target;
    const input = document.createElement("input");
    if (li.nodeName === "LI") {
      //   console.dir(li.textContent);
      input.value = li.textContent;
      input.focus();
      li.replaceWith(input);
    }
  });
  ul.addEventListener("keydown", function addEditedList(event){
    if (event.key === "Enter") {
        const input = event.target;
        const listElement = document.createElement("li");
        listElement.textContent = input.value;
        input.replaceWith(listElement);
      }
  });
});
