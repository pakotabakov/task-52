import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const mainPage = document.querySelector(".main");
  const boxes = document.querySelectorAll(".message");
  mainPage.addEventListener("click", function (){
    
    boxes.forEach(box => {
      box.style.display = 'inline';
    });
  });
});
