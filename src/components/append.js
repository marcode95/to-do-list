import appendElementsDom from './dom';
import {showDetailsButtonListener} from './todoitem';
import {removeButtonListener} from './todoitem';
import {editButtonListener} from './todoitem';
import {editFormListener} from './todoitem';

const appendElements = (arr, container) => {
  for (let i = 0; i < arr.length; i++) {
    appendElementsDom(arr, container, i);
  }
  showDetailsButtonListener(container);
  removeButtonListener(arr, container);
  editButtonListener(container);
  editFormListener(arr, container);
};

export default appendElements;