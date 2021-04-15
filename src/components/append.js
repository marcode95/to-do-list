import appendElementsDom from './dom';
import {
  showDetailsButtonListener, removeButtonListener, editButtonListener, editFormListener,
} from './todoitem';

const todosPage = document.getElementById('todos-page');
const futurePage = document.getElementById('future-page');
const projectPage = document.getElementById('project-page');
let allFunctionCalls = 0;
let projectFunctionCalls = 0;
let futureFunctionCalls = 0;

const appendElements = (arr, container) => {
  for (let i = 0; i < arr.length; i += 1) {
    appendElementsDom(arr, container, i);
  }
  switch (container) {
    case todosPage:
      allFunctionCalls += 1;
      if (allFunctionCalls === 1) {
        showDetailsButtonListener(container);
        removeButtonListener(arr, container);
        editButtonListener(container);
        editFormListener(arr, container);
      }
      break;
    case projectPage:  
      projectFunctionCalls += 1;
      if (projectFunctionCalls === 1) {
        showDetailsButtonListener(container);
        removeButtonListener(arr, container);
        editButtonListener(container);
        editFormListener(arr, container);
      }
      break;
    case futurePage:
      futureFunctionCalls += 1;
      if (futureFunctionCalls === 1) {
        showDetailsButtonListener(container);
        removeButtonListener(arr, container);
        editButtonListener(container);
        editFormListener(arr, container);
      }
      break;
    default:
  }
};

export default appendElements;