import { todoItems } from './todoSubmit';

const showDetailsButtonListener = (container) => {
  console.log('bla')
  container.addEventListener('click', (e) => {
    if (e.target.id === 'show-details-button') {
      const allItemDescriptionContainersNode = document.querySelectorAll('div.itemDescriptionContainer');
      const allItemDescriptionContainers = Array.from(allItemDescriptionContainersNode);
      for (let i = 0; i < allItemDescriptionContainers.length; i++) {
        const descriptionId = allItemDescriptionContainers[i].dataset.id;
        if (descriptionId === e.target.dataset.id) {
          allItemDescriptionContainers[i].classList.remove('display-none');
          allItemDescriptionContainers[i].classList.add('display-inline');
        }
      }
    }
  });
};

const removeButtonListener = (arr, container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'remove-button') {
      const allSingleTodoItemsNode = document.querySelectorAll('div.single-todo-item');
      const allSingleTodoItems = Array.from(allSingleTodoItemsNode);
      for (let i = 0; i < allSingleTodoItems.length; i++) {
        if (allSingleTodoItems[i].dataset.id === e.target.dataset.id) {
          container.removeChild(allSingleTodoItems[i]);
        }
      }
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i] === arr[e.target.dataset.id]) {
          todoItems.splice(i, 1);
        }
      }
    }
  });
};

const editButtonListener = (container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'edit-button') {
      const allEditFormsNode = document.querySelectorAll('form#editForm');
      const allEditForms = Array.from(allEditFormsNode);
      for (let i = 0; i < allEditForms.length; i++) {
        if (allEditForms[i].dataset.id === e.target.dataset.id) {
          allEditForms[i].classList.remove('display-none');
          allEditForms[i].classList.add('display-inline');
        }
      }
    }
  });
};

const editFormListener = (arr, container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'editSubmit') {
      const allItemDescriptionsNode = document.querySelectorAll('p.itemDescription');
      const allItemDescriptions = Array.from(allItemDescriptionsNode);
      const answer = document.getElementById('editInput').value;
      for (let i = 0; i < allItemDescriptions.length; i++) {
        if (allItemDescriptions[i].dataset.id === e.target.dataset.id) {
          allItemDescriptions[i].innerHTML = answer;
        }
      }
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i] === arr[e.target.dataset.id]) {
          todoItems[i].description = answer;
        }
      }
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
  }
};

const bla = () => {
  console.log('bla')
}

export { 
  showDetailsButtonListener,
  removeButtonListener,
  editButtonListener,
  editFormListener,
  bla,
  addColor
};
