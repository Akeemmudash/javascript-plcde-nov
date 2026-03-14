const todoApp = document.getElementById("todo-app");
if (todoApp) {
  const todoForm = document.getElementById("todo-form");
  const todosList = document.getElementById("todos");
  const addToBtn = todoForm.querySelector("button");
  addToBtn.setAttribute("disabled", "true");

  todoForm.todoInput.oninput = (event) => {
    if (event.target.value) {
      addToBtn.removeAttribute("disabled");
    }
  };
  todoForm.onsubmit = function (event) {
    event.preventDefault();
    const todoItemValue = todoForm.todoInput.value;
    if (todoItemValue.trim()) {
      const listItem = document.createElement("li");
      listItem.innerText = todoItemValue;
      listItem.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
      );
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.classList.add("btn", "btn-danger");
      deleteBtn.onclick = () => listItem.remove();
      listItem.appendChild(deleteBtn);

      todosList.appendChild(listItem);
      todoForm.todoInput.value = "";
      addToBtn.setAttribute("disabled", "true");
    }
  };
}

const passwordToggler = document.getElementById("password-toggler");
if (passwordToggler) {
  const hideBtn = document.getElementById("hide-btn");
  const passwordField = document.getElementById("password");
  const hideIcon = hideBtn.querySelector(".hide");
  const showIcon = hideBtn.querySelector(".show");
  let passwordVisibililty = false;
  hideIcon.style.display = "none";
  console.log("hideBtn", hideBtn);
  hideBtn.onclick = (event) => {
    event.preventDefault();

    if (passwordVisibililty === false) {
      passwordVisibililty = true;
      passwordField.type = "text";
      hideIcon.style.display = "inline-block";
      showIcon.style.display = "none";
    } else {
      passwordVisibililty = false;
      passwordField.type = "password";
      hideIcon.style.display = "none";
      showIcon.style.display = "inline-block";
    }
  };
}
