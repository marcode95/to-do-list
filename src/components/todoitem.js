import { getTodos, setTodos, todoItems } from './localStorage';

const showDetailsButtonListener = (container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'show-details-button') {
      const allItemDescriptionContainersNode = document.querySelectorAll('div.itemDescriptionContainer');
      const allItemDescriptionContainers = Array.from(allItemDescriptionContainersNode);
      for (let i = 0; i < allItemDescriptionContainers.length; i += 1) {
        const descriptionId = allItemDescriptionContainers[i].dataset.id;
        if (descriptionId === e.target.dataset.id) {
          allItemDescriptionContainers[i].classList.toggle('display-none');
        }
      }
    }
  });
};

const removeButtonListener = (arr, container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'remove-button') {
      getTodos();
      for (let i = 0; i < todoItems.length; i += 1) {
        // eslint-disable-next-line max-len
        if (todoItems[i].title === arr[e.target.dataset.id].title && todoItems[i].date === arr[e.target.dataset.id].date) {
          todoItems.splice(i, 1);
          // eslint-disable-next-line
          location.reload();
        }
      }
      setTodos();
    }
  });
};

const editButtonListener = (container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'edit-button') {
      const allEditFormsNode = document.querySelectorAll('form#editForm');
      const allEditForms = Array.from(allEditFormsNode);
      for (let i = 0; i < allEditForms.length; i += 1) {
        if (allEditForms[i].dataset.id === e.target.dataset.id) {
          allEditForms[i].classList.toggle('display-none');
        }
      }
    }
  });
};

const catchInput = (id, container) => {
  const allEditInputsNode = container.querySelectorAll('input.editInputClass');
  const allEditInputs = Array.from(allEditInputsNode);
  for (let i = 0; i < allEditInputs.length; i += 1) {
    if (allEditInputs[i].dataset.id === id) {
      const answer = allEditInputs[i].value;
      return answer;
    }
  }
  return true;
};

const editFormListener = (arr, container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'editSubmit') {
      const answer = catchInput(e.target.dataset.id, container);
      const allItemDescriptionsNode = document.querySelectorAll('p.itemDescription');
      const allItemDescriptions = Array.from(allItemDescriptionsNode);
      for (let i = 0; i < allItemDescriptions.length; i += 1) {
        if (allItemDescriptions[i].dataset.id === e.target.dataset.id) {
          allItemDescriptions[i].innerHTML = answer;
        }
      }
      getTodos();
      for (let i = 0; i < todoItems.length; i += 1) {
        // eslint-disable-next-line max-len
        if ((todoItems[i].title === arr[e.target.dataset.id].title && todoItems[i].date === arr[e.target.dataset.id].date)
        ) {
          todoItems[i].description = answer;
        }
      }
      setTodos();
      const editForm = e.target.parentNode;
      editForm.classList.remove('display-inline');
      editForm.classList.add('display-none');
    }
  });
};

const addColor = (item, priority) => {
  switch (priority) {
    case '1':
      item.classList.add('low-prio');
      break;
    case '2':
      item.classList.add('mid-prio');
      break;
    case '3':
      item.classList.add('high-prio');
      break;
    default:
  }
};

export {
  showDetailsButtonListener,
  removeButtonListener,
  editButtonListener,
  editFormListener,
  addColor,
};
