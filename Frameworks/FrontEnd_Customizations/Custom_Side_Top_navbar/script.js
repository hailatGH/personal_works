let arrow = document.querySelectorAll(".arrow");
let pop = document.querySelectorAll(".pop");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}
for (var i = 0; i < pop.length; i++) {
  pop[i].addEventListener("click", (e) => {
    let popParent = e.target.parentElement.parentElement.parentElement;
    popParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menu");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});