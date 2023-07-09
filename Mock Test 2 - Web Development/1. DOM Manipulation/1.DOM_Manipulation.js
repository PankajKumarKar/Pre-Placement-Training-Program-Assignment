/*
1. DOM Manipulation: Create a page with a square box of size 300x300 on the page which will be red initially, upon clicking the red box it should change the color to yellow and the size should be doubled.
*/

const square = document.querySelector(".square");

const eventHandler = () => {
  square.style.backgroundColor = "yellow";
  square.style.height = "600px";
  square.style.width = "600px";
};

square.addEventListener("click", eventHandler);
