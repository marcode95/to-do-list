import appendElementsDom from './dom';
import {
  showDetailsButtonListener, removeButtonListener, editButtonListener, editFormListener,
} from './todoitem';

let functionCalls = 0;
const appendElements = (arr, container) => {
  for (let i = 0; i < arr.length; i += 1) {
    appendElementsDom(arr, container, i);
  }
  functionCalls += 1;
  if (functionCalls === 1) {
    showDetailsButtonListener(container);
    removeButtonListener(arr, container);
    editButtonListener(container);
    editFormListener(arr, container);
  }
};

export default appendElements;