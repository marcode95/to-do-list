import { todoItems } from "./todoSubmit";

const setTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todoItems));
};

const getTodos = () => {
  if (JSON.parse(localStorage.getItem('todos'))) {
    todoItems.length = 0;
    JSON.parse(localStorage.getItem('todos')).forEach(todo => {
      todoItems.push(todo);
    });
  }
};

export { 
  setTodos,
  getTodos
};