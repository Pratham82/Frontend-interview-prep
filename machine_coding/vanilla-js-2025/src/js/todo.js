export function init() {
  const template = document.getElementById("todo-template");
  if (template) {
    const clone = template.content.cloneNode(true);
    document.getElementById("app").appendChild(clone);

    const todoBtn = document.getElementById("todoBtn");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    const getRandomId = () => {
      return Math.floor(100 + Math.random() * 900);
    };

    // event handlers - perform action
    todoBtn.addEventListener("click", () => {
      // get current value of the input
      const currentInputText = todoInput.value;
      if (!currentInputText) return;

      // create new todo line
      const todoItem = document.createElement("li");
      todoItem.id = getRandomId();

      const deletBtn = document.createElement("button");
      deletBtn.textContent = "X";
      deletBtn.id = "deletBtn";
      deletBtn.style.cssText = "margin-left:10px";

      deletBtn.addEventListener("click", () => {
        console.log("delete clicked");
        todoItem.remove();
      });

      // add new todos in dom
      todoItem.textContent = currentInputText.trim();
      todoItem.appendChild(deletBtn);
      todoList.appendChild(todoItem);
      todoInput.value = "";
    });
  }
}
