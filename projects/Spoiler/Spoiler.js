document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelectorAll(".toggle");

  toggle.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.parentElement.nextElementSibling.classList.toggle("active");
    });
  });
});
