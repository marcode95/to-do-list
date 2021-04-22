import appendElements from './append';
import { todoItems } from './localStorage';

const projectPage = document.getElementById('project-page');
const todosPage = document.getElementById('todos-page');

const sortBy = (arr, categoryOrder) => {
  switch (categoryOrder) {
    case 'PriorityAscending':
      return arr.sort((a, b) => parseInt(a.priority, 10) - parseInt(b.priority, 10));
    case 'PriorityDescending':
      return arr.sort((a, b) => parseInt(b.priority, 10) - parseInt(a.priority, 10));
    case 'TitleAscending':
      return arr.sort((a, b) => {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
      });
    case 'TitleDescending':
      return arr.sort((a, b) => {
        if (a.title < b.title) { return 1; }
        if (a.title > b.title) { return -1; }
        return 0;
      });
    case 'DateAscending':
      return arr.sort((a, b) => {
        if (a.date < b.date) { return -1; }
        if (a.date > b.date) { return 1; }
        return 0;
      });
    case 'DateDescending':
      return arr.sort((a, b) => {
        if (a.date < b.date) { return 1; }
        if (a.date > b.date) { return -1; }
        return 0;
      });
    default:
  }
  return 0;
};

const sortSubmitButton = document.getElementById('sort-submit-input');
const sortSubmit = () => {
  sortSubmitButton.addEventListener('click', () => {
    todosPage.innerHTML = '';
    const category = document.getElementById('sortCategoryInput').value;
    const order = document.getElementById('sortOrderInput').value;
    const categoryOrder = category + order;
    const todoItemsSorted = sortBy(todoItems, categoryOrder);
    appendElements(todoItemsSorted, todosPage);
  });
};

const projectSortSubmitButton = document.getElementById('project-sort-submit-input');
const projectSortSubmit = () => {
  projectSortSubmitButton.addEventListener('click', () => {
    projectPage.innerHTML = '';
    const category = document.getElementById('projectSortCategoryInput').value;
    const order = document.getElementById('projectSortOrderInput').value;
    const categoryOrder = category + order;
    const filteredItems = todoItems.filter((item) => item.project === projectPage.dataset.project);
    const projectItemsSorted = sortBy(filteredItems, categoryOrder);
    appendElements(projectItemsSorted, projectPage);
  });
};

export {
  sortSubmit,
  projectSortSubmit,
  sortBy,
};