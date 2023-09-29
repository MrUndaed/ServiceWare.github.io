// Animation on scroll

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);


// Button click

const menuContainer = document.getElementById("menuContainer");

const buyMenu = document.getElementById("openMenu");


buyMenu.addEventListener("click", () => {
  menuContainer.classList.remove("hidden");
  document.body.classList.add("blur");
});

// document.body.addEventListener("click", () => {
//   menuContainer.classList.add("hidden");
//   document.body.classList.remove("blur");
// });