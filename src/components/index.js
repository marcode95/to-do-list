import '../assets/style.css';
import navigationFunctions from './navigation';
import todoSubmitListeners, { addProjectOptions, todoItems } from './todoSubmit';
import sortFunctions from './sort';
import { getProjects, getTodos } from './localStorage';
import appendElements from './append';


getTodos();
const todosPage = document.getElementById('todos-page');
appendElements(todoItems, todosPage);
getProjects();
addProjectOptions();
todoSubmitListeners();
navigationFunctions();
sortFunctions();