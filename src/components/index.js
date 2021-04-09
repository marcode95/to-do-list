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
  element.classList.remove('display-inline');
  element.classList.add('display-none');
  currentSection.classList.remove('display-none');
  currentSection.classList.add('display-inline');
})}

const switchButtonsFromTo = (from, to) => {
  from.classList.remove('display-inline')
  from.classList.add('display-none')
  to.classList.remove('display-none')
  to.classList.add('display-inline')  
}

navigationButton.addEventListener('click', () => {
  closeAllOtherSectionsExceptFor(navigation);
  switchButtonsFromTo(navigationButton, startpageButton)
});

startpageButton.addEventListener('click', () => {
  closeAllOtherSectionsExceptFor(startpage);
  switchButtonsFromTo(startpageButton, navigationButton)
});

const todoItems = []

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
        console.log('duplicate')
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
const createProjectButton = (project) => {
  const projectLink = document.createElement('button');
  projectLink.setAttribute('data-project', project);
  projectLink.setAttribute('id', project + 'Link');
  projectLink.textContent = project
  projectList.append(projectLink)
}


const projectPage = document.getElementById('project-page')

projectList.addEventListener('click', (e) => {
  let filteredItems = todoItems.filter(item => {
    return item.project === e.target.dataset.project;
  })
  closeAllOtherSectionsExceptFor(project)
  switchButtonsFromTo(navigationButton, startpageButton)
  projectPage.innerHTML = '';
  projectPage.removeAttribute('data-project');
  projectPage.setAttribute('data-project', e.target.dataset.project)
  appendElements(filteredItems, projectPage);
});

const appendElements = (arr, container) => {
  for (var i=0; i < arr.length; i++) {
    const singleTodoItem = document.createElement('div');
    singleTodoItem.setAttribute('data-id', i);
    singleTodoItem.setAttribute('id', 'single-todo-item');

    const singleTodoItemTitle = document.createElement('p');
    const title = arr[i].title;
    singleTodoItemTitle.textContent = title;
    singleTodoItem.append(singleTodoItemTitle);

    const singleTodoItemDate = document.createElement('p');
    const date = arr[i].date;
    singleTodoItemDate.textContent = date;
    singleTodoItem.append(singleTodoItemDate);


    const singleTodoItemDescriptionContainer = document.createElement('div')
    singleTodoItemDescriptionContainer.classList.add('display-none')
    singleTodoItemDescriptionContainer.classList.add('itemDescription')
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
    singleTodoItemDescriptionButton.textContent = 'Edit';
    singleTodoItemDescriptionContainer.append(singleTodoItemDescriptionButton)
    
    singleTodoItem.append(singleTodoItemDescriptionContainer);


    const removeButton = document.createElement('button');
    removeButton.setAttribute('data-id', i);
    removeButton.setAttribute('id', 'remove-button');
    removeButton.textContent = 'Remove';
    singleTodoItem.append(removeButton)

    const showDetails = document.createElement('button');
    showDetails.setAttribute('data-id', i);
    showDetails.setAttribute('id', 'show-details-button');
    showDetails.textContent = 'Show Details';
    singleTodoItem.append(showDetails);

    container.append(singleTodoItem);
  }
  container.addEventListener('click', (e) => {
    if (e.target.id === 'show-details-button') {
      let allItemDescriptionContainersNode = document.querySelectorAll('div.itemDescription');
      let allItemDescriptionContainers = Array.from(allItemDescriptionContainersNode);
      for (let i = 0; i < allItemDescriptionContainers.length; i++) {
        let descriptionId = allItemDescriptionContainers[i].dataset.id
        if (descriptionId === e.target.dataset.id) {
          allItemDescriptionContainers[i].classList.remove('display-none');
          allItemDescriptionContainers[i].classList.add('display-inline');
        } 
      }
    }

    if (e.target.id === 'remove-button') {
      const allSingleTodoItemsNode = document.querySelectorAll('div#single-todo-item');
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

    if (e.target.id === 'edit-button') {
      const answer = prompt('How would you describe this to-do again?', '');
      const allItemDescriptionsNode = document.querySelectorAll('p.itemDescription');
      const allItemDescriptions = Array.from(allItemDescriptionsNode);
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
      console.log(todoItems)
    }
  })
}

const showAllTodosButton = document.getElementById('show-all-todos');
const todosPage = document.getElementById('todos-page');
showAllTodosButton.addEventListener('click', (e) => {
  todosPage.innerHTML = '';
  closeAllOtherSectionsExceptFor(todos);
  appendElements(todoItems, todosPage);
});



const showFutureTodosButton = document.getElementById('future-todos');
const futurePage = document.getElementById('future-page');
showFutureTodosButton.addEventListener('click', (e) => {
  console.log('navbuttonworks')
  futurePage.innerHTML = '';
  closeAllOtherSectionsExceptFor(future);
  const futureItems = todoItems.filter(item => {
    return item.date > today;
  })
  console.log(futureItems)
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