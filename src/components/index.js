import '../assets/style.css';
import navigationFunctions from './navigation';
import todoSubmitListeners, { addProjectOptions } from './todoSubmit';
import { sortSubmit, projectSortSubmit } from './sort';
import { getProjects, getTodos, todoItems } from './localStorage';
import appendElements from './append';


getTodos();
const todosPage = document.getElementById('todos-page');
appendElements(todoItems, todosPage);
getProjects();
addProjectOptions();
todoSubmitListeners();
navigationFunctions();
sortSubmit();
projectSortSubmit();