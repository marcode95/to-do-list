import '../assets/style.css';

const allSections = document.querySelectorAll('section');

const navigationButton = document.getElementById('navigation-button')
const startpageButton = document.getElementById('startpage-button')

const startpage = document.getElementById('startpage')
const navigation = document.getElementById('navigation')
const todos = document.getElementById('todos')
const future = document.getElementById('future')
const project = document.getElementById('project')

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if (dd < 10) {
  dd='0'+dd;
} 
if (mm < 10) {
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;

const closeAllOtherSectionsExceptFor = (currentSection) => {
  let otherSections = Array.from(allSections).filter(item => {
    return item !== currentSection;
  })
  otherSections.forEach(element => {
  element.classList.remove('display-block');
  element.classList.add('display-none');
  currentSection.classList.remove('display-none');
  currentSection.classList.add('display-block');
})}

navigationButton.addEventListener('click', () => {
  navigation.classList.remove('display-none');
  navigation.classList.add('display-block');
});

startpageButton.addEventListener('click', () => {
  closeAllOtherSectionsExceptFor(startpage);
});

const todoItems = [
{title: "asdf", description: "wash some random shit I don't know wtf I'm talking about", date: "2021-04-15", priority: "3", project: "cleaning"},
{title: "asdfasdf", description: "asdfasdfasdfasdfsassdfsadfasdfasdf", date: "2021-04-16", priority: "1", project: "cleaning"},
{title: "sdf", description: "sassdfsadfasdfasdf", date: "2021-04-17", priority: "2", project: "cleaning"},
{title: "asdf", description: "wash some random shit I don't know wtf I'm talking about", date: "2021-04-20", priority: "3", project: "shopping"},
{title: "asdfasdf", description: "asdfasdfasdfasdfsassdfsadfasdfasdf", date: "2021-04-19", priority: "1", project: "shopping"},
{title: "sdf", description: "sassdfsadfasdfasdf", date: "2021-04-18", priority: "2", project: "shopping"}
]

const toDoItem = (title, description, date, priority, project) => {
  return { title, description, date, priority, project };
};

const submitButton = document.getElementById('submitInput')
submitButton.addEventListener('click', () => {
  const title = document.getElementById('titleInput').value;
  const description = document.getElementById('descriptionInput').value;
  const date = document.getElementById('dateInput').value;
  const priority = document.getElementById('priorityInput').value;
  const project = document.getElementById('projectInput').value;
  const newItem = toDoItem(title, description, date, priority, project);
  if (!title || !description || !date || !priority) {
    return false;
  }
  if (checkForDuplicates(newItem) === false) {
    return false;
  }
  todoItems.push(newItem);
  console.log(todoItems)
});

const checkForDuplicates = (newItem) => {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].title === newItem.title && todoItems[i].description === newItem.description && todoItems[i].date === newItem.date) {
        return false;
    }
  }
}

const projectSubmitButton = document.getElementById('projectSubmitInput')
const projectOptions = document.getElementById('projectInput')
projectSubmitButton.addEventListener('click', () => {
  const project = document.getElementById('projectTitleInput').value;
  const option = document.createElement('option');
  option.setAttribute('value', project);
  option.textContent = project
  projectOptions.append(option)
  createProjectButton(project);
});

const projectList = document.getElementById('project-list');
projectList.addEventListener('click', () => {
  const optionLinksNode = document.querySelectorAll('button.project-option-links');
  const optionLinks = Array.from(optionLinksNode)
  for (let i = 0; i < optionLinks.length; i++) {
    optionLinks[i].classList.remove('display-none');
    optionLinks[i].classList.add('display-inline');
  }
})

const createProjectButton = (project) => {
  const projectLink = document.createElement('button');
  projectLink.setAttribute('data-project', project);
  projectLink.setAttribute('id', project + 'Link');
  projectLink.classList.add('project-option-links');
  projectLink.classList.add('display-none');
  projectLink.textContent = project
  navigation.append(projectLink)
}


const projectPage = document.getElementById('project-page')

navigation.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-option-links')) {
    let filteredItems = todoItems.filter(item => {
      return item.project === e.target.dataset.project;
    })
    closeAllOtherSectionsExceptFor(project)
    projectPage.innerHTML = '';
    projectPage.removeAttribute('data-project');
    projectPage.setAttribute('data-project', e.target.dataset.project)
    appendElements(filteredItems, projectPage);
  }
});

