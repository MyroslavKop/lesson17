"use strict";

// Общие DOM переменные
let myForm = document.forms.myForm;
let { textField, btn } = document.forms.myForm.elements;
let list = document.getElementById("list");
let errorMessage = document.querySelector(".error-message");

myForm.onsubmit = (event) => {
  event.preventDefault();

  // Проверка на пустую строку
  if (textField.value.trim() === "") {
    textField.classList.add("error");
    errorMessage.innerHTML = "Please fill out this field";
    return;
  }

  // Создание элементов и добавляние к ним классов
  let listItem = document.createElement("li");
  let listBtn = document.createElement("button");
  listItem.classList.add("listItem");
  listBtn.classList.add("listBtn");

  // Добавление текстовый значений
  listBtn.innerHTML = "Delete";
  listItem.innerHTML = textField.value;

  // Удаляем класс success и очищаем input после нажатия на Add
  textField.value = "";
  textField.classList.remove("success");

  // Добавление элементов в HTML структуру
  list.append(listItem);
  listItem.append(listBtn);

  // Событие по удалению строк при клике на DELETE
  listBtn.addEventListener("click", () => {
    listItem.remove();
  });
};

textField.oninput = () => {
  // Если при вводе input содержит класс error, то удаляем его
  if (textField.classList.contains("error")) {
    textField.classList.remove("error");
    errorMessage.innerHTML = "";
  }

  // Если длина строки > 0, то добавляем класс success, иначе удаляем
  if (textField.value.trim().length > 0) {
    textField.classList.add("success");
  } else {
    textField.classList.remove("success");
  }
};
