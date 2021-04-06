import '../assets/style.css';

const toDoItems = []

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
  toDoItems.push(newItem);
  console.log(toDoItems)
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

const projectList = document.getElementById('project-list')
const createProjectButton = (project) => {
  const projectLink = document.createElement('button');
  projectLink.setAttribute('data-project', project);
  projectLink.setAttribute('id', project + 'Link');
  projectLink.textContent = project
  projectList.append(projectLink)
}

projectList.addEventListener('click', (e) => {
  let filteredItems = toDoItems.filter(item => {
    return item.project === e.target.dataset.project;
  })
  console.log(filteredItems)
})