const appendElementsDom = (arr, container, i) => {
  const singleTodoItem = document.createElement('div');
  singleTodoItem.setAttribute('data-id', i);
  singleTodoItem.setAttribute('data-aos', 'fade-up');
  singleTodoItem.setAttribute('data-aos-duration', '700');
  singleTodoItem.setAttribute('data-aos-delay', (200*i));
  singleTodoItem.classList.add('single-todo-item');

  const singleTodoItemTitle = document.createElement('p');
  const title = arr[i].title;
  singleTodoItemTitle.textContent = title;
  singleTodoItemTitle.classList.add('single-todo-item-title');
  singleTodoItem.append(singleTodoItemTitle);

  const singleTodoItemDate = document.createElement('p');
  const date = arr[i].date;
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
  editInput.setAttribute('type', 'text');
  
  const editSubmit = document.createElement('input');
  editSubmit.setAttribute('id', 'editSubmit');
  editSubmit.setAttribute('data-id', i);
  editSubmit.setAttribute('value', 'Submit');
  
  editForm.append(editInput);
  editForm.append(editSubmit);
  singleTodoItem.append(editForm);


  const singleTodoItemDescriptionContainer = document.createElement('div')
  singleTodoItemDescriptionContainer.classList.add('display-none')
  singleTodoItemDescriptionContainer.classList.add('itemDescriptionContainer')
  singleTodoItemDescriptionContainer.setAttribute('data-id', i);

  const singleTodoItemDescription = document.createElement('p')
  singleTodoItemDescription.classList.add('itemDescription')
  singleTodoItemDescription.setAttribute('data-id', i);
  const description = arr[i].description;
  singleTodoItemDescription.textContent = description;
  singleTodoItemDescriptionContainer.append(singleTodoItemDescription)
  
  const singleTodoItemDescriptionButton = document.createElement('button');
  singleTodoItemDescriptionButton.setAttribute('id', 'edit-button')
  singleTodoItemDescriptionButton.setAttribute('data-id', i);
  singleTodoItemDescriptionButton.innerHTML = '<i class="far fa-edit"></i>';
  singleTodoItemDescriptionContainer.append(singleTodoItemDescriptionButton)
  
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
  singleTodoItem.append(removeButton)

  addColor(singleTodoItem, arr[i].priority)

  container.append(singleTodoItem);
}

const showDetailsButtonListener = (container) => {
  container.addEventListener('click', (e) => {
    if (e.target.id === 'show-details-button') {
      let allItemDescriptionContainersNode = document.querySelectorAll('div.itemDescriptionContainer');
      let allItemDescriptionContainers = Array.from(allItemDescriptionContainersNode);
      for (let i = 0; i < allItemDescriptionContainers.length; i++) {
        let descriptionId = allItemDescriptionContainers[i].dataset.id
        if (descriptionId === e.target.dataset.id) {
          allItemDescriptionContainers[i].classList.remove('display-none');
          allItemDescriptionContainers[i].classList.add('display-inline');
        } 
      }
    }
  })
}

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
  })
}

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
  })
}

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
      console.log(editForm);
      editForm.classList.remove('display-inline');
      editForm.classList.add('display-none');
    }
  })
} 

const addColor = (item, priority) => {
  switch (priority) {
    case "1":
      item.classList.add('low-prio');
      break;
    case "2":
      item.classList.add('mid-prio');
      break;
    case "3":
      item.classList.add('high-prio');
      break;
  }
}


const appendElements = (arr, container) => {
  for (var i=0; i < arr.length; i++) {
    appendElementsDom(arr, container, i);
  }
  showDetailsButtonListener(container);
  removeButtonListener(arr, container);
  editButtonListener(container);
  editFormListener(arr, container);
}


const showAllTodosButton = document.getElementById('show-all-todos');
const todosPage = document.getElementById('todos-page');
showAllTodosButton.addEventListener('click', (e) => {
  todosPage.innerHTML = '';
  closeAllOtherSectionsExceptFor(todos);
  appendElements(todoItems, todosPage);
});

appendElements(todoItems, todosPage);

const showFutureTodosButton = document.getElementById('future-todos');
const futurePage = document.getElementById('future-page');
showFutureTodosButton.addEventListener('click', (e) => {
  console.log('navbuttonworks')
  futurePage.innerHTML = '';
  closeAllOtherSectionsExceptFor(future);
  const futureItems = todoItems
  .filter(item => {
    return item.date > today;
  })
  .sort(function(a, b) {
      if(a.date < b.date) { return -1; }
      if(a.date > b.date) { return 1; }
      return 0;
  })
  appendElements(futureItems, futurePage);
});

const sortSubmitButton = document.getElementById('sort-submit-input');
sortSubmitButton.addEventListener('click', (e) => {
  todosPage.innerHTML = '';
  const category = document.getElementById('sortCategoryInput').value;
  const order = document.getElementById('sortOrderInput').value;
  const categoryOrder = category+order
  const todoItemsSorted = sortBy(todoItems, categoryOrder);
  appendElements(todoItemsSorted, todosPage);
})

const projectSortSubmitButton = document.getElementById('project-sort-submit-input');
projectSortSubmitButton.addEventListener('click', (e) => {
  projectPage.innerHTML = '';
  const category = document.getElementById('projectSortCategoryInput').value;
  const order = document.getElementById('projectSortOrderInput').value;
  const categoryOrder = category+order
  let filteredItems = todoItems.filter(item => {
    return item.project === projectPage.dataset.project;
  })
  const projectItemsSorted = sortBy(filteredItems, categoryOrder);
  appendElements(projectItemsSorted, projectPage);
})

const sortBy = (arr, categoryOrder) => {
  switch (categoryOrder) {
  case "PriorityAscending":
    return arr.sort(function(a, b) {
      return parseInt(a.priority) - parseInt(b.priority)
    });
    break;
  case "PriorityDescending":
    return arr.sort(function(a, b) {
      return parseInt(b.priority) - parseInt(a.priority)
    });
    break;
  case "TitleAscending":
    return arr.sort(function(a, b) {
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    });
    break;
  case "TitleDescending":
    return arr.sort(function(a, b) {
      if(a.title < b.title) { return 1; }
      if(a.title > b.title) { return -1; }
      return 0;
    });
    break;
  case "DateAscending":
    return arr.sort(function(a, b) {
      if(a.date < b.date) { return -1; }
      if(a.date > b.date) { return 1; }
      return 0;
    });
    break;
  case "DateDescending":
    return arr.sort(function(a, b) {
      if(a.date < b.date) { return 1; }
      if(a.date > b.date) { return -1; }
      return 0;
    });
    break;
  }
}