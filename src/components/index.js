import '../assets/style.css';
import appendElements from './append';
import navigationFunctions from './navigation';
import { todoItems } from './todoSubmit';
import todoSubmitListeners from './todoSubmit';
import sortFunctions from './sort';

const projectPage = document.getElementById('project-page');
const todosPage = document.getElementById('todos-page');
appendElements(todoItems, todosPage);

todoSubmitListeners();
navigationFunctions();
sortFunctions();