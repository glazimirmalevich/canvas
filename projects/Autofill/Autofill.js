document.addEventListener("DOMContentLoaded", () => {
  let arr = ["Belarus", "Belgium", "Bulgaria"];
  const inputElem = document.querySelector("#elem");
  const list = document.querySelector("#list");
  inputElem.addEventListener("input", (event) => {
    list.innerHTML = "";
    arr.filter((element) => {
      if (element.startsWith(event.target.value) && event.target.value !== "") {
        listElement = element;
        list.insertAdjacentHTML(`afterBegin`, `<li>${listElement}</li>`);
      }
    });
  });
  list.addEventListener("click", (event) => {
    inputElem.value = event.target.innerText;
    list.innerHTML = "";
  });
});
