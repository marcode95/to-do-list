import appendElements from './append';
import { todoItems } from './todoSubmit';
import { today } from './todoSubmit';
import {getTodos, setTodos} from './localStorage';

const allSections = document.querySelectorAll('section');
const navigationButton = document.getElementById('navigation-button');
const startpageButton = document.getElementById('startpage-button');
const startpage = document.getElementById('startpage');
const navigation = document.getElementById('navigation');
const todos = document.getElementById('todos');
const future = document.getElementById('future');
const project = document.getElementById('project');
const showAllTodosButton = document.getElementById('show-all-todos');
const todosPage = document.getElementById('todos-page');
const showFutureTodosButton = document.getElementById('future-todos');
const futurePage = document.getElementById('future-page');
const projectPage = document.getElementById('project-page');
const projectListItems = document.getElementById('project-list-items');

const navigationFunctions = () => {
  const closeAllOtherSectionsExceptFor = (currentSection) => {
    const otherSections = Array.from(allSections).filter((item) => item !== currentSection);
    otherSections.forEach((element) => {
      element.classList.remove('display-block');
      element.classList.add('display-none');
      currentSection.classList.remove('display-none');
      currentSection.classList.add('display-block');
    });
  };

  startpageButton.addEventListener('click', () => {
    closeAllOtherSectionsExceptFor(startpage);
  });

  const projectList = document.getElementById('project-list');
  projectList.addEventListener('click', () => {
      projectListItems.classList.toggle('display-none');
    });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('project-option-links')) {
      getTodos();
      const filteredItems = todoItems.filter((item) => item.project === e.target.dataset.project);
      closeAllOtherSectionsExceptFor(project);
      projectPage.innerHTML = '';
      projectPage.removeAttribute('data-project');
      projectPage.setAttribute('data-project', e.target.dataset.project);
      appendElements(filteredItems, projectPage);
    }
  });

  showAllTodosButton.addEventListener('click', (e) => {
    todosPage.innerHTML = '';
    closeAllOtherSectionsExceptFor(todos);
    getTodos();
    appendElements(todoItems, todosPage);
  });

  showFutureTodosButton.addEventListener('click', (e) => {
    futurePage.innerHTML = '';
    closeAllOtherSectionsExceptFor(future);
    getTodos();
    const futureItems = todoItems
      .filter((item) => item.date > today)
      .sort((a, b) => {
        if (a.date < b.date) { return -1; }
        if (a.date > b.date) { return 1; }
        return 0;
      });
    appendElements(futureItems, futurePage);
  });
}

export default navigationFunctions;