"use strict";
import { addToDo } from "./addtodo.js";

// __________________________________________________________
let userMessage = document.forms.userMessage;
let { textField } = document.forms.userMessage.elements;
let list = document.getElementById("list");
let errorMessage = document.querySelector(".error-message");

// __________________________________________________________
userMessage.onsubmit = (event) => {
  event.preventDefault();
  if (textField.value.trim() === "") {
    textField.classList.add("error");
    errorMessage.innerHTML = "Please fill out this field";
    return;
  }
  addToDo(textField.value);
  userMessage.reset();
  textField.classList.remove("success");
};

// __________________________________________________________
list.addEventListener("click", (event) => {
  let removeBtn = event.target.className === "listBtn";
  if (removeBtn) {
    event.target.closest(".listItem").remove();
  }
});

// __________________________________________________________
textField.oninput = () => {
  if (textField.classList.contains("error")) {
    textField.classList.remove("error");
    errorMessage.innerHTML = "";
  }
  if (textField.value.trim().length > 0) {
    textField.classList.add("success");
  } else {
    textField.classList.remove("success");
  }
};
