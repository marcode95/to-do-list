import {addColor} from './todoitem';

const appendElementsDom = (arr, container, i) => {
  const singleTodoItem = document.createElement('div');
  singleTodoItem.setAttribute('data-id', i);
  singleTodoItem.setAttribute('data-aos', 'fade-up');
  singleTodoItem.setAttribute('data-aos-duration', '700');
  singleTodoItem.setAttribute('data-aos-delay', (200 * i));
  singleTodoItem.classList.add('single-todo-item');

  const singleTodoItemTitle = document.createElement('p');
  const { title } = arr[i];
  singleTodoItemTitle.textContent = title;
  singleTodoItemTitle.classList.add('single-todo-item-title');
  singleTodoItem.append(singleTodoItemTitle);

  const singleTodoItemDate = document.createElement('p');
  const { date } = arr[i];
  singleTodoItemDate.textContent = date;
  singleTodoItemDate.classList.add('single-todo-item-date');
  singleTodoItem.append(singleTodoItemDate);


  const editForm = document.createElement('form');
  editForm.setAttribute('data-id', i);
  editForm.setAttribute('id', 'editForm');
  editForm.classList.add('display-none');
  editForm.classList.add('d-flex');
  editForm.classList.add('flex-column');

  const editInput = document.createElement('input');
  editInput.setAttribute('placeholder', 'New Description');
  editInput.setAttribute('id', 'editInput');
  editInput.classList.add('editInputClass')
  editInput.setAttribute('data-id', i);
  editInput.setAttribute('type', 'text');

  const editSubmit = document.createElement('input');
  editSubmit.setAttribute('id', 'editSubmit');
  editSubmit.setAttribute('data-id', i);
  editSubmit.setAttribute('value', 'Submit');

  editForm.append(editInput);
  editForm.append(editSubmit);
  singleTodoItem.append(editForm);


  const singleTodoItemDescriptionContainer = document.createElement('div');
  singleTodoItemDescriptionContainer.classList.add('display-none');
  singleTodoItemDescriptionContainer.classList.add('itemDescriptionContainer');
  singleTodoItemDescriptionContainer.setAttribute('data-id', i);

  const singleTodoItemDescription = document.createElement('p');
  singleTodoItemDescription.classList.add('itemDescription');
  singleTodoItemDescription.setAttribute('data-id', i);
  const { description } = arr[i];
  singleTodoItemDescription.textContent = description;
  singleTodoItemDescriptionContainer.append(singleTodoItemDescription);

  const singleTodoItemDescriptionButton = document.createElement('button');
  singleTodoItemDescriptionButton.setAttribute('id', 'edit-button');
  singleTodoItemDescriptionButton.setAttribute('data-id', i);
  singleTodoItemDescriptionButton.innerHTML = '<i class="far fa-edit"></i>';
  singleTodoItemDescriptionContainer.append(singleTodoItemDescriptionButton);

  singleTodoItem.append(singleTodoItemDescriptionContainer);


  const showDetails = document.createElement('button');
  showDetails.setAttribute('data-id', i);
  showDetails.setAttribute('id', 'show-details-button');
  showDetails.innerHTML = '<i class="fas fa-info"></i>';
  singleTodoItem.append(showDetails);

  const removeButton = document.createElement('button');
  removeButton.setAttribute('data-id', i);
  removeButton.setAttribute('id', 'remove-button');
  removeButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  singleTodoItem.append(removeButton);

  addColor(singleTodoItem, arr[i].priority);

  container.append(singleTodoItem);
};

export default appendElementsDom;