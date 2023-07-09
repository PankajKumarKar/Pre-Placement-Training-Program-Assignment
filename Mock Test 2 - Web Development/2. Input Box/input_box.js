/*
2. Create a app where you have an input box and whenever a user types something in the input box and hits submit it should be added on the webpage below the input box.
*/

const inputText = document.querySelector("input");
const button = document.querySelector("button");
const showText = document.querySelector(".show_input_values");

const showTextEventHandler = () => {
  showText.innerText = inputText.value;
};

button.addEventListener("click", showTextEventHandler);
