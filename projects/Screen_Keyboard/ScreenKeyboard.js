document.addEventListener("DOMContentLoaded", () => {
  const keyboradBody = document.querySelector(".keyboard_body tr");
  const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
  const inputForm = document.querySelector("input");
  alphabet.forEach((item) => {
    const letter = document.createElement("td");
    letter.innerText = item;
    keyboradBody.append(letter);
  });
  keyboradBody.insertAdjacentHTML("beforeend", `<button>back</button>`);
  keyboradBody.insertAdjacentHTML("beforeend", `<button>caps lock</button>`);
  keyboradBody.addEventListener("click", (event) => {
    if (event.target.textContent === "back") {
        inputForm.value = inputForm.value.slice(0, -1);
    } else if(event.target.textContent === 'caps lock'){
        inputForm.value = inputForm.value.toUpperCase();
    } else {
      inputForm.value += event.target.innerText;
    }
  });
});
