export const addToDo = (value) => {
  let listItem = document.createElement("li");
  let listBtn = document.createElement("button");
  listItem.classList.add("listItem");
  listBtn.classList.add("listBtn");

  listBtn.innerHTML = "Delete";
  listItem.innerHTML = value;

  list.append(listItem);
  listItem.append(listBtn);
};
