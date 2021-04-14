import appendElements from './append';
import { todoItems } from './todoSubmit';

const sortFunctions = () => {
  const projectPage = document.getElementById('project-page');
  const todosPage = document.getElementById('todos-page');

  const sortSubmitButton = document.getElementById('sort-submit-input');
  sortSubmitButton.addEventListener('click', (e) => {
    todosPage.innerHTML = '';
    const category = document.getElementById('sortCategoryInput').value;
    const order = document.getElementById('sortOrderInput').value;
    const categoryOrder = category + order;
    const todoItemsSorted = sortBy(todoItems, categoryOrder);
    appendElements(todoItemsSorted, todosPage);
  });

  const projectSortSubmitButton = document.getElementById('project-sort-submit-input');
  projectSortSubmitButton.addEventListener('click', (e) => {
    projectPage.innerHTML = '';
    const category = document.getElementById('projectSortCategoryInput').value;
    const order = document.getElementById('projectSortOrderInput').value;
    const categoryOrder = category + order;
    const filteredItems = todoItems.filter((item) => item.project === projectPage.dataset.project);
    const projectItemsSorted = sortBy(filteredItems, categoryOrder);
    appendElements(projectItemsSorted, projectPage);
  });

  const sortBy = (arr, categoryOrder) => {
    switch (categoryOrder) {
      case 'PriorityAscending':
        return arr.sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
        break;
      case 'PriorityDescending':
        return arr.sort((a, b) => parseInt(b.priority) - parseInt(a.priority));
        break;
      case 'TitleAscending':
        return arr.sort((a, b) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
        break;
      case 'TitleDescending':
        return arr.sort((a, b) => {
          if (a.title < b.title) { return 1; }
          if (a.title > b.title) { return -1; }
          return 0;
        });
        break;
      case 'DateAscending':
        return arr.sort((a, b) => {
          if (a.date < b.date) { return -1; }
          if (a.date > b.date) { return 1; }
          return 0;
        });
        break;
      case 'DateDescending':
        return arr.sort((a, b) => {
          if (a.date < b.date) { return 1; }
          if (a.date > b.date) { return -1; }
          return 0;
        });
        break;
    }
  };
}
export { sortFunctions as default };