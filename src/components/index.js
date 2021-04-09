import '../assets/style.css';

const allSections = document.querySelectorAll('section');

const navigationButton = document.getElementById('navigation-button')
const startpageButton = document.getElementById('startpage-button')

const startpage = document.getElementById('startpage')
const navigation = document.getElementById('navigation')
const project = document.getElementById('project')
const todos = document.getElementById('todos')

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
  todoItems.push(newItem);
  console.log(todoItems)
});

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
    const singleTodoItemTitle = document.createElement('p');
    const singleTodoItemDate = document.createElement('p')
    const singleTodoItemDescription = document.createElement('p')
    singleTodoItemDescription.classList.add('itemDescription')
    singleTodoItemDescription.classList.add('display-none')
    singleTodoItemDescription.setAttribute('data-id', i);
    const showDetails = document.createElement('button')
    showDetails.setAttribute('data-id', i)
    showDetails.setAttribute('id', 'blabla')
    const title = arr[i].title;
    const date = arr[i].date;
    const description = arr[i].description;
    singleTodoItemTitle.textContent = title;
    singleTodoItemDate.textContent = date;
    singleTodoItemDescription.textContent = description;
    showDetails.textContent = 'Show Details';
    singleTodoItem.append(singleTodoItemTitle);
    singleTodoItem.append(singleTodoItemDate);
    singleTodoItem.append(singleTodoItemDescription);
    singleTodoItem.append(showDetails);
    container.append(singleTodoItem);
    container.addEventListener('click', (e) => {
      let allItemDescriptionsNode = document.querySelectorAll('p.itemDescription');
      let allItemDescriptions = Array.from(allItemDescriptionsNode);
      for (let i = 0; i < allItemDescriptions.length; i++) {
        let descriptionId = allItemDescriptions[i].dataset.id
        if (descriptionId === e.target.dataset.id) {
          allItemDescriptions[i].classList.remove('display-none');
          allItemDescriptions[i].classList.add('display-inline');
        } 
      }
    })
  }
}

const showAllTodosButton = document.getElementById('show-all-todos');
const todosPage = document.getElementById('todos-page');
showAllTodosButton.addEventListener('click', (e) => {
  todosPage.innerHTML = '';
  closeAllOtherSectionsExceptFor(todos);
  appendElements(todoItems, todosPage);
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