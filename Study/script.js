// let title = document.getElementById("title");
// let h1 = document.getElementById("h1");
// let button = document.getElementById("button");

// button.addEventListener("click", () => {
//   title.style.color = "red";
//   title.style.fontSize = "50px";
//   title.style.backgroundColor = "cyan";
//   title.style.width = "30%";
// });

// EventLs
// => mouseenter
// => mouseleave
// => click
// => dblclick
// =>keyup
// =>keydown
// =>keyenter

// let title = document.getElementById("title");
// let h1 = document.getElementById("h1");
// let button = document.getElementById("button");

// button.addEventListener("mouseenter", () => {
//   title.style.color = "red";
//   title.style.fontSize = "50px";
//   title.style.backgroundColor = "cyan";
//   title.style.width = "30%";
// });

// button.addEventListener("mouseleave", () => {
//   title.style.color = "black";
//   title.style.fontSize = "50px";
//   title.style.backgroundColor = "red";
//   title.style.width = "30%";
// });

// let title = document.getElementById("title");
// let h1 = document.getElementById("h1");
// let button = document.getElementById("button");

// button.addEventListener("click", () => {
//   title.classList.toggle("active");
// });

let box = document.getElementById("dark");
let btn = document.getElementById("btn");

let dark = () => {
  box.classList.toggle("dark");
};

btn.addEventListener("click", dark);
