import { todoItems, projects } from './todoSubmit';


const setTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todoItems));
};

const getTodos = () => {
  if (JSON.parse(localStorage.getItem('todos'))) {
    todoItems.length = 0;
    JSON.parse(localStorage.getItem('todos')).forEach((todo) => {
      todoItems.push(todo);
    });
  }
};

const setProjects = () => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

const getProjects = () => {
  if (JSON.parse(localStorage.getItem('projects'))) {
    projects.length = 0;
    JSON.parse(localStorage.getItem('projects')).forEach((project) => {
      projects.push(project);
    });
  }
};

export {
  setTodos,
  getTodos,
  setProjects,
  getProjects,
};