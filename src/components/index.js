import '../assets/style.css';
import navigationFunctions from './navigation';
import todoSubmitListeners, { addProjectOptions } from './todoSubmit';
import sortFunctions from './sort';
import {getProjects, getTodos, setProjects, setTodos} from './localStorage';
import appendElements from './append';
import { todoItems } from "./todoSubmit";

getTodos();
const todosPage = document.getElementById('todos-page');
appendElements(todoItems, todosPage)
getProjects();
addProjectOptions();
todoSubmitListeners();
navigationFunctions();
sortFunctions();