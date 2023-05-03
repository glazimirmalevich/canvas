document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const tabs = document.querySelector(".tabs");
  const menuItems = document.querySelectorAll("a");
  const tabItems = document.querySelectorAll(".tab");

  menu.addEventListener("click", (event) => {
    event.preventDefault();
    // if (event.target.tagName === "A") {
    //     menuItems.forEach((item) => {
    //         tabItems.forEach((element) => {
    //             if(item.innerText === event.target.innerText && element.innerText.includes(item.innerText.slice(8)) ){
    //                 item.classList.add("active");
    //                 element.classList.add("active");
    //                 console.log(item.classList);
    //                 console.log(element.classList);   
    //             }
    //             else if(item.classList.contains("active") && element.classList.contains("active")){
    //                 item.classList.remove("active");
    //                 element.classList.remove("active");
    //                 console.log(item.classList);
    //                 console.log(element.classList);   
    //             }
    //         });
    //     });
    // }
    if (event.target.tagName === "A") {
        for (let i = 0; i < menuItems.length; i++) {
          const menuItem = menuItems[i];
          const tabItem = tabItems[i];
          if (menuItem === event.target) {
            menuItem.classList.add("active");
            tabItem.classList.add("active");
          } else {
            menuItem.classList.remove("active");
            tabItem.classList.remove("active");
          }
        }
      }
    // if (event.target.tagName === "A") {
    //     for(let [key, value] of Object.entries(event.target.parentElement.children)){
    //         if(event.target.innerText === value.innerText){
    //             event.target.classList.toggle("active");
    //         }
    //     }

    // }
  });
});
